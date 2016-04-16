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
        var that = this;
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

        // {state.allScores.Scores.map(this.showGolfer)}
        return (
            <div id="allscores">
              <hr />
              {this.showGolfer(state.allScores.Scores)}
            </div>
      );
    }

    foo(v) {
        return <div style="width: 95%">{v.name} {v.scores}</div>
    }

    showGolfer(scores) {
        return scores.map((s) => {
                return (
                                <div className="allScoreRow">
                            <div className="holeName">{s.name}</div>
                            {s.scores.map((strokes) => {
                        return <div className="holeStrokes">{strokes}</div>;
                })}
                <div className="foo">&nbsp;</div>
                </div>
                );
        });
    }

}

export default connect()(AllScores);

