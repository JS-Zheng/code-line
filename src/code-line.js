import './styles/code-line.scss'
import whenReady from './utils/whenReady'
import Clipboard from 'clipboard'
import HoverMocker from './utils/HoverMocker'

let env = process.env;
console.log(`==== ${env.NAME} ${env.NODE_ENV} v${env.VERSION} ====`);

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

  // Default Options
  this.minLine = 3;
  this.show = true;
  this.softWrap = false;
  this.showOnMobile = false;
  this.maxMobileWidth = 420;

  this.copyBtn = {
    show: true,
    showOnMobile: true,
    position: 'top'
  };

  this.toggleBtn = {
    show: true,
    showOnMobile: true,
    position: 'bottom'
  };

  this.loadLineNumbers = function (options = {}) {
    Object.assign(self, options);

    let codes = document.querySelectorAll("pre > code");
    const deviceWidth = getDeviceWidth();

    // for Performance is faster than Array#forEach:
    for (let i = 0, code; code = codes[i]; i++) {
      const pre = code.parentNode;

      if (code.matches(".nohighlight")) continue;

      let lines = getLines(code);
      if (!lines || lines.length < self.minLine) continue;

      let isMobile = deviceWidth <= self.maxMobileWidth;
      if ((isMobile && self.showOnMobile) || (!isMobile && self.show))
        pre.classList.add(classPrefix);

      let codeWrapper = appendCodeWrapper(pre, code);

      splitCodeLayout(code, lines);

      setMaxDigit(codeWrapper, lines.length);

      setupWidgets.call(self, isMobile, pre, codeWrapper, code);

      if (self.softWrap)
        setSoftWrapMode(code);

    } // for End

    setGlobalNumClickEvent();

    function setGlobalNumClickEvent() {
      let highlightClz = classPrefix + '-' + 'highlight';
      window[numClickEventName] = function (e) {
        let content = e.target.nextSibling;
        if (!content) return;
        content.classList.toggle(highlightClz)
      };
    }

    // free
    elementProto = {};
  };

  this.initOnPageLoad = function (options = {}) {
    let bindOptionsFunction = this.loadLineNumbers.bind(this, options);
    whenReady(bindOptionsFunction);
  }
}

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
      codeContent.innerHTML = '\n'; // Prepare for empty content
      num.setAttribute('onclick', `${numClickEventName}(event)`);
      proto.appendChild(num);
      proto.appendChild(codeContent);

      setElementPrototype(key, proto);
    }

    return proto.cloneNode(true);
  }
}

function setMaxDigit(wrapper, length) {
  const clzName = length < 9 ? 'one' :
    length < 99 ? 'ten' :
      length < 999 ? 'hundred' : 'thousand';

  addPrefixClzToElement(wrapper, clzName);
}

function setupWidgets(isMobile, pre, codeWrapper, code) {
  // Reserved for use state pattern
  let showCopyBtn = showWidget(isMobile, this.copyBtn);
  let showToggleBtn = showWidget(isMobile, this.toggleBtn);

  if (showCopyBtn) {
    let btnCopy = createCopyBtn();
    setupBtnCopy(btnCopy, codeWrapper, this.copyBtn.position, code);
  }

  if (showToggleBtn) {
    let btnToggle = createToggleBtn();
    setupToggleButton(btnToggle, codeWrapper, this.toggleBtn.position, pre);
  }
}

function showWidget(isMobile, widgetOptions) {
  if (isMobile && widgetOptions.showOnMobile)
    return true;
  else return !!(!isMobile && widgetOptions.show);
}

function setSoftWrapMode(code) {
  code.classList.add('soft-wrap');
}

function createCopyBtn() {
  const key = 'copyButtonPrototype';
  let proto = getElementPrototype(key);

  if (!proto) {
    proto = createElementWithClz('button', 'copy-btn');
    proto.textContent = 'Copy';
    proto.setAttribute('data-tooltip-text', 'Copy to clipboard');

    setElementPrototype(key, proto);
  }

  return proto.cloneNode(true);
}

function createToggleBtn() {
  return createElementWithClz('div', 'toggle-btn');
}

function setupBtnCopy(btnCopy, codeWrapper, position, code) {
  const copyBtnTouchClz = getPrefixClzName("copy-btn-hover");
  let hintText = 'Copy to clipboard';
  let hover = new HoverMocker(btnCopy, copyBtnTouchClz);
  hover.onStart(restoreHintText);

  codeWrapper.appendChild(btnCopy);
  setWidgetPosition(btnCopy, position);

  let clipboard = new Clipboard(btnCopy, {
    target: function () {
      return code;
    }
  });

  clipboard.on('success', function (e) {
    let btn = e.trigger;
    btn.setAttribute('data-tooltip-text', 'Copied!');
    e.clearSelection();
  });

  clipboard.on('error', function (e) {
    let btn = e.trigger;
    hintText = 'No support ☹️';
    btn.setAttribute('data-tooltip-text', hintText);
  });

  return clipboard;

  function restoreHintText(e) {
    e.target.setAttribute('data-tooltip-text', hintText);
  }
}

function setupToggleButton(btn, codeWrapper, position, pre) {

  btn.addEventListener("click", () => pre.classList.toggle(classPrefix));

  const toggleBtnTouchClz = getPrefixClzName("toggle-btn-hover");

  let hover = new HoverMocker(pre);

  hover.onStart(() => {
    btn.classList.add(toggleBtnTouchClz)
  });

  hover.onEnd(() => {
    btn.classList.remove(toggleBtnTouchClz)
  });

  codeWrapper.appendChild(btn);
  setWidgetPosition(btn, position);
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

function setWidgetPosition(widget, position) {
  if (position === 'top')
    addPrefixClzToElement(widget, 'top-right-widget');
  else
    addPrefixClzToElement(widget, 'bottom-right-widget');
}


export default new CodeLine();


