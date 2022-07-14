import * as React from "react";
import {makeStyles} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Link from "next/link";
import ListItemText from "@material-ui/core/ListItemText";
import {NavigationPath} from "../../constants/path";
import {getLanguage} from "../../helpers";
import Ads from "./Ads";
import Shops from "./Shops";
import Members from "./Members";
import Count from "./Count";
import Banners from "./Banners";
import Messages from "./Messages";
import Blog from "./Blog";
import Assistance from "./Assistance";
import Mail from "./Mail";
import Seo from "./Seo";
import Addons from "./Addons";
import WebConfig from "./WebConfig";
import Logs from "./Logs";
import Reports from "./Reports";
import {Button, IconButton} from "@material-ui/core";
import {useState} from "react";
import {MenuOpen, Menu} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
        root: {
            width: "360px",
            height: "100%",
            maxWidth: 360,
            backgroundColor: theme.palette.background.paper,
            paddingBottom: 0,
            "& span, & svg": {
                fontSize: "0.85em",
            },
            "& svg": {
                width: "17px",
                height: "17px"
            },
            "& svg path": {
                color: "#B90D5D"
            },
            "& .MuiListItem-button": {
                borderBottom: "1px solid rgba(196, 196, 196, 0.19)",
                boxShadow: "none",
                "&:hover": {
                    backgroundColor: "rgba(160, 43, 98, 0.11)"
                }
            },
            "& .MuiCollapse-wrapper": {
                backgroundColor: "rgba(160, 43, 98, 0.11)",
                "& span": {
                    color: "#A02B62"
                }
            },
        },
    }))
;

const Navigation = () => {
    const t = getLanguage();
    const classes = useStyles();
    const [isOpen, setIsOpen] = React.useState({
        ads: false,
        shops: false,
        members: false,
        count: false,
        banners: false,
        messages: false,
        blog: false,
        assistance: false,
        mail: false,
        seo: false,
        addons: false,
        webConfig: false,
        logs: false,
        reports: false,
    });

    const [openMobNav, setOpenMobNav] = useState(false);

    const onHandleOpen = (key) => {
        for (let objKey in isOpen) {
            setIsOpen({[objKey]: false, [key]: !isOpen[key]});
        }
    };


    const handleOpenMobNav = () => {
        setOpenMobNav(!openMobNav);
    };

    return (
        <div className="nav-mobile">
            <Button onClick={handleOpenMobNav} className="mob-btn">
                {/*<div className={openMobNav ? "nav-icon back-arrow" : "nav-icon"}>*/}
                {/*    <div className="nav-line nav-line-1"></div>*/}
                {/*    <div className="nav-line nav-line-2"></div>*/}
                {/*    <div className="nav-line nav-line-3"></div>*/}
                {/*</div>*/}
                <span className={openMobNav ? "nav-icon back-arrow" : "nav-icon"}>
                        Menu
                </span>
                {/*{openMobNav ? <MenuOpen /> : <Menu />}*/}
            </Button>


            <div className={openMobNav ? "navigation show-nav" : "navigation"}>
                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    className={classes.root}
                >
                    <Link href={NavigationPath.STATISTICIAN}>
                        <ListItem button>
                            <ListItemText primary={t.statistician}/>
                        </ListItem>
                    </Link>
                    <Ads onClick={onHandleOpen} isOpen={isOpen.ads}/>
                    <Shops onClick={onHandleOpen} isOpen={isOpen.shops}/>
                    <Members onClick={onHandleOpen} isOpen={isOpen.members}/>
                    <Count onClick={onHandleOpen} isOpen={isOpen.count}/>
                    <Banners onClick={onHandleOpen} isOpen={isOpen.banners}/>
                    <Messages onClick={onHandleOpen} isOpen={isOpen.messages}/>
                    <Blog onClick={onHandleOpen} isOpen={isOpen.blog}/>
                    <Assistance onClick={onHandleOpen} isOpen={isOpen.assistance}/>
                    <Link href={NavigationPath.PAGES}>
                        <ListItem button>
                            <ListItemText primary={t.pages}/>
                        </ListItem>
                    </Link>
                    <Link href={NavigationPath.CONTACTS}>
                        <ListItem button>
                            <ListItemText primary={t.contacts}/>
                        </ListItem>
                    </Link>
                    <Mail onClick={onHandleOpen} isOpen={isOpen.mail}/>
                    <Link href={NavigationPath.MAP}>
                        <ListItem button>
                            <ListItemText primary={t.webMap}/>
                        </ListItem>
                    </Link>
                    <Seo onClick={onHandleOpen} isOpen={isOpen.seo}/>
                    <Addons onClick={onHandleOpen} isOpen={isOpen.addons}/>
                    <WebConfig onClick={onHandleOpen} isOpen={isOpen.webConfig}/>
                    <Link href={NavigationPath.CUSTOMBBS}>
                        <ListItem button>
                            <ListItemText primary={t.customBBS}/>
                        </ListItem>
                    </Link>
                    <Logs onClick={onHandleOpen} isOpen={isOpen.logs}/>
                    <Reports onClick={onHandleOpen} isOpen={isOpen.reports}/>
                </List>
            </div>
        </div>
    );
};

export default Navigation;
