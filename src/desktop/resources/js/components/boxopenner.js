import UI from './ui-base';
import EventHandler from '../vendor/event-handler';
import { dataSetToObject, getElement, qs, qsAll } from '../util/dom-util';
import FocusTrap from '../util/focus-trap';
import TreeMenu from './tree-menu';

// eslint-disable-next-line no-unused-vars
const NAME = 'ui.boxopenner';

const ANIMATE_CLASS = 'animate';

const dataAttrOptions = {
  displayClass: 'expanded',
  animate: false,
  focuserble: true,
  setChildrenOpen: true,
  setValue: false,
  openClass: 'is-active',
};

const defaultOptions = {
  ...dataAttrOptions,
  selector: {
    openner: `[data-menu="btn"]`,
    content: `[data-menu="con"]`,
    items: `[data-item="btn"]`,
    values: {
      listValue: `[data-value="list"]`,
      itemsValue: `[data-value="item"]`,
    },
    controls: `aria-controls`,
  },

  offset: `data-offset`,
};

class BoxOpenner extends UI {
  constructor(element, options = {}) {
    super(element, options);

    this._children = {
      header: null,
      content: null,
    };

    this._defaultChildren = null;
    this._initOptions(options);
  }

  static GLOBAL_OPTIONS = {};
  static DATA_NAME = 'openner';
  static DATA_TRIGGER_NAME = `[data-autoset="openner"]`;

  static get EVENT() {
    return {
      SELECT: `onSelect.${NAME}`,
      OPEN: `open.${NAME}`,
      OPEND: `opend.${NAME}`,
      CLOSE: `close.${NAME}`,
      CLOSED: `closed.${NAME}`,
      TREEOPEN: `treeOpen.${NAME}`,
      ALL: `all.${NAME}`,
    };
  }

  static get NAME() {
    return NAME;
  }

  /**
   * 초기화 되어있는 모든 드롭다운메뉴 옵션을 업데이트합니다.
   * @param {*} options
   */
  static updateOption(options) {
    const insList = BoxOpenner.getInstances();
    if (insList.length > 0) {
      insList.forEach(ins => {
        ins.updateOption({
          ...options,
        });
      });
    }
  }

  static trigger(event) {
    const el = event.target.closest(BoxOpenner.DATA_TRIGGER_NAME);
    if (el) {
      const isInstance = BoxOpenner.get(el);
      if (!isInstance) {
        const boxOpenner = new BoxOpenner(el);
        boxOpenner.init();
        // 초기화 후 선택한 버튼을 다시한번 클릭하여 이전 이벤트를 처리한다.
        event.target?.closest(BoxOpenner._options.selector.openner)?.click();
      }
    }
  }

  /**
   * 드롭다운 객체 반환
   * 인스턴스 반환
   * @param {*} element 드롭다운 엘리먼트
   * @param {*} initialize 초기화되지 않은 대상에 대해서 초기화 후 인스턴스를 반환할지 여부
   * @returns
   */
  static get(element, initialize = false) {
    const _el = getElement(element);

    if (!_el) {
      console.warn(`\n  warning from [${NAME}] ---> [element] not found.\n\n`);
      return;
    }

    let instance = BoxOpenner.getInstance(_el);

    if (!instance && initialize) {
      instance = new BoxOpenner(_el);
      instance.init();
    }

    return instance;
  }

  /**
   * 옵션값을 업데이트합니다.
   * @param {*} options
   */
  updateOption(options) {
    this._options = {
      ...this._options,
      ...options,
    };
  }

  open(getProps) {
    this._setPropsOptionsUpdate(getProps);
    this._open();
  }

  close() {
    this._close();
  }

  //오픈시 props가 있을시 업데이트
  _setPropsOptionsUpdate(getProps) {
    if (!getProps) return;
    this._setProps = {
      element: getProps,
      content: null,
    };

    const getControls = getProps.getAttribute('aria-controls');
    if (!getControls) return;

    this._setProps.content = document.querySelector(`#${getControls}`);
  }

  _open(_content = null) {
    if (this._isOpen) return;
    const { animate, selector, displayClass, openClass, focuserble } = this._options;
    const content = _content ? _content : qs(this._element, selector.content);
    const openner = qs(this._element, selector.openner);

    const list = BoxOpenner.getInstances();
    list.forEach(boxMenu => {
      if (boxMenu._isOpen) {
        boxMenu.close();
      }
    });

    // 애니메이션 일단 처리하지 않는다.
    if (animate === true) {
      this._element.classList.add(ANIMATE_CLASS);
    }

    this._isOpen = true;
    content.classList.add(displayClass);
    openner.classList.add(openClass);
    openner.setAttribute('aria-expanded', true);
    this._element.classList.add(openClass);

    // 컨텐츠가 오프너 버튼보다 아래있는 경우
    if (openner.getBoundingClientRect().top < content.getBoundingClientRect().top) {
      Object.assign(content.style, {
        'transform-origin': '0 0',
      });

      // 컨텐츠가 오프너 버튼보다 위에있는 경우
    } else {
      Object.assign(content.style, {
        'transform-origin': '0 100%',
      });
    }

    this._offsetElement();
    this._setCloseReadyEvents();

    content.setAttribute('tabindex', 0);

    if (focuserble) {
      this._focusTrap = new FocusTrap(content);
      this._focusTrap.init();
      content.focus();
    }
    EventHandler.trigger(this._element, BoxOpenner.EVENT.OPEN);

    EventHandler.trigger(document, BoxOpenner.EVENT.ALL, {
      component: this,
      eventType: BoxOpenner.EVENT.OPEND,
    });
  }

