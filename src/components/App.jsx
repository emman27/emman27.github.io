import React from "react";
import { Switch, Route } from "react-router-dom";
import { Layout, NavDrawer, Panel, Sidebar } from "react-toolbox";
import AppBar from "react-toolbox/lib/app_bar";
import Index from "./Index";
import Nric from "./Nric";
import "./css/layout.scss";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            drawerActive: false,
            drawerPinned: false,
            sidebarPinned: false,
        };
    }
   
    render() {
        return (
            <Layout>
                <NavDrawer
                    active={this.state.drawerActive}
                    pinned={this.state.drawerPinned}
                    onOverlayClick={this.toggleDrawerActive}
                />
                <Panel>
                    <AppBar
                        title="Emmanuel's Homepage"
                        leftIcon='menu'
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
        );
    }
}

export default App;
