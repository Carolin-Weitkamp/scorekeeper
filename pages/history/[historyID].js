import Link from "next/link";
import styled from "styled-components";
import HistoryEntryComponent from "../../components/HistoryEntryComponent";

export default function History({nameOfGame, players}) {
  return (
    <>
      <HistoryEntryComponent></HistoryEntryComponent>
      <Link href="/">
        <a>← Back home</a>
      </Link>
    </>
  );
}