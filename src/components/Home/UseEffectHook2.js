import React, { useState } from 'react';

const UserEffectHook2 = () => {
  const [message, setMessage] = useState('TTesting sample string in use effect hook 3');

  return (<div>
     <h1>UseEffect 2</h1>
    <h2>{message}</h2><p>
    In the code example above, I’m using React useState to save a message.

I’m then grabbing my state variable, message, and I’m printing it to the screen.
  </p></div>)
};

export default UserEffectHook2;