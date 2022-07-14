import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Link from "next/link";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import AddIcon from "@material-ui/icons/Add";
import { getLanguage } from "src/helpers";
import {
    customers,
    roles,
    administration,
    createAdministration,
    createCustomer,
    createRole,
} from "src/constants/path";

const useStyles = makeStyles((theme) => ({
    nested: {
        paddingLeft: theme.spacing(4),
        cursor: "default",
        display: "flex",
        justifyContent: "space-around",
        "& span": {
            width: "50%",
            cursor: "pointer",
        },
        "& svg": {
            cursor: "pointer",
            fontSize: "1em",
        },
    },
}));

const Members = ({ onClick, isOpen }) => {
    const t = getLanguage();
    const classes = useStyles();

    const onHandleClick = (e) => {
        onClick("members");
    };
    return (
        <>
            <ListItem button onClick={onHandleClick}>
                <ListItemText primary={t.members} />
                {isOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={isOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <Link href={administration}>
                            <ListItemText primary={t.administration} />
                        </Link>
                        <Link href={createAdministration}>
                            <AddIcon />
                        </Link>
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <Link href={customers}>
                            <ListItemText primary={t.customers} />
                        </Link>
                        <Link href={createCustomer}>
                            <AddIcon />
                        </Link>
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <Link href={roles}>
                            <ListItemText primary={t.roles} />
                        </Link>
                        <Link href={createRole}>
                            <AddIcon />
                        </Link>
                    </ListItem>
                </List>
            </Collapse>
        </>
    );
};
export default Members;
