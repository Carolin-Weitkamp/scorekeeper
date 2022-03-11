import Link from "next/link";
import styled from "styled-components";
import PlayerComponent from "../../components/PlayerComponent";

export default function Game({nameOfGame, players}) {
  return (
    <>
      <PlayerComponent></PlayerComponent>
      <Link href="/">
        <a>← Back home</a>
      </Link>
    </>
  );
}