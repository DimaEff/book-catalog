import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {Box, Dialog, DialogActions, DialogContent, DialogTitle} from "@material-ui/core";

import MyButton from "../MyButton";
import MyInput from "../MyInput";


const DialogForm = ({children, onSubmit, yupSchema, dialogId}) => {
    const [open, setOpen] = useState(false);

    const handleOpen = (isOpen) => {
        setOpen(isOpen);
    };

    const {register, handleSubmit, formState: { errors }} = useForm({
        method: 'onBlur',
        reValidateMode: "onBlur",
        resolver: yupResolver(yupSchema),
    });

    const submit = (formData) => {
        onSubmit({...formData});
        handleOpen(false);
    }

    const startButton = children.buttons.filter(button => {
        return button.onClick === 'submit'
    });

    return (
        <Box>
            <MyButton onClick={() =>handleOpen(true)}>
                {startButton[0].text}
            </MyButton>

            <Dialog open={open} onClose={() => handleOpen(false)} aria-labelledby={dialogId || 'dialog'}>
                <DialogTitle id={dialogId || 'dialog'}>Login</DialogTitle>
                <DialogContent>
                    <form onSubmit={handleSubmit(submit)} id={'dialogForm'}>
                        {children.fields.map(({fieldName}) => {
                            return <MyInput
                                label={fieldName}
                                error={!!errors[fieldName]}
                                helperText={errors[fieldName]?.message}
                                {...register(fieldName)}
                                    />
                        })}
                    </form>
                </DialogContent>
                <DialogActions>
                    {children.buttons.map(button => {
                        if (button.onClick === 'submit') {
                            return <MyButton type={'submit'} form={'dialogForm'}>{button.text || 'submit'}</MyButton>
                        } else if (button.onClick === 'close') {
                            return <MyButton variant={'contained'} color={'primary'} onClick={() => handleOpen(false)}>
                                {button.text || 'close'}
                            </MyButton>
                        }

                        return <MyButton onClick={button.onClick}>{button.text}</MyButton>
                    })}
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default DialogForm;
