import React from "react";
import { Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Resume from "../reducers";
import { toggleDrawer } from "../actions/layout";

import { Layout, Panel, Sidebar } from "react-toolbox";
import NavDrawer from "../containers/NavDrawer";
import AppBar from "react-toolbox/lib/app_bar";
import NavList from "./NavList";
import Index from "./Index";
import Nric from "./Nric";
import "./css/layout.scss";

const store = createStore(Resume);

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drawerActive: false,
            drawerPinned: false,
            sidebarPinned: false,
        };
        this.toggleDrawer = this.toggleDrawer.bind(this);
    }

    toggleDrawer() {
        this.setState({
            drawerActive: !this.state.drawerActive,
        });
    }

    render() {
        return (
            <Provider store={store}>
                <Layout>
                    <NavDrawer>
                        <NavList onLinkClick={() => store.dispatch(toggleDrawer())} />
                    </NavDrawer>
                    <Panel>
                        <AppBar
                            title="Emmanuel's Homepage"
                            leftIcon='menu'
                            onLeftIconClick={() => store.dispatch(toggleDrawer())}
                        />
                        <Switch>
                            <Route exact path='/' component={Index} />
                            <Route path='/nric' component={Nric} />
                        </Switch>
                    </Panel>
                    <Sidebar
                        pinned={ this.state.sidebarPinned }
                    />
                </Layout>
            </Provider>
        );
    }
}

export default App;
