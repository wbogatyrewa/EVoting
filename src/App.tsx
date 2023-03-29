import { Container } from "@mui/system";
import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import type { RootState } from "./app/store";
import { useSelector, useDispatch } from "react-redux";
import { Header } from "./components/Header";
import { MainPage } from "./components/pages/MainPage";
import { login } from "./scripts/login";
import { setAccount } from "./features/accountSlice";
import { checkAccount } from "./scripts/checkAccount";
import { CreateVotingPage } from "./components/pages/CreateVotingPage";
import { AboutVotingPage } from "./components/pages/AboutVotingPage";

export const App: React.FC<unknown> = () => {
  const account = useSelector((state: RootState) => state.account.value);

  const dispatch = useDispatch();

  const handleLogin = () => {
    login().then(user => dispatch(setAccount(user)));
  };

  useEffect(() => {
    checkAccount().then((user) => dispatch(setAccount(user)));
  }, []);

  return (
    <BrowserRouter>
      <Header account={account} onLogin={handleLogin} />
      <Container maxWidth="lg">
      <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/create' element={<CreateVotingPage />} />
          <Route path='/voting/:votingAddress' element={<AboutVotingPage />} />
      </Routes>
      </Container>
    </BrowserRouter>
  );
};