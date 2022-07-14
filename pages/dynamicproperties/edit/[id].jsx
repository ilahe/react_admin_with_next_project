import React from 'react';
import PropTypes from 'prop-types';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Tabs from '@material-ui/core/Tabs';
import Select from "@material-ui/core/Select";
import AppBar from '@material-ui/core/AppBar';
import Button from "src/components/_common/Button";
import TextField from "@material-ui/core/TextField";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { Edit_prop, Delete_prop, Left_arrow } from "../../../svg";
import {createAdministration, dynamicProperties} from "../../../src/constants/path";
import Link from "next/link";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

const CreateProps = (props) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    let [inputsaz, setInputsaz] = React.useState([""]);
    let [inputsru, setInputsru] = React.useState([""]);
    // this.setState(inputs => (['input-0']));

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const removePropInputaz = (key) => {
        const listaz = [...inputsaz];
        listaz.splice(key, 1);
        setInputsaz(listaz);
    };

    const removePropInputru = (key) => {
        const listru = [...inputsru];
        listru.splice(key, 1);
        setInputsru(listru);
    };

    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <Typography component="h1" variant="h4">
                        Edit Dynamic Properties
                    </Typography>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className={classes.root}>
                        <AppBar position="static" className="tabsContainer">
                            <Tabs value={value} onChange={handleChange}
                                  textColor="primary" aria-label="simple tabs example">
                                <Tab label="Ru" {...a11yProps(0)} />
                                <Tab label="Az" {...a11yProps(1)} />
                            </Tabs>
                        </AppBar>
                        <TabPanel value={value} index={0} className="tabPanel">
                            <form>
                                <div className="row">
                                    <div className="col-md-6">
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <Link href={dynamicProperties}>
                                                    <Left_arrow className="backButton"/>
                                                </Link>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <TextField
                                                    variant="outlined"
                                                    margin="normal"
                                                    type={"text"}
                                                    required
                                                    fullWidth
                                                    id={"az"}
                                                    label={"Input name"}
                                                    name={"dynamic_property"}
                                                    autoComplete={"Name of dynamic property"}
                                                    autoFocus
                                                />
                                            </Grid>
                                        </Grid>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="createCircledTitle">Input options:</div>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <div className="dynamicInput">
                                                    {inputsru.map((value, i) => (
                                                        <Grid container spacing={2} key={i} id={"tools_" + i}>
                                                            <Grid item xs={12} key={i} className="toolsCircledContainer">
                                                                <TextField
                                                                    variant="outlined"
                                                                    margin="normal"
                                                                    type={"text"}
                                                                    fullWidth
                                                                    label={"new input"}
                                                                    name={"dynamic_property"}
                                                                    autoComplete={"Name of dynamic property"}
                                                                    autoFocus
                                                                    value={value}
                                                                    onChange={e =>
                                                                        setInputsru(
                                                                            inputsru.map((value, j) => {
                                                                                if (i === j) value = e.target.value;
                                                                                return value;
                                                                            })
                                                                        )
                                                                    }
                                                                />

                                                                <div className="toolsCircled">
                                                                    <div className="editCircled">
                                                                        <Edit_prop />
                                                                    </div>
                                                                    <div className="deleteCircled" key={i} onClick={() => removePropInputru(i)}>
                                                                        <Delete_prop />
                                                                    </div>
                                                                </div>
                                                            </Grid>
                                                        </Grid>
                                                    ))}

                                                </div>
                                            </Grid>
                                        </Grid>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} className="createCircledContainer">
                                                <div className="createCircled"  onClick={() => setInputsru(inputsru.concat(""))}>+</div>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <Grid container spacing={2}
                                              style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                            <div className="button-group">
                                                <Button variant="contained" style={{ marginRight: '15px' }}>Save
                                                </Button>
                                                <Button variant="contained"
                                                        btn-type='success'
                                                >
                                                    Cancel
                                                </Button>
                                            </div>
                                        </Grid>
                                    </div>
                                </div>
                            </form>
                        </TabPanel>
                        <TabPanel value={value} index={1} className="tabPanel">
                            <form>
                                <div className="row">
                                    <div className="col-md-6">
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <Link href={dynamicProperties}>
                                                    <Left_arrow className="backButton"/>
                                                </Link>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <TextField
                                                    variant="outlined"
                                                    margin="normal"
                                                    type={"text"}
                                                    required
                                                    fullWidth
                                                    id={"az"}
                                                    label={"Input name"}
                                                    name={"dynamic_property"}
                                                    autoComplete={"Name of dynamic property"}
                                                    autoFocus
                                                />
                                            </Grid>
                                        </Grid>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="createCircledTitle">Input options:</div>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <div className="dynamicInput">
                                                    {inputsaz.map((value, i) => (
                                                        <Grid container spacing={2} key={i} id={"tools_" + i}>
                                                            <Grid item xs={12} key={i} className="toolsCircledContainer">
                                                                <TextField
                                                                    variant="outlined"
                                                                    margin="normal"
                                                                    type={"text"}
                                                                    fullWidth
                                                                    label={"new input"}
                                                                    name={"dynamic_property"}
                                                                    autoComplete={"Name of dynamic property"}
                                                                    autoFocus
                                                                    value={value}
                                                                    onChange={e =>
                                                                        setInputsaz(
                                                                            inputsaz.map((value, j) => {
                                                                                if (i === j) value = e.target.value;
                                                                                return value;
                                                                            })
                                                                        )
                                                                    }
                                                                />

                                                                <div className="toolsCircled">
                                                                    <div className="editCircled">
                                                                        <Edit_prop />
                                                                    </div>
                                                                    <div className="deleteCircled" key={i} onClick={() => removePropInputaz(i)}>
                                                                        <Delete_prop />
                                                                    </div>
                                                                </div>
                                                            </Grid>
                                                        </Grid>
                                                    ))}

                                                </div>
                                            </Grid>
                                        </Grid>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} className="createCircledContainer">
                                                <div className="createCircled"  onClick={() => setInputsaz(inputsaz.concat(""))}>+</div>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <Grid container spacing={2}
                                              style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                            <div className="button-group">
                                                <Button variant="contained" style={{ marginRight: '15px' }}>Save
                                                </Button>
                                                <Button variant="contained"
                                                        btn-type='success'
                                                >
                                                    Cancel
                                                </Button>
                                            </div>
                                        </Grid>
                                    </div>
                                </div>
                            </form>
                        </TabPanel>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateProps;
