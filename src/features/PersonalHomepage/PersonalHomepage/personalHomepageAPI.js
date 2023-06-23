import axios from "axios";

const githubAPIBaseURL = "https://api.github.com";

export const getRepositories = () =>
    axios.get(`${githubAPIBaseURL}/users/KajaKopczynska/repos`)
        .then((response) => {
            const repositories = response.data;
            return repositories.filter((repo) => repo.has_pages);
        });