import { ErrorBox } from "./ErrorBox";
import { Loading } from "./Loading";
import { Repositories } from "./Repositories";

export const Projects = ({ status, repositories }) => {
    switch (status) {
        case "initial":
            return null;

        case "loading":
            return <Loading />;

        case "error":
            return <ErrorBox />;

        case "success":
            return <Repositories repositories={repositories} />;

        default:
            throw new Error(`Incorrect status :${status}`);
    }
};