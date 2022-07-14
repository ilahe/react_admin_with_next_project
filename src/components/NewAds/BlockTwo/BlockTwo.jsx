import * as React from "react";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import useStyles from "../style";

const BlockTwo = () => {
    const classes = useStyles();
    const [age, setAge] = React.useState("");

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <>
            <TextField
                id="outlined-multiline-static"
                label="Description"
                multiline
                className={classes.input}
                rows={5}
                variant="outlined"
            />
            <TextField
                id="outlined-multiline-static"
                label="Notes"
                multiline
                className={classes.input}
                rows={5}
                variant="outlined"
            />
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">
                    Reject reason
                </InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={age}
                    onChange={handleChange}
                    label="Reject reason"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>test</MenuItem>
                    <MenuItem value={20}>test1</MenuItem>
                    <MenuItem value={30}>test3</MenuItem>
                </Select>
            </FormControl>
            <TextField
                id="outlined-multiline-static"
                label="Reject description"
                multiline
                className={classes.input}
                rows={5}
                variant="outlined"
            />
        </>
    );
};

export default BlockTwo;
