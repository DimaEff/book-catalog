import React from 'react';
import {Button} from "@material-ui/core";

const MyButton = ({children, ...props}) => {
    return (
        <Button variant={'text'} color={"inherit"} {...props}>
            {children}
        </Button>
    );
};

export default MyButton;
