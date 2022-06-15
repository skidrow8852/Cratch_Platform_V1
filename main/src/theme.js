import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({

// This is for theme 'dark' and 'light' mode config
    config: {
        InitialColorMode: "dark",
        useSystemColorMode : true
    },

    // This is for Color Palette
    colors:{
        brand: {
            100: 'rgba(255, 255, 255, 0.6)',
            500: '#191A22',
            900: '#F5F8FA'
        },
        yellow: {
            100: '#FEE235',
            900: '#FFC831'
        },
        black: {
            100: '#111315',
            900: '#191A22'
            
        },
        pink: {
            900: '#FB5B78'
        },
        blue : {
            900: '#1473FB'
        },
        grey : "#D3D3D3",
        background : {
            100: '#111315'
        }

    },
    fonts : {
        body: 'Gilroy',
        heading: 'Archivo,sans-serif',
        regular: 'Oxanium'

    },
    fontWeights : {
        hairline : 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
    }
})

export default theme;