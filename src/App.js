import React, { Component } from 'react';
import List from './list';
import Cart from './cart';
import './App.css';

const products = ['ball', 'shovel', 'pineapple']

class App extends Component {
  constructor(){
    super();
    this.state = { products:[] };
    this.addToCart = this.addToCart.bind(this);
    this.emptyCart = this.emptyCart.bind(this);
  }

  addToCart(p) {
    this.setState((oldState) => {
      return {
        products: oldState.products.concat(" " + p)
      }
    });
  }

  emptyCart(){
    this.setState(() => {
      return {
        products: []
      }
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.products}
      <Cart count={this.state.products.length}/>
      <br/>
      <button onClick={this.emptyCart}>Delete Cart</button>
      <List products={products}  click={this.addToCart} />
      </div>
    );
  }
}

export default App;
