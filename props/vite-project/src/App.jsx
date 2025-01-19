import "./App.css"


import { Image } from "./Image/Image";
import Data from "./Data/Data";


const App=()=>{

  var obj={
    name:"karthik",
    city:"Hyderbad",
    salary:"30000"
}
  

 
  return(
    <>
    {/* <Image
     src="https://images.pexels.com/photos/28976027/pexels-photo-28976027/free-photo-of-elegant-haussmann-style-building-in-toulouse.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
         alt="lin laying"
         width={10}
         height={10}

    /> */}


<Data  user={obj}/>

    </>
  )
}

export default App;