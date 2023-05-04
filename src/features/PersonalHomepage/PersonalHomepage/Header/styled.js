import styled from "styled-components";
import { ReactComponent as EnvelopeIcon } from "./images/message.svg";


export const Wrapper = styled.header`
    margin-top: 30px; 
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 64px;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakpoint.desktopMax}px) {
        grid-gap: 32px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
        grid-gap: 12px;
    }
`;

export const Image = styled.img`
    max-width: 384px;
    width: 30vw;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        min-width: 133px;
    }
`;

export const ThisIs = styled.div`
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
`;

export const Name = styled.h1`
    font-size: 38px;
    font-weight: 900;
    color: ${({ theme }) => theme.color.textPrimary};
    margin: 12px 0 0 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 22px;
        margin-top: 8px;
    }
`;

export const Content = styled.p`
    font-weight: 400;
    line-height: 1.4;
    margin:35px 0 0 0;

    @media (max-width: ${({ theme }) => theme.breakpoint.desktopMax}px) {
        margin-top: 16px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin-top: 16px;
        max-width: 570px;
    }
`;

export const StyledButtonLink = styled.button`
    margin-top: 32px;
    display: inline-flex;
    align-items: center;
    font-size: 20px;
    font-weight: 600;
    padding: 12px 16px;
    color: rgba(209, 213, 218, 0.3);
    border: 1px solid ${({ theme }) => theme.color.buttonLink.border};
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.buttonLink.text};
    border-radius: ${({ theme }) => theme.borderRadius};
    transition: box-shadow 0.3s;

    &:hover {
        box-shadow: 0 0 2px 2px ${({ theme }) => theme.color.buttonLink.shadow};
    }
    &:active {
        box-shadow: 0 -2px 0 0 ${({ theme }) => theme.color.buttonLink.active};
    }
    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 18px;
    }
`;

export const HireMeIcon = styled(EnvelopeIcon)`
    margin-right: 16px;
`;