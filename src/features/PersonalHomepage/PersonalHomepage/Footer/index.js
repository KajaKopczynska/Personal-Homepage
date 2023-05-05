import { SocialIcons } from "./SocialIcons";
import { Address, Contact, EmailWrapper, FooterContent, LetsTalk, Wrapper } from "./styled";


export const Footer = () => (
    <Wrapper>
        <LetsTalk>Let's talk!</LetsTalk>
        <Address>
            <EmailWrapper>
                <Contact href="mailto:kaja.a.kopczynska@gmail.com">
                    kaja.a.kopczynska@gmail.com
                </Contact>
            </EmailWrapper>
            <FooterContent>
                I’m always open to new projects whenever I have the time. If you have a website, dashboard or mobile app in mind and need some help to make your ideas come to life, feel free to conatct me!
            </FooterContent>
            <SocialIcons />
        </Address>
    </Wrapper>
);