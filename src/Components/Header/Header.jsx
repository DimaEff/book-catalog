import React from 'react';
import {AppBar, Box, Container, IconButton, makeStyles, Toolbar, Typography} from "@material-ui/core";
import AddSharpIcon from '@material-ui/icons/AddSharp';
import ExitToAppSharpIcon from '@material-ui/icons/ExitToAppSharp';
import {useHistory} from "react-router";


import UserProfile from "../UserProfile/UserProfile";
import {connect} from "react-redux";
import Login from "../Login/Login";
import {logoutUser} from "../../Redux/auth_reducer";
import Registration from "../Registration/Registration";
import {Link} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    leftSide: {
        display: 'flex',
    },
    label: {
        textDecoration: 'none',
        color: 'white',
        marginTop: theme.spacing(1),
    }
}))

const Header = ({user, logoutUser}) => {
    const history = useHistory();
    const styles = useStyles();

    return (
        <AppBar fixed={true}>
            <Container fixed={true}>
                <Toolbar>
                    <Box flexGrow={1} className={styles.leftSide}>
                        <Link to={'/'} className={styles.label}>
                            <Typography variant="h4">
                                book
                            </Typography>
                        </Link>
                        <IconButton onClick={() => history.push('/add-edit-book')}>
                            <AddSharpIcon fontSize={'large'}/>
                        </IconButton>
                    </Box>
                    {user ?
                        (<>
                            <IconButton onClick={logoutUser}>
                                <ExitToAppSharpIcon fontSize={'large'}/>
                            </IconButton>
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
