import styled from "styled-components";
import ButtonComponent from "./ButtonComponent";


const MAX_HUE_VALUE = 120; 
const MIN_HUE_VALUE = 0;

export default function PlayerComponent({ 
    name,
    score,
    onDecreasePlayerScore,
    onIncreasePlayerScore
}) {
    const maxHue = Math.min(score * 10, MAX_HUE_VALUE);
    const hue = Math.max(maxHue, MIN_HUE_VALUE);

    const color = score === 0 ? "black" : `hsl(${hue}, 50%, 50%)`;

    return (
        <PlayerWrapperStyled>
        {name}
        <PlayerScoreStyled color={color}>
          <ButtonComponent aria-label="Decrease Score" onClick={onDecreasePlayerScore}>
            -
          </ButtonComponent>
          <span>{score}</span>
          <ButtonComponent aria-label="Increase Score" onClick={onIncreasePlayerScore}>
            +
          </ButtonComponent>
        </PlayerScoreStyled>
      </PlayerWrapperStyled>
    );
  }
  
  const PlayerWrapperStyled = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;
  const PlayerScoreStyled = styled.div`
    color: ${(props) => props.color || "black"};
    display: grid;
    gap: 5px;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
  `;

