import { useEffect } from "react";
export default function useBnIdle(expired) {
  const documentEvents = [
    "mousemove",
    "click",
    "mousedown",
    "keypress",
    "DOMMouseScroll",
    "mousewheel",
    "touchmove",
    "MSPointerMove",
  ];
  const windowEvents = ["mousemove", "resize"];
  let timeOutInMilliSeconds = 0;
  let intervalID;
  let isStarted = false;

  useEffect(() => {
    return () => {
        stopTimer();
    };
  }, []);

  const restartTimer = (e) => {
    if (!isStarted) {
      return;
    }
    clearInterval(intervalID);
    runTimer();
  };

  const startTimer = (timeOutInSeconds) => {
    isStarted = true;
    timeOutInMilliSeconds = timeOutInSeconds * 1000;
    for (let e of documentEvents) {
      document.addEventListener(e, restartTimer);
    }

    for (let e of windowEvents) {
      window.addEventListener(e, restartTimer);
    }
    runTimer();
  };

  const runTimer = () => {
    intervalID = setInterval(() => {
      expired(true);
      stopTimer();
    }, timeOutInMilliSeconds);
  };

  const stopTimer = () => {
    isStarted = false;
    clearInterval(intervalID);
    removeListeners();
  };

  const removeListeners = () => {
    for (let e of documentEvents) {
      document.removeEventListener(e, restartTimer);
    }

    for (let e of windowEvents) {
      window.removeEventListener(e, restartTimer);
    }
  };

  return [startTimer, stopTimer];
}
