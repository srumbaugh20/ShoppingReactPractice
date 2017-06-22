import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class List extends Component {
  static propTypes = {
    click: PropTypes.func.isRequired,
    products: PropTypes.array.isRequired
  }
  render() {
    return (
      <ul>
        {this.props.products.map((p)=>{
          return <li key={p.id} onClick={()=>this.props.click(p)}>{p.name}</li>
        })}
      </ul>

    );
  }
}
