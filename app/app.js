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
// store: {counter: n,
//         allScores: [{id: n, name: 'john', scores: [0,4,3,4,4,...]},
//                     {id: n, name: 'tony', scores: [0,4,3,4,4,...]}
//                    ]
//        }


let initialStore = {counter: 0,
                    allScores: [{id:1, name: 'john', scores: [0,0,0,0,0,0,0,0,0,0]}
                               ]
                   };

let store = createStore(storeReducer);

function storeReducer(state=initialStore, action) {

    switch(action.type) {
    case 'add-score':
        state.counter++;

        return {counter: state.counter++,
                allScores: state.allScores};

    default:
        return state;
    }
}

export default class App extends React.Component {
    render() {
        return (
            <div className="container">
                <MyScores />
            </div>
        );
    }
}

export class MyScores extends React.Component {

    constructor() {
        super();

        this.state = {counter: 0,
                      scores: [0,0,0,0,0,0,0,0,0]};

        store.subscribe(() => {
            this.setState(store.getState())
        })
    }

    handleChangeHoleScore(e) {
      let hole = e.target.id;
      let selector = '#' + hole;
      let action = {}

      store.dispatch({type: 'add-score',
                      "hole": hole,
                      "strokes": $(selector).val()});
    }

    render() {
        return (
          <div>
            <div>{this.state.counter}</div>
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

render(<App/>, document.getElementById('app'));



