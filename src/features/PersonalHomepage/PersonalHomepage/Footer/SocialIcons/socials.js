import { ReactComponent as GithubIcon } from "./icons/github.svg";
import { ReactComponent as LinkedinIcon} from "./icons/linkedIn.svg";
import { styleIcon } from "./styled";

export const socials = [
    {
        name: "GitHub",
        url: "https://github.com/KajaKopczynska",
        Icon: styleIcon(GithubIcon),
    },

    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kaja-kopczy%C5%84ska-04153114a/",
        Icon: styleIcon(LinkedinIcon),
    },
];