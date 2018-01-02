export default function HoverMocker(elements, clzName, mouseLeaveTime = 0, touchLeaveTime = 1000) {
  const self = this;
  this.startCall = null;
  this.endCall = null;

  let startEvent = function (e) {
    let target = e.target;

    // Prevent for re-enter
    if (target.intervalId) {
      clearInterval(target.intervalId);
      target.intervalId = null;
    }

    if (clzName)
      target.classList.add(clzName);

    let callback = self.startCall;
    if (callback) callback(e);
  };

  let endEvent = function (e) {
    let target = e.target;

    if (target.intervalId) return; // already executing endEvent
    // Performance: indexOf > test (Reg) > match
    let cancelTime = e.type.indexOf('m') > -1 ? mouseLeaveTime : touchLeaveTime; // mouse

    target.intervalId = setInterval(() => {
      if (clzName)
        e.target.classList.remove(clzName);

      let callback = self.endCall;
      if (callback) callback(e);

      if (target.intervalId) {
        clearInterval(target.intervalId);
        target.intervalId = null;
      }

    }, cancelTime);
    
  };

  if (isIterable(elements)) {
    for (let i = 0, el; el = elements[i]; i++)
      assignListener(el);
  } else {
    assignListener(elements);
  }

  function assignListener(el) {
    el.addEventListener("touchstart", startEvent);
    el.addEventListener("touchend", endEvent);

    el.addEventListener("mouseenter", startEvent);
    el.addEventListener("mouseleave", endEvent);
  }

  function isIterable(obj) {
    // checks for null and undefined
    if (obj === null) {
      return false;
    }
    return typeof obj[Symbol.iterator] === 'function';
  }

}

HoverMocker.prototype.onStart = function (call) {
  this.startCall = call;
};

HoverMocker.prototype.onEnd = function (call) {
  this.endCall = call;
};

