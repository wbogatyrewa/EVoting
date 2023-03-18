import { Container } from "@mui/system";
import React from "react";
import { Header } from "./components/Header";
import { MainPage } from "./components/pages/MainPage";

export const App: React.FC<unknown> = () => {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <MainPage />
      </Container>
    </>
  );
};