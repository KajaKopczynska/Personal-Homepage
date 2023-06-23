import { useState } from "react";
import { Wrapper, Image, ThisIs, Name, Content, StyledButtonLink, HireMeIcon, ImageHover, ImageWrapper } from "./styled";
import myPhoto from "./images/myPhoto.jpg";
import myHoverPhoto from "./images/myHoverPhoto.jpg";
import { email } from "../email";


export const Header = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <Wrapper>
            <ImageWrapper>
                <Image
                    src={myPhoto}
                    alt="Kaja Kopczyńska"
                    className={isHovered ? "hovered" : ""}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                />
                <ImageHover
                    src={myHoverPhoto}
                    alt="Kaja Kopczyńska"
                    className={isHovered ? "" : "hovered"}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                />
            </ImageWrapper>
            <div>
                <ThisIs>This is</ThisIs>
                <Name>Kaja Kopczyńska</Name>
                <Content>
                    Hi! I'm a novice Frontend Developer with a strong passion for exploring new technologies, particularly in the realm of React. I'm an ambitious individual with a keen ability to learn quickly. I'm currently searching for a chance to use my skills in a job. Although I don't have any work experience yet, I want to assure you that I am committed and eager to learn. I'm confident that I can quickly adapt and contribute effectively to any project or team.
                </Content>
                <StyledButtonLink href={`mailto:${email}`} title={email}>
                    <HireMeIcon />
                    Hire Me
                </StyledButtonLink>
            </div>
        </Wrapper>
    );
};