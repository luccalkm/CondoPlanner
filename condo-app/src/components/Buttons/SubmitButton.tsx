import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';

interface SubmitButtonProps extends ButtonProps {
    label: string;
}

const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    '&:hover': {
        backgroundColor: theme.palette.primary.dark,
    },
}));

const SubmitButton: React.FC<SubmitButtonProps> = ({ label, ...props }) => {
    return (
        <StyledButton type="submit" variant="contained" {...props}>
            {label}
        </StyledButton>
    );
};

export default SubmitButton;
