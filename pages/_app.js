import "../styles/globals.css";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  const [players, setPlayers] = useState([]);
  const [nameOfGame, setNameOfGame] = useState("");
  return <Component {...pageProps} />;
}

export default MyApp;
