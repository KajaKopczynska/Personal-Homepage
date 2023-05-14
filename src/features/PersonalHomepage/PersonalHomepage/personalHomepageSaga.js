import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getRepositories } from "./personalHomepageAPI";
import { fetchRepositories, fetchRepositoriesSuccess, fetchRepositoriesError } from "./personalHomepageSlice";

function* fetchRepositoriesHandler() {
    try {
        yield delay(1000);
        const repositories = yield call(getRepositories);
        yield put(fetchRepositoriesSuccess(repositories));
    } catch (error) {
        yield put(fetchRepositoriesError());
    }
};

export function* personalHomepageSaga() {
    yield takeLatest(fetchRepositories.type, fetchRepositoriesHandler);
};
