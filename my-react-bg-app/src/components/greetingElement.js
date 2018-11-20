import React, { Component } from "react";
import PropTypes from 'prop-types';
//https://www.npmjs.com/package/prop-types
export default class GreetingElement extends Component {
  render() {
    return (
        <div>
        Hello {this.props.firstName} {this.props.lastName}!
      </div>
    );
  }
}
GreetingElement.propTypes = {
    // You can declare that a prop is a specific JS primitive. By default, these
    // are all optional.
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired
  }