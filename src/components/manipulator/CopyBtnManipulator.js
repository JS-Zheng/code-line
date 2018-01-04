import WidgetManipulator from "./WidgetManipulator";
import HoverMocker from "../../utils/HoverMocker";
import Clipboard from 'clipboard'

class CopyBtnManipulator extends WidgetManipulator {
}

CopyBtnManipulator.prototype.setup = function (isMobile, options, copyBtn, pre, codeWrapper, code) {
  let hintText = 'Copy to clipboard';
  let hover = new HoverMocker(copyBtn, this.domManager.getPrefixClzName("copy-btn-hover"));
  hover.onStart(restoreHintText);

  codeWrapper.appendChild(copyBtn);
  this.setWidgetPosition(isMobile, options, copyBtn);

  let clipboard = new Clipboard(copyBtn, {
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
};

export default CopyBtnManipulator;