function DomManager(prefix) {
  this.elementProto = {};
  this.classPrefix = prefix;
}

DomManager.prototype = {
  constructor: DomManager,

  getElementPrototype: function (key, isComponent = false) {
    return this.elementProto[isComponent + key];
  },
  setElementPrototype: function (key, element, isComponent = false) {
    this.elementProto[isComponent + key] = element;
  },
  clearPrototype: function () {
    this.elementProto = null;
  },
  createElementWithClz: function (type, clzName = null, noPrefix = false) {
    const key = '' + type + clzName + noPrefix;
    let proto = this.getElementPrototype(key);

    if (!proto) {
      proto = this.createElement(type);
      if (clzName) {
        clzName = noPrefix ? clzName : this.getPrefixClzName(clzName);
        proto.classList.add(clzName);
      }
      this.setElementPrototype(key, proto);
    }


    return proto.cloneNode(false);
  },
  createElement: function (type) {
    let proto = this.getElementPrototype(type);

    if (!proto) {
      proto = document.createElement(type);
      this.setElementPrototype(type, proto);
    }

    return proto.cloneNode(false);
  },
  getPrefixClzName: function (name) {
    return this.classPrefix + "-" + name;
  },
  addPrefixClzToElement: function (el, clzName) {
    el.classList.add(this.getPrefixClzName(clzName));
  }
};

export default DomManager;