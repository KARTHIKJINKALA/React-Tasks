
import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {


    state={
        count:0
    }

    incre=()=>{
        this.setState({
            count:this.state.count+1
        })
    }

  render() {
    console.log("parent rendering.......")
    return (
      <>
      <div>Counter {this.state.count}</div>
      <button onClick={this.incre}>increment</button>
      <Child/>
            </>
    )
  }
}
