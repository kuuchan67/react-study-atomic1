import React from "react";

import styled from "styled-components";

import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../organisms/user/UserCard";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    name: `なまえ-${val}`,
    image: "https://source.unsplash.com/NE0XGVKTmcA",
    email: "test@example.com",
    phone: "000-0000-0000",
    company: {
      name: "株式会社テスト"
    },
    website: "https://test.com"
  };
});

export const Users = () => {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const onClickSwitch = () => {
    const isAdmin = userInfo ? userInfo.isAdmin : false;
    setUserInfo({ isAdmin: !isAdmin });
  };
  return (
    <SContainer>
      <h2>ユーザー一覧</h2>
      <SearchInput />

      <p />
      <SecondaryButton onClick={onClickSwitch}>切り替え</SecondaryButton>
      <SUserArea>
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </SUserArea>
    </SContainer>
  );
};

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SUserArea = styled.div`
  padding-top: 48px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
