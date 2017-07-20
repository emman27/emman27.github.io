import React from "react";
import request from "request-promise-native";

import Card from "react-toolbox/lib/card";
import Input from "react-toolbox/lib/input";
import "./css/layout.scss";

const NRIC_URL = "https://nric.emmanuelgoh.me/api/autocomplete";

class Nric extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            success: "",
            showSuccess: "none",
            message: "",
            value: "",
        };
        this.attempts = 0;
    }

    handleChange = (query) => {
        this.setState({
            value: query,
        });
        this.attempts += 1;
        request({
            method: "POST",
            uri: NRIC_URL,
            body: {
                nrics: [
                    query,
                ],
            },
            json: true,
        }).then((response) => {
            if (response.data[0].valid) {
                this.nricSuccess();
            } else if (response.data[0].full) {
                this.nricAlmostThere(response.data[0].full);
            } else if (this.attempts >= 18) {
                this.goAway();
            } else {
                this.hideBox();
            }
        }).catch((err) => {
            console.error(err);
        });
    }

    nricSuccess = () => {
        this.setState({
            showSuccess: "flex",
            success: "lightgreen",
            message: "That looks like a valid NRIC!",
        });
        this.attempts = 0;
    }

    nricAlmostThere = (full) => {
        this.setState({
            showSuccess: "flex",
            success: "yellow",
            message: `That looks almost right. Did you mean ${full}?`,
        });
    }

    goAway = () => {
        this.setState({
            showSuccess: "flex",
            success: "red",
            message: "Just give up bro, it's not going to work",
        });
    }

    hideBox = () => {
        this.setState({
            showSuccess: "none",
        });
    }

    render() {
        return (
            <Card className="real-body" raised>
                <h1>NRIC Validation</h1>
                <p>Initially written as an API endpoint to mass validate / autocomplete NRICs. <a href="https://github.com/emman27/nric-validator">View the project</a></p>
                <Input
                    name="nric"
                    label="Start typing your NRIC!"
                    onChange={this.handleChange}
                    value={this.state.value}
                />
                <div className="flexbox-horizontal no-flex">
                    <Card className="success-box" style={{ backgroundColor: this.state.success, display: this.state.showSuccess }}>
                        {this.state.message}
                    </Card>
                </div>

            </Card>
        );
    }
}

export default Nric;
