
const colorName = {
        white: "#FFFFFF",
        whiteLilac: "#FBFBFE",
        anakiwa: "#8CC2FF",
        parsley: "rgba(20, 70, 32, 0.2)",
        porcelain: "#F2F3F4",
        ironTransparent: "rgba(209, 213, 218, 0.3)",
        mercury: "#E5E5E5",
        slateGray: "#6E7E91",
        shipCove: "#6D93BE",
        dodgerBlue: "#2188FF",
        tropicalBlue: "#CDE0F7",
        scienceBlueLight: "rgba(3, 102, 214, 0.2)",
        scienceBlue: "#0366D6",
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

export const lightMode = {
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
            shadow: colorName.anakiwa,
            active: colorName.parsley,
        },
        boxBackground: colorName.white,
        headerLine: colorName.mercury,
    }
};



// export const theme = {
//     color: {
//         white: "#FFFFFF",
//         whiteLilac: "#FBFBFE",
//         anakiwa: "#8CC2FF",
//         parsley: "rgba(20, 70, 32, 0.2)",
//         porcelain: "#F2F3F4",
//         ironTransparent: "rgba(209, 213, 218, 0.3)",
//         mercury: "#E5E5E5",
//         slateGray: "#6E7E91",
//         shipCove: "#6D93BE",
//         dodgerBlue: "#2188FF",
//         tropicalBlue: "#CDE0F7",
//         scienceBlueLight: "rgba(3, 102, 214, 0.2)",
//         scienceBlue: "#0366D6",
//         violet: "#090A33",
//         tundora: "#414141",
//         lightBlack: "#313131",
//         black: "#252525",
//     },
//     breakpoint: {
//         mobileMax: 767,
//         desktopMax: 1199,
//     },
//     boxShadow: "0 -2px 50px rgba(9, 10, 51, 0.02), 0 16px 58px rgba(9, 10, 51, 0.03)",
//     borderRadius: "4px",

// };