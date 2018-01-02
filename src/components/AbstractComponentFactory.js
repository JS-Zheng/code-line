import {abstractMethod} from "../utils/AbstractMethod";

class AbstractComponentFactory {
  constructor(domManager) {
    this.domManager = domManager;
  }
}

AbstractComponentFactory.prototype.create = function (deep = true) {
  const key = this.getKey();
  let proto = this.domManager.getElementPrototype(key);

  if (!proto) {
    proto = this.createProto();
    this.domManager.setElementPrototype(key, proto);
  }

  return proto.cloneNode(deep);
};

AbstractComponentFactory.prototype.getKey = abstractMethod;

AbstractComponentFactory.prototype.createProto = abstractMethod;

export default AbstractComponentFactory;