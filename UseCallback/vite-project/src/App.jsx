import React, { useCallback, useState } from 'react'
import { Child } from './Usecallback/UseCallback'

 const App = () => {
  const [count, setCount] = useState(0)
  const [count1,setCount1]= useState(5)

const increment=()=>{
  console.log("This is useCallback")
  setCount(count+1)
}

  return (
    <>
    <h1>{count}</h1>
    <h1>{count1}</h1>
     <Child incre={increment}/>
    <button onClick={()=> setCount1((count1)=> count1+1)}> parent+</button>
   
    
    </>
    
  )
}
export default App;
