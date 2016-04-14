import React from "react";
import { connect} from "react-redux";
import { render} from "react-dom";

import '../app/styles/allscores.css';

class AllScores extends React.Component {

    constructor() {
        super();
    }

    componentDidMount() {
        const { store } = this.props;
        this.unsubscribe = store.subscribe(() => this.forceUpdate());
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    render() {
        const props = this.props;
        const { store } = props;
        // const state = store.getState();

        /*
        console.log('>>> this <<<');
        console.log(this);

        console.log('>>> store  <<<') ;
        console.log(store);
        */
        let state = store.getState();
        // console.log(state.allScores.Scores);

        return (
            <div id="allscores">
              <h3>allscores</h3>
              {state.allScores.Scores.map(this.showGolfer)}
            </div>
      );

    }

    showGolfer(v) {
        return <div>{v.name} {v.scores}</div>
    };

}

export default connect()(AllScores);

