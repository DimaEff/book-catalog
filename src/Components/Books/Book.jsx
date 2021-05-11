import React, {useState} from 'react';
import {useHistory} from "react-router";
import {Box, Grid, IconButton, makeStyles, Typography} from "@material-ui/core";
import ClearSharpIcon from '@material-ui/icons/ClearSharp';
import EditSharpIcon from '@material-ui/icons/EditSharp';


const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        display: 'flex',
        borderRadius: '10px',
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        height: '390px',
        boxShadow: '0 0 10px rgba(0,0,0,0.5)',
    },
    bookCover: {
        width: '100%',
    },
    cardAction: {
        position: 'absolute',
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, .3)',
        color: 'rgba(255, 255, 255, .9)',
    },
    buttons: {
        '*': {
            margin: '5px',
        }
    }
}))

const Book = (props) => {
    const [showBookInfo, setShowBookInfo] = useState(false);
    const styles = useStyles();
    const history = useHistory();

    const editBook = () => {
        history.push(`/add-edit-book/${props.id}`)
    }

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Box className={styles.root} onMouseEnter={() => setShowBookInfo(true)} onMouseLeave={() => setShowBookInfo(false)}>
                <img src={props.coverURL} alt={props.title}
                     className={styles.bookCover}/>
                {showBookInfo && <div className={styles.cardAction}>
                    <Typography variant={'h5'}>{props.title}</Typography>
                    <Typography variant={'h6'}>{props.authors}</Typography>
                    <div className={styles.buttons}>
                        {props.showActions &&
                        <>
                            <IconButton onClick={editBook}>
                                <EditSharpIcon fontSize={'large'} color={'inherit'}/>
                            </IconButton>
                            <IconButton onClick={() => props.deleteBook(props.id)}>
                                <ClearSharpIcon fontSize={'large'}/>
                            </IconButton>
                        </>}
                    </div>
                    <Typography variant={'h6'}>{props.isbn}</Typography>
                </div>}
            </Box>
        </Grid>
    );
};

export default Book;