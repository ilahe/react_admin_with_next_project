import * as React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import useStyles from "../style";
import CategoriesDropDown from "./CategoriesDropDown";

const BlockOne = ({ cityList }) => {
    const classes = useStyles();
    const [age, setAge] = React.useState("");

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <>
            <TextField
                variant="outlined"
                type="text"
                required
                fullWidth
                id="title"
                label="Title"
                name="title"
                className={classes.input}
                autoFocus
            />
            {/* Category */}
            <Grid item xs={12} container spacing={2} alignItems="flex-end">
                <Grid item xs={6}>
                    <FormControl
                        variant="outlined"
                        className={classes.formControl}
                    >
                        <InputLabel id="demo-simple-select-outlined-label">
                            Category
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={age}
                            onChange={handleChange}
                            label="Category"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>test</MenuItem>
                            <MenuItem value={20}>test1</MenuItem>
                            <MenuItem value={30}>test3</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl
                        variant="outlined"
                        className={classes.formControl}
                    >
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={age}
                            onChange={handleChange}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>1</MenuItem>
                            <MenuItem value={20}>2</MenuItem>
                            <MenuItem value={30}>3</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
            {/* City and Metro */}
            <Grid item xs={12} container spacing={2} alignItems="flex-end">
                <Grid item xs={6}>
                    <FormControl
                        variant="outlined"
                        className={classes.formControl}
                    >
                        <InputLabel id="demo-simple-select-outlined-label">
                            City
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={age}
                            onChange={handleChange}
                            label="City"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            {cityList?.map((item) => (
                                <MenuItem key={item.id} value={item.id}>
                                    {item.title.az}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl
                        variant="outlined"
                        className={classes.formControl}
                    >
                        <InputLabel id="demo-simple-select-outlined-label">
                            Metro
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={age}
                            onChange={handleChange}
                            label="Metro"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Xetai</MenuItem>
                            <MenuItem value={20}>28 may</MenuItem>
                            <MenuItem value={30}>Genclik</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
            <TextField
                variant="outlined"
                type="text"
                required
                fullWidth
                id="videoUrl"
                label="Video url"
                name="videoUrl"
                className={classes.input}
                autoFocus
            />
            <Grid item xs={12} container spacing={2} alignItems="flex-end">
                <Grid item xs={6}>
                    <FormControl
                        variant="outlined"
                        className={classes.formControl}
                    >
                        <InputLabel id="demo-simple-select-outlined-label">
                            Dynamic props
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={age}
                            onChange={handleChange}
                            label="Dynamic props"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>test1</MenuItem>
                            <MenuItem value={20}>test2</MenuItem>
                            <MenuItem value={30}>test3</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl
                        variant="outlined"
                        className={classes.formControl}
                    >
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={age}
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>test1</MenuItem>
                            <MenuItem value={20}>test2</MenuItem>
                            <MenuItem value={30}>test3</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </>
    );
};

export default BlockOne;
