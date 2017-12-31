import './styles/code-line.scss'
import whenReady from './whenReady'

export default (() => {

  const classPrefix = 'cljs';
  const numClickEventName = '$_' + classPrefix + 'NumClickEvent';

  let elementProto = {};

  function getElementPrototype(key) {
    return elementProto[key];
  }

  function setElementPrototype(key, element) {
    elementProto[key] = element;
  }

  function CodeLine() {
    const self = this;

    this.minLies = 3;
    this.softWrap = false;
    this.showToggleBtn = true;
    this.disableOnMobile = true;
    this.maxMobileWidth = 420;

    this.loadLineNumbers = function () {
      let codes = document.querySelectorAll("pre > code");
      const deviceWidth = getDeviceWidth();

      // for Performance is faster than Array#forEach:
      for (let i = 0, code; code = codes[i]; i++) {
        const pre = code.parentNode;

        if (pre.matches(".nohighlight") || code.matches(".nohighlight")) continue;

        let lines = getLines(code);
        if (!lines || lines.length < self.minLies) continue;

        if (deviceWidth > self.maxMobileWidth || !self.disableOnMobile)
          pre.classList.add(classPrefix);

        let codeWrapper = appendCodeWrapper(pre, code);

        splitCodeLayout(code, lines);

        setMaxDigit(codeWrapper, lines.length);

        if (self.showToggleBtn) {
          let btn = createToggleButton(pre);
          codeWrapper.appendChild(btn);
        }

        if (self.softWrap)
          toggleSoftWrap(code);

      } // for End

      // free
      elementProto = {};

      setGlobalNumClickEvent();

      function setGlobalNumClickEvent() {
        let highlightClz = classPrefix + '-' + 'highlight';
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

  function appendCodeWrapper(pre, code) {
    let codeWrapper = createElementWithClz('div', 'wrapper');
    pre.appendChild(codeWrapper);
    codeWrapper.appendChild(code);
    return codeWrapper;
  }

  function splitCodeLayout(code, lines) {

    const container = createElementWithClz("div", "container");
    const contentClz = getPrefixClzName('content');

    for (let i = 0, line, nextLine = lines[0]; (line = nextLine ) || line === ''; i++) {
      nextLine = lines[i + 1];

      const row = createRow();

      if (line !== '') {
        // getElementsByClassName is faster than querySelector
        const codeContent = row.getElementsByClassName(contentClz)[0];
        codeContent.innerHTML = line + (nextLine ? '\n' : '');
      }

      container.appendChild(row);
    }

    code.innerHTML = "";
    code.appendChild(container);

    function createRow() {
      // use inline event attribute instead of addEventListener
      // to prevent DOM manipulating (e.g., Node Replace) by other script.
      const key = 'rowPrototype';
      let proto = getElementPrototype(key);

      if (!proto) {
        proto = createElementWithClz('div', 'row');
        const num = createElementWithClz('div', 'number');
        const codeContent = createElementWithClz("div", "content");
        codeContent.innerHTML = '\n';
        num.setAttribute('onclick', `${numClickEventName}(event)`);
        proto.appendChild(num);
        proto.appendChild(codeContent);

        setElementPrototype(key, proto);
      }

      return proto.cloneNode(true);
    }
  }

  function createToggleButton(pre) {
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

    return btn;
  }

  function toggleSoftWrap(code) {
    code.classList.toggle('soft-wrap');
  }


  function getPrefixClzName(name) {
    return classPrefix + "-" + name;
  }

  function createElementWithClz(type, clzName, noPrefix = false) {
    const key = '' + type + clzName + noPrefix;
    let proto = getElementPrototype(key);

    if (!proto) {
      proto = createNewElement();
      setElementPrototype(key, proto);
    }

    return proto.cloneNode(false);

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

  function setMaxDigit(wrapper, length) {
    const clzName = length < 9 ? 'one' :
      length < 99 ? 'ten' :
        length < 999 ? 'hundred' : 'thousand';

    addPrefixClzToElement(wrapper, clzName);
  }

})();
