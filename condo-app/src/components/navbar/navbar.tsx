import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Meu App
                </Typography>
                <IconButton color="inherit" component={Link} to="/">
                    <HomeIcon />
                </IconButton>
                <IconButton color="inherit" component={Link} to="/sobre">
                    <InfoIcon />
                </IconButton>
                <IconButton color="inherit" component={Link} to="/contato">
                    <ContactMailIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
