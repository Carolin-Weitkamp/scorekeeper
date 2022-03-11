import { useState } from "react";
import styled from "styled-components";
import ButtonComponent from "./ButtonComponent";
import { nanoid } from "nanoid";
import Link from "next/link";

export default function HistoryEntryComponent({ nameOfGame, players }) {
  const [scoreToggle, setScoreToggle] = useState(false);

  return (
    <WrapperStyled>
      <GameTitleStyled>{nameOfGame}</GameTitleStyled>
      <ButtonComponent onClick={() => setScoreToggle(!scoreToggle)}>Show score</ButtonComponent>
      {scoreToggle &&
        players.map(({ name, score, id }) => (
          <PlayerStyled key={id}>
            <span>{name}</span>
            <span>{score}</span>
          </PlayerStyled>
        ))}
    </WrapperStyled>
  );
}

const WrapperStyled = styled.section`
  display: grid;
  gap: 10px;
  border: 1px solid grey;
  border-radius: 4px;
  padding: 8px;
`;

const PlayerStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;

const GameTitleStyled = styled.span`
  text-transform: uppercase;
  font-weight: lighter;
`;
