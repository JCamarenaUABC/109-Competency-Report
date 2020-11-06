import React, { Component } from 'react';

class About extends Component {
    state = { 
        emailVisible: false
     }

    render() { 
        return (
            <div className="jombotron">
                        <h1 className="display-4">Jesus </h1>
                        <p>This is some information about me</p>
                        {
                            this.getEmailText()
                        }

                        <button 
                            className="btn btn-primary btn-lg" 
                            onClick={this.onButtonClicked} 
                        >
                          {this.state.emailVisible ? "Hide email" : "Show email"}                        
                        </button>

            </div>
          );
    }

    getEmailText =() => {
        if(this.state.emailVisible){
            return <a href="mailto:zzzzz@mail.com">zzzzz@mail.com</a>;
        }

        return <label>Click the button to see my email</label>;
    }

    onButtonClicked = () => {
        //update the state
        this.setState({emailVisible: !this.state.emailVisible});
    }

}
 
export default About;