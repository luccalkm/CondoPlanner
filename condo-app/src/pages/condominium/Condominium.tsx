import { Box, TextField, Button, Typography, Divider } from '@mui/material';
import { useState } from 'react';
import Header from '../../components/header/Header'; // Ajuste o caminho conforme a estrutura do seu projeto
import Grid from '@mui/material/Grid2';

const CondominiumPage = () => {
    // Estados para armazenar os valores do formulário
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [numberOfResidences, setNumberOfResidences] = useState('');

    // Função de submissão do formulário
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const formData = {
            name,
            address,
            numberOfResidences: parseInt(numberOfResidences, 10),
        };

        console.log(formData);

        setName('');
        setAddress('');
        setNumberOfResidences('');
    };

    return (
        <>
            <Header title="Condomínio" />
            <Box
                sx={{
                    padding: 5,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
                }}
            >
                <Box sx={{ width: '100%', textAlign: 'start', marginBottom: 2 }}>
                    <Typography
                        component="h1"
                        variant="h5"
                        fontWeight="bold"
                    >
                        Cadastrar Condomínio
                    </Typography>
                </Box>
                <Divider sx={{ width: '100%', marginBottom: 3 }} />

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        padding: 2,
                    }}
                >
                    <Grid container spacing={2} width={'90%'}>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <TextField
                                label="Nome"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <TextField
                                label="Endereço"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <TextField
                                label="Número de Residências"
                                type="number"
                                value={numberOfResidences}
                                onChange={(e) => setNumberOfResidences(e.target.value)}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <TextField
                                label="CEP *"
                                type="text"
                                fullWidth
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <TextField
                                label="Cidade *"
                                type="text"
                                fullWidth
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <TextField
                                label="Estado *"
                                type="text"
                                fullWidth
                            />
                        </Grid>
                    </Grid>

                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{ marginTop: 2, width: '14em' }}
                    >
                        Registrar
                    </Button>
                </Box>
            </Box>
        </>
    );
};

export default CondominiumPage;
