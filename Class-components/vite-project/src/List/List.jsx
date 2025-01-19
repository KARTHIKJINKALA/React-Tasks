import React, { Component } from "react";
import "./List.css"

 class List extends Component {
   state={
        quotes : [
        "The best way to predict the future is to invent it.  Alan Kay",
        "Do what you can, with what you have, where you are.  Theodore Roosevelt",
        "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
        "Strive not to be a success, but rather to be of value.  Albert Einstein",
        "Don’t watch the clock; do what it does. Keep going.  Sam Levenson",
        "The only way to do great work is to love what you do.  Steve Jobs",
        "Believe you can and you're halfway there.  Theodore Roosevelt",
        "Hardships often prepare ordinary people for an extraordinary destiny.  C.S. Lewis",
        "Success usually comes to those who are too busy to be looking for it.  Henry David Thoreau",
        "Your time is limited, so do not waste it living someone else's life.  Steve Jobs"
      ]
   }


   listHandler=()=>{
    this.setState({
        quotes:[...this.state.quotes,"Opportunities don't happen. You create them. Chris Grosser",
  "It does not matter how slowly you go as long as you do not stop. Confucius",
  "Dont be afraid to give up the good to go for the great.  John D. Rockefeller",
  "The future belongs to those who believe in the beauty of their dreams.  Eleanor Roosevelt",
  "Success is walking from failure to failure with no loss of enthusiasm.  Winston Churchill"]
    })
   }

   updateline=(index)=>{
    //  alert("Hello this is the update button")
    // console.log(index)
    var upd=this.state.quotes
    // var inp=prompt("Enter something")
    upd[index]="hello world quote"+index
    // console.log(upd)

    this.setState({
       quotes:upd
    })
    
   }
   deleteline=(index)=>{
    // alert("Hello this is the delete button")
    // console.log(index)
    var del=this.state.quotes
    console.log(del)

    var out=del.filter((i,ind)=>{
        return(
            index!==ind
        )
    })
    console.log(out)

    this.setState({
        quotes:out
    })

    
   }
      
    render(){
        return(
            <>
            <h1>TO-DO LIST</h1>
            <div className="lines">
                <ol>
                    {
                        this.state.quotes.map((values,index)=>(
                            <>
                            <li>{values}</li>
                            <div className="buttons">
                            <button onClick={()=>this.updateline(index)}>update</button>
                            <button onClick={()=>this.deleteline(index)}>delete</button>
                            </div>
                            </>
                        ))
                    }
                </ol>
                <button onClick={this.listHandler}>Add More</button>
            </div>

            </>

           

          
           
        )
    }
}

export default List;