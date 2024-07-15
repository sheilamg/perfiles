import React from 'react'

export function ButtonCounter({count, onClick, label}){ 
    return (
        <>
          
          {(!(count === undefined ))?(<h1>The count value is: {count}</h1>):<div></div>}
          <button onClick={onClick}>
            {(label === 'decrement')?(<div>Decrement</div>):(<div>Increment</div>)}
          </button>
        </>
    
  )
}
