import React from "react";
import { render} from "react-dom";
import { Provider } from "react-redux";
import { createStore } from 'redux';
import $ from 'jquery';

import Login from './login.js';
import MyScores from './myscores.js';
import AllScores from './allscores.js';
import '../app/styles/app.css';


// components: form to enter my scores
//             list of all scores
//               show one golfers scores
// action types: add a score,
//               update all scores
// store: { allScores: [ {name: 'john', scores: [0,4,3,4,4,...]},
//                       {name: 'tony', scores: [0,4,3,4,4,...]} ]
//        }


let initialStore = { allScores: [] };

let store = createStore(storeReducer);

function storeReducer(state=initialStore, action) {

    switch(action.type) {
    case 'add-score':

        let url = '/strokes/' + 'mark' + '/' + action.hole + '/' + action.strokes;
        console.log(url);

        $.ajax({'url': url })
          .done(function(data) {
            console.log('.done');
            console.log(data);
          })
          .fail(function(f) {
            console.log('.fail');
            console.log(f);
          })

        return {
                allScores: state.allScores
        };

    default:
        return state;
    }
}

export default class App extends React.Component {

  render() {

    let catfishId = getCookie('catfishId');
    catfishId = '1234';
    console.log(`catfishId: ${catfishId}`);

    if (catfishId === '') {
      return (
          <div className="container">
            <Login />
          </div>
      );
    } else {
      return (
        <div className="container">
          <MyScores />
          <AllScores />
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

