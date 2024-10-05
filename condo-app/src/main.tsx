import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App.tsx';
import './index.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from "./theme.ts";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <CssBaseline />
                <App />
            </BrowserRouter>
        </ThemeProvider>
    </StrictMode>,
);
