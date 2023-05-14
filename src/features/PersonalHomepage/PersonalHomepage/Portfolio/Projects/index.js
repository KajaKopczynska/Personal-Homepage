import {Repositories} from "./Repositories";

export const Projects = ({status, repositories}) => {
    return <Repositories repositories={repositories} />
switch(status) {
    case "initial":
        return null;
    
    case "success":
        return <Repositories repositories={repositories} />
}
};