import React, { useState } from 'react';
import {
    Link,
    Typography,
    TextField,
    Box,
    Grid2,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SubmitButton from "../../../components/Buttons/SubmitButton";
import { LoginDto } from '../../../apiClient/models/LoginDto';
import { AccountApi } from '../../../apiClient';
import { ApiConfiguration } from '../../../apiClient/apiConfig';
import { useAuth } from '../../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
    const [loginForm, setLoginForm] = useState<LoginDto>({
        email: '',
        password: ''
    });
    const theme = useTheme();
    const authContext = useAuth();
    const navigate = useNavigate();

    const [snackbar, setSnackbar] = useState<{
        open: boolean;
        message: string;
        severity: 'success' | 'error';
    }>({
        open: false,
        message: '',
        severity: 'success',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setLoginForm((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        const accountApi = new AccountApi(ApiConfiguration);
        try {
            const response = await accountApi.apiAccountLoginPost({ 
                loginDto: {
                    ...loginForm
                }}
            )
    
            console.log(response)
        } catch (error: any) {
            const errorMessage = error?.response?.data?.message || "Erro ao realizar login. Verifique os dados e tente novamente.";
            setSnackbar({
                open: true,
                message: errorMessage,
                severity: "error",
            });
        }
    }

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
                                <SubmitButton
                                    onClick={handleSubmit}
                                    label="Entrar"
                                    fullWidth
                                    sx={{
                                        mt: theme.spacing(3),
                                        mb: theme.spacing(3),
                                    }}
                                />
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
