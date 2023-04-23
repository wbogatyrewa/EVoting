import { Box, Grid, Typography } from "@mui/material";
import React, { FC } from "react";
import { CustomIconButton } from "../../buttons/CustomIconButton";
import CloseIcon from '@mui/icons-material/Close';
import { CustomButton } from "../../buttons/CustomButton";
import { useNavigate } from "react-router-dom";

export interface PageProps {
  title: React.ReactNode;
  closed?: boolean;
  voted?: boolean;
  handleClick?: () => void;
  buttonChildren?: React.ReactNode;
  buttonIcon?: React.ReactNode;
  disabledBtn?: boolean;
  children: React.ReactNode;
}

export const Page: FC<PageProps> = ({ 
        title, closed = false, disabledBtn = false,
        voted = false, handleClick = () => {}, buttonChildren, buttonIcon, children }: PageProps) => {

  const navigate = useNavigate();

  const handleClose = () => {
    navigate('/');
  };

  return (
    <Box>
      <Grid container spacing={2} position={'relative'} zIndex={5}>
        <Grid item xs={10} sm={voted && closed ? 7 : voted ? 8 : 11} md={voted && closed ? 8 : voted ? 9 : 11}>
          <Typography variant="h4" mb={3}>{title}</Typography>
        </Grid>
        {
          voted ?
          <Grid item xs={10} sm={4} md={closed ? 2 : 3} mb={3}>
            <CustomButton 
              variant="contained" 
              onClick={handleClick}
              disabled={disabledBtn}
              startIcon={buttonIcon}>
                {buttonChildren}
            </CustomButton>
          </Grid>
          : null
        }
        {
          closed ? 
          <Grid item xs={1}>
            <CustomIconButton onClick={handleClose}><CloseIcon /></CustomIconButton>
          </Grid>
          : null
        }
      </Grid>
      {children}
    </Box>
  );
};