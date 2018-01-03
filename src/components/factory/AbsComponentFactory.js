import {abstractMethod} from "../../utils/AbstractMethod";

class AbstractComponentFactory {
  constructor(domManager) {
    this.domManager = domManager;
  }
}

AbstractComponentFactory.prototype.create = function (deep = true) {
  let key = this.getKey();

  let proto = this.domManager.getElementPrototype(key, true);

  if (!proto) {
    proto = this.createProto(key);
    this.domManager.setElementPrototype(key, proto, true);
  }

  if (!proto) {
    throw new Error('Component: ' + key + ' is no support ☹️')
  }

  return proto.cloneNode(deep);
};

AbstractComponentFactory.prototype.getKey = abstractMethod;
AbstractComponentFactory.prototype.createProto = abstractMethod;

export default AbstractComponentFactory;