import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { red, green, amber, blue as muiBlue } from '@mui/material/colors';

const primaryColor = '#0F4B7E';
const secondaryColor = '#FF6B6B';

let theme = createTheme({
    palette: {
        primary: {
            main: primaryColor,
            contrastText: '#FFFFFF',
        },
        secondary: {
            main: secondaryColor,
            contrastText: '#FFFFFF',
        },
        error: {
            main: red.A400,
        },
        success: {
            main: green.A400,
        },
        warning: {
            main: amber.A400,
        },
        info: {
            main: muiBlue.A400,
        },
        background: {
            default: '#F5F5F5',
            paper: '#FFFFFF',
        },
        text: {
            primary: '#1F2937',
            secondary: '#6B7280',
        },

        grey: {
            50: '#F9FAFB',
            100: '#F3F4F6',
            200: '#E5E7EB',
            300: '#D1D5DB',
            400: '#9CA3AF',
            500: '#6B7280',
            600: '#4B5563',
            700: '#374151',
            800: '#1F2937',
            900: '#111827',
        },
    },
    typography: {
        fontFamily: 'Inter, sans-serif',
        h1: {
            fontSize: '2.5rem',
            fontWeight: 700,
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
        },
        h2: {
            fontSize: '2rem',
            fontWeight: 700,
            lineHeight: 1.3,
            letterSpacing: '-0.01em',
        },
        h3: {
            fontSize: '1.75rem',
            fontWeight: 700,
            lineHeight: 1.4,
            letterSpacing: '0em',
        },
        h4: {
            fontSize: '1.5rem',
            fontWeight: 700,
            lineHeight: 1.5,
            letterSpacing: '0.01em',
        },
        h5: {
            fontSize: '1.25rem',
            fontWeight: 700,
            lineHeight: 1.6,
            letterSpacing: '0.02em',
        },
        h6: {
            fontSize: '1rem',
            fontWeight: 700,
            lineHeight: 1.75,
            letterSpacing: '0.03em',
        },
        body1: {
            fontSize: '1rem',
            fontWeight: 400,
            lineHeight: 1.5,
            letterSpacing: '0em',
        },
        body2: {
            fontSize: '0.875rem',
            fontWeight: 400,
            lineHeight: 1.43,
            letterSpacing: '0.01em',
        },
        button: {
            fontSize: '0.875rem',
            fontWeight: 600,
            textTransform: 'uppercase',
        },
        caption: {
            fontSize: '0.75rem',
            fontWeight: 400,
            lineHeight: 1.66,
            letterSpacing: '0.033em',
        },

    },
    spacing: 8,
    shape: {
        borderRadius: 8,
    },
    components: {

        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    textTransform: 'none',
                    padding: '8px 16px',
                },
                containedPrimary: {
                    backgroundColor: primaryColor,
                    '&:hover': {
                        backgroundColor: '#0D3B6C',
                    },
                },
                containedSecondary: {
                    backgroundColor: secondaryColor,
                    '&:hover': {
                        backgroundColor: '#E55A5A',
                    },
                },
            },
        },
    },
});

theme = responsiveFontSizes(theme);

export default theme;
