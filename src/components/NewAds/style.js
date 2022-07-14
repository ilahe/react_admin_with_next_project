import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    input: {
        width: "100%",
        margin: theme.spacing(1),
    },
    contact: {
        margin: theme.spacing(1),
    },
    contactInput: {
        width: "50%",
    },
    contactformControl: {
        width: "50%",
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        width: "100%",
    },
    radio: {
        margin: theme.spacing(1),
        display: "flex",
        justifyContent: "space-between",
    },
    priceColor: {
        "& p": {
            color: "red",
        },
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: "100%",
    },
}));

export default useStyles;
