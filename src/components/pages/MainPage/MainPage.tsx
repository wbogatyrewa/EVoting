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
import { getVotingList } from "../../../scripts/getVotingList";
import { Loader } from "../../Loader";
import { setVotingList } from "../../../features/votingListSlice";

const renderVotingCards = (list: Voting[], navigate: any) => list.map((item) => {
  const handleOpenVoting = () => navigate(`/voting/${item.address}`);
  return (
    <Grid item xs={6} sm={4} md={3} key={item.address} onClick={handleOpenVoting}>
      <VotingCard 
        name={item.name} 
        startDateTime={new Date(item.startDateTime)} 
        endDateTime={new Date(item.endDateTime)} 
      />
    </Grid>
  );
});

export const MainPage: FC<unknown> = () => {
  const account = useSelector((state: RootState) => state.account.value);
  const votingList = useSelector((state: RootState) => state.votingList.value);
  const [name, setName] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  
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

  useEffect(() => {
    getVotingList().then((list: Voting[]) => dispatch(setVotingList(list)));
  }, []);

  const filteredVotingList = useMemo(() => 
  name.length === 0 && (status.length === 0 || status === "Все") ? votingList :
  name.length === 0 && (status.length !== 0 && status !== "Все") ? 
    votingList.filter(voting => {
      let now = new Date().getTime();
      let votingStatus = now >= new Date(voting.startDateTime).getTime() ? now <= new Date(voting.endDateTime).getTime() ? 
        Status.Active : Status.Finished : Status.Before;
      return votingStatus === status;
    }) :
  name.length !== 0 && (status.length === 0 || status === "Все") ?
    votingList.filter(voting => voting.name.includes(name)) :
  name.length !== 0 && (status.length !== 0 && status !== "Все") ?
    votingList.filter(voting => {
      let now = new Date().getTime();
      let votingStatus = now >= new Date(voting.startDateTime).getTime() ? now <= new Date(voting.endDateTime).getTime() ? 
        Status.Active : Status.Finished : Status.Before;
      return voting.name.includes(name) && votingStatus === status;
    })
  : votingList, 
  [name, status, votingList]);

  return (
    <Page 
      title="Голосования" 
      voted={account ? true : false} 
      buttonChildren="Создать голосование" 
      buttonIcon={<AddIcon />}
      handleClick={handleCreate}>
      <Grid container spacing={2} mb={4}>
        <Grid item xs={12} sm={6} md={6}>
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
        <Grid item xs={12} sm={6} md={3}>
          <DropdownMenu 
            label="Выберите статус"
            menuItems={['Все', 'Идет голосование', 'Скоро начнется', 'Завершено']} 
            value={status} 
            handleChange={handleChangeStatus}
            />
        </Grid>
      </Grid>
      <Grid container rowSpacing={4} columnSpacing={2}>
        {
          votingList.length === 0 ? <Loader />
          : renderVotingCards(filteredVotingList, navigate)
        }
      </Grid>
    </Page>
  );
};