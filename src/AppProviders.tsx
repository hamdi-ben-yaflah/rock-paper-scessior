import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { IChoice } from "./typings/game";
import Rock from "./icons/Rock";
import Scessior from "./icons/Scessior";
import Paper from "./icons/Paper";

const CHOICES: IChoice[] = [
  { id: 1, name: "rock", component: <Rock />, beats: 3 },
  { id: 2, name: "paper", component: <Paper />, beats: 1 },
  { id: 3, name: "scissors", component: <Scessior />, beats: 2 },
];

export const ChoicesContext = React.createContext<IChoice[]>([]);

function AppProviders({ children }: { children: any }) {
  return (
    <ChoicesContext.Provider value={CHOICES}>
      <Router>{children}</Router>
    </ChoicesContext.Provider>
  );
}

export { AppProviders };
