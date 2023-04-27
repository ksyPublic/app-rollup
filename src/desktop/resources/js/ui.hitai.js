import { Masonry } from './ui.common';
import { qs, qsAll } from './util/dom-util';
import EventHandler from './vendor/event-handler';

// 년월
$.datepicker.setDefaults({
  prevText: '이전달',
  nextText: '다음달',
  monthNamesShort: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
  dayNames: ['일', '월', '화', '수', '목', '금', '토'],
  dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
  dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
  dateFormat: 'yy.mm.dd',
  showMonthAfterYear: true,
  yearSuffix: '',
  showButtonPanel: false, //이전달 다음달 옵션
  changeMonth: true,
  changeYear: true,
});

/**
 * 그리드 레이아웃
 */
const masonryInit = () => {
  const data = `[data-layout="masonry"]`;
  const mslElement = qsAll(document.body, data);
  let arr = [];

  mslElement.map(item => {
    const grid = item.getAttribute(`data-layout-item`);
    const msnry = new Masonry(item, {
      itemSelector: `${grid}`,
    });

    arr.push(msnry);
  });

  window.masonry = [...arr];
};

// menu 펼침/닫기
window.foldMenuInit = () => {
  const openClass = 'open';
  const toggle = `data-toggle`;
  const closeTrigger = `data-menu-close`;
  const menuName = `[data-autoset="menu"]`;
  const menuContentName = `[data-menu="con"]`;

  const _initVarioble = () => {
    const menuElement = qsAll(document.body, menuName);
    return {
      menuElement,
    };
  };

  const menuElement = _initVarioble().menuElement;
  let _before = null;
  let _current = null;
  let _element = null;

  const _hasMenuCloseAttribute = element => {
    return element.dataset.menuClose !== undefined;
  };

  const _initEvent = () => {
    EventHandler.on(document, 'click.menu', event => {
      _element = event.target;
      const target = event.target.closest(menuName);
      const content = event.target.closest(menuContentName);

      //현재값 셋팅
      _current = target;

      if (target) {
        //type은 default true로 셋팅
        const type = target.getAttribute(toggle) ? target.getAttribute(toggle) : 'true';
        //toggle을 사용안할 경우
        if (type === 'false') {
          _open(target);
          _setClose();
          const closeBtn = event.target.getAttribute(closeTrigger);
          if (closeBtn !== null) {
            _close(target);
          }
        }
        //toggle을 사용할 경우
        else {
          _toggle(target, content);
        }

        EventHandler.trigger(_element, 'foldMenu.item', {
          element: _element,
          currentTarget: _element.closest('button') || _element.closest('a'),
        });
      }

      //이전값 셋팅
      _before = target;
    });
  };

  /**
   * 전체닫기
   */
  const _closeAll = () => {
    menuElement.forEach(element => {
      element.classList.remove(openClass);
    });

    _removeClose();
  };

  /**
   * 이벤트 삭제
   */
  const _removeClose = () => {
    EventHandler.off(window, 'click.menu');
  };

  /**
   * 셀렉터 이외 클릭시
   */
  const _setClose = () => {
    EventHandler.on(window, 'click.menu', event => {
      if (event.target.closest(menuName)) return;
      if (event.target.closest(menuContentName)) return;
      _closeAll();
    });
  };

  /**
   *
   * @param {*} target
   * @returns
   */
  const _open = target => {
    target.classList.add(openClass);

    //현재값과 이전값이 같을때 처리하지 않음
    if (_before === _current) {
      return;
    } else {
      //현재 값과 이전값이 같지 않고 이전값이 존재할때
      if (_before) {
        _before.classList.remove(openClass);
      }
    }
  };

  /**
   *
   * @param {*} target
   */
  const _close = target => {
    target.classList.remove(openClass);

    EventHandler.trigger(_element, 'foldMenu.close', {
      element: _element,
    });
  };

  /**
   *
   * @param {*} target
   */
  const _toggle = (target, content) => {
    if (target.classList.contains(openClass)) {
      if (content) {
        if (_hasMenuCloseAttribute(_element)) {
          _close(target);
        } else {
          return;
        }
      } else {
        _close(target);
      }
    } else {
      _open(target);
      _setClose();
    }
  };

  const init = () => {
    _initEvent();
  };

  return {
    init: init,
  };
};

// 비밀번호 숨기기/보이기
const passwordInput = () => {
  const btn = document.querySelectorAll('.input-wrap.input-wrap--password [data-toggle-btn]');
  if (!btn) return;

  const clickEvent = event => {
    const input = event.target.closest('.input-wrap').querySelector('.input');
    if (event.target.classList.contains('is-active')) {
      input.setAttribute('type', 'password');
      event.target.classList.remove('is-active');
    } else {
      input.setAttribute('type', 'text');
      event.target.classList.add('is-active');
    }
  };

  btn.forEach(el => {
    EventHandler.on(el, 'click', clickEvent);
  });
};

// 이용후기작성(평점)
const reviewValue = () => {
  const bar = document.querySelector('[data-review]');
  if (!bar) return;

  const addEvent = () => {
    EventHandler.on(bar, 'mousemove', mousemove);
    EventHandler.on(bar, 'mouseup', mouseup);
  };

  const removeEvent = () => {
    EventHandler.off(bar, 'mousemove', mousemove);
    EventHandler.off(bar, 'mouseup', mouseup);
  };

  const mousemove = event => {
    event.preventDefault();
    var value = Math.max(15, event.clientX - bar.getBoundingClientRect().left);
    if (value <= bar.clientWidth) {
      bar.querySelector('[data-review="bar"]').style.width = Math.ceil(value / 15) * 10 + '%';
      bar.querySelector('[data-review="value"]').textContent = Math.ceil(value / 15);
    }
  };

  const mouseup = () => {
    removeEvent();
  };

  EventHandler.on(bar, 'mousedown', addEvent);
  EventHandler.off(bar, 'mouseleave', removeEvent);
  EventHandler.on(bar, 'mouseleave', removeEvent);
  EventHandler.off(bar, 'click', mousemove);
  EventHandler.on(bar, 'click', mousemove);
};

/**
 * 초기화를 사용하지 않을 함수 모음
 */
const uiFunc = () => {
  reviewValue();
  passwordInput();

  window.foldMenuInit().init();
};

/**
 * 초기화를 사용할 함수 모음
 */
const uiInitialize = () => {
  masonryInit();
};

const commonInit = {
  uiFunc,
  uiInitialize,
};

export default commonInit;
