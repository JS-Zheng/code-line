import AbstractWidgetFactory from "./AbstractWidgetFactory";
import HoverMocker from "../utils/HoverMocker";

class ToggleButtonFactory extends AbstractWidgetFactory {
}

ToggleButtonFactory.prototype.getKey = () => '_ToggleBtn';

ToggleButtonFactory.prototype.createProto = function () {
  return this.domManager.createElementWithClz('div', 'toggle-btn');
};

ToggleButtonFactory.prototype.setup = function (toggleBtn, pre, codeWrapper) {

  toggleBtn.addEventListener("click", () => pre.classList.toggle(this.domManager.classPrefix));

  const toggleBtnTouchClz = this.domManager.getPrefixClzName("toggle-btn-hover");

  let hover = new HoverMocker(pre);

  hover.onStart(() => {
    toggleBtn.classList.add(toggleBtnTouchClz)
  });

  hover.onEnd(() => {
    toggleBtn.classList.remove(toggleBtnTouchClz)
  });

  codeWrapper.appendChild(toggleBtn);
  this.setWidgetPosition(toggleBtn);
};

export default ToggleButtonFactory;