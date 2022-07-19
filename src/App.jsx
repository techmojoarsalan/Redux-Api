import React, { useContext } from 'react'
import { CounterContext } from './Context'

function App() {
    const {state, dispatch}   = useContext(CounterContext)

  return (
    <>
    <h1>Counter with Context and Reducer</h1>
    <h3> Count : {state}</h3>
    <button onClick={()=>dispatch({type : "inc"})}>increment</button>
    <button onClick={()=>dispatch({type : "dec"})}>decrement</button>
    <button onClick={()=>dispatch({type : "rest"})}>Rest</button>


    
   
    </>
  )
}

export default App