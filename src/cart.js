import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Cart extends Component {
  static propTypes = {
    count: PropTypes.number.isRequired
  }

  render() {
    return (
      <div>
        <p>Cart count: {this.props.count}</p>
      </div>

    );
  }
}
