import { Box, Button, TextField } from "@mui/material";
import Header from "../../components/header/Header";
import Grid from '@mui/material/Grid2';

const ReservationPage = () => {
    return (
        <>
            <Header title="Reservar Espaço" />
            <Box
                sx={{
                    padding: 5,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
                }}
            >
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
                                label="Selecione o Espaço"
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <TextField
                                label="Selecione a data"
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <TextField
                                label="Selecione o horário de início"
                                type="number"
                                fullWidth
                                required
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6 }}>
                            <TextField
                                label="Selecione o horário de término"
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
                        Reservar
                    </Button>
                </Box>
            </Box>
        </>
    );
};

export default ReservationPage;