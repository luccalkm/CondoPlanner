import React from 'react';
import {
    Grid,
    CssBaseline,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    Divider,
    Avatar,
    Button,
    useTheme,
    useMediaQuery,
    styled,
} from '@mui/material';
import { Link as RouterLink, Outlet } from 'react-router-dom';
import {
    HomeRounded,
    CalendarMonthRounded,
    DashboardCustomizeRounded,
    ApartmentRounded,
    GroupRounded,
    Logout
} from '@mui/icons-material';
import { useAuth } from '../../context/AuthContext';

const drawerWidth = 320;
const StyledDrawer = styled(Drawer)(({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        borderRight: `1px solid ${theme.palette.divider}`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
}));

const MainLayout = () => {
    const theme = useTheme();
    const { logout, loginResponse } = useAuth();

    const drawerItemsAdmin = [
        { text: 'Início', path: '/', icon: <HomeRounded /> },
        { text: 'Reservas', path: '/reservation', icon: <CalendarMonthRounded /> },
        { text: 'Moradores', path: '/contact', icon: <GroupRounded /> },
        { text: 'Espaços', path: '/commom-area', icon: <DashboardCustomizeRounded /> },
        { text: 'Condomínio', path: '/condominium', icon: <ApartmentRounded /> },
    ];

    const handleLogout = () => {
        logout();
    };

    return (
        <Grid container>
            <CssBaseline />
            <StyledDrawer variant="permanent">
                <Grid container direction="column">
                    <Grid container spacing={2} sx={{ p: theme.spacing(2) }}>
                        <Grid item xs={12}>
                            <Grid container alignItems="center" spacing={2}>
                                <Grid item>
                                    <Avatar sx={{ width: 40, height: 40 }} />
                                </Grid>
                                <Grid item>
                                    <Typography variant="body1">
                                        {loginResponse?.username}
                                    </Typography>
                                    <Typography variant="body2" sx={{ color: theme.palette.grey[300] }}>
                                        Condomínio
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                fullWidth
                                variant="outlined"
                                sx={{
                                    color: theme.palette.primary.contrastText,
                                    borderColor: theme.palette.primary.contrastText,
                                    '&:hover': {
                                        background: theme.palette.primary.dark,
                                    },
                                }}
                            >
                                Editar Perfil
                            </Button>
                        </Grid>
                    </Grid>
                    <Divider sx={{ bgcolor: theme.palette.grey[300] }} />
                    <List>
                        {drawerItemsAdmin.map((item) => (
                            <ListItem
                                key={item.text}
                                component={RouterLink}
                                disablePadding
                                to={item.path}
                            >
                                <ListItemButton
                                    sx={{
                                        color: theme.palette.primary.contrastText,
                                        '&:hover': {
                                            backgroundColor: theme.palette.primary.dark,
                                        },
                                    }}
                                >
                                    <ListItemIcon sx={{ color: theme.palette.primary.contrastText }}>
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Grid>

                <Grid item sx={{ p: 2 }}>
                    <Button
                        fullWidth
                        startIcon={<Logout />}
                        variant='contained'
                        sx={{
                            marginTop: 2,
                        }}
                        color='secondary'
                        onClick={handleLogout}
                    >
                        Sair
                    </Button>
                </Grid>
            </StyledDrawer>

            <Grid
                item
                component="main"
                sx={{
                    flexGrow: 1,
                    p: theme.spacing(3),
                    backgroundColor: theme.palette.background.default,
                    minHeight: '100vh',
                }}
            >
                <Outlet />
            </Grid>
        </Grid>
    );
};

export default MainLayout;
