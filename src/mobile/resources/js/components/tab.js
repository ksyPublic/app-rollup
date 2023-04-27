import UI from './ui-base';
import EventHandler from '../vendor/event-handler';
import { dataSetToObject, getElement } from '../util/dom-util';

const NAME = 'ui.tab';

const defaultOptions = {
  activeIndex: 0,
  DATA_SCROLL: 'data-scroll-target',
};

class Tab extends UI {
  constructor(element, options = {}) {
    super(element, options);
    this._initOptions(options);
    this._element = element;
    this._tablist = null;
  }

  static GLOBAL_OPTIONS = {};
  static DATA_NAME = 'tab';

  static get EVENT() {
    return {
      CHANGED: `${NAME}.changed`,
    };
  }

  static get NAME() {
    return NAME;
  }

  /**
   * 다이얼로그 객체 반환
   * 인스턴스 반환
   * @param {*} element 다이얼로그 엘리먼트
   * @param {*} initialize 초기화되지 않은 대상에 대해서 초기화 후 인스턴스를 반환할지 여부
   * @returns
   */
  static get(element, initialize = false) {
    const _el = getElement(element);
    if (!_el) {
      console.warn(`\n  warning from [${NAME}] ---> [element] not found.\n\n`);
      return;
    }
    let instance = Tab.getInstance(_el);
    if (!instance && initialize) {
      instance = new Tab(_el);
      instance.init();
    }
    return instance;
  }

  _initVars() {
    this._tablist = this._element;
  }

  _initEvent() {
    const { DATA_SCROLL } = this._options;

    EventHandler.on(this._tablist, 'click', event => {
      if (event.target.closest(`[data-autoset="tab"]`) === this._tablist) {
        this._clickEventHandler(event);
      }
    });

    const getScroll = this._tablist.getAttribute(`${DATA_SCROLL}`);

    if (getScroll?.length > 0) {
      EventHandler.on(window, 'scroll', event => this._scrollFixed(event, getScroll));
    }
  }

  _scrollFixed(event, getScroll) {
    const scrollHeight = window.scrollY;
    const distance = scrollHeight - this._tablist.scrollTop; // 컨텐츠의 상단에서 현재 위치까지의 거리
    const getTarget = document.querySelector(getScroll);
    const posH = getTarget.getBoundingClientRect().height;
    const originTarget = this._tablist.querySelector('.tabs__scroll');
    const originPanel = this._tablist.querySelector('[role="tabpanel"]');
    const offset = 20;

    if (distance >= this._tablist.offsetTop) {
      this._tablist.classList.add('is-fixed');
      Object.assign(originTarget.style, {
        top: posH + 'px',
      });
      Object.assign(originPanel.style, {
        paddingTop: posH + offset + 'px',
      });
    } else {
      this._tablist.classList.remove('is-fixed');
      Object.assign(originTarget.style, {
        top: 0 + 'px',
      });
      Object.assign(originPanel.style, {
        paddingTop: offset + 'px',
      });
    }
  }

  _initOptions(options) {
    this._options = {
      ...defaultOptions,
      ...Tab.GLOBAL_OPTIONS,
      ...options,
      ...dataSetToObject(this._element, Tab.DATA_NAME),
    };
  }

  _clickEventHandler(event) {
    const target = event.target;
    if (!target) return;
    if (target.getAttribute('role') === 'tab') {
      event.preventDefault();
      this._options.activeIndex = [...this._tablist.children[0].querySelectorAll('li')].indexOf(target.parentNode);
      this.select();
    }
  }

  init() {
    this._initVars();
    this._initEvent();
    this._options.activeIndex = 0;
    return this;
  }

  select(activeIndex) {
    this._options.activeIndex = activeIndex || activeIndex === 0 ? activeIndex : this._options.activeIndex;
    this._tablist.children[0].querySelectorAll('li').forEach((tab, index) => {
      const target = tab.querySelector('a');
      target.setAttribute('aria-selected', '');
      if (index === this._options.activeIndex) {
        target.setAttribute('aria-selected', true);
        [...this._tablist.children].filter(item => {
          if (item.classList.contains('tabs__panel')) {
            item.classList.remove('is-active');
          }
        });
        this._tablist.querySelector(target.getAttribute('href')).classList.add('is-active');
      }
    });

    // 탭 변경이벤트시 trigger
    EventHandler.trigger(this._tablist, Tab.EVENT.CHANGED, {
      detail: {
        activeIndex: this._options.activeIndex,
      },
    });
  }

  destroy() {
    EventHandler.off(this._tablist, 'click', this._clickEventHandler);
    EventHandler.off(this._tablist, 'scroll', this._scrollFixed);
    this._options.activeIndex = null;
    this._options = null;
    super.destroy();
  }

  getElement() {
    return this._element;
  }
}

export default Tab;
