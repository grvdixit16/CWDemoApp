import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Flavio')
  
    useEffect(() => {
      console.log(`Hi ${name} you clicked ${count} times`)
    },
    [name, count])
  
    return (
      <div>
        <h1>UseEffect 1</h1>
        <p>
          Hi {name} you clicked {count} times
        </p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
        <button onClick={() => setName(name === 'Test1' ? 'Test1' : 'Test2')}>
          Change name
        </button>
      </div>
    )
  }
export default UseEffectHook;
