import React from "react";
import PropTypes from "prop-types";
import "./css/layout.scss";
import * as data from "../data/index";



class Listing extends React.Component {
    renderSubItem(item) {
        return (<div key={item}>{item}</div>);
    }

    renderMainItem(key) {
        return (
            <div style={{ padding: 4 }}>
                <h2>{key}</h2>
                <div style={{ borderLeft: "5px solid grey", paddingLeft: 5 }}>
                    {this.state.data.items[key].map((item) => {
                        return this.renderSubItem(item);
                    })}
                </div>
            </div>
        );
    }

    componentWillMount() {
        this.setState({ data: data[this.props.src] });
    }

    render() {
        return (
            <div className="real-body">
                <h1>
                    <span className={this.props.iconType} /> {this.state.data.title}
                </h1>
                {Object.keys(this.state.data.items).map((key) => {
                    return this.renderMainItem(key);
                })}
            </div>
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
