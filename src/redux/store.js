import { createStore, applyMiddleware, compose } from "redux";
import RootReducer from "./RootReducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import { createWrapper } from "next-redux-wrapper";

const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== "production") {
        const { composeWithDevTools } = require("redux-devtools-extension");
        return composeWithDevTools(applyMiddleware(...middleware));
    }
    return applyMiddleware(...middleware);
};

export const makeStore = (context) =>{
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(RootReducer, bindMiddleware([sagaMiddleware]));
    store.sagaTask = sagaMiddleware.run(rootSaga);
    return store;
}



export const wrapper = createWrapper(makeStore, { debug: false });

export default wrapper;
