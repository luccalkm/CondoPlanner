import React, { useState } from 'react';
import {
    Link,
    Typography,
    Container,
    CssBaseline,
    TextField,
    Box,
    Grid2,
    FormControlLabel,
    Checkbox,
    ListItemText,
    List,
    ListItem,
    ListItemIcon,
    Tooltip,
} from '@mui/material';
import SubmitButton from '../../../components/Buttons/SubmitButton';
import { AccountApi, RegisterUserDto } from "../../../apiClient";
import { ApiConfiguration } from "../../../apiClient/apiConfig";
import { CheckCircle, Cancel } from "@mui/icons-material";
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from '../../../context/SnackBarContext';

const passwordRules = {
    requireDigit: {
        label: "Deve conter pelo menos um dígito",
        test: (password: string) => /\d/.test(password),
    },
    requireLowercase: {
        label: "Deve conter pelo menos uma letra minúscula",
        test: (password: string) => /[a-z]/.test(password),
    },
    requireUppercase: {
        label: "Deve conter pelo menos uma letra maiúscula",
        test: (password: string) => /[A-Z]/.test(password),
    },
    requiredLength: {
        label: "Deve ter no mínimo 8 caracteres",
        test: (password: string) => password.length >= 8,
    },
};

const RegisterPage: React.FC = () => {
    const [registerForm, setRegisterForm] = useState<RegisterUserDto>({
        fullName: '',
        email: '',
        password: '',
        confirmationPassword: '',
        cpf: '',
        unitNumber: undefined,
        isAdmin: false
    });    
    
    const [passwordValidity, setPasswordValidity] = useState({
        requireDigit: false,
        requireLowercase: false,
        requireUppercase: false,
        requiredLength: false,
    });

    const [passwordsMatch, setPasswordsMatch] = useState(true);

    const navigate = useNavigate();
    const { showSnackbar } = useSnackbar();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setRegisterForm((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));

        if (name === 'password') {
            const newPassword = value;
            setPasswordValidity({
                requireDigit: passwordRules.requireDigit.test(newPassword),
                requireLowercase: passwordRules.requireLowercase.test(newPassword),
                requireUppercase: passwordRules.requireUppercase.test(newPassword),
                requiredLength: passwordRules.requiredLength.test(newPassword),
            });

            setPasswordsMatch(newPassword === registerForm.confirmationPassword);
        }

        if (name === 'confirmationPassword') {
            setPasswordsMatch(registerForm.password === value);
        }
    };

    const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();

        if (!passwordsMatch) {
            showSnackbar("As senhas não coincidem.", "error");
            return;
        }

        const allRulesPassed = Object.values(passwordValidity).every(Boolean);
        if (!allRulesPassed) {
            showSnackbar("A senha não atende todas as regras.", "error");
            return;
        }

        try {
            const accountApi = new AccountApi(ApiConfiguration);
            await accountApi.apiAccountRegisterPost({
                registerUserDto: {
                    ...registerForm,
                }
            });
            
            showSnackbar("Cadastro realizado com sucesso!", "success");

            setTimeout(() => {
                navigate('/login');
            }, 1500);
            
        } catch (error: any) {
            const errorMessage = error?.response?.data?.message || "Erro ao realizar cadastro. Verifique os dados e tente novamente.";
            showSnackbar(errorMessage, "error");
        }
    };

    return (
        <Container component="main">
            <Grid2
                container
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{
                    padding: 2,
                }}
            >
                <Grid2>
                    <Typography
                        component="h1"
                        variant="h5"
                        fontWeight="bold"
                        sx={{ mb: 2 }}
                    >
                        Faça o seu cadastro
                    </Typography>
                </Grid2>
                <Grid2 sx={{ width: '100%' }}>
                    <Box
                        component="form"
                        noValidate
                        sx={{
                            mt: 1,
                            width: '100%',
                        }}
                    >
                        <Grid2 container spacing={2}>
                            <Grid2 size={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="E-mail"
                                    name="email"
                                    autoComplete="email"
                                    value={registerForm.email}
                                    onChange={handleChange}
                                    sx={{
                                        backgroundColor: 'background.paper',
                                        borderRadius: 1,
                                    }}
                                />
                            </Grid2>
                            <Grid2 size={6}>
                                <Tooltip
                                    title={
                                        <List dense>
                                            {Object.keys(passwordRules).map((ruleKey) => (
                                                <ListItem key={ruleKey}>
                                                    <ListItemIcon>
                                                        {passwordValidity[ruleKey as keyof typeof passwordValidity] ? (
                                                            <CheckCircle color="success" fontSize="small" />
                                                        ) : (
                                                            <Cancel color="error" fontSize="small" />
                                                        )}
                                                    </ListItemIcon>
                                                    <ListItemText primary={passwordRules[ruleKey as keyof typeof passwordRules].label} />
                                                </ListItem>
                                            ))}
                                        </List>
                                    }
                                    placement="right"
                                    arrow
                                >
                                    <TextField
                                        variant="outlined"
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
                                </Tooltip>
                            </Grid2>
                            <Grid2 size={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="confirmationPassword"
                                    label="Confirmar senha"
                                    type="password"
                                    id="confirm-password"
                                    autoComplete="new-password"
                                    value={registerForm.confirmationPassword}
                                    onChange={handleChange}
                                    error={!passwordsMatch}
                                    helperText={!passwordsMatch ? "As senhas não coincidem." : ""}
                                    sx={{
                                        backgroundColor: 'background.paper',
                                        borderRadius: 1,
                                    }}
                                />
                            </Grid2>
                            <Grid2 size={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="fullName"
                                    label="Nome completo"
                                    name="fullName"
                                    autoComplete="fullName"
                                    value={registerForm.fullName}
                                    onChange={handleChange}
                                    sx={{
                                        backgroundColor: 'background.paper',
                                        borderRadius: 1,
                                    }}
                                />
                            </Grid2>
                            <Grid2 size={6}>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    name="cpf"
                                    label="CPF"
                                    type="text"
                                    id="cpf"
                                    autoComplete="cpf"
                                    value={registerForm.cpf}
                                    onChange={handleChange}
                                    sx={{
                                        backgroundColor: 'background.paper',
                                        borderRadius: 1,
                                    }}
                                />
                            </Grid2>
                            <Grid2 size={12}>
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    name="unitNumber"
                                    label="Número da Unidade"
                                    type="number"
                                    id="unitNumber"
                                    autoComplete="unit-number"
                                    value={registerForm.unitNumber || ''}
                                    onChange={handleChange}
                                    sx={{
                                        backgroundColor: 'background.paper',
                                        borderRadius: 1,
                                    }}
                                />
                            </Grid2>
                            <Grid2 size={12}>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            id="isAdmin"
                                            name="isAdmin"
                                            checked={registerForm.isAdmin}
                                            onChange={handleChange}
                                            color="primary"
                                        />
                                    }
                                    label="Administrador do condomínio"
                                />
                            </Grid2>
                        </Grid2>
                        <SubmitButton
                            onClick={handleSubmit}
                            label="Criar conta"
                            fullWidth
                            sx={{ mt: 3, mb: 3 }}
                        />
                        <Grid2 container justifyContent="center">
                            <Grid2>
                                <Link
                                    href="/login"
                                    variant="body1"
                                    underline="none"
                                    sx={{ color: 'primary.main' }}
                                >
                                    Já tenho conta
                                </Link>
                            </Grid2>
                        </Grid2>
                    </Box>
                </Grid2>
            </Grid2>
        </Container>
    );

};

export default RegisterPage;
