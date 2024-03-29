import React, { FC } from "react";
import styled from "@emotion/styled";
import { Logo } from "./Logo";
import { Box } from "@mui/material";
import { CustomButton } from "../buttons/CustomButton";
import { MetaMaskIcon } from "../icons";
import { UserAccount } from "./UserAccount";
import { Link } from "react-router-dom";

export interface Props {
  account?: string;
  onLogin?: () => void;
}

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;

  @media (min-width: 900px) {
    padding: 16px 48px;
  }
`;

export const Header: FC<Props> = ({ account, onLogin = () => {} }: Props) => {
  return (
    <HeaderWrapper>
      <Box>
        <Link to="/"><Logo /></Link>
      </Box>
      <Box>
        {
          account ?
          <UserAccount icon={<MetaMaskIcon />} account={account} />
          : 
          <CustomButton
            variant="contained"
            onClick={onLogin}
            startIcon={<MetaMaskIcon />}>
              Авторизоваться
        </CustomButton>
        }
      </Box>
    </HeaderWrapper>
  );
};