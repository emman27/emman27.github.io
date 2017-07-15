import React from "react";
import { List, ListItem, ListSubHeader, ListDivider } from "react-toolbox/lib/list";
import { Link } from "react-router-dom";

class NavList extends React.Component {
    render() {
        return (
            <List>
                <Link to='/'>
                    <ListItem caption="Home" />
                </Link>
                <ListDivider />
                <ListSubHeader caption="Profile" />
                <ListItem caption="Education" />
                <ListItem caption="Work" />
                <ListItem caption="Internships" />
                <ListItem caption="Voluteering" />
                <ListDivider />
                <ListSubHeader caption="Projects" />
                <Link to={"/nric"}>
                    <ListItem caption="NRIC Autocomplete/Validation" />
                </Link>
            </List>
        );
    }
}

export default NavList;
