import { Box, Grid, Typography } from "@mui/material";
import React, { FC } from "react";
import { CustomIconButton } from "../../buttons/CustomIconButton";
import CloseIcon from '@mui/icons-material/Close';
import { CustomButton } from "../../buttons/CustomButton";

export interface PageProps {
  title: React.ReactNode;
  closed?: boolean;
  handleClose?: () => void;
  voted?: boolean;
  handleVote?: () => void;
  disabledBtn?: boolean;
  children: React.ReactNode;
}

export const Page: FC<PageProps> = ({ 
        title, closed = false, handleClose = () => {}, disabledBtn = false,
        voted = false, handleVote = () => {}, children }: PageProps) => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={voted ? 9 : 11}>
          <Typography variant="h4" mb={3}>{title}</Typography>
        </Grid>
        {
          voted ?
          <Grid item xs={2}>
            <CustomButton 
              variant="contained" 
              onClick={handleVote}
              disabled={disabledBtn}>
                Проголосовать
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