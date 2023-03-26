import { Box, Grid, Typography } from "@mui/material";
import React, { FC } from "react";
import { CustomIconButton } from "../../buttons/CustomIconButton";
import CloseIcon from '@mui/icons-material/Close';
import { CustomButton } from "../../buttons/CustomButton";
import { Link } from "react-router-dom";

export interface PageProps {
  title: React.ReactNode;
  closed?: boolean;
  voted?: boolean;
  handleVote?: () => void;
  disabledBtn?: boolean;
  children: React.ReactNode;
}

export const Page: FC<PageProps> = ({ 
        title, closed = false, disabledBtn = false,
        voted = false, handleVote = () => {}, children }: PageProps) => {

  const handleClose = () => {

  };

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
            <Link to="/"><CustomIconButton><CloseIcon /></CustomIconButton></Link>
          </Grid>
          : null
        }
      </Grid>
      {children}
    </Box>
  );
};