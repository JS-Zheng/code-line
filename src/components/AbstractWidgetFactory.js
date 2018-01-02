import AbstractComponentFactory from "./AbstractComponentFactory";
import {abstractMethod} from "../utils/AbstractMethod";

class AbstractWidgetFactory extends AbstractComponentFactory {
  constructor(domManager, isMobile, options) {
    super(domManager);
    this.isMobile = isMobile;
    this.options = options;
  }

  static canShowWidget(isMobile, options) {
    if (isMobile && options.showOnMobile)
      return true;
    else return !!(!isMobile && options.show);
  }
}

AbstractWidgetFactory.POSITION_TOP = 'top';
AbstractWidgetFactory.POSITION_BOTTOM = 'bottom';

AbstractWidgetFactory.prototype.setup = abstractMethod;

AbstractWidgetFactory.prototype.setWidgetPosition = function (el) {
  if ((this.isMobile && this.options.positionOnMobile === AbstractWidgetFactory.POSITION_TOP)
    || (!this.isMobile && this.options.position === AbstractWidgetFactory.POSITION_TOP)) {
    this.domManager.addPrefixClzToElement(el, 'top-right-widget');
  } else {
    this.domManager.addPrefixClzToElement(el, 'bottom-right-widget');
  }
};

export default AbstractWidgetFactory;