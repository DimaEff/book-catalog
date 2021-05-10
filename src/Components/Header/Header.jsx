import React from 'react';
import {AppBar, Box, Button, Container, Toolbar, Typography} from "@material-ui/core";
import UserProfile from "../UserProfile/UserProfile";
import {connect} from "react-redux";
import MyButton from "../Common/MyButton";
import Login from "../Login/Login";
import {logoutUser} from "../../Redux/auth_reducer";
import Registration from "../Registration/Registration";


const Header = ({user, logoutUser}) => {
    return (
        <AppBar fixed={true}>
            <Container fixed={true}>
                <Toolbar>
                    <Box flexGrow={1}>
                        <Typography variant="h4">
                            books
                        </Typography>
                    </Box>
                    {user ?
                        (<>
                            <MyButton onClick={logoutUser}>logout</MyButton>
                            <Box m={1}>
                                <UserProfile user={user}/>
                            </Box>
                        </>) :
                        (<>
                            <Login/>
                            <Registration/>
                        </>)
                    }
                </Toolbar>
            </Container>
        </AppBar>
    );
};

const mapStateToProps = (state) => ({
    user: state.auth.user,
})

export default connect(mapStateToProps, {logoutUser})(Header);
