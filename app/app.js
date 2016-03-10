import React from "react";
import { render} from "react-dom";
import { createStore } from 'redux';
import $ from 'jquery';



// components: enter my scores
//             list of all scores
// action types: add a score, update all scores
// store: {[{golfer: 'john', scores: [0,4,3,4,4,...]},
//          {golfer: 'tony', scores: [0,4,3,4,4,...]}]}


function storeReducer(state, action) {
    switch(action.type) {
    case 'add-score':
        console.log(action.hole, action.strokes);

    case 'DECREMENT':
        return state - 1;
    default:
        return state;
    }
}
let store = createStore(storeReducer);

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

    handleChangeHoleScore(e) {
      let hole = e.target.id;
      let selector = '#' + hole;

      store.dispatch({type: 'add-score', hole: hole, strokes: $(selector).val()});
    }

    render() {
        return (
            <table>
              <tr>
                <th>&nbsp;</th>
                <th>1</th> <th>2</th> <th>3</th> <th>4</th> <th>5</th> <th>6</th> <th>7</th> <th>8</th> <th>9</th>
              </tr>

              <tr>
                <td>Mark</td>
                <td><input id="1" onChange={this.handleChangeHoleScore.bind(this)}/></td>
                <td><input id="2" onChange={this.handleChangeHoleScore.bind(this)}/></td>
                <td><input id="3" onChange={this.handleChangeHoleScore.bind(this)}/></td>
              </tr>
            </table>
            )
    }
}

render(<App/>, document.getElementById('app'));



