import styled from "styled-components";
import { useState } from "react";
import InputComponent from "./InputComponent";

export default function GameForm() {
  return (
    <>
      <h1>Scorekeeper</h1>
      <StyledForm
        aria-labelledby="formHeader"
        // onSubmit={handleSubmit}
        autoComplete="off"
      >
        <h2 id="formHeader">New Game</h2>
        <InputComponent
          name="nameOfGame"
          labelText="Name of game"
          placeholder="e.g. Scrabble"
          //   onChange={handleChange}
          //   value={formData.nameOfGame}
          required
        />
        <InputComponent
          name="playerNames"
          labelText="Player names, seperated by comma"
          placeholder="e.g. Johny, Janette"
          //   onChange={handleChange}
          //   value={formData.playerNames}
          required
        />
      </StyledForm>
    </>
  );
}

const StyledForm = styled.form`
  display: grid;
  gap: 10px;
  background-color: hotpink;
`;
