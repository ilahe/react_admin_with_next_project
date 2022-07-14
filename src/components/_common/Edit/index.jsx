import * as React from "react";
import EditIcon from "@material-ui/icons/Edit";
import { makeStyles } from "@material-ui/core/styles";
import { MAIN } from "src/constants/color";

const useStyles = makeStyles({
    root: {
        color: MAIN,
        cursor: "pointer",
    },
});

const Edit = ({ id, onClick }) => {
    const classes = useStyles();
    const onHandleClick = () => {
        if (onClick && id) onClick(id);
    };
    return <EditIcon className={classes.root} onClick={onHandleClick} />;
};

export default Edit;
