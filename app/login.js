import React from "react";
import { render} from "react-dom";

import '../app/styles/login.css';

export default class Login extends React.Component { 
    
    handleClickLogin(e) {
      console.log('always read the plaque');
    }


    render() {
      return (
          <div id="login">
            <form action="#">
              <span className="label">Name:</span><input id="txtName" />
              <br/><span className="label">Password:</span><input id="txtPassword" />
              <br/><input type="button" value="Login" onClick={this.handleClickLogin.bind(this)} />
            </form>
          </div>
        );
  }
}

