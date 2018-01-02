import AbstractWidgetFactory from "./AbstractWidgetFactory";
import HoverMocker from "../utils/HoverMocker";
import Clipboard from 'clipboard'

class CopyButtonFactory extends AbstractWidgetFactory {
}

CopyButtonFactory.prototype.getKey = () => '_CopyBtn';

CopyButtonFactory.prototype.createProto = function () {
  let proto = this.domManager.createElementWithClz('button', 'copy-btn');
  proto.textContent = 'Copy';
  proto.setAttribute('data-tooltip-text', 'Copy to clipboard');

  return proto;
};

CopyButtonFactory.prototype.setup = function (copyBtn, codeWrapper, code) {
  let hintText = 'Copy to clipboard';
  let hover = new HoverMocker(copyBtn, this.domManager.getPrefixClzName("copy-btn-hover"));
  hover.onStart(restoreHintText);

  codeWrapper.appendChild(copyBtn);
  this.setWidgetPosition(copyBtn);

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

export default CopyButtonFactory;