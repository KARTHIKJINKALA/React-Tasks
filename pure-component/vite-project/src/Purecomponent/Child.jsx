import React, { Component, PureComponent } from 'react'

export default class Child extends PureComponent {
  render() {
    console.log("child is rendering")
    return (
      <div>Child</div>
    )
  }
}
