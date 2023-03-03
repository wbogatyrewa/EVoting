import { Box, createTheme, FormControl, InputLabel, MenuItem, Select, ThemeProvider } from "@mui/material";
import React, { FC } from "react";

export interface Props {
  label: string;
  value: string;
  handleChange: () => void;
  menuItems: Array<string>;
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

const renderMenuList = (menuItems: Array<string>) => menuItems.map(item => 
  <MenuItem
    key={item}
    value={item}
    sx={{ padding: '12px' }}>
      {item}
  </MenuItem>
  );


export const DropdownMenu: FC<Props> = ({ label, value, handleChange, menuItems }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id={`select-label-${label}`}>{label}</InputLabel>
          <Select
            labelId={`select-label-${label}`}
            id={`select-${label}`}
            value={value}
            label={label}
            onChange={handleChange}
          >
            {
              renderMenuList(menuItems)
            }
          </Select>
        </FormControl>
      </Box>
    </ThemeProvider>
  );
};