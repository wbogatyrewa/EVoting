import React, { FC } from "react";
import { DateTimePicker, DateTimePickerProps, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { createTheme, ThemeProvider } from "@mui/material";
import 'dayjs/locale/ru';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6750A4',
      light: '#735EAB',
      dark: '#7965AF'
    },
  }
});

export const DateTimeField: FC<DateTimePickerProps<Date>> = ({ ...props }: DateTimePickerProps<Date>) => {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
        <DemoContainer components={['DateTimePicker']}>
          <DateTimePicker { ...props } />
        </DemoContainer>
      </LocalizationProvider>
    </ThemeProvider>
  );
};