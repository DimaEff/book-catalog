import React from 'react';
import {compose} from "redux";
import {connect} from "react-redux";


const UserProfile = ({user}) => {
    return (
        <div>
            {user ? <div>{user.username}</div>: <div>Not user</div>}
        </div>
    );
};

const mapStateToProps = (state) => ({
    user: state.auth.user,
})

export default compose(
    connect(mapStateToProps, {}),
)(UserProfile);