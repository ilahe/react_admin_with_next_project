import "../styles/main.scss";
import {wrapper} from "../src/redux/store";
import axios from "axios";
import Router from "next/router";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Layout from "src/components/_common/Layout";
import {postCheckToken} from "../src/redux/signIn/singInActions";
import {ThemeProvider} from '@material-ui/core';
import theme from "./theme";
import Loader from "../src/components/Loader/Loader";

function MyApp({Component, pageProps}) {
    useEffect(() => {
        dispatch(postCheckToken());
    }, []);
    const dispatch = useDispatch();
    const UNAUTHORIZED = 401;
    axios.interceptors.response.use(
        (res) => {
            return res;
        },
        (error) => {
            if (error.response.status === UNAUTHORIZED) {
                return Router.push("/signIn");
            }
            return Promise.reject(error);
        }
    );

    // console.log("This is what Router contains: ", Router);

    const [loading, setLoading] = useState(false);
    // const loading = useSelector(state => state.loading.loading);


    Router.events.on('routeChangeStart', (url) => {
        console.log('Route is changing...');
        setLoading(true)
    });

    Router.events.on('routeChangeComplete', (url) => {
        console.log('Route is changing is complete...');
        setLoading(false)
    })

    return (
        <Layout title="Dashboard">
            {/*<Loader/>*/}
            {
                loading ?
                    <Loader/>
                    :
                    <ThemeProvider theme={theme}>

                        {/*{loading && <Loader/>}*/}
                        <Component {...pageProps} />

                    </ThemeProvider>

            }
        </Layout>
    );
}

export default wrapper.withRedux(MyApp);
