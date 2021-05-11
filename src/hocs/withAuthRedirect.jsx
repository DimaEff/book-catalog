import React from 'react';
import {connect} from "react-redux";
import {Redirect} from 'react-router-dom';


const withAuthRedirect = (Component) => {

    const RedirectComponent = (props) => {
        if (!props.user) return <Redirect to={'/'}/>;

        return <Component {...props}/>;
    }

    const mapStateToProps = (state) => {
        return {
            user: state.auth.user,
        }
    }

    return connect(mapStateToProps, {})(RedirectComponent)
};

export default withAuthRedirect;