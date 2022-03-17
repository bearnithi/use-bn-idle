import { useEffect } from "react";
export const useBnIdle = (expired: any) => {
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
  let intervalID: any;
  let isStarted = false;

  useEffect(() => {
    return () => {
      stopTimer();
    };
  }, []);

  const restartTimer = (e: any) => {
    if (!isStarted) {
      return;
    }
    clearInterval(intervalID);
    runTimer();
  };

  const startTimer = (timeOutInSeconds: number) => {
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
      expired();
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
};
