const defaultLayout = {
    sidebarActive: false,
    drawerActive: false,
};

const layoutState = (state=defaultLayout, action) => {
    switch(action.type) {
    case "OPEN_DRAWER":
        return Object.assign({}, state, { drawerActive: true });
    case "CLOSE_DRAWER":
        return Object.assign({}, state, { drawerActive: false });
    case "TOGGLE_DRAWER":
        return Object.assign({}, state, { drawerActive: !state.drawerActive });
    default:
        return state;
    }
};

export default layoutState;
