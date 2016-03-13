import React from "react";
import { render} from "react-dom";
import $ from 'jquery';

import '../app/styles/login.css';

export default class Login extends React.Component { 
    
    handleClickLogin(e) {
      // ajax call to server
      // { name: ---, pwd: --- }

      let url = '/login';
      let name = $('#txtName').val();
      let pwd = $('#txtPassword').val();
      let payload = `{"name": "${name}", "pwd": "${pwd}"}`;

      $.ajax({'method':'POST', 'url':url, 'data':payload})
        .done(function(data) {
          console.log('data:');
          console.log(data);
        })
        .fail(function(f) {
          console.log('f:');
          console.log(f);
        })
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

