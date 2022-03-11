import Link from "next/link";
import styled from "styled-components";
import PlayerComponent from "../../components/PlayerComponent";
import GameForm from "../../components/GameForm";

export default function Game({ nameOfGame }) {
  return (
    <>
      <PlayerComponent></PlayerComponent>
      <Link href="/">
        <a>← Back home</a>
      </Link>
    </>
  );
}
