import React, {forwardRef} from 'react';
import {TextField} from "@material-ui/core";


const MyInput = forwardRef((props, ref) => {
    return <TextField
        color={'primary'}
        variant={'filled'}
        margin={'normal'}
        fullWidth
        inputRef={ref}
        {...props}
    />;
});


export default MyInput;
