import React from "react";
import { connect} from "react-redux";
import { render} from "react-dom";
import $ from 'jquery';

import '../app/styles/myscores.css';

class MyScores extends React.Component {

    constructor() {
      super();
    }

    handleChangeHoleScore(e) {
      let hole = e.target.id;
      let selector = '#' + hole;

      this.props.dispatch({type:      'add-score',
                           "name":    $('#txtName').val(),
                           "hole":    hole,
                           "strokes": $(selector).val()});
    }

    render() {
        return (
          <div id="myscores">
            <table>

              <tbody>
              <tr>
                <td><div className="nameLabel"><input id="txtName" placeholder="name"/></div></td>
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

export default connect()(MyScores);

