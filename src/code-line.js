import './styles/code-line.scss'
import whenReady from './utils/whenReady'
import DomManager from './utils/DomManager'
import CodeRowFactory from './components/CodeRowFactory'
import CopyButtonFactory from "./components/CopyButtonFactory";
import AbstractWidget from "./components/AbstractWidgetFactory";
import ToggleButtonFactory from "./components/ToggleButtonFactory";

let env = process.env;
console.log(`==== ${env.NAME} ${env.NODE_ENV} v${env.VERSION} ====`);

const classPrefix = 'cljs';
const numClickEventName = '$_' + classPrefix + 'NumClickEvent';
const domManager = new DomManager(classPrefix);
const codeRowFactory = new CodeRowFactory(domManager, numClickEventName);
let copyBtnFactory = null;
let toggleBtnFactory = null;

function CodeLine() {
  const self = this;
  this.options = {};

  let defaultOptions = {
    minLine: 3,
    show: true,
    softWrap: false,
    showOnMobile: false,
    maxMobileWidth: 420,

    // Widgets Options
    copyBtn: {
      show: true,
      position: AbstractWidget.POSITION_BOTTOM,
      showOnMobile: false,
      positionOnMobile: AbstractWidget.POSITION_BOTTOM
    },

    toggleBtn: {
      show: true,
      position: AbstractWidget.POSITION_TOP,
      showOnMobile: true,
      positionOnMobile: AbstractWidget.POSITION_TOP
    }
  };

  this.loadLineNumbers = function (options = {}) {
    setOptions.call(self, defaultOptions, options);

    let codes = document.querySelectorAll("pre > code");
    const deviceWidth = getDeviceWidth();

    // for Performance is faster than Array#forEach:
    for (let i = 0, code; code = codes[i]; i++) {
      const pre = code.parentNode;

      if (code.matches(".nohighlight")) continue;

      let lines = getLines(code);
      if (!lines || lines.length < self.options.minLine) continue;

      let isMobile = deviceWidth <= self.options.maxMobileWidth;
      if ((isMobile && self.options.showOnMobile) || (!isMobile && self.options.show))
        pre.classList.add(classPrefix);

      let codeWrapper = appendCodeWrapper(pre, code);

      splitCodeLayout(code, lines);

      setMaxDigit(codeWrapper, lines.length);

      setupWidgets.call(self, isMobile, pre, codeWrapper, code);

      if (self.options.softWrap)
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
    domManager.clearPrototype();
  };

  this.initOnPageLoad = function (options = {}) {
    let bindOptionsFunction = self.loadLineNumbers.bind(self, options);
    whenReady(bindOptionsFunction);
  }
}

function setOptions(defaultOptions, options) {
  let mergedCopyBtn = Object.assign({}, defaultOptions.copyBtn, options.copyBtn);
  let mergedToggleBtn = Object.assign({}, defaultOptions.toggleBtn, options.toggleBtn);
  Object.assign(this.options, defaultOptions, options, {copyBtn: mergedCopyBtn, toggleBtn: mergedToggleBtn});
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
  let codeWrapper = domManager.createElementWithClz('div', 'wrapper');
  pre.appendChild(codeWrapper);
  codeWrapper.appendChild(code);
  return codeWrapper;
}

function splitCodeLayout(code, lines) {
  const container = domManager.createElementWithClz("div", "container");
  const contentClz = domManager.getPrefixClzName('content');

  for (let i = 0, line, nextLine = lines[0]; (line = nextLine ) || line === ''; i++) {
    nextLine = lines[i + 1];

    const row = codeRowFactory.create();

    if (line !== '') {
      // getElementsByClassName is faster than querySelector
      const codeContent = row.getElementsByClassName(contentClz)[0];
      codeContent.innerHTML = line + (nextLine ? '\n' : '');
    }

    container.appendChild(row);
  }

  code.innerHTML = "";
  code.appendChild(container);
}

function setMaxDigit(wrapper, length) {
  const clzName = length < 9 ? 'one' :
    length < 99 ? 'ten' :
      length < 999 ? 'hundred' : 'thousand';

  domManager.addPrefixClzToElement(wrapper, clzName);
}

function setupWidgets(isMobile, pre, codeWrapper, code) {
  let copyBtnOptions = this.options.copyBtn;
  let toggleBtnOptions = this.options.toggleBtn;

  let showCopyBtn = AbstractWidget.canShowWidget(isMobile, copyBtnOptions);
  let showToggleBtn = AbstractWidget.canShowWidget(isMobile, toggleBtnOptions);

  if (showCopyBtn) {
    if (!copyBtnFactory) copyBtnFactory = new CopyButtonFactory(domManager, isMobile, copyBtnOptions);
    let copyBtn = copyBtnFactory.create();
    copyBtnFactory.setup(copyBtn, codeWrapper, code);
  }

  if (showToggleBtn) {
    if (!toggleBtnFactory) toggleBtnFactory = new ToggleButtonFactory(domManager, isMobile, toggleBtnOptions);
    let toggleBtn = toggleBtnFactory.create();
    toggleBtnFactory.setup(toggleBtn, pre, codeWrapper);
  }
}

function setSoftWrapMode(code) {
  code.classList.add('soft-wrap');
}

export default new CodeLine();


