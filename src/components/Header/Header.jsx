import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { Logo } from "svg";
import { getLanguage } from "src/helpers";
import { MAIN } from "src/constants/color";
import { LogOut } from "src/helpers";

const useStyles = makeStyles((theme) => ({
    root: { backgroundColor: MAIN },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const Header = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const t = getLanguage();
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const onHandleLogOut = () => {
        LogOut();
        setAnchorEl(null);
    };
    return (
        <AppBar className={classes.root} position="static">
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    <Logo />
                </Typography>
                <div>
                    <IconButton
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleMenu}
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        open={open}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>{t.profile}</MenuItem>
                        <MenuItem onClick={onHandleLogOut}>{t.exit}</MenuItem>
                    </Menu>
                </div>
            </Toolbar>
        </AppBar>
    );
};
export default Header;
