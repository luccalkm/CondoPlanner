// src/pages/login/LoginPage.tsx
import React, { useState } from 'react';
import {
    Link,
    Typography,
    Container,
    CssBaseline,
    TextField,
    Box,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SubmitButton from "../../layouts/Buttons/SubmitButton";

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const theme = useTheme();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    mt: theme.spacing(8),
                }}
            >
                <Box
                    component="img"
                    src="/condo-logo.png"
                    alt="Logo"
                    sx={{
                        width: '70%',
                        height: 'auto',
                        mb: theme.spacing(6),
                    }}
                />
                <Typography
                    component="h1"
                    variant="h5"
                    fontWeight="bold"
                    sx={{ mb: theme.spacing(2) }}
                >
                    Faça login em sua conta
                </Typography>
                <Box
                    component="form"
                    noValidate
                    sx={{
                        mt: theme.spacing(1),
                        width: '100%',
                    }}
                >
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="E-mail"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        sx={{
                            backgroundColor: theme.palette.background.paper,
                            borderRadius: theme.shape.borderRadius,
                        }}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Senha"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        sx={{
                            backgroundColor: theme.palette.background.paper,
                            borderRadius: theme.shape.borderRadius,
                        }}
                    />
                    <Link
                        href="#"
                        variant="body2"
                        sx={{
                            display: 'block',
                            textAlign: 'right',
                            mt: theme.spacing(1),
                            color: theme.palette.primary.main,
                        }}
                    >
                        Esqueceu a senha?
                    </Link>
                    <SubmitButton
                        label="Entrar"
                        fullWidth
                        sx={{
                            mt: theme.spacing(3),
                            mb: theme.spacing(3),
                        }}
                    />
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            mt: theme.spacing(2),
                            mb: theme.spacing(2),
                            width: '100%',
                        }}
                    >
                        <Link 
                            href="/register" 
                            variant="button"
                            underline="none"
                            sx={{ color: theme.palette.primary.main }}
                        >
                            Criar conta
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};

export default LoginPage;
