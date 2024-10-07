import React from 'react';
import {
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    Button,
    Box,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface CustomCardProps {
    imageSrc: string;
    imageAlt: string;
    title: string;
    description: string;
    onViewMore: () => void;
    onReserve: () => void;
}

const SummaryCard: React.FC<CustomCardProps> = ({
    imageSrc,
    imageAlt,
    title,
    description,
    onViewMore,
    onReserve,
}) => {
    const theme = useTheme();

    return (
        <Card
            sx={{
                maxWidth: 345,
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <CardMedia
                component="img"
                height="140"
                src={imageSrc}
                alt={imageAlt}
            />
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexGrow: 1,
                }}
            >
                <CardContent
                    sx={{
                        flexGrow: 1,
                        overflow: 'hidden',
                    }}
                >
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{
                            fontWeight: theme.typography.h5.fontWeight,
                        }}
                    >
                        {title}
                    </Typography>
                    <Typography
                        variant="body2"
                        color={theme.palette.text.secondary}
                        display={'-webkit-box'}
                        overflow={'hidden'}
                        textOverflow={'ellipsis'}
                        sx={{
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical',
                        }}
                        title={description}
                    >
                        {description}
                    </Typography>
                </CardContent>                
                <CardActions
                    sx={{
                        justifyContent: 'flex-end',
                        padding: theme.spacing(1, 2, 2),
                    }}
                >
                    <Button
                        size="small"
                        variant="contained"
                        sx={{
                            bgcolor: theme.palette.primary.main,
                            color: theme.palette.primary.contrastText,
                            '&:hover': {
                                bgcolor: theme.palette.primary.dark,
                            },
                        }}
                        onClick={onViewMore}
                    >
                        VER MAIS
                    </Button>
                    <Button
                        size="small"
                        variant="outlined"
                        sx={{
                            color: theme.palette.primary.main,
                            borderColor: theme.palette.primary.main,
                            '&:hover': {
                                bgcolor: theme.palette.action.hover,
                                borderColor: theme.palette.primary.dark,
                            },
                        }}
                        onClick={onReserve}
                    >
                        RESERVAR
                    </Button>
                </CardActions>
            </Box>
        </Card>
    );
};

export default SummaryCard;
