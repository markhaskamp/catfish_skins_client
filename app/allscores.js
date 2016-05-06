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
        // debugger;
        // console.log('allscores.render() -----');
        var that = this;
        const props = this.props;
        const { store } = props;
        const state = store.getState();
        // console.log('state');
        // console.log(state);
        // console.log('----- allsxores.render()');

        if (state.allScores !== undefined) {
            return (
                <div id="allscores">
                  <hr />
                  {this.showGolfer(state.allScores.AllStrokes)}
                </div>
            );
        } else {
          return <div/>
        }
    }

    showGolfer(scores) {
        if (scores != undefined) {
        return scores.map((s) => {
                let total = s.Scores.reduce((a,b) => a+b);
                return (
                    <div className="allScoreRow">
                        <div className="holeName">{s.Name}</div>
                        {s.Scores.map((strokes) => {
                            return <div className="holeStrokes">{strokes}</div>;
                        })}
                        <div className="total">{total}</div>
                        <div className="foo">&nbsp;</div>
                    </div>
                );
        });
        }
    }
}

export default connect()(AllScores);

