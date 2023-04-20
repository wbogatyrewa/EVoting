import { createTheme, FormControl, FormControlLabel, Radio, RadioGroup, RadioGroupProps, ThemeProvider, Typography } from "@mui/material";
import React, { FC } from "react";
import { Answer } from "../Types";
import { current } from "@reduxjs/toolkit";

export interface Props {
  label?: string;
  radioList: Array<Answer>;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  props?: RadioGroupProps;
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#6750A4',
      light: '#EADDFF',
      dark: '#7965AF'
    },
    text: {
      primary: "#000000"
    },
  },
  typography: {
    subtitle1: {
      fontWeight: 600,
      fontSize: "0.875rem"
    }
  }
});

const renderRadioList = (radioList: Array<Answer>, disabled?: boolean) => {
  const max = radioList.reduce((prev, current) => ((prev.result || 0) > (current.result || 0)) ? prev : current, { label: "", result: 0 });
  const votes = radioList.reduce((accumulator, current) => accumulator + (current.result || 0), 0);

  return (
    radioList.map(item =>
      <FormControlLabel 
        key={item.label}
        value={item.label} 
        control={<Radio />} 
        disabled={disabled ? true : item.result ? true : false}
        label={item.result ? `${item.label} (${(item.result / votes) * 100}%)` : item.label}
        sx={{
          backgroundColor: (max.label === item.label && max.result) ? 'primary.light' : 'transparent',
          ".MuiFormControlLabel-label.Mui-disabled": {
            color: "text.primary"
          } 
        }} />
      )
  );
}

    

export const RadioList: FC<Props> = ({ label, radioList = [], value, onChange, disabled = false, props }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <FormControl fullWidth>
        <Typography variant="subtitle1" color="text.primary" gutterBottom>
          {label}
        </Typography>
        <RadioGroup
          aria-labelledby="radio-list"
          name="radio-list"
          value={value}
          onChange={onChange}
          {...props}
        >
          {
            renderRadioList(radioList, disabled)
          }
        </RadioGroup>
      </FormControl>
    </ThemeProvider>
  );
};