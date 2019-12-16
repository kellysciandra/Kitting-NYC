import React, { Component } from 'react'
import util from '../util.js';

export default class Products extends Component {
    render() { console.log(this.props.products)
        const productItems = this.props.products.map( product => 
            <div className="col-md-4">
               <div className="thumbnail text-center">
                  <a href={`#${product.id}`} onClick={(e) => this.props.handleAddToCard(e, product)}>
                    <img src={`/products/${product.sku}_2.jpg`} alt={product.title} />
                    <p>
                        {product.title}
                    </p>
                </a>
                <b>{util.formatCurrency(product.price)}</b>
                <button className = "btn btn-primary" onClick={(e) => this.props.handleAddToCard(e, product)}>
                    Add to Cart
                </button>
            </div>
        </div>
          
        )
        return (
            <div className="row">
                {productItems}
            </div>
        )
    }
}