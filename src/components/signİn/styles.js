import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
    console.log(theme);

    return {
        root: {
            display: "flex",
            alignItems: "center",
            height: "100vh",
            width: "100%",
        },
        paper: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        },
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main,
        },
        form: {
            width: "100%",
            marginTop: theme.spacing(1),
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
            padding: "8px 16px"
        },
        // input: {
        //     '&:hover': {
        //         '& > fieldset': {
        //             color: 'orange'
        //         }
        //     }
        // }
    }
});


export default useStyles;
