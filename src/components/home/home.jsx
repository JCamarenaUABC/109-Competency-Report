import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    //state = {  }
    render() { 
        return (
        <div className="jumbotron">
            <h1 className="display-4"> Welcome to Organika</h1>
            <p className="lead">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis quis et quod quae perferendis esse molestias vel autem quasi! Impedit amet quos facere doloribus ut, consectetur veritatis vitae molestiae tempora?
            </p>

            <hr className="my-4" ></hr>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet quidem quisquam iusto repudiandae ipsum, neque, fugiat ipsa illum nulla, earum voluptates eius in quis? Quis laudantium dolor tempore inventore amet?</p>


            <Link className="btn btn-primary btn-lg" to="/#" role="button">Check out the catalog</Link>
        </div> 
        );
    }
}
 
export default Home;