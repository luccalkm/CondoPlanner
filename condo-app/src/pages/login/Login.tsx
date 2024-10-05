import { useState } from 'react';
import {
    Button,
    Link,
    Typography,
    Container,
    CssBaseline,
    TextField,
    Box,
} from '@mui/material';
import { useNavigate } from 'react-router-dom'; 


const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); 

    const handleSubmit = () => {
        console.log('Login', {email , password})
        navigate('/home');
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
                    Faça login em sua conta
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
                        autoComplete="current-password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Link href="#" variant="body2">
                        Esqueceu a senha?
                    </Link>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        style={{ margin: '24px 0 24px' }}
                        onClick={handleSubmit}
                    >
                        Entrar
                    </Button>
                    <Box display="flex" justifyContent="center" marginBottom={2} marginTop={2} width="100%">
                        <Link href="/register" variant="body1">
                            Criar conta
                        </Link>
                    </Box>
                </div>
            </div>
        </Container>
    );
};

export default LoginPage;
