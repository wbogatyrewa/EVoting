import { Container } from "@mui/system";
import React, { useEffect } from "react";
import { Header } from "./components/Header";
import { MainPage } from "./components/pages/MainPage";
import type { RootState } from "./app/store";
import { useSelector, useDispatch } from "react-redux";
import { login } from "./scripts/login";
import { setAccount } from "./features/accountSlice";
import { checkAccount } from "./scripts/checkAccount";

export const App: React.FC<unknown> = () => {
  const account = useSelector((state: RootState) => state.account.value);

  const dispatch = useDispatch();

  const handleLogin = async () => {
    let user = await login();
    dispatch(setAccount(user));
  };

  useEffect(() => {
    const check = async () => {
      let user = await checkAccount();
      dispatch(setAccount(user));
    };
    check();
  }, []);

  return (
    <>
      <Header account={account} onLogin={handleLogin} />
      <Container maxWidth="lg">
        <MainPage />
      </Container>
    </>
  );
};