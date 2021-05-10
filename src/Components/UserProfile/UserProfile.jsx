import React from 'react';
import {Avatar, Box, Typography} from "@material-ui/core";


const UserProfile = ({user}) => {
    if (!user) return <div>not user</div>

    return (
        <Box>
            <Avatar alt={user.username} src={user.avatarURL}/>
        </Box>
    );
};

export default UserProfile;