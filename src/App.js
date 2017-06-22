import React, { Component } from 'react';
import List from "./list"
import Cart from './cart';
import './App.css';

const api = "http://localhost:56523/products/"

class App extends Component {
  constructor(){
    super();
    this.state = { cart:[],
                  products: []};
    this.addToCart = this.addToCart.bind(this);
    this.emptyCart = this.emptyCart.bind(this);
  }

componentDidMount() {
  fetch(api).then((response)=>{
    if(response.ok){
      response.json().then(data =>{
        this.setState({
          products: data
        })
      })
    }
  })
}

  addToCart(p) {
    this.setState((oldState) => {
      return {
        cart: oldState.cart.concat(p)
      }
    });
  }

  emptyCart(){
    this.setState({
        cart: []
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.cart.map((p)=>{
          return p.name;
        })}
      <Cart count={this.state.cart.length}/>
      <br/>
      <button onClick={this.emptyCart}>Delete Cart</button>
      <List products={this.state.products}  click={this.addToCart} />
      </div>
    );
  }
}

export default App;
