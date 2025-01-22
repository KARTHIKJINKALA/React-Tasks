import { useState } from "react"
import React from "react"

const Todolist=()=>{

    const initialState=[
        {
        id:1,
        period:"morning",
        routine:["wake up at 8 am","breakfast at 9am","class at 10am"]

    },
    {
        id:2,
        period:"afternoon",
        routine:["lunch at 1pm","break at 4pm","class at 2am"]

    }
]






    const [todos,setTodos] =useState(initialState)



const addNewtodo=()=>{
    const dummyTodo=

        {
            id:3,
            period:"evening",
            routine:["snacks at 5pm","instagram at 6pm","whatsapp at 7pm to 9pm"]
    
        }
 

        const dummyIncluded=todos.find((eachTodos)=> {
            return(   eachTodos.id==dummyTodo.id)
        }
        )

    
        const updatedTodos=[...todos,dummyTodo]

    if(!dummyIncluded){
        setTodos(updatedTodos)
    }
    
}

const removeroutine=(each)=>{
    const id=each.id
    
    const res=todos.filter((data)=>{
        return(
            data.id!==id
        )
    })

    setTodos(res)
}

const remove=()=>{
    // alert("hello")
    setTodos([])
}

// const removeall=()=>{
//     console.log("hello")
//     setTodos("no data available")
// }



    return(
        <>
       
        <h5>TODO LIST</h5>
        {
            todos.map((each,index)=>{
                return(
                    <React.Fragment key={index}>
                    <h3 >{each.period}</h3>
                    {/* <button onClick={removeall}>Remove All</button> */}
                    <button onClick={()=>removeroutine(each)}>Remove routine</button>


                    {
                        each.routine.map((value,index)=>{
                            return(
                                <>
                                <div className="out" style={{
                                    border:"1px solid red"
                                }}>
                                <h5 key={index}>{value}</h5>
                                </div>
                                </>
                            )
                        })
                    }
                    </React.Fragment>
                )
            })
        }
        
        <button onClick={addNewtodo}>Add New</button>
        <button onClick={remove}>Remove All</button>

        </>
    )
}
export default Todolist;