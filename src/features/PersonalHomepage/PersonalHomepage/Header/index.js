import { Wrapper, Image, ThisIs, Name, Content, StyledButtonLink, HireMeIcon } from "./styled";
import myPhoto from "./images/pobrane.png";

export const Header = () => (
    <Wrapper>
        <Image src={myPhoto} alt="Kaja Kopczyńska" />
        <div>
            <ThisIs>This is</ThisIs>
            <Name>Kaja Kopczyńska</Name>
            <Content>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Content>
            <StyledButtonLink href="mailto:kaja.a.kopczynska@gmail.com" title="kaja.a.kopczynska@gmail.com">
                <HireMeIcon />
                Hire Me
            </StyledButtonLink>
        </div>
    </Wrapper>
);