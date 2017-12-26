import numberIcon from './img/numbered-list.svg'
import './styles/code-line.css'
import whenReady from './whenReady'

export default (() => {

  const classPrefix = 'cljs';

  function LineNumbers() {
    const self = this;
    this.lineHeight = 1.3;
    this.softWrap = false;
    this.showToggleBtn = true;
    this.disableOnMobile = true;
    this.maxMobileWidth = 420;

    this.loadLineNumbers = function () {
      const codes = document.querySelectorAll("pre code");

      [].forEach.call(codes, code => {

        if (code.parentNode.matches(".nohighlight") || code.matches(".nohighlight")) return;

        let lines = getLines(code);
        if (!lines || lines.length < 3) return;

        checkPositionOfPre(code.parentNode);

        checkLineHeight(self.lineHeight, code);

        splitCodeLayout(code, lines);

        setLineNumbersClz(self.maxMobileWidth, self.disableOnMobile, code);

        if (self.showToggleBtn)
          showToggleButton(self.showToggleBtn, code);

        setWrapClz(self.softWrap, code);
      });
    };

    this.initOnPageLoad = function () {
      whenReady(this.loadLineNumbers);
    }
  }

  return new LineNumbers();

  function checkPositionOfPre(pre) {
    if (!pre) return;

    let originalPosition = pre.style.position;
    if (!originalPosition)
      originalPosition = window.getComputedStyle(pre).getPropertyValue("position");

    if (!originalPosition || /^static$/i.test(originalPosition))
      pre.style.position = "relative";
  }

  function checkLineHeight(lineHeight, code) {
    const customLineHeight = code.style.lineHeight;

    if (!customLineHeight || 0 === customLineHeight.length) {
      code.style.lineHeight = lineHeight;
    }
  }

  function splitCodeLayout(code, lines) {
    const fragment = document.createDocumentFragment();
    const linesLength = lines.length;

    [].forEach.call(lines, line => {

      const row = buildElement("div", "row");
      const num = buildElement("div", "number");
      const codeContent = buildElement("div", "content");
      codeContent.innerHTML = line + "\n";

      setCodeLength(linesLength, code);

      row.appendChild(num);
      row.appendChild(codeContent);
      fragment.appendChild(row);
    });

    code.innerHTML = "";
    code.appendChild(fragment);
  }


  function setLineNumbersClz(mobileWidth, disableMobile, code) {
    if (getDeviceWidth() > mobileWidth || !disableMobile)
      code.parentNode.classList.add(classPrefix);
  }

  function showToggleButton(showBtn, code) {
    if (!showBtn) return;

    const pre = code.parentNode;
    if (!pre) return;

    const div = document.createElement("div");
    addPrefixClzToElement(div, "toggle-btn");
    div.addEventListener("click", () => pre.classList.toggle(classPrefix));

    const toggleBtnTouchClz = getPrefixClzName("toggle-btn-touch");
    let counter = 2;
    let intervalId;
    pre.addEventListener("touchend", () => {
      if (intervalId) return;

      intervalId = setInterval(() => {
        if (--counter <= 0) {
          div.classList.remove(toggleBtnTouchClz);
          clearInterval(intervalId);
          intervalId = null;
        }
      }, 1000);
    });

    pre.addEventListener("touchstart", () => {
      counter = 2;

      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }

      div.classList.add(toggleBtnTouchClz);
    });

    pre.appendChild(div);
  }

  function setWrapClz(wrap, code) {
    if (!code.classList.contains("soft-wrap")
      && !code.classList.contains("soft-wrap"))
      code.classList.add(wrap ? "soft-wrap" : "hard-wrap");
  }

  function getDeviceWidth() {
    return window.innerWidth > 0 ? window.innerWidth : screen.width;
  }


  function getLines(code) {
    const text = code.innerHTML;
    return 0 === text.length ? [] : text.split(/\r?\n|\r/g);
  }

  function getPrefixClzName(name) {
    return classPrefix + "-" + name;
  }

  function buildElement(type, clzName, noPrefix = false) {
    const el = document.createElement(type);
    if (clzName) {
      clzName = noPrefix ? clzName : getPrefixClzName(clzName);
      el.classList.add(clzName);
    }
    return el;
  }

  function addPrefixClzToElement(el, clzName) {
    el.classList.add(getPrefixClzName(clzName));
  }

  function setCodeLength(length, code) {
    if (length > 999)
      addPrefixClzToElement(code, "over-thousand");
    else if (length > 99)
      addPrefixClzToElement(code, "over-hundred");
    else
      addPrefixClzToElement(code, "under-hundred");
  }

})();
