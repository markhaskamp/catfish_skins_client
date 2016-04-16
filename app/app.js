import React from "react";
import { render} from "react-dom";
import { Provider } from "react-redux";
import { createStore } from 'redux';
import $ from 'jquery';

import Login from './login.js';
import MyScores from './myscores.js';
import AllScores from './allscores.js';
import '../app/styles/app.css';


let initialStore = { allScores: { Scores: [] }};

let store = createStore(storeReducer);

function storeReducer(state=initialStore, action) {

        /*
    console.log('=== in storeReducer ===');
    console.log('action:');
    console.log(action)
        */

    switch(action.type) {
    case 'add-score':

        let url = '/strokes/' + action.name + '/' + action.hole + '/' + action.strokes;
        console.log(action.strokes.length);
        console.log(`url: ${url}`);

        let foo = {"AllStrokes": [
                {"Name": "john", "Scores": [0,1,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
                {"Name": "tony", "Scores": [0,2,3,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
                {"Name": "joe", "Scores":  [0,3,4,5,6,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
            ]
        }

        /*
        $.ajax({'url': url })
          .done(function(data) {
            console.log('.done');
            console.log(data);
          })
          .fail(function(f) {
            console.log('FAIL \\/ \\/ \\/');
            console.log(f);
            console.log('/\\ /\\ /\\');
          })
          */

                // allScores: state.allScores
                /*
                this.setState({"allScores": foo}) 
                return state
                */

        return {"allScores": foo}

    default:
        return state;
    }
}

export default class App extends React.Component {

  render() {

    let catfishId = getCookie('catfishId');
    catfishId = '1234';
    // console.log(`catfishId: ${catfishId}`);

    if (catfishId === '') {
      return (
          <div className="container">
            <Login />
          </div>
      );
    } else {
      return (
        <div className="container">
            <MyScores store={store} />
            <AllScores store={store} />
        </div>
      );
    }
  }
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
} 



render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app')
);

