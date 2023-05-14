import {Repositories} from "./Repositories";

export const Projects = ({status, repositories}) => {
switch(status) {
    case "initial":
        return null;
    
    case "success":
        return <Repositories repositories={repositories} />
}
};