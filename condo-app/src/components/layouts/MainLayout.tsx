import {
    Box,
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
} from '@mui/material';
import { Link as RouterLink, Outlet } from 'react-router-dom';
import {
    HomeRounded,
    CalendarMonthRounded,
    DashboardCustomizeRounded,
    ApartmentRounded,
    GroupRounded
} from '@mui/icons-material';

const drawerWidth = 320;

const MainLayout = () => {
    const theme = useTheme();

    const drawerItemsAdmin = [
        { text: 'Início', path: '/', icon: <HomeRounded /> },
        { text: 'Reservas', path: '/reservation', icon: <CalendarMonthRounded /> },
        { text: 'Moradores', path: '/contact', icon: <GroupRounded /> },
        { text: 'Espaços', path: '/contact', icon: <DashboardCustomizeRounded /> },
        { text: 'Condomínio', path: '/condominium', icon: <ApartmentRounded /> },
    ];

    return (
        <Box sx={{ display: 'flex' }}>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        bgcolor: theme.palette.primary.main,
                        color: 'white',
                    },
                }}
            >
                <Box sx={{ padding: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', marginTop: "0.6em", paddingLeft: '0.8em' }}>
                        <Avatar sx={{ width: 40, height: 40 }} />
                        <Box sx={{ marginLeft: 2 }}>
                            <Typography variant="body1">
                                Nome do Usuário
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'gray', fontSize: '0.85em' }}>
                                Condomínio
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}>
                        <Button variant="outlined" sx={{ color: 'white', borderColor: 'white', width: '90%' }}>
                            Editar Perfil
                        </Button>
                    </Box>
                </Box>

                <Divider sx={{ my: 1, bgcolor: 'white' }} />

                <List style={{paddingLeft: '0.8em'}}>
                    {drawerItemsAdmin.map((item) => (
                        <ListItem key={item.text} component={RouterLink} disablePadding to={item.path}>
                            <ListItemButton sx={{ color: 'white', '&:hover': { backgroundColor: '#0A3E54' } }}>
                                <ListItemIcon sx={{ color: 'white' }}>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Outlet /> {/* Renderiza o conteúdo da página aqui */}
            </Box>
        </Box>
    );
};

export default MainLayout;
