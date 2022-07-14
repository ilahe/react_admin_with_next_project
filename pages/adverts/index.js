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
import Link from "../../src/components/Administration/AdministrationList";

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

const Adverts = () => {

    const useStyles = makeStyles({
        radioRoot: {
            width: "38px",
            height: "38px",
            color: "#B90D5D",
            marginTop: "5px",
        },
    });

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="advertsList">
            <div className="row">
                <div className="col-md-12">
                    <Typography component="h1" variant="h4">
                        Adverts
                    </Typography>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className={classes.root}>
                        <AppBar position="static" className="tabsContainer">
                            <Tabs value={value} onChange={handleChange} className="tabsCustom"
                                  textColor="primary" aria-label="simple tabs example">
                                <Tab label="All ads" {...a11yProps(0)} />
                                <Tab label="Pending" {...a11yProps(1)} />
                                <Tab label="Published" {...a11yProps(2)} />
                                <Tab label="Rejected" {...a11yProps(3)} />
                                <Tab label="Expired" {...a11yProps(4)} />
                                <Tab label="VIP" {...a11yProps(5)} />
                                <Tab label="Premium" {...a11yProps(6)} />
                                <Tab label="Partner sites" {...a11yProps(7)} />
                            </Tabs>
                        </AppBar>

                        <div className="searchContainer">
                            <form action="">
                                <Grid>
                                    <label className="labelCustom">Title</label>
                                    <TextField
                                        variant="outlined"
                                        type={"text"}
                                        required
                                        fullWidth
                                        id={"title"}
                                        label={"Title"}
                                        name={"title"}
                                        autoComplete={"title"}
                                        autoFocus
                                    />
                                </Grid>
                                <Grid>
                                    <label className="labelCustom">Phone number</label>
                                    <TextField
                                        variant="outlined"
                                        type={"text"}
                                        required
                                        fullWidth
                                        id={"phone_number"}
                                        label={"Phone number"}
                                        name={"phone_number"}
                                        autoComplete={"phone_number"}
                                        autoFocus
                                    />
                                </Grid>
                                <Grid>
                                    <label className="labelCustom">Advert ID</label>
                                    <TextField
                                        variant="outlined"
                                        type={"text"}
                                        required
                                        fullWidth
                                        id={"ad_id"}
                                        label={"Advert ID"}
                                        name={"ad_id"}
                                        autoComplete={"ad_id"}
                                        autoFocus
                                    />
                                </Grid>
                                <Grid>
                                    <Button variant="contained"
                                            btn-type='primary'
                                    >
                                        Search
                                    </Button>
                                </Grid>
                            </form>
                        </div>

                        <TabPanel value={value} index={0} className="panelCustom">
                           <div className="adsList">
                               <div className="item">
                                   <img src="/img/ads.png" alt="advert"/>
                                   <div className="ads_Info">
                                       <div className="ads_title">Дом, пос. Раманы</div>
                                       <div className="ads_price">10000000 AZN</div>
                                       <div className="ads_author">hafiz.jabarov</div>
                                       <div className="ads_minute">60 dəqiqə</div>
                                       <div className="ads_status">Pending</div>
                                       <div className="ads_datetime">Bakı, 10 Fevral, 04:20</div>
                                   </div>
                               </div>
                               <div className="item">
                                   <img src="/img/ads.png" alt="advert"/>
                                   <div className="ads_Info">
                                       <div className="ads_title">Дом, пос. Раманы</div>
                                       <div className="ads_price">10000000 AZN</div>
                                       <div className="ads_author">hafiz.jabarov</div>
                                       <div className="ads_minute">60 dəqiqə</div>
                                       <div className="ads_status">Pending</div>
                                       <div className="ads_datetime">Bakı, 10 Fevral, 04:20</div>
                                   </div>
                               </div>
                               <div className="item">
                                   <img src="/img/ads.png" alt="advert"/>
                                   <div className="ads_Info">
                                       <div className="ads_title">Дом, пос. Раманы</div>
                                       <div className="ads_price">10000000 AZN</div>
                                       <div className="ads_author">hafiz.jabarov</div>
                                       <div className="ads_minute">60 dəqiqə</div>
                                       <div className="ads_status">Pending</div>
                                       <div className="ads_datetime">Bakı, 10 Fevral, 04:20</div>
                                   </div>
                               </div>
                               <div className="item">
                                   <img src="/img/ads.png" alt="advert"/>
                                   <div className="ads_Info">
                                       <div className="ads_title">Дом, пос. Раманы</div>
                                       <div className="ads_price">10000000 AZN</div>
                                       <div className="ads_author">hafiz.jabarov</div>
                                       <div className="ads_minute">60 dəqiqə</div>
                                       <div className="ads_status">Pending</div>
                                       <div className="ads_datetime">Bakı, 10 Fevral, 04:20</div>
                                   </div>
                               </div>
                               <div className="item">
                                   <img src="/img/ads.png" alt="advert"/>
                                   <div className="ads_Info">
                                       <div className="ads_title">Дом, пос. Раманы</div>
                                       <div className="ads_price">10000000 AZN</div>
                                       <div className="ads_author">hafiz.jabarov</div>
                                       <div className="ads_minute">60 dəqiqə</div>
                                       <div className="ads_status">Pending</div>
                                       <div className="ads_datetime">Bakı, 10 Fevral, 04:20</div>
                                   </div>
                               </div>
                               <div className="item">
                                   <img src="/img/ads.png" alt="advert"/>
                                   <div className="ads_Info">
                                       <div className="ads_title">Дом, пос. Раманы</div>
                                       <div className="ads_price">10000000 AZN</div>
                                       <div className="ads_author">hafiz.jabarov</div>
                                       <div className="ads_minute">60 dəqiqə</div>
                                       <div className="ads_status">Pending</div>
                                       <div className="ads_datetime">Bakı, 10 Fevral, 04:20</div>
                                   </div>
                               </div>
                               <div className="item">
                                   <img src="/img/ads.png" alt="advert"/>
                                   <div className="ads_Info">
                                       <div className="ads_title">Дом, пос. Раманы</div>
                                       <div className="ads_price">10000000 AZN</div>
                                       <div className="ads_author">hafiz.jabarov</div>
                                       <div className="ads_minute">60 dəqiqə</div>
                                       <div className="ads_status">Pending</div>
                                       <div className="ads_datetime">Bakı, 10 Fevral, 04:20</div>
                                   </div>
                               </div>
                               <div className="item">
                                   <img src="/img/ads.png" alt="advert"/>
                                   <div className="ads_Info">
                                       <div className="ads_title">Дом, пос. Раманы</div>
                                       <div className="ads_price">10000000 AZN</div>
                                       <div className="ads_author">hafiz.jabarov</div>
                                       <div className="ads_minute">60 dəqiqə</div>
                                       <div className="ads_status">Pending</div>
                                       <div className="ads_datetime">Bakı, 10 Fevral, 04:20</div>
                                   </div>
                               </div>
                               <div className="item">
                                   <img src="/img/ads.png" alt="advert"/>
                                   <div className="ads_Info">
                                       <div className="ads_title">Дом, пос. Раманы</div>
                                       <div className="ads_price">10000000 AZN</div>
                                       <div className="ads_author">hafiz.jabarov</div>
                                       <div className="ads_minute">60 dəqiqə</div>
                                       <div className="ads_status">Pending</div>
                                       <div className="ads_datetime">Bakı, 10 Fevral, 04:20</div>
                                   </div>
                               </div>
                               <div className="item">
                                   <img src="/img/ads.png" alt="advert"/>
                                   <div className="ads_Info">
                                       <div className="ads_title">Дом, пос. Раманы</div>
                                       <div className="ads_price">10000000 AZN</div>
                                       <div className="ads_author">hafiz.jabarov</div>
                                       <div className="ads_minute">60 dəqiqə</div>
                                       <div className="ads_status">Pending</div>
                                       <div className="ads_datetime">Bakı, 10 Fevral, 04:20</div>
                                   </div>
                               </div>
                               <div className="item">
                                   <img src="/img/ads.png" alt="advert"/>
                                   <div className="ads_Info">
                                       <div className="ads_title">Дом, пос. Раманы</div>
                                       <div className="ads_price">10000000 AZN</div>
                                       <div className="ads_author">hafiz.jabarov</div>
                                       <div className="ads_minute">60 dəqiqə</div>
                                       <div className="ads_status">Pending</div>
                                       <div className="ads_datetime">Bakı, 10 Fevral, 04:20</div>
                                   </div>
                               </div>
                           </div>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            tab 2
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            tab 3
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                            tab 4
                        </TabPanel>
                        <TabPanel value={value} index={4}>
                            tab 5
                        </TabPanel>
                        <TabPanel value={value} index={5}>
                            tab 6
                        </TabPanel>
                        <TabPanel value={value} index={6}>
                            tab 7
                        </TabPanel>
                        <TabPanel value={value} index={7}>
                            tab 8
                        </TabPanel>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Adverts;
