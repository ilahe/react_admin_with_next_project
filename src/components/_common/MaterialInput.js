import TextField from "@material-ui/core/TextField";
import React from "react";


const MaterialInput = (id,label,name,onChange,value,error,type) =>{
    return (
        <>
            <TextField
                error={error}
                variant="outlined"
                margin="normal"
                type={type}
                required
                fullWidth
                id={id}
                label={label}
                name={name}
                autoComplete={name}
                autoFocus
                onChange={onChange}
                value={value}
                helperText={error?'Incorrect field':''}
            />
        </>

    )
}

export default MaterialInput;
