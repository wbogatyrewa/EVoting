import { createTheme, FormControl, FormControlLabel, Radio, RadioGroup, RadioGroupProps, ThemeProvider, Typography } from "@mui/material";
import React, { FC } from "react";
import { Answer } from "../Types";

export interface Props {
  label?: string;
  radioList: Array<Answer>;
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

const renderRadioList = (radioList: Array<Answer>) => {
  const max = radioList.reduce((prev, current) => ((prev.result || 0) > (current.result || 0)) ? prev : current)
  return (
    radioList.map(item =>
      <FormControlLabel 
        value={item.label} 
        control={<Radio />} 
        disabled={item.result ? true : false}
        label={item.result ? `${item.label} (${item.result}%)` : item.label}
        sx={{
          backgroundColor: (max.label === item.label && max.result) ? 'primary.light' : 'transparent',
          ".MuiFormControlLabel-label.Mui-disabled": {
            color: "text.primary"
          } 
        }} />
      )
  );
}

    

export const RadioList: FC<Props> = ({ label, radioList, props }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <FormControl fullWidth>
        <Typography variant="subtitle1" color="text.primary" gutterBottom>
          {label}
        </Typography>
        <RadioGroup
          aria-labelledby="radio-list"
          name="radio-list"
          {...props}
        >
          {
            renderRadioList(radioList)
          }
        </RadioGroup>
      </FormControl>
    </ThemeProvider>
  );
};