import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Products from './components/Products'
// import { render } from '@testing-library/react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
      filteredProducts: [],
    }
  }

  componentWillMount(){
    const myHeaders = new Headers({
      "Content-Type": "application/json",
      Accept: "application/json"
    })
    fetch("http://localhost:3000/db.json", {
      headers: myHeaders,
    })
    .then(res => res.json())
    .then(data => this.setState (
      { 
        products: data.products,
       
      }
    ))
  }


  render()  { 
  return (
    <div className="container">
    <h1>KittingNYC</h1>
    <hr/>
    <div  className="container">
      <div className="row">
        <div className="col-md-8">
          <Products products={this.state.products} handleAddToCart={this.handleAddToCart}/>
        </div>
        <div className="col-md-4">

        </div>
      </div>
    </div>
    
    </div>
    );
  }
}

export default App;
