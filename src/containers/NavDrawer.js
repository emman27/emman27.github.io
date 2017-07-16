import { NavDrawer } from "react-toolbox/lib/layout";
import { connect } from "react-redux";
import { closeDrawer } from "../actions/layout";

const getSidebarStatus = (layoutState) => {
    return layoutState.drawerActive;
};

const mapStateToProps = (state) => {
    return {
        active: getSidebarStatus(state.layout),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLinkClick: () => {
            dispatch(closeDrawer());
        },
        onOverlayClick: () => {
            dispatch(closeDrawer());
        },
    };
};

const newNavDrawer = connect(
    mapStateToProps,
    mapDispatchToProps
)(NavDrawer);

export default newNavDrawer;
