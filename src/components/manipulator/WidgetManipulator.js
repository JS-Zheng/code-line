class WidgetManipulator {
  constructor(domManager) {
    this.domManager = domManager;
  }

  static canShowWidget(isMobile, options) {
    if (isMobile && options.showOnMobile)
      return true;
    else return !!(!isMobile && options.show);
  };
}

WidgetManipulator.prototype.setWidgetPosition = function (isMobile, options, el) {
  if ((isMobile && options.positionOnMobile === 'top')
    || (!isMobile && options.position === 'top')) {
    this.domManager.addPrefixClzToElement(el, 'top-right-widget');
  } else {
    this.domManager.addPrefixClzToElement(el, 'bottom-right-widget');
  }
};


export default WidgetManipulator;