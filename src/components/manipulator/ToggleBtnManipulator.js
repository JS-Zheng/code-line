import WidgetManipulator from "./WidgetManipulator";
import HoverMocker from "../../utils/HoverMocker";

class ToggleBtnManipulator extends WidgetManipulator {
}

ToggleBtnManipulator.prototype.setup = function (isMobile, options, toggleBtn, pre, codeWrapper) {
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
  this.setWidgetPosition(isMobile, options, toggleBtn);
};

export default ToggleBtnManipulator;