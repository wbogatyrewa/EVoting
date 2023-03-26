import { Container } from "@mui/system";
import React from "react";
import { Header } from "./components/Header";
import { MainPage } from "./components/pages/MainPage";
import type { RootState } from "./app/store";
import { useSelector, useDispatch } from "react-redux";
import { login } from "./scripts/login";
import { setAccount } from "./features/accountSlice";

export const App: React.FC<unknown> = () => {
  const account = useSelector((state: RootState) => state.account.value);

  const dispatch = useDispatch();

  const handleLogin = async () => {
    const user = await login();
    dispatch(setAccount(user));
  };

  return (
    <>
      <Header account={account} onLogin={handleLogin} />
      <Container maxWidth="lg">
        <MainPage />
      </Container>
    </>
  );
};