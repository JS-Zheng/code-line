import numberIcon from './img/numbered-list.svg'
import './styles/code-line.css'
import whenReady from './whenReady'

export default (() => {

  const classPrefix = 'cljs';
  const numClickEventName = '$_' + classPrefix + 'NumClickEvent';
  let elementProto = {};

  function CodeLine() {
    const self = this;

    this.minLies = 3;
    this.softWrap = false;
    this.showToggleBtn = true;
    this.disableOnMobile = true;
    this.maxMobileWidth = 420;


    this.loadLineNumbers = function () {
      let codes = document.querySelectorAll("pre code");
      const deviceWidth = getDeviceWidth();

      // for Performance is faster than Array#forEach:
      for (let i = 0, code; code = codes[i]; i++) {
        const pre = code.parentNode;

        if (pre.matches(".nohighlight") || code.matches(".nohighlight")) continue;

        let lines = getLines(code);
        if (!lines || lines.length < self.minLies) continue;

        if (deviceWidth > self.maxMobileWidth || !self.disableOnMobile)
          pre.classList.add(classPrefix);

        splitCodeLayout(code, lines);

        if (self.showToggleBtn)
          appendToggleButton(pre, code);

        if (self.softWrap)
          toggleSoftWrap(code);
      } // for End

      // free cache
      elementProto = {};

      setGlobalNumClickEvent();

      function setGlobalNumClickEvent() {
        let highlightClz = classPrefix + '-' + 'row-highlight';
        window[numClickEventName] = function (e) {
          let content = e.target.nextSibling;
          if (!content) return;
          content.classList.toggle(highlightClz)
        };
      }

    };

    this.initOnPageLoad = function () {
      whenReady(this.loadLineNumbers);
    }
  }

  return new CodeLine();

  function getDeviceWidth() {
    const wWidth = window.innerWidth;
    return wWidth > 0 ? wWidth : screen.width;
  }

  function getLines(code) {
    const text = code.innerHTML;
    return !text.length ? [] : text.split(/\r?\n|\r/g);
  }

  function splitCodeLayout(code, lines) {
    const linesLength = lines.length;

    const container = createElementWithClz("div", "container");

    setCodeLength(linesLength, code);

    const rowProto = createRowPrototype();
    const contentClz = getPrefixClzName('content');

    for (let i = 0, line; (line = lines[i] ) || line === ''; i++) {
      const row = rowProto.cloneNode(true);

      if (line !== '') {
        // getElementsByClassName is faster than querySelector
        const codeContent = row.getElementsByClassName(contentClz)[0];
        codeContent.innerHTML = line + '\n';
      }

      container.appendChild(row);
    }

    code.innerHTML = "";
    code.appendChild(container);

    function createRowPrototype() {
      // use inline event attribute instead of addEventListener
      // to prevent DOM manipulating (e.g., Node Replace) by other script.
      const key = 'rowPrototype';
      let cache = elementProto[key];

      if (cache)
        return cache;

      const row = createElementWithClz('div', 'row');
      const num = createElementWithClz('div', 'number');
      const codeContent = createElementWithClz("div", "content");
      codeContent.innerHTML = '\n';
      num.setAttribute('onclick', `${numClickEventName}(event)`);
      row.appendChild(num);
      row.appendChild(codeContent);

      elementProto[key] = row;

      return row;
    }
  }

  function appendToggleButton(pre, code) {
    // appendCodeWrapper
    const codeWrapper = createElementWithClz("div", "wrapper");
    pre.appendChild(codeWrapper);
    codeWrapper.appendChild(code);

    // appendToggleBtn
    let btn = createElementWithClz('div', 'toggle-btn');
    btn.addEventListener("click", () => pre.classList.toggle(classPrefix));

    const toggleBtnTouchClz = getPrefixClzName("toggle-btn-enabled");
    let counter = 2;
    let intervalId;

    let endEvent = function (e) {
      if (intervalId) return;

      // Performance: indexOf > test (Reg) > match
      let cancelTime = e.type.indexOf('m') > -1 ? 0 : 1000; // mouse

      intervalId = setInterval(() => {
        if (--counter <= 0) {
          btn.classList.remove(toggleBtnTouchClz);
          clearInterval(intervalId);
          intervalId = null;
        }
      }, cancelTime);
    };

    let startEvent = function () {
      counter = 2;

      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }

      btn.classList.add(toggleBtnTouchClz);
    };

    pre.addEventListener("touchstart", startEvent);
    pre.addEventListener("touchend", endEvent);

    pre.addEventListener("mouseenter", startEvent);
    pre.addEventListener("mouseleave", endEvent);

    codeWrapper.appendChild(btn);
  }

  function toggleSoftWrap(code) {
    code.classList.toggle('soft-wrap');
  }


  function getPrefixClzName(name) {
    return classPrefix + "-" + name;
  }

  function createElementWithClz(type, clzName, noPrefix = false) {
    const key = '' + type + clzName + noPrefix;
    let cache = elementProto[key];
    let result;

    if (cache) {
      result = cache.cloneNode(false);
    } else {
      result = createNewElement();
      elementProto[key] = result;
    }

    return result;

    function createNewElement() {
      const el = document.createElement(type);
      if (clzName) {
        clzName = noPrefix ? clzName : getPrefixClzName(clzName);
        el.classList.add(clzName);
      }
      return el;
    }
  }


  function addPrefixClzToElement(el, clzName) {
    el.classList.add(getPrefixClzName(clzName));
  }

  function setCodeLength(length, code) {
    const clzName = length > 999 ? 'over-thousand' : length > 99 ? 'over-hundred' : 'under-hundred';
    addPrefixClzToElement(code, clzName);
  }

})();
