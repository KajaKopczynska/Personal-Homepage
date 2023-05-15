import styled from "styled-components";

export const Wrapper = styled.div`
    margin-top: 95px;
    display: grid;
    grid-gap: 32px;
    justify-items: center;
    text-align: center;
    color: ${({ theme }) => theme.color.textPrimary};

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-gap: 24px;
    }
`;

export const Header = styled.h3`
    font-weight: 700;
    font-size: 24px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 17px;
    }
`;

export const Paragraph = styled.p`
    margin: 0;
    font-size: 20px;
    line-height: 1.4;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 16px;
    }
`;

export const ButtonLink = styled.button`
    border: 1px solid ${({ theme }) => theme.color.buttonLink.border};
    font-size: 20px;
    background-color: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.buttonLink.text};
    font-size: 20px;
    font-weight: 600;
    padding: 12px 16px;
    border-radius: ${({ theme }) => theme.borderRadius};
    transition: box-shadow 0.3s;

    &:hover {
        box-shadow: 0 0 2px 2px
        ${({ theme }) => theme.color.buttonLink.shadow};
    }

    &:active {
        box-shadow: 0 -2px 0 0
        ${({ theme }) => theme.color.buttonLink.active};
    }

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        font-size: 18px;
    }
`;