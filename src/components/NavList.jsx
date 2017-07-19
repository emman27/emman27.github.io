import React from "react";
import PropTypes from "prop-types";
import { List, ListItem, ListSubHeader, ListDivider } from "react-toolbox/lib/list";
import { Link } from "react-router-dom";
import "./css/layout.scss";

class NavList extends React.Component {
    render() {
        return (
            <List className="nav-list">
                <Link to='/' onClick={this.props.onLinkClick}>
                    <ListItem caption="Home" />
                </Link>
                <ListDivider />
                <ListSubHeader caption="Profile" />
                <Link to='/education' onClick={this.props.onLinkClick}>
                    <ListItem caption="Education" />
                </Link>
                <Link to='/work' onClick={this.props.onLinkClick}>
                    <ListItem caption="Work" />
                </Link>
                <Link to='/internships' onClick={this.props.onLinkClick}>
                    <ListItem caption="Internships" />
                </Link>
                <ListItem caption="Voluteering" />
                <ListDivider />
                <ListSubHeader caption="Projects" />
                <Link to={"/nric"} onClick={this.props.onLinkClick}>
                    <ListItem caption="NRIC Autocomplete/Validation" />
                </Link>
            </List>
        );
    }
}

NavList.propTypes = {
    onLinkClick: PropTypes.func,
};

NavList.defaultProps = {
    onLinkClick: () => {},
};

export default NavList;
