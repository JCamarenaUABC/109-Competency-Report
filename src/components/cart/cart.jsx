import React, { Component } from 'react';
import {connect} from "react-redux";
//import { incrementCartCounter } from "../../store/reducers/cartCounters";
import { incrementCartCounter } from "../../store/actions/actions";
import ProductInCart from './../productInCart/productInCart';


class Cart extends Component {
    //state = {  }
    render() { 
        return (
            <div>
                <h1>List in the Cart</h1><hr></hr>
                {this.props.cart.map(p => <ProductInCart data={p} key={p.product.id}></ProductInCart>)}
            </div>
          );
    }

    Myfunction = () => {
        console.log("terminal");
        this.props.incrementCartCounter(); 
    };
}

const mapStoreToProps = (state) => {
    return{
        cart: state.cart
    }
};
 
export default connect(mapStoreToProps, { incrementCartCounter })(Cart);



