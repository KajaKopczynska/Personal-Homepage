import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import personalHomepageReducer from "../features/PersonalHomepage/PersonalHomepage/personalHomepageSlice";
import themeReducer from "../common/ThemeSwitch/themeSlice";
import { saga } from "./saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        theme: themeReducer,
        personalHomepage: personalHomepageReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(saga);

export default store;