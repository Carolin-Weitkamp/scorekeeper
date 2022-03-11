import styled from "styled-components";

export default styled.button`
  background-color: ${(props) => (props.isActive ? "hotpink" : "lightgreen")};
  ${(props) => props.isActive && "color: white;"}
  border: 1px solid purple;
  width: 100%;
`;
