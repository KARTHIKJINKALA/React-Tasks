import React, { Component } from "react";
import Button from "../../Buttoncomponent/Buttoncomponent";

export default class Todo extends Component {
  state = {
    todos: [
      "wake up at 6pm in the moring ",
      "eat breakfast at 6pm ",
      "sleep after 6pm ",
    ],
  };

  todoHandler = () => {
    // console.log("this is todo ")

    this.setState({
      todos: [
        ...this.state.todos,
        "attend online at  classes 10am",
        "see the instagram reels after the 11pm",
      ],
    });
  };

  UpdateHandler = (index) => {
    // console.log(index, this.state.todos)
    var newtodos = this.state.todos;
    console.log(newtodos);

    if (index == 0) {
      newtodos[index] = "wake up at 7pm in the morning";
    }
    if (index == 1) {
      newtodos[index] = "eat breakfast at 7pm";
    }
    if (index == 2) {
      newtodos[index] = "sleep after 7pm ";
    }

    this.setState({
      todos: newtodos,
    });
  };

  DeleteHandler = (index) => {
    var newArr=this.state.todos
    // console.log(newArr)

    var Out=newArr.filter((value,i)=> index!==i)
    console.log(Out)



    this.setState({
      todos: Out,
    });
    console.log("hello",index)
  };

  render() {
    return (
      <>
        <h1>This is the list of todos</h1>

        <ol>
          {this.state.todos.map((eachtodo, index) => {
            return (
              <>
                <li>{eachtodo}</li>
                <button onClick={() => this.UpdateHandler(index)}>
                  Update
                </button>
                <button onClick={() => this.DeleteHandler(index)}>
                  Delete
                </button>
              </>
            );
          })}
        </ol>

        {/*  by suing the props and functional component*/}
        {/* <Button text={"Add Todo"} bgColor={"orange"} color={"white"}  onPress={this.todoHandler} /> */}

        {/* this is directly we are using the onClick method */}
        <button onClick={this.todoHandler}>Add Todo</button>
      </>
    );
  }
}
