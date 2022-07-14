import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Link from "next/link";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { getLanguage } from "../../../helpers";
const useStyles = makeStyles((theme) => ({
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

const Reports = ({ onClick, isOpen }) => {
    const classes = useStyles();
    const t = getLanguage();
    const onHandleClick = (e) => {
        onClick("reports");
    };
    return (
        <>
            <ListItem button onClick={onHandleClick}>
                <ListItemText primary={t.reports} />
                {isOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={isOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ListItemText primary="Отчет по успешным выплатам" />
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <ListItemText primary="Отчет по не произведенным выплатам" />
                    </ListItem>
                </List>
            </Collapse>
        </>
    );
};
export default Reports;
