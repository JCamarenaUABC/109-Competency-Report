import React, { Component } from 'react';
//import React from "react";
import "./navBar.css"

import {Link} from "react-router-dom";
import { connect } from "react-redux";

//import NavBar from './navBar';
//import cartCounterReducer from './../../store/reducers/cartCounter';

//class NavBar extends Component {
//  function NavBar() {
class NavBar extends Component {
  render(){
    return(
      
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" >
            <Link className="navbar-brand" to="/"><i className="fa fa-opera green" aria-hidden="true"></i>rganika</Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span> </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/catalog">Catalog </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/todo">TodoList </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/about">About </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="/cart">Carts </Link>
              </li>
            </ul>
            <div className="form-inline my-2 my-lg-0">
                  <Link className="btn btn-outline-info my-2 my-sm-0" to="/cart">
                      <i className="fa fa-shopping-cart cart-icon" aria-hidden="true"></i>
                      {this.props.test}
                      <span className="badge badge-primary cart-badge">
                      {this.props.count}
                      </span>
                    </Link>
            </div>
          </div>
        </nav>
      
    );
  }
}

const mapStateToProps = (state) => {
  return {
    test: 'View Cart: ',
    count: state.cart.length
  }  
};

//Pass a function that maps the state to an object
export default connect( mapStateToProps, null )(NavBar);
