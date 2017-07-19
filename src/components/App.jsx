import React from "react";
import { Switch, Route } from "react-router-dom";

import { Provider } from "react-redux";
import { createStore } from "redux";
import Resume from "../reducers";

import { Layout, Panel, NavDrawer } from "react-toolbox";
import AppBar from "react-toolbox/lib/app_bar";
import NavList from "./NavList";
import Index from "./Index";
import Nric from "./Nric";
import Listing from "./Listing";

import "./css/layout.scss";

const store = createStore(Resume);

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drawerActive: false,
            drawerPinned: false,
        };
    }

    componentWillMount() {
        this.updateDimensions();
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    updateDimensions = () => {
        if (window.innerWidth >= 1200) {
            this.setState({ drawerPinned: true });
        } else {
            this.setState({ drawerPinned: false });
        }
    }

    toggleDrawer = () => {
        this.setState({
            drawerActive: !this.state.drawerActive,
        });
    }

    render() {
        return (
            <Provider store={store}>
                <Layout>
                    <NavDrawer
                        active={this.state.drawerActive}
                        onOverlayClick={this.toggleDrawer}
                        pinned={this.state.drawerPinned}
                    >
                        <NavList onLinkClick={this.toggleDrawer} />
                    </NavDrawer>
                    <AppBar
                        title="Emmanuel's Homepage"
                        leftIcon='menu'
                        onLeftIconClick={this.toggleDrawer}
                        fixed
                    />
                    <Panel>
                        <Switch>
                            <Route exact path='/' component={Index} />
                            <Route path='/education' render={() => <Listing src="education" iconType="fa fa-graduation-cap" />} />
                            <Route path='/work' render={() => <Listing src="work" iconType="fa fa-briefcase" />} />
                            <Route path='/nric' component={Nric} />
                            <Route path='/internships' render={() => <Listing src="internships" iconType="fa fa-code" />} />
                            <Route path='/volunteering' render={() => <Listing src="volunteering" iconType="fa fa-thumbs-up" />} />
                        </Switch>
                    </Panel>
                </Layout>
            </Provider>
        );
    }
}

export default App;
