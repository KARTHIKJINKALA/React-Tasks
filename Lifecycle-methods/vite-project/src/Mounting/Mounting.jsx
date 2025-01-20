import React, { Component } from 'react'

export default class Mounting extends Component {

    constructor(){
        super();

        this.state={
            count:5,
            favColor:"green"
        }

   
    }

    componentDidMount(){
        console.log("componentdidmount is executing")
        // document.title=`React count ${this.state.count}`
       
    }
    

    //  getDerivedStateFromProps is the rarely used method and this accepts state and props
    // This is the only method we can set the state without using the this
    static getDerivedStateFromProps(props,state){
        console.log(" getDerivedStateFromProps")

        // console.log(state)
    // This is the only method we can set the state without using the this
        return { favColor:props.color}

    }

    componentDidUpdate(){
        document.title=`React count ${this.state.count}`
    }

    shouldComponentUpdate(){
        return true
    }



    // this is used to get previous values of state and props
    // by default it is null   
    getSnapshotBeforeUpdate(state,props){
        console.log(state,props)
        return null;

    }



    increaseCount=()=>{
        this.setState({
            count:this.state.count+1
          
        })
        // console.log("Hello")
    }

    decreaseCount=()=>{
        this.setState({
            count:this.state.count-1
          
        })
        // console.log("Hello")
    }


  render() {

    console.log("render is executing")
    return (
        <>
      <div>This is Mounting</div>

      <h2>My favorite color is {this.state.favColor} {this.state.count}</h2>

      <button onClick={this.increaseCount}>Increase </button>

      {/* <button onClick={this.decreaseCount}>Decrease {this.state.count}</button> */}

      </>
    )
  }
}
