/**
 * HTML스트링을 HTML형태로 반환
 * @param {String} htmlString
 * @return {Element}} 엘리먼트
 */
export const toHTML = htmlString => {
  const div = document.createElement('div');
  div.innerHTML = htmlString.trim();
  return div.firstChild;
};

/**
 * @param {String} 셀렉터 이름을 반환
 * @returns
 */
export const getSelectorName = element => {
  const names = element.className.split(' ');
  return `.${names.join('.')}`;
};

/**
 *
 * @param {*} element
 * @returns
 */
export const getIndex = element => {
  if (!element) {
    return -1;
  }
  let currentElement = element;
  let index = 0;
  while (currentElement.previousElementSibling) {
    index += 1;
    currentElement = currentElement.previousElementSibling;
  }
  return index;
};

/**
 * element visible check
 * @param element
 */
export const isVisible = element => {
  return element.offsetWidth !== 0 || (element.offsetWidth !== 0 && element.style.opacity !== '0' && element.style.visibility !== 'hidden');
};

/**
 * element disable check
 * @param {*} element
 * @returns
 */
export const isDisabled = element => {
  if (!element || element.nodeType !== Node.ELEMENT_NODE) {
    return true;
  }
  if (element.classList.contains('disabled')) {
    return true;
  }
  if (typeof element.disabled !== 'undefined') {
    return element.disabled;
  }
  return element.hasAttribute('disabled') && element.getAttribute('disabled') !== 'false';
};

/**
 * 엘리먼트에 선언되어있는 data attribute를 오브젝트 형태로 반환
 * UI 컴포넌트에서 data attribute로 속성 값 전달할 떄 사용
 * @param {*} element
 * @returns
 */
export const dataSetToObject = (element, dataAttrConfig, prefix = '') => {
  const config = {};
  for (const key in dataAttrConfig) {
    if (Object.prototype.hasOwnProperty.call(dataAttrConfig, key)) {
      const attrvalue = element.dataset[`${prefix}${key.charAt(0).toUpperCase() + key.slice(1)}`];
      if (attrvalue) {
        if (attrvalue === 'true' || attrvalue === 'false') {
          config[key] = JSON.parse(attrvalue);
        } else {
          config[key] = attrvalue;
        }
      }
    }
  }
  return config;
};

/**
 * target으로 받은 엘리먼트를 알아서 반환한다.
 * select, string 판단하여 적절하게..
 * @param {*} target
 */
export const getElement = target => {
  if (typeof target === 'string') {
    return document.querySelector(target);
  } else {
    if (target?.jquery) {
      return target[0];
    } else {
      return target;
    }
  }
};

/**
 * 포커스 가능한 엘리먼트 반환
 * @param {*} element
 * @returns
 */
export const focusableElements = element => {
  const focusableElementSelectors = ['a', 'button', 'input', 'textarea', 'select', 'details', '[tabindex]'];
  return [].concat(qsAll(element, focusableElementSelectors.map(selector => `${selector}:not([tabindex^="-"])`).join(', '))).filter(el => !isDisabled(el) && isVisible(el));
};

/**
 * 특정 엘리먼트를 타겟으로 단 한번만 실행하는 함수
 * @param {*} el 타겟 엘리먼트
 * @param {*} identifier 식별자 (datd-name)
 * @param {*} runFunc 실행함수
 * @example runOnce(element, "data-test", ()=> {})
 */
export const runOnce = (el, identifier, runFunc) => {
  if (!el || !identifier || !runFunc) {
    throw Error('필수항목이 누락되었습니다.');
  }
  const _identifier = `${identifier}-initialize`;
  if (!el.getAttribute(_identifier)) {
    el.setAttribute(_identifier, 'true');
    runFunc.apply(el, [el]);
  }
};

/**
 * 셀렉터에 해당하는 모든 엘리먼트에서 클래스 삭제
 * @param {*} selector css selector
 * @param {*} className 삭제할 클래스 명
 * @param {*} target 타겟
 */
export const removeAllClass = (selector, className, target = document) => {
  target.querySelectorAll(selector, className).forEach(el => el.classList.remove(className));
};

/**
 * 셀렉터에 해당하는 모든 엘리먼트에서 클래스 추가
 * @param {*} selector css selector
 * @param {*} className 추가할 클래스 명
 * @param {*} target 타겟
 */
export const addAllClass = (selector, className, target = document) => {
  target.querySelectorAll(selector, className).forEach(el => el.classList.add(className));
};

/**
 * 다음 엘리먼트 선택
 * @param {*} element
 * @param {*} selector
 * @returns
 */
export const getNext = (element, selector) => {
  const nextElement = element.nextElementSibling;
  if (!selector) {
    return nextElement;
  }
  if (nextElement && nextElement.matches(selector)) {
    return nextElement;
  }
  return null;
};

/**
 * 이전 엘리먼트 선택
 * @param {*} element
 * @param {*} selector
 * @returns
 */
export const getPrev = (element, selector) => {
  const previous = element.previousElementSibling;
  if (!selector) {
    return previous;
  }
  if (previous && previous.matches(selector)) {
    return previous;
  }
  return null;
};

/**
 * querySelector 반환
 * @param {*} target
 * @param {*} selector
 */
export const qs = (target, selector) => {
  return target?.querySelector(selector);
};

/**
 * querySelectorAll 처리하면 NodeList가 아닌 Array 형태로 반환
 * @param {*} target
 * @param {*} selector
 * @returns
 */
export const qsAll = (target, selector) => {
  return Array.from(target?.querySelectorAll(selector));
};

/**
 * 형제요소 반환
 * @param {*} element
 * @param {*} withMe 반환값에 나를 포함해야 하는지 여부
 * @returns
 */
export const getSiblings = (element, withMe = true) => {
  if (element === null) return [];
  let siblings = withMe ? [element] : [];
  if (!element.parentNode) {
    return siblings;
  }
  let sibling = element.parentNode.firstChild;
  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== element) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling;
  }
  return siblings;
};

/**
 * 브라우저의 스크롤바 너비를 구하여 반환한다.
 * @returns
 */
export const getScrollBarWidth = () => {
  const tempDiv = document.createElement('div');
  Object.assign(tempDiv.style, {
    position: 'absolute',
    width: '100%',
    height: `${50}px`,
    overflow: 'auto',
  });
  tempDiv.innerHTML = '<div style="height:200px;position: relative; width: 100%;"></div>';
  document.body.appendChild(tempDiv);
  const scWidth = tempDiv.offsetWidth - tempDiv.clientWidth;
  document.body.removeChild(tempDiv);
  // const scWidth = window.innerWidth - document.documentElement.clientWidth;
  return scWidth;
};
