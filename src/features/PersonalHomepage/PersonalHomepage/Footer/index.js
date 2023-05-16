import { email } from "../email";
import { SocialIcons } from "./SocialIcons";
import { Address, Contact, EmailWrapper, FooterContent, LetsTalk, Wrapper } from "./styled";


export const Footer = () => (
    <Wrapper>
        <LetsTalk>Let's talk!</LetsTalk>
        <Address>
            <EmailWrapper>
                <Contact href={`mailto:${email}`}>
                    {email}
                </Contact>
            </EmailWrapper>
            <FooterContent>
            I'm always excited to start new projects. If you have an idea for a website, dashboard, or mobile app and need help making it happen, feel free to contact me! I'm here to support you and turn your ideas into a reality.
            </FooterContent>
            <SocialIcons />
        </Address>
    </Wrapper>
);