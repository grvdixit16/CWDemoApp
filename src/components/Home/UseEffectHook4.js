import React, { useState, useEffect } from 'react';

const UseEffectHook4 = () => {
  const [message, setMessage] = useState('Testing sample string in use effect hook 4');

  useEffect(() => {
    console.log('console log triggered by use effect hook 4');

    setTimeout(() => {
      setMessage("After 1 sec new sample string loaded using effect hook 4");
    }, 1000)
  }, []);

  return (<div>
      <h1>{message}</h1>
      <p>Here, goal now is to execute the setMessage function only on the componentDidMount lifecycle.That way if the App component receives any new props or if the state changes, the effect won’t be triggered again.<br />
      By running an empty array [] as a second argument, you’re letting React know that your useEffect function doesn’t depend on any values from props or state.

This will help you avoid the componentDidUpdate lifecycle.
          </p>
      </div>
  )
};

export default UseEffectHook4;