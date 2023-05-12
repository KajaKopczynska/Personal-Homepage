import axios from "axios";

const githubAPIBaseURL = "https://api.github.com";

export const getRepositories = () =>
    axios.get(`${githubAPIBaseURL}/users/KajaKopczynska/repos`)
        .then(response => response.data);