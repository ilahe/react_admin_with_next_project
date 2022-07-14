import * as React from "react";
import Grid from "@material-ui/core/Grid";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import useStyles from "../style";

const BlockThree = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState("female");
    const [age, setAge] = React.useState("");
    const [contactSize, setContactSize] = React.useState(1);

    const handleChangeSecond = (event) => {
        setAge(event.target.value);
    };
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <>
            <Grid item xs={12}>
                <RadioGroup
                    aria-label="user"
                    name="user"
                    value={value}
                    onChange={handleChange}
                    row={true}
                    className={classes.radio}
                >
                    <FormControlLabel
                        value="user"
                        control={<Radio />}
                        label="User"
                    />
                    <FormControlLabel
                        value="shop"
                        control={<Radio />}
                        label="Shop"
                    />
                </RadioGroup>
                <TextField
                    variant="outlined"
                    type="text"
                    required
                    id="user"
                    label="User name"
                    name="user"
                    className={classes.input}
                />
                <Grid container justify="center" className={classes.contact}>
                    <TextField
                        variant="outlined"
                        type="text"
                        required
                        id="contacts"
                        label="Contacts"
                        name="contacts"
                        className={classes.contactInput}
                    />
                    <FormControl
                        variant="outlined"
                        className={classes.contactformControl}
                    >
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={age}
                            onChange={handleChangeSecond}
                        >
                            <MenuItem value="Phone number">
                                <em>Phone number</em>
                            </MenuItem>
                            <MenuItem value={10}>test1</MenuItem>
                            <MenuItem value={20}>test2</MenuItem>
                            <MenuItem value={30}>test3</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <TextField
                    variant="outlined"
                    type="text"
                    required
                    id="price"
                    label="Price"
                    name="price"
                    className={classes.input}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment
                                position="end"
                                className={classes.priceColor}
                            >
                                AZN
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    variant="outlined"
                    type="text"
                    required
                    id="specialPrice"
                    label="Special price"
                    name="specialPrice"
                    className={classes.input}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment
                                position="end"
                                className={classes.priceColor}
                            >
                                AZN
                            </InputAdornment>
                        ),
                    }}
                />
                <FormControl variant="outlined" className={classes.formControl}>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={age}
                        onChange={handleChangeSecond}
                    >
                        <MenuItem value="Phone number">
                            <em>Phone number</em>
                        </MenuItem>
                        <MenuItem value={10}>test1</MenuItem>
                        <MenuItem value={20}>test2</MenuItem>
                        <MenuItem value={30}>test3</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    id="datetime-local"
                    label="Special Price start date"
                    type="datetime-local"
                    defaultValue="2017-05-24T10:30"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <TextField
                    id="datetime-local"
                    label="Special Price end date"
                    type="datetime-local"
                    defaultValue="2017-05-24T10:30"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </Grid>
        </>
    );
};

export default BlockThree;
