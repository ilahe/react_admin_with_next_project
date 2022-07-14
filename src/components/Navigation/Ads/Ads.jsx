import React from "react";
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { getLanguage } from "src/helpers";
import { categories } from "src/constants/path";

const useStyles = makeStyles((theme) => ({
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

const Ads = ({ onClick, isOpen }) => {
    const t = getLanguage();
    const classes = useStyles();
    const onHandleClick = (e) => {
        onClick("ads");
    };
    return (
        <>
            <ListItem button onClick={onHandleClick}>
                <ListItemText primary={t.ads} />
                {isOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={isOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem button className={classes.nested}>
                        <ListItemText primary="Список" />
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <ListItemText primary="Печать в прессе" />
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <ListItemText primary="Комментарии" />
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <ListItemText primary="Жалобы" />
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <ListItemText primary="Результаты поиска" />
                    </ListItem>
                    <Link href={categories}>
                        <ListItem button className={classes.nested}>
                            <ListItemText primary={t.category} />
                        </ListItem>
                    </Link>
                    <ListItem button className={classes.nested}>
                        <ListItemText primary="Услуги" />
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <ListItemText primary="Пакеты услуг" />
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <ListItemText primary="Импорт/Экспорт" />
                    </ListItem>
                    <ListItem button className={classes.nested}>
                        <ListItemText primary="Настройки" />
                    </ListItem>
                </List>
            </Collapse>
        </>
    );
};
export default Ads;
