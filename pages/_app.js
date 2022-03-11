import "../styles/globals.css";
import { useState } from "react";
import { nanoid } from "nanoid";

function MyApp({ Component, pageProps }) {
  const [players, setPlayers] = useState([]);
  const [nameOfGame, setNameOfGame] = useState("");
  console.log(nanoid());
  return <Component {...pageProps} />;
}

export default MyApp;
