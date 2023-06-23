
const colorName = {
    white: "#FFFFFF",
    whiteLilac: "#FBFBFE",
    anakiwa: "#8CC2FF",
    parsley: "rgba(20, 70, 32, 0.2)",
    porcelain: "#F2F3F4",
    ironTransparent: "rgba(209, 213, 218, 0.3)",
    mercury: "#E5E5E5",
    slateGray: "#6E7E91",
    shipCove: "#79abad",
    dodgerBlue: "#77b5ba",
    tropicalBlue: "#a3c7c9",
    scienceBlueLight: "rgba(72, 130, 135, 0.2)",
    scienceBlue: "#488287",
    violet: "#090A33",
    tundora: "#414141",
    lightBlack: "#313131",
    black: "#252525",
};

const commonTheme = {
    breakpoint: {
        mobileMax: 767,
        desktopMax: 1199,
    },
    boxShadow: "0 -2px 50px rgba(9, 10, 51, 0.02), 0 16px 58px rgba(9, 10, 51, 0.03)",
    borderRadius: "4px",
};

export const lightTheme = {
    ...commonTheme,
    color: {
        primary: colorName.scienceBlue,
        textPrimary: colorName.black,
        site: {
            background: colorName.whiteLilac,
            text: colorName.slateGray,
        },
        buttonLink: {
            text: colorName.white,
            border: colorName.ironTransparent,
            shadow: colorName.shipCove,
            active: colorName.parsley,
        },
        boxBackground: colorName.white,
        headerLine: colorName.mercury,
        tile: {
            border: colorName.porcelain,
            borderHover: colorName.tropicalBlue,
            header: colorName.scienceBlue,
        },
        link: {
            text: colorName.scienceBlue,
            underline: colorName.scienceBlueLight,
            hover: colorName.dodgerBlue,
        },
        socialIcons: {
            color: colorName.black,
            hover: colorName.scienceBlue,
        },
        themeSwitch: {
            background: colorName.mercury,
            icon: colorName.white,
        },
    }
};

export const darkTheme = {
    ...commonTheme,
    color: {
        primary: colorName.dodgerBlue,
        textPrimary: colorName.white,
        site: {
            background: colorName.black,
            text: colorName.white,
        },
        buttonLink: {
            text: colorName.white,
            border: colorName.ironTransparent,
            shadow: colorName.shipCove,
            active: colorName.parsley,
        },
        boxBackground: colorName.lightBlack,
        headerLine: colorName.tundora,
        tile: {
            border: colorName.tundora,
            borderHover: colorName.tropicalBlue,
            header: colorName.dodgerBlue,
        },
        link: {
            text: colorName.scienceBlue,
            underline: colorName.scienceBlueLight,
            hover: colorName.dodgerBlue,
        },
        socialIcons: {
            color: colorName.white,
            hover: colorName.scienceBlue,
        },
        themeSwitch: {
            background: colorName.slateGray,
            icon: colorName.black,
        },
    }
};