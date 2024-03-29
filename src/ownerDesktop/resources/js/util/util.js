/**
 * raf를 이용하여 화면 주사율보다 높은 호출을 방지
 * @param {*} callback
 * @returns
 */
export const optimizeCaller = (callback) => {
  let tick = false;
  return () => {
    if (tick) return;
    tick = true;
    return window.requestAnimationFrame(() => {
      tick = false;
      return callback();
    });
  };
};

/**
 * 이미지 로딩 체크
 * @param {*} container
 * @param {*} callback
 * @returns
 */
export const imageLoadCheck = (container, callback) => {
  const imgs = container.querySelectorAll("img");
  if (imgs.length === 0) {
    callback();
    return;
  }
  let count = 0;
  const complateCheck = () => {
    count++;
    console.log(count, imgs.length);
    if (count >= imgs.length) {
      callback();
    }
  };

  imgs.forEach((_img) => {
    const img = new Image(_img);
    img.src = _img.getAttribute("src");
    img.onload = () => {
      complateCheck();
    };
    img.onerror = () => {
      complateCheck();
    };
    img.onAbort = () => {
      complateCheck();
    };
  });
};

export const debug = {
  log: (...value) => {
    if (window.__UI_DEBUG_MODE === true) {
      console.log(...value);
    }
  },
  warn: (...value) => {
    if (window.__UI_DEBUG_MODE === true) {
      console.warn(...value);
    }
  },
};
