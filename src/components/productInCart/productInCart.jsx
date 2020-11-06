import React, { Component } from 'react';
import "./producInCart.css"
import { connect } from "react-redux";
import { removeProductFromCart } from './../../store/actions/actions';

class ProductInCart extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="containerData" >

                    <div>
                            <img className="imagesProductsList" src={"/products/" + this.props.data.product.image} alt=""></img>
                        </div>
                        <div>
                            <h4>{this.props.data.product.title}</h4>
                            <label className="task-title">{this.props.data.product.category}</label>
                        </div>
                        <div>   
                            <label className="task-title">Price:{this.props.data.product.price } </label><br></br>
                            <label className="task-title">Quantity:{this.props.data.quantity } </label>
                        </div>
                        <div>
                            <i className="fa fa-trash" 
                            onClick={this.removeProduct}
                            aria-hidden="true"></i>
                        </div>

                </div>
            </React.Fragment>

         );
    }


    removeProduct = () => {
        //DISPATCH ACTION
        var productToRemove = {
            product: this.props.data.product,
            quant: this.props.data.quantity
        };

        this.props.removeProductFromCart(productToRemove);
    };

}
 
export default connect(null, { removeProductFromCart })(ProductInCart);