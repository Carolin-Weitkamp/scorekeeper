import { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import { nanoid } from "nanoid";

export default function HistoryEntry({ nameOfGame, players }) {
  const [scoreToggle, setScoreToggle] = useState(false);

  console.log(nanoid());

  return (
    <WrapperStyled>
      <GameTitleStyled>{nameOfGame}</GameTitleStyled>
      <Button onClick={() => setScoreToggle(!scoreToggle)}>Show score</Button>
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
