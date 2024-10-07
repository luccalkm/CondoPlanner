import { Box, Button, Grid, Paper, TextField, Typography } from "@mui/material";
import Header from "../../components/header/Header";
import { useState } from "react";
import SubmitButton from "../../components/Buttons/SubmitButton";
import { CondominiumApi } from "../../apiClient";
import { ApiConfiguration } from "../../apiClient/apiConfig";

export const Condominium = () => {
    const [formData, setFormData] = useState({
        name: '',
        address: '',
        numberOfResidences: '',
        cep: '',
        city: '',
        state: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const { name, address, numberOfResidences, cep, city, state } = formData;
        if (!name || !address || !numberOfResidences || !cep || !city || !state) {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }

        const submissionData = {
            ...formData,
            numberOfResidences: parseInt(formData.numberOfResidences, 10),
        };

        const api = new CondominiumApi(ApiConfiguration);
        const res = await api.apiCondominiumPost({
            condominiumCreateDto: {
                ...submissionData
            }
        });

        console.log(res)

        setFormData({
            name: '',
            address: '',
            numberOfResidences: '',
            cep: '',
            city: '',
            state: '',
        });
    };

    return (
        <>
            <Header title="Condomínio" />
            <Paper
                sx={{
                    marginTop: 5,
                    padding: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                }}
            >
                <Typography variant="h4" mb={5}>
                    Cadastrar Condomínio
                </Typography>

                <Box width='100%' marginBottom={4}>
                    <Typography variant="h6" gutterBottom>
                        Informações Gerais
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Nome"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Número de Residências"
                                name="numberOfResidences"
                                type="number"
                                value={formData.numberOfResidences}
                                onChange={handleChange}
                                fullWidth
                                required
                                InputProps={{ inputProps: { min: 0 } }}
                            />
                        </Grid>
                    </Grid>
                </Box>

                <Box width='100%' marginBottom={4}>
                    <Typography variant="h6" gutterBottom>
                        Endereço
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                label="Endereço"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                label="CEP"
                                name="cep"
                                type="text"
                                value={formData.cep}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                label="Cidade"
                                name="city"
                                type="text"
                                value={formData.city}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                label="Estado"
                                name="state"
                                type="text"
                                value={formData.state}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                        </Grid>
                    </Grid>
                </Box>

                <Box width='100%' display={'flex'} justifyContent={'flex-end'}>
                    <SubmitButton 
                        onClick={handleSubmit}
                        label={"Registrar"}
                    />
                </Box>
            </Paper>
        </>
    );
};