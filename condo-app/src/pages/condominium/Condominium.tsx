import { Typography, Paper, Box, Grid, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { CondominiumApi, CondominiumDto } from "../../apiClient";
import { ApiConfiguration } from "../../apiClient/apiConfig";
import SubmitButton from "../../components/Buttons/SubmitButton";
import Header from "../../components/header/Header";
import { useAuth } from "../../context/AuthContext";
import { useSnackbar } from "../../context/SnackBarContext";

const DEFAULT_VALUE = {
    name: '',
    address: '',
    numberOfResidences: 0,
    cep: '',
    city: '',
    state: '',
};


export const Condominium: React.FC = () => {
    const api = new CondominiumApi(ApiConfiguration);
    const { getLoggedId } = useAuth();
    const { showSnackbar } = useSnackbar();
    
    const [formData, setFormData] = useState(DEFAULT_VALUE);
    const [isEditMode, setIsEditMode] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);
    const [condominium, setCondominium] = useState<CondominiumDto | undefined>(undefined);

    useEffect(() => {
        handleCondominiumRegistered();
    }, []);

    // Função para verificar se o condomínio já está registrado
    const handleCondominiumRegistered = async () => {
        const userId = getLoggedId();

        if (!userId) {
            showSnackbar("Ocorreu um erro. Reautentique e tente novamente.", "error");
            setLoading(false);
            return;
        }

        try {
            const res = await api.apiCondominiumAdminUserIdGet({ userId });

            if (!res.data) return;

            if (res!.data!.length > 0) {
                setIsEditMode(true);
                const condominium = res.data[0]!;
                setCondominium(condominium);
                setFormData({
                    name: condominium.name || '',
                    address: condominium.address || '',
                    numberOfResidences: condominium.residents!.length,
                    cep: "",
                    city: "",
                    state: ""
                });
            } else {
                setIsEditMode(false);
                setFormData(DEFAULT_VALUE);
            }
        } catch (error: any) {
            showSnackbar("Erro ao verificar o condomínio cadastrado. Tente novamente.", "error");
        } finally {
            setLoading(false);
        }
    };

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
            showSnackbar("Por favor, preencha todos os campos obrigatórios.", "error");
            return;
        }

        const submissionData = {
            ...formData,
            numberOfResidences: formData.numberOfResidences
        };

        try {
            // if (isEditMode && condominiumId) {
            //     // Supondo que exista um endpoint para atualizar, como apiCondominiumPut
            //     const res = await api.apiCondominiumPut({
            //         id: condominiumId,
            //         condominiumUpdateDto: {
            //             ...submissionData,
            //             idAdministrator: getLoggedId()
            //         }
            //     });

            //     showSnackbar("Condomínio atualizado com sucesso!", "success");
            // } else {
                const res = await api.apiCondominiumPost({
                    condominiumCreateDto: {
                        ...submissionData,
                        idAdministrator: getLoggedId()
                    }
                });
                debugger;
                if (!res.success) {
                    showSnackbar(res?.message || "Um erro inesperado ocorreu ao registar o condomínio!" , "error");
                    return;
                }

                showSnackbar("Condomínio registrado com sucesso!", "success");
                setFormData(DEFAULT_VALUE);
                setIsEditMode(true);
            // }
        } catch (ex: any) {
            const errorMessage = ex?.response?.data?.message || "Erro ao realizar operação.";
            showSnackbar(errorMessage, "error");
        }
    };

    if (loading) {
        return (
            <>
                <Header title="Condomínio" />
                <Typography variant="h6" align="center" mt={5}>
                    Carregando...
                </Typography>
            </>
        );
    }

    return (
        <>
            <Header title={isEditMode ? "Editar Condomínio" : "Cadastrar Condomínio"} />
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
                    {isEditMode ? "Editar Condomínio" : "Cadastrar Condomínio"}
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
                                label="Avenida/Rua/Logradouro"
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
                        label={isEditMode ? "Atualizar" : "Registrar"}
                    />
                </Box>
            </Paper>
        </>
    );
};