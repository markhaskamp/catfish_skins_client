import React from "react";
import { render} from "react-dom";
import { createStore } from 'redux';
import $ from 'jquery';


// components: form to enter my scores
//             list of all scores
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
              <thead>
              <tr>
                <th>&nbsp;</th>
                <th>1</th> <th>2</th> <th>3</th> <th>4</th> <th>5</th> <th>6</th> <th>7</th> <th>8</th> <th>9</th>
              </tr>
              </thead>

              <tbody>
              <tr>
                <td>Mark</td>
                <td><input id="1" onChange={this.handleChangeHoleScore.bind(this)}/></td>
                <td><input id="2" onChange={this.handleChangeHoleScore.bind(this)}/></td>
                <td><input id="3" onChange={this.handleChangeHoleScore.bind(this)}/></td>
              </tr>
              </tbody>
            </table>
          </div>
            )
    }
}

render(<App/>, document.getElementById('app'));



