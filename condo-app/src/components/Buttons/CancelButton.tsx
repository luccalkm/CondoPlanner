import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';

interface CancelButtonProps extends ButtonProps {
    label: string;
}

const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    '&:hover': {
        backgroundColor: theme.palette.secondary.dark,
    },
}));

const CancelButton: React.FC<CancelButtonProps> = ({ label, ...props }) => {
    return (
        <StyledButton type="button" variant="contained" {...props}>
            {label}
        </StyledButton>
    );
};

export default CancelButton;
