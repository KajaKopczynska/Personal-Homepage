import { configureStore } from "@reduxjs/toolkit";
import personalHomepageReducer from "../features/PersonalHomepage/PersonalHomepage/personalHomepageSlice";

const store = configureStore({
    reducer: {
        personalHomepage: personalHomepageReducer,

    },
});

export default store;