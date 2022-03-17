# User Idle / Session Timeout Detector - React Hook

 
## Installation

```
npm install use-bn-idle
```

## How to detect User Idleness/Session Timeout in React

  Import the `useBnIdle` hook in your component. It returns two functions, `startTimer` and `stopTimer`. 

The `startTimer` function is used to start the user idle detection based on seconds that we pass as an argument

The `stopTimer` function is used to stop the user idle detection (manually). 

The `expired` callback function as a parameter for the `useBnIdle` hook gets triggered if the user is inactive for a certain period of time that we specified in `startTimer` function.

```javascript
    const [startTimer, stopTimer] = useBnIdle(() => {
      //Will execute if the user is idle for a certain period of time.
      //You can write logic like showing popup or log out the user.
      console.log('Expired: Session Timeout');
    })
    
    useEffect(() => {
      // start the user idle detection
      startTimer(60); //passed 60 seconds as argument.
    })
```

### Return Values from the hook
|Return Values|Type  |Description
|--|--|--|
|`startTimer(timeoutInSeconds)`  |Function  | Used to start the user idle detection. It accepts seconds as a parameter.
| `stopTimer()` | Function | Used to stop the user idle detection.

### Input parameters for the hook
|Parameters|Type  |Description
|--|--|--|
|expired  |function  |A callback function that executes if the user is idle for a specified time that we mentioned in `startTimer`.|



### Restart the user idle detection.
If the user is idle for a certain period of time based on the parameter `timeoutInSeconds` of `startTimer` function, then the `expired` function gets invoked and then the user idle detection will stop automatically. 

In order to restart the user idle detection, you should invoke the `startTimer(timoutInSeconds)` function again.