  _close(_content = null) {
    if (!this._isOpen) return;
    const { selector, openClass, displayClass, focuserble } = this._options;
    const content = _content ? _content : qs(this._element, selector.content);
    const openner = qs(this._element, selector.openner);
    //예외처리
    openner.classList.remove(openClass);
    openner.setAttribute('aria-expanded', false);
    content.classList.remove(displayClass);
    content.removeAttribute('tabindex');
    this._element.classList.remove(openClass);
    this._element.classList.remove(ANIMATE_CLASS);
    this._removeCloseReadyEvents();
    this._isOpen = false;

    if (focuserble) {
      this._focusTrap.destroy();
      this._focusTrap = null;
    }

    Object.assign(content.style, {
      'transform-origin': '',
    });

    EventHandler.trigger(this._element, BoxOpenner.EVENT.CLOSE);

    EventHandler.trigger(document, BoxOpenner.EVENT.ALL, {
      component: this,
      eventType: BoxOpenner.EVENT.CLOSED,
    });
  }

  _setCloseReadyEvents() {
    setTimeout(() => {
      // 화면이 스크롤 -> 닫기
      // EventHandler.on(window, 'scroll.boxOpenner', () => this._close());
      // ESC키 눌렀을 때 -> 닫기
      EventHandler.on(window, 'keydown.boxOpenner', event => {
        if (event.key === 'Escape') {
          event.preventDefault();

          if (this._setProps) {
            const { content, element } = this._setProps;
            if (!content.classList.contains('expand')) {
              content.classList.add('expand');
              this._close();
            }
            return;
          }
          this._close();
        }
      });
      // 바탕 클릭했을 때 -> 닫기
      EventHandler.on(window, 'click.boxOpenner', event => {
        // 인풋에 동적으로 생성되는 (X) 버튼에 대한 예외처리
        if (event.target.closest(`[data-auto-element="btn"]`)) return;
        if (event.target.closest(BoxOpenner.DATA_TRIGGER_NAME)) return;

        if (this._setProps) {
          const { content, element } = this._setProps;
          if (!content.classList.contains('expand')) {
            content.classList.add('expand');
            this._close();
          }
          return;
        }

        this._close();
      });
    }, 0);
  }

  _offsetElement() {
    const { offset, selector } = this._options;
    const offsetSize = this._element.getAttribute(offset);
    if (!offsetSize) return;

    const getLeft = offsetSize.split(', ')[0];
    const getTop = offsetSize.split(', ')[1];

    const wrapper = qs(this._element, `${selector.content}`);
    wrapper.style.top = `${getTop}px`;
    wrapper.style.left = `${getLeft}px`;
  }

  _removeCloseReadyEvents() {
    EventHandler.off(window, 'keydown.boxOpenner');
    EventHandler.off(window, 'click.boxOpenner');
  }

  _initEvents() {
    EventHandler.on(this._element, super._eventName('click'), event => {
      const { selector, displayClass } = this._options;

      const openner = event.target.closest(selector.openner);
      if (openner) {
        event.preventDefault();
        const wrapper = event.target.closest(BoxOpenner.DATA_TRIGGER_NAME);
        if (wrapper) {
          const content = qs(wrapper, selector.content);

          if (this._isToggle) {
            if (content && content.classList.contains(displayClass)) {
              this._close(content);
            } else {
              this._open(content);
            }
          } else {
            this._open(content);
          }
        }
      } else {
        //children
        event.preventDefault();

        const item = event.target.closest('[aria-controls]');
        const wrapper = event.target.closest(BoxOpenner.DATA_TRIGGER_NAME);
        const getID = item?.getAttribute(selector.controls);
        const targetContent = qs(wrapper, `#${getID}`);

        this._children = {
          target: event.target,
          header: item,
          content: targetContent,
          before: this._before,
          component: this,
        };

        this._treeMenu = new TreeMenu(this._children, this._options);
        this._treeMenu.init();
        EventHandler.trigger(document, BoxOpenner.EVENT.ALL, {
          component: this._treeMenu,
          eventType: BoxOpenner.EVENT.TREEOPEN,
        });
      }
    });
  }

  _initVars() {
    this._isOpen = false;
    this._isToggle = null;
    this._focusTrap = null;
    this._children = null;
    this._treeMenu = null;
    this._values = null;
    this._before = null;
    this._item;
    this._dir = 'down';
  }

  init() {
    this._initEvents();
    this._initVars();
    this._defaultSelection();
  }

  _defaultSelection() {
    const { setChildrenOpen, _defaultChildren, openClass, selector } = this._options;
    const targetAllContent = qsAll(this._element, `[aria-controls]`);
    const index = [_defaultChildren ? _defaultChildren : 0];
    const setID = targetAllContent[index].getAttribute('aria-controls');
    const content = qs(this._element, `#${setID}`);
    const wrapper = qs(this._element, `${selector.content}`);
    const childGroup = qs(content, `${selector.items}`);
    const items = qsAll(childGroup, `button`);

    this._values = {
      itemValue: targetAllContent[index].textContent,
      listValue: items[index].textContent,
    };

    this._before = {
      headers: targetAllContent,
      firstheader: targetAllContent[index],
      contents: wrapper,
      firstContent: content,
      firstItem: items[index],
      items: items,
      firstValues: this._values,
    };

    //처음에 보이지않지만, children을 오픈할지 여부
    if (setChildrenOpen) {
      targetAllContent[index].setAttribute('aria-expanded', true);
      content.classList.add(openClass);
      items[index].classList.add(openClass);
    }
  }

  _initOptions(options) {
    this._options = {
      ...defaultOptions,
      ...BoxOpenner.GLOBAL_OPTIONS,
      ...options,
      ...dataSetToObject(this._element, dataAttrOptions, BoxOpenner.DATA_NAME),
    };
  }
}

export default BoxOpenner;
