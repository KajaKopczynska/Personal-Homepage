import styled from "styled-components";
import { ReactComponent as GithubIcon } from "./github.svg";

export const Section = styled.section`
    margin-top: 72px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin-bottom: 48px;
    }
`;

export const Header = styled.header`
    text-align: center;
`;

export const StyledGithubIcon = styled(GithubIcon)`
    color: ${({ theme }) => theme.color.primary};
    margin-bottom: 8px;
`;

export const SubHeader = styled.h2`
    margin: 0;
    font-size: 30px;
    font-weight: 900;
    color: ${({ theme }) => theme.color.textPrimary};
    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 18px;
    }
`;

export const SubTitle = styled.h3`
    font-size: 20px;
    font-weight: 400;
    color: ${({ theme }) => theme.color.textPrimary};
    margin-top: 8px;
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 17px;
    }
`;