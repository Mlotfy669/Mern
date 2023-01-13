import React from 'react'
import { TextField } from '@mui/material'
import { useField } from 'formik'

const TextFeildWrapper = ({ name, ...otherProps }) => {

    const [field, meta] = useField(name)
    const configTextfeild = {
        ...field,
        ...otherProps,
        fullWidth: true,
        variant: "outlined"
    }

    if (meta && meta.touched && meta.error) {
        configTextfeild.error = true
        configTextfeild.helperText = meta.error
    }

    return (
        <TextField {...configTextfeild} />
    )
}

export default TextFeildWrapper