import styled from "styled-components";
import { useState } from "react";
import InputComponent from "./InputComponent"

export default function GameForm () {
    return (
        <>
        <h1>Scorekeeper</h1>
        <StyledForm
            aria-labelledby="formHeader"
            // onSubmit={handleSubmit}
            autoComplete="off"
        >
        <h2 id="formHeader">New Game</h2>
        <InputComponent />


        </StyledForm>
        </>
    )
}

const StyledForm = styled.form`
    display: grid;
    gap: 10px;
    background-color: hotpink;
`;