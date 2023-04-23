import { Box, createTheme, Grid, InputAdornment, ThemeProvider, Typography } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import { CustomIconButton } from "../../buttons/CustomIconButton";
import { Field } from "../../inputs/Field";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Page } from "../Page";
import AddIcon from '@mui/icons-material/Add';
import { CustomButton } from "../../buttons/CustomButton";
import { DateTimeField } from "../../inputs/DateTimeField";
import { createVoting } from "../../../scripts/createVoting";
import dayjs, { Dayjs } from 'dayjs';
import { signCreateVoting } from "../../../scripts/signCreateVoting";
import { Loader } from "../../Loader";
import { useNavigate } from "react-router-dom";

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

const renderAnswerField = (answers: string[], setAnswers: React.Dispatch<React.SetStateAction<string[]>>) => {
  const handleChangeAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
    let id = Number(event.target.id);
    let answer = event.target.value;
    let newArray = answers.map((elem, index) => index === id ? answer : elem);
    setAnswers(newArray);
  };

  return (
    answers.map((elem, index) =>
      <Box key={index.toString()} mb={2}>
        <Field 
          id={`${index.toString()}`}
          label={"Вариант ответа"}
          helperText={"Введите вариант ответа"}
          value={elem} handleChange={handleChangeAnswer} 
        />
      </Box>
    )
  )
};

export const CreateVotingPage: FC<unknown> = () => {
  // добавить валидацию
  const [name, setName] = useState<string>("");
  const [voters, setVoters] = useState<string>("");
  const [answers, setAnswers] = useState<string[]>(["", ""]);
  const [startDateTime, setStartDateTime] = useState<Dayjs>(dayjs());
  const [endDateTime, setEndDateTime] = useState<Dayjs>(dayjs().add(1, 'day'));
  const [showLoader, setShowLoader] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleDeleteName = () => {
    setName("");
  }

  const handleChangeVoters = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVoters(event.target.value);
  };

  const handleDeleteVoters = () => {
    setVoters("");
  }

  const handleChangeStartDateTime = (newDate: Dayjs) => {
    setStartDateTime(newDate);
  };

  const handleChangeEndDateTime = (newDate: Dayjs) => {
    setEndDateTime(newDate);
  };

  const handleClickAddAnswer = () => {
    setAnswers([...answers, ""]);
  };


  const handleClickCreateVoting = () => {
    setShowLoader(true);
    let votersArr = voters.split(", ");
    signCreateVoting({
      name: name, 
      startDateTime: startDateTime, 
      endDateTime: endDateTime, 
      voters: votersArr,
      proposalsNames: answers
    }).then(res => {
      if (res) {
        createVoting({ 
          name: name, 
          startDateTime: startDateTime, 
          endDateTime: endDateTime, 
          voters: votersArr,
          proposalsNames: answers
        }).then(res => {
          setShowLoader(false);
          navigate("/");
          console.log(res);
        }).catch(res => {
          setShowLoader(false);
          navigate("/");
        });
      }
    });    
  }

  return (
    <ThemeProvider theme={theme}>
      <Page 
        title="Создание голосования" 
        closed
        voted
        handleClick={handleClickCreateVoting} 
        buttonChildren={"Создать  голосование"}
        disabledBtn={!name || !voters || !answers || !startDateTime || !endDateTime}>
        <Grid container rowSpacing={2} columnSpacing={10} position={'relative'}>
          {
            showLoader ? 
            <Box sx={[
              {
                position: 'absolute',
                zIndex: 2,
                background: 'rgba(255, 255, 255, 0.5)',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }
            ]}>
              <Loader />
            </Box>
            : null
          }
          <Grid item xs={12} sm={6}>
            <Box mb={2}>
              <Typography variant="subtitle1" color="text.primary" gutterBottom>Название</Typography>
              <Field 
                label={"Название голосования"}
                helperText={"Название или основной вопрос голосования"}
                value={name} handleChange={handleChangeName} 
                endAdornment={
                  name ? 
                  <InputAdornment position="end">
                    <CustomIconButton onClick={handleDeleteName}>
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
                renderAnswerField(answers, setAnswers)
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
                  label={"Адреса избирателей в блокчейне"}
                  helperText={"Введите список адресов избирателей в блокчейне"}
                  value={voters} handleChange={handleChangeVoters} 
                  endAdornment={
                    voters ?
                    <InputAdornment position="end">
                      <CustomIconButton onClick={handleDeleteVoters}>
                        <HighlightOffIcon />
                      </CustomIconButton>
                    </InputAdornment>
                    : null
                  }
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box>
              <Typography variant="subtitle1" color="text.primary">Срок голосования</Typography>
              <Box mb={1}>
                <DateTimeField label={"Начало"} value={startDateTime} onChange={handleChangeStartDateTime} />
              </Box>
              <Box mb={1}>
                <DateTimeField label={"Окончание"} value={endDateTime} onChange={handleChangeEndDateTime} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Page>
    </ThemeProvider>
  );
};
