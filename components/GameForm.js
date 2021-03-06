import styled from "styled-components";
import { useState } from "react";
import InputComponent from "./InputComponent";
import ButtonComponent from "./ButtonComponent";
import Link from "next/link";

const initialFormData = {
  nameOfGame: "",
  playerNames: "",
};

export default function GameForm(gameID) {
  const [formData, setFormData] = useState(initialFormData);

  const disabled = formData.nameOfGame === "" || formData.playerNames === "";

  return (
    <>
      <h1>Scorekeeper</h1>
      <StyledForm
        aria-labelledby="formHeader"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <h2 id="formHeader">New Game</h2>
        <InputComponent
          name="nameOfGame"
          labelText="Name of game"
          placeholder="e.g. Scrabble"
          onChange={handleChange}
          value={formData.nameOfGame}
          required
        />
        <InputComponent
          name="playerNames"
          labelText="Player names, seperated by comma"
          placeholder="e.g. Johny, Janette"
          onChange={handleChange}
          value={formData.playerNames}
          required
        />
        <Link href={`game/${gameID}`}>
          <a>
            <ButtonComponent disabled={disabled}> Create game </ButtonComponent>
          </a>
        </Link>
      </StyledForm>
    </>
  );
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }
  function handleSubmit(event) {
    event.preventDefault();

    onCreateGame({
      nameOfGame: formData.nameOfGame,
      playerNames: formData.playerNames.split(",").map((name) => name.trim()),
    });
    setFormData(initialFormData);
  }
}

const StyledForm = styled.form`
  display: grid;
  gap: 10px;
  background-color: hotpink;
`;
