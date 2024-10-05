import React, { useState } from 'react';
import {
    Link,
    Typography,
    Container,
    CssBaseline,
    TextField,
    Box,
} from '@mui/material';
import SubmitButton from '../../layouts/Buttons/SubmitButton';
import { useNavigate } from 'react-router-dom';
import { AccountApi, RegisterUserDto } from "../../apiClient";

const RegisterPage: React.FC = () => {
    const [registerForm, setRegisterForm] = useState<RegisterUserDto>({
        email: '',
        password: '',
        confirmationPassword: '',
        cpf: '',
        unitNumber: undefined,
        isAdmin: false
    });
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setRegisterForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const accountApi = new AccountApi();
        await accountApi.apiAccountRegisterPost({
            registerUserDto: {
                ...registerForm
            }
        }).then((res) => {
            navigate('/home');
        }).finally(() => {

        })
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    mt: 8,
                }}
            >
                <Box
                    component="img"
                    src="/condo-logo.png"
                    alt="Logo"
                    sx={{
                        width: '70%',
                        height: 'auto',
                        mb: 6,
                    }}
                />
                <Typography
                    component="h1"
                    variant="h5"
                    fontWeight="bold"
                    sx={{ mb: 2 }}
                >
                    Faça o seu cadastro
                </Typography>
                <Box
                    component="form"
                    noValidate
                    onSubmit={handleSubmit}
                    sx={{ mt: 1, width: '100%' }}
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
                        value={registerForm.email}
                        onChange={handleChange}
                        sx={{
                            backgroundColor: 'background.paper',
                            borderRadius: 1,
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
                        autoComplete="new-password"
                        value={registerForm.password}
                        onChange={handleChange}
                        sx={{
                            backgroundColor: 'background.paper',
                            borderRadius: 1,
                        }}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="confirmPassword"
                        label="Confirmar senha"
                        type="password"
                        id="confirm-password"
                        autoComplete="new-password"
                        value={registerForm.confirmPassword}
                        onChange={handleChange}
                        sx={{
                            backgroundColor: 'background.paper',
                            borderRadius: 1,
                        }}
                    />
                    <SubmitButton
                        label="Criar conta"
                        fullWidth
                        sx={{ mt: 3, mb: 3 }}
                    />
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            mt: 2,
                            mb: 2,
                            width: '100%',
                        }}
                    >
                        <Link
                            href="/login"
                            variant="button"
                            underline="none"
                            sx={{ color: 'primary.main' }}
                        >
                            Já tenho conta
                        </Link>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};

export default RegisterPage;
