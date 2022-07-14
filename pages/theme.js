import { createMuiTheme } from "@material-ui/core";

const Theme = {
    palette: {
        secondary: {
            main: "#B90D5D"
        }
    },
    typography: {
        "fontFamily": `"Roboto", sans-serif`,
    }
}

const theme = createMuiTheme(Theme);

export default theme;

