import React from "react";
import { render} from "react-dom";
import { createStore } from 'redux';
import $ from 'jquery';

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

    document.cookie='catfishId=;expires=Thu, 01 Jan 1970 00:00:00 UTC';
    let catfishId = getCookie('catfishId');

    if (catfishId === undefined) {
      console.log('catfishId: is undefined');

    } else if (catfishId === null) {
      console.log('catfishId: is null');

    } else if (catfishId === '') {
      console.log('catfishId: is empty string');

    } else {
      console.log('catfishId: ' + catfishId);
    }

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

export class MyScores extends React.Component {

    constructor() {
        super();
    }

    handleChangeHoleScore(e) {
      let hole = e.target.id;
      let selector = '#' + hole;

      store.dispatch({type: 'add-score',
                      "hole": hole,
                      "strokes": $(selector).val()});
    }

    render() {
        return (
          <div>
            <table>

              <tbody>
              <tr>
                <td><div className="nameLabel">Mark</div></td>
                <td><input id="1" placeholder="1" onChange={this.handleChangeHoleScore.bind(this)}/></td>
                <td><input id="2" placeholder="2" onChange={this.handleChangeHoleScore.bind(this)}/></td>
                <td><input id="3" placeholder="3" onChange={this.handleChangeHoleScore.bind(this)}/></td>
                <td><input id="4" placeholder="4" onChange={this.handleChangeHoleScore.bind(this)}/></td>
                <td><input id="5" placeholder="5" onChange={this.handleChangeHoleScore.bind(this)}/></td>
                <td><input id="6" placeholder="6" onChange={this.handleChangeHoleScore.bind(this)}/></td>
                <td><input id="7" placeholder="7" onChange={this.handleChangeHoleScore.bind(this)}/></td>
                <td><input id="8" placeholder="8" onChange={this.handleChangeHoleScore.bind(this)}/></td>
                <td><input id="9" placeholder="9" onChange={this.handleChangeHoleScore.bind(this)}/></td>
              </tr>
              <tr>
                <td><div className="nameLabel">&nbsp;</div></td>
                <td><input id="10" placeholder="10" onChange={this.handleChangeHoleScore.bind(this)}/></td>
                <td><input id="11" placeholder="11" onChange={this.handleChangeHoleScore.bind(this)}/></td>
                <td><input id="12" placeholder="12" onChange={this.handleChangeHoleScore.bind(this)}/></td>
                <td><input id="13" placeholder="13" onChange={this.handleChangeHoleScore.bind(this)}/></td>
                <td><input id="14" placeholder="14" onChange={this.handleChangeHoleScore.bind(this)}/></td>
                <td><input id="15" placeholder="15" onChange={this.handleChangeHoleScore.bind(this)}/></td>
                <td><input id="16" placeholder="16" onChange={this.handleChangeHoleScore.bind(this)}/></td>
                <td><input id="17" placeholder="17" onChange={this.handleChangeHoleScore.bind(this)}/></td>
                <td><input id="18" placeholder="18" onChange={this.handleChangeHoleScore.bind(this)}/></td>
              </tr>
              </tbody>
            </table>
          </div>
            )
    }
}

export class Login extends React.Component {
  render() {
    return <div>eddie would go</div>
  }
}


render(<App/>, document.getElementById('app'));



