import React from "react";
import { connect} from "react-redux";
import { render} from "react-dom";

import '../app/styles/allscores.css';

class AllScores extends React.Component {

    constructor() {
        super();
    }

    render() {
      return (
          <div id="allscores">
            <h3>allscores</h3>
          </div>
      )

    }
}

export default connect()(AllScores);

