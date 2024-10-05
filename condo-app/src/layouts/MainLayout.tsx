import {
    AppBar,
    Box,
    CssBaseline,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Toolbar,
    Typography,
} from '@mui/material';
import { Link as RouterLink, Outlet } from 'react-router-dom';

const drawerWidth = 240;

const MainLayout = () => {
    const drawerItems = [
        { text: 'Home', path: '/' },
        { text: 'About', path: '/about' },
        { text: 'Contact', path: '/contact' },
    ];

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        CondoPlanner
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
            >
                <Toolbar /> {/* Este Toolbar cria um espaço equivalente ao AppBar */}
                <List>
                    {drawerItems.map((item) => (
                        <ListItem key={item.text} component={RouterLink} to={item.path}>
                            <ListItemText primary={item.text} />
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
