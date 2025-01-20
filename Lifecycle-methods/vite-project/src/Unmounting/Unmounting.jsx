

import React, { Component } from 'react'
import Child from './Child'

export default class Unmounting extends Component {
   state={
    isChildvisible:true,
   }

   change=()=>{
    // console.log("hello world")
    this.setState({
        isChildvisible:!this.state.isChildvisible,

    })
   }
//    change1=()=>{
//     // console.log("hello world")
//     this.setState({
//         isChildvisible:!this.state.isChildvisible,

//     })
//    }

componentWillUnmount(){
    console.log("removed")
}


  render() {
    return (
        <>
      <h1>Unmounting</h1>

      <button onClick={this.change}>Hide</button>
     


     {
        this.state.isChildvisible?( <Child/>):(
            <></>
        )
     }
      </>
    )
  }
}
