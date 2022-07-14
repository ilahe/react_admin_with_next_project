import dynamic from "next/dynamic";
import { makeStyles } from "@material-ui/core/styles";
// Components
import Navigation from "../Navigation";
import Header from "../Header";
import SEO from "./SEO";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        width: "100%",
        backgroundColor: theme.palette.background.paper,
    },
    nav: {
        // width: "20%",
        width: "360px",
        flex: "1",
        [theme.breakpoints.down(768)]: {
            width: "100%",
            height: "100%",
            position: "absolute",
            left: "0"
        }
    },
    main: {
        width: "100%",
        margin: "0 20px"
    },

}));

const Layout = ({
    children,
    title,
    description,
    url,
    thumbnail,
    type = "default",
    categories,
}) => {
    const router = useRouter();
    const classes = useStyles();
    return (
        <>
            <SEO
                title={title}
                description={description}
                url={url}
                thumbnail={thumbnail}
            />
            {router.pathname !== "/signIn" ? (
                <>
                    <Header />
                    <div className={classes.root}>
                        <nav className={classes.nav}>
                            <Navigation />
                        </nav>
                        <main className={classes.main}>{children}</main>
                    </div>
                </>
            ) : (
                <main>{children}</main>
            )}
        </>
    );
};

export default Layout;
