import React from "react";
import styled from "styled-components";
import ButtonComponent from "./ButtonComponent";
import PAGES from "../assets/pages";

export default function NavigationComponent({}) {
    return (
        <StyledNav>
            <ButtonComponent>Play</ButtonComponent>
            <ButtonComponent>History</ButtonComponent>
        </StyledNav>
    )
}

const StyledNav = styled.nav`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
  
`;