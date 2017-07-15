import React from "react";
import Avatar from "react-toolbox/lib/avatar";
import "./css/layout.scss";
const photo = require("../images/emman.jpg");

class Index extends React.Component {
    render () {
        return (
            <div className="flexbox-horizontal real-body">
                <Avatar image={photo} title="Emmanuel's photo" className="profile-pic" />
            </div>
        );
    }
}

export default Index;
