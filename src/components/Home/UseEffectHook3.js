import React, { useState, useEffect } from 'react';

const UseEffectHook3 = () => {
  const [message, setMessage] = useState('Testing sample string in use effect hook 3');

  useEffect(() => {
    console.log('console log triggered by use effect hook 3');

    setTimeout(() => {
      setMessage("After 1 sec new sample string loaded using effect hook 3");
    }, 1000)
  })

  return (<div>
      <h1>UseEffect 3</h1>
      <h2>{message}</h2><p>
     Here <b> useEffect</b> accepts a function as it’s first argument. This function handler will take care of any side effects you like when it gets run.

The function is a callback function after one of the React component lifecycle has been triggered.
      </p><br/>
      <h4>Probelm in this case :</h4>
      <p>The effect got triggered twice.

This behavior is not optimal, because if you have multiple effects or have new prop values being tossed from a parent component, it may trigger the effect multiple times.

This may cause inconsistency, weird side-effects, or freezing your app from an infinite loop. We will solve this problem in useEffectHook 4 </p>
      </div>)
};

export default UseEffectHook3;