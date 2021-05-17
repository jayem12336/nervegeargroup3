import { TextField } from '@material-ui/core'
import React from 'react'

const styles = {
    textStyle: {
        marginTop: 20
    }
};

export default function Textfield({ label, placeholder, name, type, onChange, value, defaultValue, InputLabelProps, id }) {
    return (
        <TextField
            fullWidth
            label={label}
            placeholder={placeholder}
            name={name}
            type={type}
            variant="outlined"
            size="small"
            onChange={onChange}
            value={value}
            style={styles.textStyle}
            defaultValue={defaultValue}
            InputLabelProps={InputLabelProps}
            id={id}
            required
        />
    )
}
