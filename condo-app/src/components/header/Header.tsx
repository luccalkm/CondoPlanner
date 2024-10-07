import { Box, Typography, Button, Divider, useTheme } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';

interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    const theme = useTheme();

    return (
        <>
            <Box
                sx={{
                    padding: 2,
                    backgroundColor: '#f5f5f5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <Typography variant="h3" gutterBottom color={theme.palette.primary.main}>
                    {title}
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{
                        padding: 1.5,
                        display: 'flex',
                        alignItems: 'center',
                    }}
                    disabled
                >
                    <NotificationsIcon sx={{ marginRight: 1 }} />
                    Notificações
                </Button>
            </Box>
            <Divider sx={{ marginTop: 1 }} />
        </>
    );
};

export default Header;
