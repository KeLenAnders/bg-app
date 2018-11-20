import React, { Component } from "react";

export default class MsgElement extends Component {
  render() {
    return (
      <div >
        <p >Message: {this.props.msg}</p>
      </div>
    );
  }
}
