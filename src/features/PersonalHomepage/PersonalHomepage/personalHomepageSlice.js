import { createSlice } from "@reduxjs/toolkit";

const personalHomepageSlice = createSlice({
    name: "personalHomepage",
    initialState: {
        status: "",
        reposiories: [],
    },
    reducers: {
        fetchRepositories: () => ({
            status: "loading",
        }),
        fetchRepositoriesSuccess: (_, { payload: repositories }) => ({
            status: "success",
            repositories,
        }),
        fetchRepositoriesError: () => ({
            status: "error",
        }),
    },
});

export const {
    fetchRepositories,
    fetchRepositoriesSuccess,
    fetchRepositoriesError,
} = personalHomepageSlice.actions;

export const selectPersonalHomepageState = state => state.personalHomepage;

export default personalHomepageSlice.reducer;