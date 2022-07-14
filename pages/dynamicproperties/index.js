import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import TextField from "@material-ui/core/TextField";
import {Grid, Typography, Radio} from "@material-ui/core";
import Button from "src/components/_common/Button";
import Select from "@material-ui/core/Select";
import {Edit_prop, Delete_prop, RuIcon, AzIcon} from "../../svg";
import {editAdministration, editDynamicProperties} from "../../src/constants/path";
import Link from "next/link";
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
import OpenWithIcon from '@material-ui/icons/OpenWith';

function TabPanel(props) {
    const {children, value, index, ...other} = props;

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

const Dynamicproperties = () => {

    const useStyles = makeStyles({
        radioRoot: {
            width: "38px",
            height: "38px",
            color: "#B90D5D",
            marginTop: "5px",
        },
        langTabs: {
            "& button": {
                "& .MuiTab-wrapper": {
                    display: "flex",
                    "flexDirection": "row-reverse",
                    "& svg": {
                        marginLeft: "7px"
                    }
                }
            }
        }
    });

    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    let [inputsaz, setInputsaz] = React.useState([""]);
    let [inputsru, setInputsru] = React.useState([""]);
    // this.setState(inputs => (['input-0']));

    const [selectedValue, setSelectedValue] = useState();
    const handleRadioBtn = (event) => {
        setSelectedValue(event.target.value);
    };


    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const removePropInputaz = (key) => {
        const list = [...inputsaz];
        list.splice(key, 1);
        console.log('list: ', list);
        setInputsaz(list);
    };

    const removePropInputru = (key) => {
        const listru = [...inputsru];
        listru.splice(key, 1);
        console.log('list: ', listru);
        setInputsru(listru);
    };


    //dnd here

    const [placeholderProps, setPlaceholderProps] = useState({});

    const queryAttr = "data-rbd-drag-handle-draggable-id";

    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };

    const onDragEndRu = result => {
        // dropped outside the list
        if (!result.destination) {
            return;
        }

        setPlaceholderProps({})
        setInputsru(inputsru => reorder(inputsru, result.source.index, result.destination.index));
    };

    const onDragEndAz = result => {
        // dropped outside the list
        if (!result.destination) {
            return;
        }

        setPlaceholderProps({})
        setInputsaz(inputsaz => reorder(inputsaz, result.source.index, result.destination.index));
    };

    const onDragUpdate = update => {
        if (!update.destination) {
            return;
        }
        const draggableId = update.draggableId;
        const destinationIndex = update.destination.index;

        const domQuery = `[${queryAttr}='${draggableId}']`;
        const draggedDOM = document.querySelector(domQuery);

        if (!draggedDOM) {
            return;
        }
        const {clientHeight, clientWidth} = draggedDOM;

        const clientY = parseFloat(window.getComputedStyle(draggedDOM.parentNode).paddingTop) + [...draggedDOM.parentNode.children]
            .slice(0, destinationIndex)
            .reduce((total, curr) => {
                const style = curr.currentStyle || window.getComputedStyle(curr);
                const marginBottom = parseFloat(style.marginBottom);
                return total + curr.clientHeight + marginBottom;
            }, 0);

        setPlaceholderProps({
            clientHeight,
            clientWidth,
            clientY,
            clientX: parseFloat(window.getComputedStyle(draggedDOM.parentNode).paddingLeft)
        });
    };


    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <Typography component="h1" variant="h4">
                        Dynamic Properties
                    </Typography>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className={classes.root}>
                        <AppBar position="static" className="tabsContainer">
                            <Tabs value={value} onChange={handleChange}
                                  textColor="primary" aria-label="simple tabs example" className={classes.langTabs}>
                                <Tab
                                    label="Ru" {...a11yProps(0)}
                                    icon={<RuIcon/>}
                                />
                                <Tab
                                    label="Az" {...a11yProps(1)}
                                    icon={<AzIcon/>}
                                />
                            </Tabs>
                        </AppBar>
                        <TabPanel value={value} index={0} className="tabPanel">
                            <form>
                                <div className="row">
                                    <div className="col-md-6">
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <Select
                                                    native
                                                    variant="outlined"
                                                    style={{minWidth: '100%'}}
                                                    inputProps={{
                                                        name: "type",
                                                        id: "type",
                                                    }}
                                                    value=""
                                                    onChange=""
                                                >

                                                    <option key="1" value="1">Type 1</option>
                                                    <option key="2" value="2">Type 2</option>
                                                    <option key="3" value="3">Type 3</option>

                                                </Select>
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
                                                    label={"Name of dynamic property"}
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
                                        <div className="createCircledTitle">Inputs:</div>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <DragDropContext onDragEnd={onDragEndRu} onDragUpdate={onDragUpdate}>
                                                    <Droppable droppableId="droppable">
                                                        {
                                                            (provided, snapshot) => (
                                                                <div
                                                                    {...provided.droppableProps}
                                                                    ref={provided.innerRef}
                                                                >
                                                                    {
                                                                        inputsru.map((value, i) => (
                                                                            <Draggable key={i}
                                                                                       draggableId={"tools_" + i}
                                                                                       index={i}>
                                                                                {(provided, snapshot) => (
                                                                                    <div
                                                                                        ref={provided.innerRef}
                                                                                        {...provided.draggableProps}
                                                                                        {...provided.dragHandleProps}
                                                                                    >
                                                                                        <Grid container spacing={2}
                                                                                              key={i}
                                                                                              draggableId={"tools_" + i}>
                                                                                            <Grid item xs={12} key={i}
                                                                                                  className="toolsCircledContainer">
                                                                                                <Radio
                                                                                                    className={classes.radioRoot}
                                                                                                    onChange={handleRadioBtn}
                                                                                                    size="small"
                                                                                                />
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

                                                                                                <div
                                                                                                    className="toolsCircled">
                                                                                                    <div
                                                                                                        className="move-circled">
                                                                                                        <OpenWithIcon
                                                                                                            color="secondary"
                                                                                                            fontSize="small"/>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="editCircled">
                                                                                                        <Link
                                                                                                            href={`${editDynamicProperties}[id]`}
                                                                                                            as={`${editDynamicProperties}${i + 1}`}
                                                                                                        >
                                                                                                            <Edit_prop/>
                                                                                                        </Link>
                                                                                                    </div>
                                                                                                    <div
                                                                                                        className="deleteCircled"
                                                                                                        key={i}
                                                                                                        onClick={() => removePropInputru(i)}>
                                                                                                        <Delete_prop/>
                                                                                                    </div>
                                                                                                </div>
                                                                                            </Grid>
                                                                                        </Grid>
                                                                                    </div>
                                                                                )}
                                                                            </Draggable>
                                                                        ))}
                                                                    {provided.placeholder}
                                                                </div>
                                                            )
                                                        }
                                                    </Droppable>
                                                </DragDropContext>
                                            </Grid>
                                        </Grid>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} className="createCircledContainer">
                                                <div className="createCircled"
                                                     onClick={() => setInputsru(inputsru.concat(""))}>+
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <Grid container spacing={2}
                                              style={{display: 'flex', justifyContent: 'flex-end'}}>
                                            <div className="button-group">
                                                <Button variant="contained" style={{marginRight: '15px'}}>Save
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
                                                <Select
                                                    native
                                                    variant="outlined"
                                                    style={{minWidth: '100%'}}
                                                    inputProps={{
                                                        name: "type",
                                                        id: "type",
                                                    }}
                                                    value=""
                                                    onChange=""
                                                >
                                                    <option key="1" value="1">Type 1</option>
                                                    <option key="2" value="2">Type 2</option>
                                                    <option key="3" value="3">Type 3</option>

                                                </Select>
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
                                                    label={"Name of dynamic property"}
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
                                        <div className="createCircledTitle">Inputs:</div>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12}>
                                                <DragDropContext onDragEnd={onDragEndAz} onDragUpdate={onDragUpdate}>
                                                    <Droppable droppableId="droppable">
                                                        {
                                                            (provided, snapshot) => (
                                                                <div
                                                                    {...provided.droppableProps}
                                                                    ref={provided.innerRef}
                                                                >
                                                                    {
                                                                        inputsaz.map((value, i) => (
                                                                            <Draggable key={i}
                                                                                       draggableId={"tools_" + i}
                                                                                       index={i}>
                                                                                {
                                                                                    (provided, snapshot) => (
                                                                                        <div
                                                                                            ref={provided.innerRef}
                                                                                            {...provided.draggableProps}
                                                                                            {...provided.dragHandleProps}
                                                                                        >
                                                                                            <Grid container spacing={2}
                                                                                                  key={i}>
                                                                                                <Grid item xs={12}
                                                                                                      key={i}
                                                                                                      className="toolsCircledContainer">
                                                                                                    <Radio
                                                                                                        className={classes.radioRoot}
                                                                                                        onChange={handleRadioBtn}
                                                                                                        size="small"
                                                                                                    />
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

                                                                                                    <div
                                                                                                        className="toolsCircled">
                                                                                                        <div
                                                                                                            className="move-circled">
                                                                                                            <OpenWithIcon
                                                                                                                color="secondary"
                                                                                                                fontSize="small"/>
                                                                                                        </div>
                                                                                                        <div
                                                                                                            className="editCircled">
                                                                                                            <Link
                                                                                                                href={`${editDynamicProperties}[id]`}
                                                                                                                as={`${editDynamicProperties}${i + 1}`}
                                                                                                            >
                                                                                                                <Edit_prop/>
                                                                                                            </Link>
                                                                                                        </div>
                                                                                                        <div
                                                                                                            className="deleteCircled"
                                                                                                            key={i}
                                                                                                            onClick={() => removePropInputaz(i)}>
                                                                                                            <Delete_prop/>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </Grid>
                                                                                            </Grid>
                                                                                        </div>
                                                                                    )
                                                                                }
                                                                            </Draggable>
                                                                        ))}
                                                                    {provided.placeholder}
                                                                </div>
                                                            )}
                                                    </Droppable>
                                                </DragDropContext>
                                            </Grid>
                                        </Grid>
                                        <Grid container spacing={2}>
                                            <Grid item xs={12} className="createCircledContainer">
                                                <div className="createCircled"
                                                     onClick={() => setInputsaz(inputsaz.concat(""))}>+
                                                </div>
                                            </Grid>
                                        </Grid>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <Grid container spacing={2}
                                              style={{display: 'flex', justifyContent: 'flex-end'}}>
                                            <div className="button-group">
                                                <Button variant="contained" style={{marginRight: '15px'}}>Save
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

export default Dynamicproperties;
