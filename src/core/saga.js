import { all } from "redux-saga/effects";
import { personalHomepageSaga } from "../features/PersonalHomepage/PersonalHomepage/personalHomepageSaga";
import { themeSaga } from "../common/ThemeSwitch/themeSaga";

export function* saga() {
    yield all([
        themeSaga(),
        personalHomepageSaga(),
    ]);
};