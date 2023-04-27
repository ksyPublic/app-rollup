import UI from './ui-base';
import EventHandler from '../vendor/event-handler';
import { dataSetToObject, getElement, getScrollBarWidth } from '../util/dom-util';

const NAME = 'ui.dialog';

const defaultOptions = {
  openClass: 'open',
  closeClass: 'close',
  animate: true,
  destroy: false,
};

class Dialog extends UI {
  constructor(element, options = {}) {
    super(element, options);
    this._initOptions(options);
    this._element = element;
    this._isOpen = false;
    this._closeButtons = null;
    this._init();

    EventHandler.trigger(this._element, Dialog.EVENT.INIT, {
      component: this,
    });
  }

  static GLOBAL_OPTIONS = {};
  static DATA_NAME = 'dialog';

  static get EVENT() {
    return {
      INIT: `${NAME}.init`,
      OPEN: `${NAME}.open`,
      OPENED: `${NAME}.opened`,
      CLOSE: `${NAME}.close`,
      CLOSED: `${NAME}.closed`,
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
    let instance = Dialog.getInstance(_el);
    if (!instance && initialize) {
      instance = new Dialog(_el);
    }
    return instance;
  }

  /**
   * 초기화 되어있는 모든 다이얼로그의 옵션을 업데이트합니다.
   * @param {*} options
   */
  static updateOption(options) {
    const insList = Dialog.getInstances();
    if (insList.length > 0) {
      insList.forEach(ins => {
        ins.updateOption(options);
      });
    }
  }

  static trigger(event) {
    const target = event.target;
    const trigger = target.closest('[data-dialog-trigger]');
    if (trigger) {
      const dialogID = trigger.getAttribute('data-dialog-trigger');
      const dialog = document.querySelector(dialogID);
      if (dialog) {
        if (!Dialog.getInstance(dialog)) {
          new Dialog(dialog).open();
        } else {
          Dialog.getInstance(dialog).open();
        }
      }
    }
  }

  static COUNT = 0;

  static closeAll() {
    if (Dialog.getInstances().length > 0) {
      Dialog.getInstances().forEach(dialog => {
        if (dialog && dialog._isOpen === true) dialog.close();
      });
    }
  }

  open() {
    if (this._isOpen) return;
    if (this._options.animate) this._element.classList.add('animate');
    this._isOpen = true;
    this._element.classList.add(this._options.openClass);
    this._scrollHidden();
    EventHandler.trigger(this._element, Dialog.EVENT.OPEN, {
      component: this,
    });

    const openEventHandler = () => {
      this._element.classList.add(this._options.openClass);
      EventHandler.trigger(this._element, Dialog.EVENT.OPENED, {
        component: this,
      });
      this._element.removeEventListener('animationend', openEventHandler);
    };

    if (this._options.animate) {
      this._element.addEventListener('animationend', openEventHandler);
    }

    Dialog.COUNT++;
  }

  close() {
    if (!this._isOpen) return;
    this._isOpen = false;
    this._element.classList.remove(this._options.openClass);
    EventHandler.trigger(this._element, Dialog.EVENT.CLOSE, {
      component: this,
    });
    Dialog.COUNT--;
    // console.log('Dialog.COUNT:' + Dialog.COUNT);

    const closeEventHandler = () => {
      this._element.classList.remove(this._options.closeClass);
      this._element.removeEventListener('animationend', closeEventHandler);
      EventHandler.trigger(this._element, Dialog.EVENT.CLOSED, {
        component: this,
      });
      if (this._options.destroy) this.destroy();
      this._scrollVisible();
    };

    if (this._options.animate) {
      this._element.classList.add(this._options.closeClass);
      this._element.addEventListener('animationend', closeEventHandler);
    } else {
      if (this._options.destroy) this.destroy();
      this._scrollVisible();
    }
  }

  updateOption(options) {
    this._options = {
      ...this._options,
      ...options,
    };
    return this;
  }

  destroy() {
    this._element.remove();
    this._closeButtons = null;
    this._isOpen = null;
    EventHandler.off(this._element, 'click', this._initEvent);
    EventHandler.off(this._element, Dialog.EVENT.OPEN);
    EventHandler.off(this._element, Dialog.EVENT.OPENED);
    EventHandler.off(this._element, Dialog.EVENT.CLOSE);
    EventHandler.off(this._element, Dialog.EVENT.CLOSED);
    super.destroy();
  }

  getElement() {
    return this._element;
  }

  _initOptions(options) {
    this._options = {
      ...defaultOptions,
      ...Dialog.GLOBAL_OPTIONS,
      ...options,
      ...dataSetToObject(this._element, Dialog.DATA_NAME),
    };
  }

  _init() {
    EventHandler.on(this._element, 'click', event => this._initEvent(event));
  }

  _initEvent(event) {
    if (event.target.closest('[data-dialog-close]')) this.close();
  }

  _scrollHidden() {
    const scrollbarWidth = getScrollBarWidth();
    document.body.style.overflow = 'hidden';
  }

  _scrollVisible() {
    if (Dialog.COUNT <= 0) {
      document.body.style.overflow = '';
    }
  }
}

export default Dialog;
