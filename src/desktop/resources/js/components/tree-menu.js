// import EventHandler from '../vendor/event-handler';
import { qs, qsAll } from '../util/dom-util';
import EventHandler from '../vendor/event-handler';

const NAME = 'ui.treemenu';
class TreeMenu {
  constructor(props, options = {}) {
    this._options = options;
    this._params = {
      ...props,
      _current: null,
    };
  }

  static get EVENT() {
    return {
      LISTSELECT: `onListSelect.${NAME}`,
      ITEMSELECT: `onItemSelect.${NAME}`,
      LISTOPEN: `listOpen.${NAME}`,
      ITEMOPEN: `itemOpen.${NAME}`,
    };
  }

  static get NAME() {
    return NAME;
  }

  _initEvents() {
    const { content } = this._params;
    const { displayClass } = this._options;
    if (content && content.classList.contains(displayClass)) {
      this._close(content);
    } else {
      this._open(content);
    }
  }

  _initVars() {
    this._beforeActive = null;
  }

  _open() {
    const { header, content, target } = this._params;
    const { selector, openClass, setValue } = this._options;

    const current = target.closest('[aria-controls]');

    this.originCurrent = current;
    if (current) {
      this._defaultInit(content);
      this._closeContentAll();
      const items = qsAll(content, `${selector.items} button`);
      content.classList.add(openClass);
      header.classList.add(openClass);
      items.forEach(list => {
        list.classList.remove(openClass);
      });

      items[0].classList.add(openClass);
      if (setValue) {
        this.value(current.textContent, 'list');
      }
    } else {
      const btn = target.closest('button');
      if (btn) {
        this._closeActiveAll();
        btn.classList.add(openClass);
        if (setValue) {
          this.value(btn.textContent, 'item');
        }
      }
    }
  }

  _closeActiveAll() {
    const { target } = this._params;
    const wrapper = target.closest('[data-item="btn"]');
    const btnAll = qsAll(wrapper, `button`);

    const { openClass } = this._options;
    if (btnAll.length > 0) {
      btnAll.forEach(item => {
        item.classList.remove(openClass);
      });
    }
  }

  _closeContentAll() {
    const { openClass } = this._options;
    const { before } = this._params;

    if (before.headers.length > 0) {
      before.headers.forEach(item => {
        const getContent = item.getAttribute('aria-controls');
        const content = qs(before.contents, `#${getContent}`);
        if (item.classList.contains(openClass)) {
          item.classList.remove(openClass);
          content.classList.remove(openClass);
        }
      });
    }
  }

  _defaultInit() {
    const { before } = this._params;
    const { openClass } = this._options;
    const content = before.firstContent;
    const head = before.firstItem;
    const header = before.firstheader;

    content.classList.remove(openClass);
    head.classList.remove(openClass);
    header.setAttribute('aria-expanded', false);
  }

  value(text, type) {
    const { component } = this._params;
    const { selector, openClass } = this._options;

    const target = this.originCurrent?.getAttribute('aria-controls');

    const getID = qs(component._element, `#${target}`);
    const content = qs(getID, `${selector.items} .${openClass}`);

    const list = qs(component._element, `${selector.values.listValue}`) || qs(document, `${selector.values.listValue}`);
    const item = qs(component._element, `${selector.values.itemsValue}`) || qs(document, `${selector.values.itemsValue}`);

    if (content) {
      list.textContent = text;
      item.textContent = content.textContent;

      this._params._current = {
        listValue: list.textContent,
        itemsValue: content.textContent,
      };
    } else {
      if (type === 'list') {
        list.textContent = text;
      } else {
        item.textContent = text;
      }

      this._params._current = {
        listValue: list.textContent,
        itemsValue: item.textContent,
      };
    }
  }

  init() {
    this._initVars();
    this._initEvents();

    window.HitaiUI.TreeMenu = TreeMenu;
  }
}

export default TreeMenu;
