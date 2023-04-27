import Data from '../vendor/data';
import EventHandler from '../vendor/event-handler';
import { getElement, focusableElements } from './dom-util';

/**
 * 포커스를 특정 엘리먼트에 가둔다.
 */
const VERSION = '1.0.0';
const NAME = 'util.focustrap';

const elementMap = new Map();

class FocusTrap {
  constructor(element) {
    this._element = getElement(element);
    this._autoFocus = true;
    this._trapsElements = [];

    if (!elementMap.has(this._element)) elementMap.set(this._element, new Map());

    const instanceMap = elementMap.get(this._element);
    if (instanceMap.has(NAME)) {
      console.error(`instance already registered!`);
      return;
    }
    instanceMap.set(NAME, this);
  }

  static get EVENT() {
    return {
      FOCUS_IN: `focusin.${NAME}`,
      KEY_DOWN: `keydown.${NAME}`,
    };
  }

  static get(element) {
    if (elementMap.has(element)) {
      return elementMap.get(element).get(key) || null;
    }
    return null;
  }

  init(isAutoFocus = true) {
    this._initVars();
    this._initEvents();

    if (isAutoFocus) {
      if (this._trapsElements.length > 0) {
        this._trapsElements[0].focus();
      } else {
        this._element.focus();
      }
    }
  }

  destroy(autoComeback = true) {
    if (this._beforeFocused && autoComeback) this._beforeFocused.focus();
    Data.remove(this._element, this.constructor.NAME);
    this._removeEvents();
    this._removeVars();
  }

  _initVars() {
    this._trapsElements = focusableElements(this._element);
    this._beforeFocused = (document.hasFocus() && document.activeElement !== document.body && document.activeElement !== document.documentElement && document.activeElement) || null;
  }

  _initEvents() {
    EventHandler.off(this._element, FocusTrap.EVENT.FOCUS_IN);
    EventHandler.on(this._element, FocusTrap.EVENT.FOCUS_IN, event => {
      event.stopPropagation();

      // 기존에 등록한 이벤트 모두 삭제 후 아래에서 다시 등록
      this._trapsElements.forEach(el => EventHandler.off(el, FocusTrap.EVENT.KEY_DOWN));
      this._trapsElements = focusableElements(this._element);
      const currentTtarget = event.target;
      const firstElement = this._trapsElements[0];
      const lastElement = this._trapsElements[this._trapsElements.length - 1];

      // 첫 번째 엘리먼트
      if (currentTtarget === firstElement) {
        EventHandler.on(firstElement, FocusTrap.EVENT.KEY_DOWN, event => {
          const keyCode = event.keyCode || event.which;
          if (keyCode === 9 && event.shiftKey) {
            // 첫 번째 엘리먼트에서 시프트 + 탭(백 탭)이면 마지막 엘리먼트로 강제 포커스 이동
            lastElement.focus();
            event.preventDefault();
          }
        });
      }

      // 마지막 엘리먼트
      if (currentTtarget === lastElement) {
        EventHandler.on(lastElement, FocusTrap.EVENT.KEY_DOWN, event => {
          const keyCode = event.keyCode || event.which;
          if (keyCode === 9 && !event.shiftKey) {
            // 마지막 엘리먼트에서 탭 이면 첫 번째 엘리먼트로 강제 포커스 이동
            firstElement.focus();
            event.preventDefault();
          }
        });
      }
    });
  }

  _removeVars() {
    if (!elementMap.has(this._element)) return;
    const instanceMap = elementMap.get(this._element);
    instanceMap.delete(NAME);
    if (instanceMap.size === 0) elementMap.delete(this._element);

    this._trapsElements = [];
    this._element = null;
  }

  _removeEvents() {
    this._trapsElements.forEach(el => EventHandler.off(el, FocusTrap.EVENT.KEY_DOWN));
    EventHandler.off(this._element, FocusTrap.EVENT.FOCUS_IN);
  }
}

export default FocusTrap;
