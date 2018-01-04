import AbstractWidgetFactory from "./AbsWidgetFactory";
import ToggleBtnManipulator from "../manipulator/ToggleBtnManipulator";

let manipulator = null;

class ToggleBtnFactory extends AbstractWidgetFactory {
}

ToggleBtnFactory.prototype.getKey = function () {
  return 'ToggleBtn';
};

ToggleBtnFactory.prototype.createProto = function () {
  return this.domManager.createElementWithClz('div', 'toggle-btn');
};


ToggleBtnFactory.prototype.createManipulator = function () {
  if (!manipulator)
    manipulator = new ToggleBtnManipulator(this.domManager);
  return manipulator;
};

export default ToggleBtnFactory;