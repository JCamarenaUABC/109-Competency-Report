import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuantityPicker from '../quantityPicker/quantityPicker';
import {addProductToCart} from '../../store/actions/actions';


//import './product.css';
class Product extends Component {
    state = {
         quantity:1, 
    }

    render() { 
        return ( 
            <div className="product">
                <img className="imagesProducts" src={"/products/" + this.props.data.image} alt=""></img>
                    <h4>{this.props.data.title}</h4>
                    
                    <div className="prices">
                        <h5>Total: ${this.getTotal()}</h5><br></br>
                        <h6>Price: ${this.props.data.price}</h6>
                    </div>

                    <div className="controls">
                        <QuantityPicker
                        //minimum={this.props.data.minimum || 1}
                        minimum={this.props.data.minimum || 1}
                        onValueChange={(qnty)=> this.handleQuantityChange(qnty)}>
                        </QuantityPicker>
                        <button onClick={this.addButtonClicked} className="btn btn-sm btn-info">Add</button>                   
                    </div>
            </div>

         );
    };

    getTotal = () => {
        let total = this.props.data.price * this.state.quantity;
        return total.toFixed(2);
    };


    handleQuantityChange=(quantity) => {
        console.log("Qnty changed", quantity);
        this.setState({quantity: quantity});

    };

    addButtonClicked=() => {
        console.log("Se cliqueo Added button!!!");
        
        const addedProduct = {
            product: this.props.data,
            quantity: this.state.quantity
        };

        this.props.addProductToCart(addedProduct);
    };

}
 


export default connect(null, {addProductToCart})(Product);