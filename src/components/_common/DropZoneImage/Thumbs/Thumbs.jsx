import * as React from "react";
import EditIcon from "@material-ui/icons/Edit";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    thumb: {
        position: "relative",
        borderRadius: 2,
        border: "1px solid #eaeaea",
        marginBottom: 8,
        marginRight: 8,
        width: 80,
        height: 80,
        padding: 4,
        boxSizing: "border-box",
    },
    thumbInner: {
        display: "flex",
        minWidth: 0,
        overflow: "hidden",
    },
    img: {
        display: "block",
        width: 80,
        height: 80,
    },
    edit: {
        position: "absolute",
        top: "5%",
        left: "10%",
    },
}));

const Thumbs = ({ file }) => {
    const classes = useStyles();

    return (
        <div className={classes.thumb}>
            <div className={classes.thumbInner}>
                <img src={file.base64} className={classes.img} />
            </div>
        </div>
    );
};

export default Thumbs;
