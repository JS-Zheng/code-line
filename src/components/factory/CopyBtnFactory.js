import AbstractWidgetFactory from "./AbsWidgetFactory";
import CopyBtnManipulator from "../manipulator/CopyBtnManipulator";

let manipulator = null;

class CopyBtnFactory extends AbstractWidgetFactory {
}

CopyBtnFactory.prototype.getKey = function () {
  return 'CopyBtn';
};

CopyBtnFactory.prototype.createProto = function () {
  let proto = this.domManager.createElementWithClz('button', 'copy-btn');
  proto.textContent = 'Copy';
  proto.setAttribute('data-tooltip-text', 'Copy to clipboard');

  return proto;
};


CopyBtnFactory.prototype.createManipulator = function () {
  if (!manipulator)
    manipulator = new CopyBtnManipulator(this.domManager);
  return manipulator;
};


export default CopyBtnFactory;