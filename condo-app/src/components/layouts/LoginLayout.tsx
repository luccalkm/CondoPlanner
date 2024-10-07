import { Typography, Box, Link, Paper, Grid2, Grid } from '@mui/material';
import { Navigate, Outlet } from 'react-router-dom';
import theme from '../../theme';
import { useAuth } from '../../context/AuthContext';

const Copyright = () => {
    return (
        <Box bgcolor="#0F4B7E" py={2} textAlign="center">
            <Typography variant="body2" color="white">
                {'Copyright © '}
                <Link color="inherit" href="#">
                    CondoPlanner
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </Box>
    );
};

const FormLogo = () => {
    return (
        
        <Grid
            item
            display="flex"
            justifyContent="center"
            alignItems="center"
            mb={theme.spacing(3)}
        >
        <Box
            component="img"
            src="/7f3f20b58ae010ac38b20ff44ab03ae7.png"
            alt="Imagem de Login"
            width={'50%'}
        />
    </Grid>
    )
}

const LoginLayout = () => {
    const { isLoggedIn } = useAuth();

    if (isLoggedIn()) {
        return <Navigate to={"/"} replace />
    }
    
    return (
        <Box
            display="flex"
            flexDirection="column"
            minHeight="100vh"
            bgcolor="#0F4B7E"
        >
            <Grid2
                container
                flexDirection={'column'}
                margin={'auto'}
                sx={{minWidth: "30%", paddingBottom: 5, maxWidth: "40%"}}
                gap={3}
            >
                <Paper
                    elevation={1}
                    style={{padding: theme.spacing(4)}}
                >
                    <FormLogo />
                    <Outlet /> 
                </Paper>
            </Grid2>
            <Copyright />
        </Box>
    );
};

export default LoginLayout;
