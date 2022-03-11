import styled from "styled-components";
import ButtonComponent from "./ButtonComponent";
import Link from "next/link";
import HistoryEntryComponent from "./HistoryEntryComponent";

export default function NavigationComponent({ historyID }) {
  return (
    <StyledNav>

          <ButtonComponent>Home</ButtonComponent>
        

      <Link href={`history/${historyID}`}>
        <a>
          <ButtonComponent>History</ButtonComponent>
        </a>
      </Link>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;
