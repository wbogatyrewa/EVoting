import { Box, Grid, Typography } from "@mui/material";
import React, { FC } from "react";
import { CustomIconButton } from "../../buttons/CustomIconButton";
import CloseIcon from '@mui/icons-material/Close';

export interface PageProps {
  title: React.ReactNode;
  closed?: boolean;
  handleClose?: () => void;
  children: React.ReactNode;
}

export const Page: FC<PageProps> = ({ title, closed = false, handleClose = () => {}, children }: PageProps) => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={11}>
          <Typography variant="h4" mb={3}>{title}</Typography>
        </Grid>
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