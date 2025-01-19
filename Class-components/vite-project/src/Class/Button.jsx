import { Component } from "react";
import React from "react";

import Image from "../Image/Image";

export default class ButtonComponent extends Component{
    state={
        text1:"subscribe",
        text2:"subscribed",
        isSubscribe:false
    }

    subscribeHandler=()=>{

        console.log("button clicked")


        this.setState({
            isSubscribe:!this.state.isSubscribe
        })

    }

    render(){
        return(
            
           
            <React.Fragment>
            <button onClick={this.subscribeHandler}>{this.state.isSubscribe?this.state.text2: this.state.text1}</button>
            
            {
                this.state.isSubscribe?<>
               
                <h1>hello welcome ! you are subscribed you can access the page</h1>
                <Image/>

                </>:

                <>
                <h1>Please subscribe to the page</h1>

                </>
                
            }

            </React.Fragment>
        )
    }

}
