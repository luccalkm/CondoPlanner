import React, { useState } from 'react';
import {
    Button,
    Link,
    Typography,
    Container,
    CssBaseline,
    TextField,
    Box,
} from '@mui/material';

const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        console.log('Cadastro realizado', { email, password, confirmPassword });
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <img
                    src="/condo-logo.png"
                    alt="Logo"
                    style={{ width: '70%', height: 'auto', marginBottom: '3.6em' }}
                />
                <Typography component="h1" variant="h5" fontWeight={'bold'} marginBottom={2}>
                    Faça o seu cadastro
                </Typography>
                <div style={{ width: '100%', marginTop: 16 }}>
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        style={{ margin: '24px 0 24px' }}
                        onClick={handleSubmit}
                    >
                        Criar conta
                    </Button>
                    <Box display="flex" justifyContent="center" marginBottom={2} marginTop={2} width="100%">
                        <Link href="/login" variant="body1">
                            Já tenho conta
                        </Link>
                    </Box>
                </div>
            </div>
        </Container>
    );
};

export default RegisterPage;
