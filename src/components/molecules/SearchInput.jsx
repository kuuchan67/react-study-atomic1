import styled from "styled-components";
import React, { memo } from "react";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Input } from "../atoms/Input/Input";

export const SearchInput = memo(() => {
  return (
    <SConteiner>
      <Input placeholder="検索条件を入力" />
      <SButtonWrapper>
        <PrimaryButton>検索</PrimaryButton>
      </SButtonWrapper>
    </SConteiner>
  );
});

const SConteiner = styled.div`
  display: flex;
  align-items: center;
`;

const SButtonWrapper = styled.div`
  padding-left: 8px;
`;
