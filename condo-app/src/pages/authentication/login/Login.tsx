// src/pages/authentication/login/Login.tsx
import React, { useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import {
    Link,
    Typography,
    TextField,
    Box,
    Grid2,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { LoginDto } from '../../../apiClient/models/LoginDto';
import { AccountApi } from '../../../apiClient';
import { ApiConfiguration } from '../../../apiClient/apiConfig';
import { useAuth } from '../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from '../../../context/SnackbarContext';

const LoginPage: React.FC = () => {
    const [loginForm, setLoginForm] = useState<LoginDto>({
        email: '',
        password: ''
    });
    const theme = useTheme();
    const authContext = useAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(false);

    const { showSnackbar } = useSnackbar();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setLoginForm((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        setLoading(true);

        if (!loginForm.email && !loginForm.password) {
            showSnackbar("Login ou senha inválidos. Tente novamente.", "error");
            setLoading(false);
            return;
        }

        try {
            const accountApi = new AccountApi(ApiConfiguration);
            const response = await accountApi.apiAccountLoginPost({
                loginDto: {
                    ...loginForm
                }
            });

            if (!response.success)
                throw new Error(response?.message?.toString());

            showSnackbar("Login realizado com sucesso! Redirecionando para página principal...", "success");
            const loginRes = response.data;
            authContext?.login(loginRes!);

            setTimeout(() => {
                navigate('/');
            }, 1500)
        } catch (error: any) {
            const errorMessage = error?.message || "Erro ao realizar login. Verifique os dados e tente novamente.";
            showSnackbar(errorMessage, "error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Grid2 container direction="column" alignItems="center" sx={{ mt: theme.spacing(5) }}>
            <Grid2>
                <Typography
                    component="h1"
                    variant="h5"
                    fontWeight="bold"
                    sx={{ mb: theme.spacing(2) }}
                >
                    Faça login em sua conta
                </Typography>
            </Grid2>
            <Grid2 sx={{ width: '100%' }}>
                <Box
                    component="form"
                    noValidate
                    sx={{
                        mt: theme.spacing(1),
                        width: '100%',
                    }}
                >
                    <Grid2 container spacing={2}>
                        <Grid2 size={12}>
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
                                value={loginForm.email}
                                onChange={handleChange}
                                sx={{
                                    backgroundColor: theme.palette.background.paper,
                                    borderRadius: theme.shape.borderRadius,
                                }}
                            />
                        </Grid2>
                        <Grid2 size={12}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Senha"
                                type="password"
                                value={loginForm.password}
                                onChange={handleChange}
                                sx={{
                                    backgroundColor: theme.palette.background.paper,
                                    borderRadius: theme.shape.borderRadius,
                                }}
                            />
                        </Grid2>
                    </Grid2>
                    <Grid2 container justifyContent="flex-end">
                        <Grid2>
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
                        </Grid2>
                    </Grid2>
                    <Grid2 size={12}>
                        <LoadingButton
                            variant='contained'
                            disabled={loading}
                            onClick={handleSubmit}
                            loading={loading}
                            fullWidth
                            sx={{
                                my: theme.spacing(3)
                            }}
                        >
                            Entrar
                        </LoadingButton>
                    </Grid2>
                    <Grid2 container justifyContent="center">
                        <Grid2>
                            <Link
                                href="/register"
                                variant="button"
                                underline="none"
                                sx={{ color: theme.palette.primary.main }}
                            >
                                Criar conta
                            </Link>
                        </Grid2>
                    </Grid2>
                </Box>
            </Grid2>
        </Grid2>
    );
};

export default LoginPage;
