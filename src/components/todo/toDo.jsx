import React, { Component } from 'react';
import { connect } from "react-redux";

import "./todo.css"

import { todoActionAdd } from '../../store/actions/actions';
import { todoRemove } from '../../store/actions/actions';

class Todo extends Component {
    state = { 
        //todos: [],
        id:0, 
        todoText:"" 
    };

    render() { 
        return ( 
            <div>
                <h5>Simple todo app</h5>
                <div>
                    <input type="text" onChange={this.handleTextChange} value={this.state.todoText} placeholder="Todo text"></input>
                    <button onClick={this.buttonClicked}>Add</button>                
                </div>

                <div className="todoList">     
                <ul>
                    {this.props.todo.map((d) => 
                        <li key={d.id}>
                            <span className="todoDato">{d.task}</span> -
                            <i className="fa fa-trash" 
                            onClick={() => this.deleteClick(d)}
                            aria-hidden="true"></i> 
                        </li>
                    )}
                </ul>

                </div>

                
            </div>
         );
    }

    buttonClicked=() => {
        //console.log(this.state.todoText);
        
        //var lista =this.state.todos;
        /*var lista =[...this.state.todos]; //clone fard copy

        lista.push(this.state.todoText);
        
        this.setState({todos: lista, todoText: ""});*/
        var count = this.state.id+1; 

        const todoObj = {
            task: this.state.todoText,
            id: count
        };

        this.props.todoActionAdd(todoObj);

        this.setState({ todoText: ""});         
        this.setState({ id: count});         
    }


    handleTextChange = (event) =>{
        this.setState({ todoText: event.target.value });

    } 

    deleteClick = (todo) => {
        // Action function dispatch 
        this.props.todoRemove(todo);
    }


}
 
const mapTodoList = (state) => {
    return{
        todo: state.todo
    }
};


//export default connect(mapTodoList, { todoActionAdd })(Todo);
export default connect(mapTodoList, { todoActionAdd, todoRemove })(Todo);

/*

-1-click on button
-2-console log the text from the state
-3-push that text into state array
-4-clear the input (clear the state.todoText)
-5-map the states todos to list

*/