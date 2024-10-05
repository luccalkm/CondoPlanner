import { Typography, Box, Link } from '@mui/material';
import { Outlet } from 'react-router-dom';

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

const LoginLayout = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            minHeight="100vh"
            bgcolor="#0F4B7E"
        >
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flexGrow={1}
                p={6}
            >
                <Box
                    component="form"
                    bgcolor="white"
                    borderRadius="10px"
                    boxShadow={3}
                    p={4}
                    width="500px"
                >
                    <Outlet /> 
                </Box>
            </Box>
            <Copyright />
        </Box>
    );
};

export default LoginLayout;
