import WidgetManipulator from "./WidgetManipulator";
import HoverMocker from "../../utils/HoverMocker";

class ToggleBtnManipulator extends WidgetManipulator {
}

ToggleBtnManipulator.prototype.setup = function (isMobile, options, toggleBtn, pre, codeWrapper) {
  toggleBtn.addEventListener("click", () => pre.classList.toggle(this.domManager.classPrefix));

  const toggleBtnHoverClz = this.domManager.getPrefixClzName("toggle-btn-hover");
  const toggleBtnShowClz = this.domManager.getPrefixClzName("toggle-btn-show");

  // setup btn
  let toggleBtnHover = new HoverMocker(toggleBtn, toggleBtnHoverClz);

  // setup pre
  let preHover = new HoverMocker(pre);

  preHover.onStart(() => {
    toggleBtn.classList.add(toggleBtnShowClz)
  });

  preHover.onEnd(() => {
    toggleBtn.classList.remove(toggleBtnShowClz)
  });

  codeWrapper.appendChild(toggleBtn);
  this.setWidgetPosition(isMobile, options, toggleBtn);
};

export default ToggleBtnManipulator;