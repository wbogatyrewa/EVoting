import { Grid, InputAdornment, SelectChangeEvent } from "@mui/material";
import React, { FC, useEffect, useMemo, useState } from "react";
import type { RootState } from "../../../app/store";
import { useSelector, useDispatch } from "react-redux";
import { Field } from "../../inputs/Field";
import { Page } from "../Page";
import SearchIcon from '@mui/icons-material/Search';
import { DropdownMenu } from "../../inputs/DropdownMenu";
import { VotingCard } from "../../cards/VotingCard/VotingCard";
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";
import { CustomIconButton } from "../../buttons/CustomIconButton";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Status, Voting } from "../../Types";
import { getVoting } from "../../../scripts/getVoting";

const renderVotingCards = (list: Voting[]) => list.map((item) => 
  <Grid item xs={3} key={item.name} >
    <VotingCard 
      name={item.name} 
      startDateTime={item.startDateTime} 
      endDateTime={item.endDateTime} 
    />
  </Grid>
);

export const MainPage: FC<unknown> = () => {
  const account = useSelector((state: RootState) => state.account.value);
  const [name, setName] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [votingList, setVotingList] = useState<Voting[]>([]);
  const navigate = useNavigate();
  
  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleChangeStatus = (e: SelectChangeEvent<string>) => {
    setStatus(e.target.value);
  };

  const handleCreate = () => {
    navigate('/create');
  };

  const handleClearName = () => setName("");

  const filterVotings = useMemo(
  () => 
  // название и статус пустые
  name.length === 0 && (status.length === 0 || status === "Все") ? votingList :
  name.length === 0 && (status.length !== 0 && status !== "Все") ? 
    votingList.filter(voting => {
      let now = new Date().getTime();
      let votingStatus = now >= voting.startDateTime.getTime() ? now <= voting.endDateTime.getTime() ? 
        Status.Active : Status.Finished : Status.Before;
      return votingStatus === status;
    }) :
  name.length !== 0 && (status.length === 0 || status === "Все") ?
    votingList.filter(voting => voting.name.includes(name)) :
  name.length !== 0 && (status.length !== 0 && status !== "Все") ?
    votingList.filter(voting => {
      let now = new Date().getTime();
      let votingStatus = now >= voting.startDateTime.getTime() ? now <= voting.endDateTime.getTime() ? 
        Status.Active : Status.Finished : Status.Before;
      return voting.name.includes(name) && votingStatus === status;
    })
  : votingList, 
  [name, status]);
  
  useEffect(() => {
    const fetch = async () => {
      let getVotings = getVoting();
      let fetchVoting: Voting[] = [];
      for (let i = 0; i < getVoting.length; i++) {
        fetchVoting.push(await getVotings[i].then(value => value));
      }
      setVotingList(fetchVoting);
    }
    fetch();
  }, []);

  return (
    <Page 
      title="Голосования" 
      account={account} 
      buttonChildren="Создать голосование" 
      buttonIcon={<AddIcon />}
      handleClick={handleCreate}>
      <Grid container spacing={2} mb={4}>
        <Grid item xs={6}>
          <Field 
            id="filter-name-field"
            label="Название голосования"
            value={name}
            handleChange={handleChangeName}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            }
            endAdornment={
              name ? 
              <InputAdornment position="end">
                <CustomIconButton onClick={handleClearName}>
                  <HighlightOffIcon />
                </CustomIconButton>
              </InputAdornment>
              : null
            }
           />
        </Grid>
        <Grid item xs={3}>
          <DropdownMenu 
            label="Выберите статус"
            menuItems={['Все', 'Идет голосование', 'Скоро начнется', 'Завершено']} 
            value={status} 
            handleChange={handleChangeStatus}
            />
        </Grid>
      </Grid>
      <Grid container rowSpacing={4} columnSpacing={2}>
        {renderVotingCards(filterVotings)}
      </Grid>
    </Page>
  );
};