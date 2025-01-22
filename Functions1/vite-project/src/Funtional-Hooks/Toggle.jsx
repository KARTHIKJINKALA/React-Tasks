import { useState } from "react";

const Toggle = () => {
  // useState must be created at the top of the the return

  const [quote, quoteSet] = useState(true);

 const Handler=()=>{
   if(quote){
    quoteSet(false)
   }
   else{
    quoteSet(true)
   }
 }

  return (
    <>
      <h4>This is Toggle Function</h4>

      <p>{quote ? "Hello world" : ""}</p>

      <button onClick={Handler}>{quote?"hide":"show"}</button>
      {/* <button onClick={Handler}>{quote? "hide":"show"}</button> */}


      {/* <button onClick={showHandler}>{quote ? "Hide" : "Show"}</button> */}
    </>
  );
};
export default Toggle;
