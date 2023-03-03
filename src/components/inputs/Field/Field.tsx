import { createTheme, FormControl, FormHelperText, InputLabel, InputLabelProps, InputProps, OutlinedInput, ThemeProvider } from "@mui/material";
import React, { FC, useState } from "react";

export interface Props {
  label: string;
  helperText?: string;
  props?: InputProps;
  startAdornment?: React.ReactNode;
  endAdornment?: React.ReactNode;
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#6750A4',
      light: '#735EAB',
      dark: '#7965AF'
    },
  }
});

export const Field: FC<Props> = ({ label, helperText, startAdornment, endAdornment, props }: Props) => {
  const [fieldBlur, setFieldBlur] = useState<boolean>(false);

  const handleFocus = () => setFieldBlur(true);
  const handleBlur = () => {
    if (props?.value?.toString().length !== 0) {
      setFieldBlur(true);
    } else {
      setFieldBlur(false);
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <FormControl variant='outlined' fullWidth>
        <InputLabel htmlFor={`field-${label}`}>{label}</InputLabel>
        <OutlinedInput
          id={`field-${label}`}
          label={label}
          onFocus={handleFocus}
          onBlur={handleBlur}
          startAdornment={
            fieldBlur ? startAdornment : null
          }
          endAdornment={
            fieldBlur ? endAdornment : null
          }
          {...props}
           />
          <FormHelperText>{helperText}</FormHelperText>
      </FormControl>
    </ThemeProvider>
  );
};