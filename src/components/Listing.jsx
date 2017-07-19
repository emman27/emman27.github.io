import React from "react";
import PropTypes from "prop-types";
import "./css/layout.scss";
import * as data from "../data/index";
import Paper from "react-toolbox/lib/card";
import "./css/transitions.scss";

class Listing extends React.Component {
    renderSubItem(item) {
        return (<div className="slide-in" key={item}>{item}</div>);
    }

    renderMainItem(key) {
        return (
            <div>
                <h2>{key}</h2>
                <div className="sublist">
                    {this.state.data.items[key].map((item) => {
                        return this.renderSubItem(item);
                    })}
                </div>
            </div>
        );
    }

    componentWillMount() {
        this.setState({ data: data[this.props.src], iconType: this.props.iconType });
    }

    componentWillReceiveProps(props) {
        this.setState({ data: data[props.src], iconType: props.iconType });
    }

    render() {
        return (
            <Paper className="real-body" raised={true}>
                <h1>
                    <span className={this.props.iconType} /> {this.state.data.title}
                </h1>
                {Object.keys(this.state.data.items).map((key) => {
                    return this.renderMainItem(key);
                })}
            </Paper>
        );
    }
}

Listing.propTypes = {
    src: PropTypes.string.isRequired,
    iconType: PropTypes.string,
};

Listing.defaultProps = {
    iconType: "",
};

export default Listing;
