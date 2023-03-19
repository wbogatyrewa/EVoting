import { Box, createTheme, Grid, InputAdornment, ThemeProvider, Typography } from "@mui/material";
import React, { FC, ReactElement, useState } from "react";
import { CustomIconButton } from "../../buttons/CustomIconButton";
import { Field } from "../../inputs/Field";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Page } from "../Page";
import AddIcon from '@mui/icons-material/Add';
import { CustomButton } from "../../buttons/CustomButton";
import { DateTimeField } from "../../inputs/DateTimeField";

const theme = createTheme({  
  palette: {
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

const renderAnswerField = (value: string, handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void) =>
  <Box key={value} mb={2}>
    <Field 
      label={"Вариант ответа"}
      helperText={"Введите вариант ответа"}
      value={value} handleChange={handleChange} 
      endAdornment={
        <InputAdornment position="end">
          <CustomIconButton>
            <HighlightOffIcon />
          </CustomIconButton>
        </InputAdornment>
      }
    />
  </Box>

export const CreateVotingPage: FC<unknown> = () => {
  const [name, setName] = useState<string>("");
  const [emails, setEmails] = useState<string>("");
  const [addresses, setAddresses] = useState<string>("");
  const [answers, setAnswers] = useState<{
    value: string, 
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  }[]>([
    {value: "", handleChange: (event: React.ChangeEvent<HTMLInputElement>) => {}}, 
    {value: "", handleChange: (event: React.ChangeEvent<HTMLInputElement>) => {}}
  ]);

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }

  const handleChangeEmails = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }

  const handleChangeAddresses = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }

  const handleClickAddAnswer = () => {
    let answer = "";
    const handleChangeAnswer = (event: React.ChangeEvent<HTMLInputElement>) => answer = event.target.value;
    setAnswers([...answers, { value: answer, handleChange: handleChangeAnswer }]);
  }

  const handleClickCreateVoting = () => {
    // create voting
  }

  return (
    <ThemeProvider theme={theme}>
      <Page title="Создание голосования">
        <Grid container spacing={10}>
          <Grid item xs={6}>
            <Box mb={2}>
              <Typography variant="subtitle1" color="text.primary" gutterBottom>Название</Typography>
              <Field 
                label={"Название голосования"}
                helperText={"Название или основной вопрос голосования"}
                value={name} handleChange={handleChangeName} 
                endAdornment={
                  name ? 
                  <InputAdornment position="end">
                    <CustomIconButton>
                      <HighlightOffIcon />
                    </CustomIconButton>
                  </InputAdornment>
                  : null
                }
              />
            </Box>
            <Box mb={2}>
              <Typography variant="subtitle1" color="text.primary" gutterBottom>Варианты ответов</Typography>
              {
                answers.map((elem) => renderAnswerField(elem.value, elem.handleChange))
              }
              <CustomButton 
                variant="text" 
                startIcon={<AddIcon />}
                onClick={handleClickAddAnswer}>
                  Добавить вариант
              </CustomButton>
            </Box>
            <Box mb={4}>
              <Typography variant="subtitle1" color="text.primary" gutterBottom>Участники</Typography>
              <Box mb={2}>
                <Field 
                  label={"E-mail адреса"}
                  helperText={"Введите список e-mail адресов"}
                  value={emails} handleChange={handleChangeEmails} 
                  endAdornment={
                    emails ?
                    <InputAdornment position="end">
                      <CustomIconButton>
                        <HighlightOffIcon />
                      </CustomIconButton>
                    </InputAdornment>
                    : null
                  }
                />
              </Box>
              <Box mb={2}>
                <Field 
                  label={"Адреса избирателей в блокчейне"}
                  helperText={"Введите список адресов избирателей в блокчейне"}
                  value={addresses} handleChange={handleChangeAddresses} 
                  endAdornment={
                    addresses ?
                    <InputAdornment position="end">
                      <CustomIconButton>
                        <HighlightOffIcon />
                      </CustomIconButton>
                    </InputAdornment>
                    : null
                  }
                />
              </Box>
            </Box>
            <CustomButton 
              variant="contained"
              onClick={handleClickCreateVoting}>
              Создать  голосование
            </CustomButton>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <Typography variant="subtitle1" color="text.primary">Срок голосования</Typography>
              <Box mb={1}>
                <DateTimeField label={"Начало"} />
              </Box>
              <Box mb={1}>
                <DateTimeField label={"Окончание"} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Page>
    </ThemeProvider>
  );
};
