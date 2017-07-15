import React from "react";
import Avatar from "react-toolbox/lib/avatar";
import "./css/layout.scss";
const photo = require("../images/emman.jpg");

class Index extends React.Component {
    render () {
        return (
            <div className="real-body">
                <div className="flexbox-horizontal">
                    <Avatar image={photo} title="Emmanuel's photo" className="profile-pic" />
                </div>
                <div className="text-center">
                    <h2>Emmanuel Goh</h2>
                    <p>Software Developer @ Cynopsis Solutions</p>
                </div>
                <div className="flexbox-horizontal">
                </div>
            </div>
        );
    }
}

export default Index;
