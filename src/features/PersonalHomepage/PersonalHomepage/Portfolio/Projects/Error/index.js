import { ReactComponent as DangerIcon } from "./danger.svg";
import { Wrapper, Header, Paragraph, ButtonLink } from "./styled";


export const Error = () => (
    <Wrapper>
        <DangerIcon />
        <Header>Ooops! Something went wrong...</Header>
        <Paragraph>
            Sorry, failed to load Github projects.<br />
            You can check then directly on Github.
        </Paragraph>
        <ButtonLink
            href="https://github.com/KajaKopczynska"
            title="KajaKopczynska Github"
            target="_blank"
            rel="noreferrer noopener">
            Go to Github
        </ButtonLink>
    </Wrapper>
);