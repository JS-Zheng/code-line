import AbstractComponent from "./AbsComponentFactory";

class CodeRowFactory extends AbstractComponent {
  constructor(prototypeManager, numEventName) {
    super(prototypeManager);
    this.numEventName = numEventName;
  }
}

CodeRowFactory.prototype.getKey = function () {
  return 'CodeRow'
};

CodeRowFactory.prototype.createProto = function () {
  let proto = this.domManager.createElementWithClz('div', 'row');
  const num = this.domManager.createElementWithClz('div', 'number');
  const codeContent = this.domManager.createElementWithClz("div", "content");
  codeContent.innerHTML = '\n'; // Prepare for empty content
  num.setAttribute('onclick', `${this.numEventName}(event)`);
  proto.appendChild(num);
  proto.appendChild(codeContent);

  return proto;
};

export default CodeRowFactory;