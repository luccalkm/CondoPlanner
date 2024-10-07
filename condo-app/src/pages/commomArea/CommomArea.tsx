import { useState } from "react";
import SubmitButton from "../../components/buttons/SubmitButton";
import Header from "../../components/header/Header";
import { Box, Grid, Paper, TextField, Typography } from "@mui/material";
import { ApiConfiguration } from "../../apiClient/apiConfig";
import { CommonAreaApi } from "../../apiClient";
import CurrencyTextField from '@lupus-ai/mui-currency-textfield';

const CommomAreaPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        capacity: 0,
        costPerHour: 0.0,
        availableFrom: '00:00',
        availableUntil: '00:00',
        condominiumId: 1,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        console.log(value)
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const { name, capacity, costPerHour, availableFrom, availableUntil } = formData;
        if (!name || !capacity || !costPerHour || !availableFrom || !availableUntil) {
            alert("Por favor, preencha todos os campos obrigatórios.");
            return;
        }
        console.log(formData)
        const api = new CommonAreaApi(ApiConfiguration);
        const res = await api.apiCommonAreaPost({
            createCommonAreaDto: {
                ...formData
            }
        });

        console.log(res);

        setFormData({
            name: '',
            capacity: 0,
            costPerHour: 0.0,
            availableFrom: '00:00',
            availableUntil: '00:00',
            condominiumId: 0,
        });
    };

    return (
        <>
            <Header title="Espaços comuns" />
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
                    Cadastrar Espaço Comum
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
                                label="Capacidade"
                                name="capacity"
                                type="number"
                                value={formData.capacity}
                                onChange={handleChange}
                                fullWidth
                                required
                                InputProps={{ inputProps: { min: 0 } }}
                            />
                        </Grid>
                    </Grid>
                </Box>

                <Box width='100%' marginBottom={4}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                label="Valor por hora"
                                name="costPerHour"
                                type="number"
                                value={formData.costPerHour}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        {/* <Grid item xs={12} sm={4}>
                            <CurrencyTextField
                                label="Valor por hora"
                                variant="outlined"
                                value={formData.costPerHour}
                                currencySymbol="$"
                                minimumValue="0"
                                outputFormat="number"
                                decimalCharacter=","
                                digitGroupSeparator="."
                                onChange={handleChange}
                            />
                        </Grid> */}
                        <Grid item xs={12} sm={4}>
                            <TextField
                                label="Disponível a partir de"
                                name="availableFrom"
                                type="time"
                                value={formData.availableFrom}
                                onChange={handleChange}
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <TextField
                                label="Disponível até"
                                name="availableUntil"
                                type="time"
                                value={formData.availableUntil}
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

export default CommomAreaPage;