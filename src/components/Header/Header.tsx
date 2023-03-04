import React, { FC } from "react";
import styled from "@emotion/styled";
import { Logo } from "./Logo";
import { Box } from "@mui/material";
import { CustomButton } from "../buttons/CustomButton";
import { MetaMaskIcon } from "../icons";
import { UserAccount } from "./UserAccount";

export interface Props {
  account?: string;
  onLogin?: () => void;
  childrenButton?: React.ReactNode;
}

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 48px;
`;

export const Header: FC<Props> = ({ account, onLogin, childrenButton }: Props) => {
  return (
    <HeaderWrapper>
      <Box>
        <Logo />
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
              {childrenButton}
        </CustomButton>
        }
      </Box>
    </HeaderWrapper>
  );
};