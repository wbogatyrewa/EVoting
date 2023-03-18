import { Box, Typography } from "@mui/material";
import React, { FC } from "react";

export interface PageProps {
  title: React.ReactNode;
  children: React.ReactNode;
}

export const Page: FC<PageProps> = ({ title, children }: PageProps) => {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>{title}</Typography>
      {children}
    </Box>
  );
};