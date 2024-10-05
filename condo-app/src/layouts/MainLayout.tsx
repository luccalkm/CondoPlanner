import {
    Box,
    CssBaseline,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar,
} from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link as RouterLink, Outlet } from 'react-router-dom';

const drawerWidth = 240;

const MainLayout = () => {
    const drawerItemsAdmin = [
        { text: 'Início', path: '/' },
        { text: 'Reservas', path: '/about' },
        { text: 'Espaços', path: '/contact' },
    ];

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        bgcolor: '#0F4B7E', // Define a cor de fundo do drawer
                        color: 'white', // Define a cor do texto
                    },
                }}
            >
                <Toolbar /> {/* Este Toolbar também cria um espaço no conteúdo principal */}
                <List>
                    {drawerItemsAdmin.map((item, index) => (
                        <ListItem key={item.text} component={RouterLink} disablePadding to={item.path}>
                            <ListItemButton sx={{ color: 'white', '&:hover': { backgroundColor: '#0A3E54' } }}>
                                <ListItemIcon sx={{ color: 'white' }}>
                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                </ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar /> {/* Este Toolbar também cria um espaço no conteúdo principal */}
                <Outlet /> {/* Renderiza o conteúdo da página aqui */}
            </Box>
        </Box>
    );
};

export default MainLayout;
