import { useState } from "react"

const Todolist=()=>{

    const initialState=[
        "Success is not final, failure is not fatal: It is the courage to continue that counts.- Winston Churchill",
"Opportunities don't happen. You create them. - Chris Grosser",
"The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
"Your limitation—it's only your imagination. - Anonymous",
"Don't watch the clock; do what it does. Keep going. -Sam Levenson"
    ]

   const [lists,setList] = useState(initialState)

  const listUpdater=(index)=>{
    // setList(lists)
    console.log(index)
  }
    
   

    return(
        <>
        <h5>TODO LIST</h5>
        {
            <ol>
                {initialState.map((values,index)=>{
                    return(
                        <>
                        <li>{values}</li>
                        <button onClick={()=>listUpdater(index)}>Update</button>
                        <button>Delete</button>

                        </>
                    )
                })}
            </ol>
        }
        </>
    )
}
export default Todolist;