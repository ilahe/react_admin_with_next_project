import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import useStyles from "./styles";
import { getLanguage } from "../../helpers";
import { IconSite } from "../../../svg/index";

function Copyright() {
    const t = getLanguage();
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://XXXXX.az/">
                XXXX.az Admin Panel
            </Link>
            {""}
            {new Date().getFullYear()}
        </Typography>
    );
}
export default function SignIn({ postSignIn, logInError }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const classes = useStyles();
    const t = getLanguage();
    const logIn = (e) => {
        e.preventDefault();
        postSignIn({ username: username, password: password });
    };
    return (
        <div className={classes.root}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar
                        style={{
                            width: "69px",
                            height: "69px",
                            backgroundColor: "#CE0F68",
                        }}
                    >
                        <IconSite />
                    </Avatar>
                    <form className={classes.form} onSubmit={logIn} noValidate>
                        <TextField
                            error={logInError}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Name"
                            name="name"
                            autoComplete="name"
                            autoFocus
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            helperText={
                                logInError
                                    ? "Incorrect username or password"
                                    : ""
                            }
                            color="secondary"
                            classes={{ root: classes.input }}
                        />
                        <TextField
                            error={logInError}
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            color="secondary"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            style={{ backgroundColor: "#B90D5D" }}
                        >
                            {t.sigin}
                        </Button>
                    </form>
                </div>
                <Box mt={8}>
                    <Copyright />
                </Box>
            </Container>
        </div>
    );
}
