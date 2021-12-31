import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import "./App.css";
import Score from "./components/Score/Score";
import Game from "./pages/Game/Game";
import AutoPlay from "./pages/Auto-play/AutoPlay";
import Dashboard from "./pages/Dashboard/Dashboard";
import { IChoice, IGameMode, IScore, Status } from "./typings/game";
import Rock from "./icons/Rock";
import Paper from "./icons/Paper";
import Scessior from "./icons/Scessior";

const { Header, Footer, Content } = Layout;

const CHOICES: IChoice[] = [
  { id: 1, name: "rock", component: <Rock />, beats: 3 },
  { id: 2, name: "paper", component: <Paper />, beats: 1 },
  { id: 3, name: "scissors", component: <Scessior />, beats: 2 },
];

export const ChoicesContext = React.createContext<IChoice[]>([]);

function App() {
  const [socre, setScore] = useState<IScore>({ wins: 0, loses: 0 });
  const [gameMode, setGameMode] = useState<IGameMode>();

  const handleScore = (result: Status) => {
    if (result === "win")
      setScore((lastScore) => ({
        wins: lastScore.wins + 1,
        loses: lastScore.loses,
      }));
    if (result === "lose")
      setScore((lastScore) => ({
        wins: lastScore.wins,
        loses: lastScore.loses + 1,
      }));
    if (result === "not-set")
      setScore({
        wins: 0,
        loses: 0,
      });
  };

  return (
    <Layout>
      {gameMode !== "not-set" && (
        <Header>
          <Score score={socre} />
        </Header>
      )}
      <Content className="main-content">
        <ChoicesContext.Provider value={CHOICES}>
          <Router>
            <Routes>
              <Route
                path="/"
                element={<Dashboard setGameMode={setGameMode} />}
              />
              <Route path="/solo" element={<Game setScore={handleScore} />} />
              <Route
                path="/auto"
                element={<AutoPlay setScore={handleScore} />}
              />
            </Routes>
          </Router>
        </ChoicesContext.Provider>
      </Content>
      <Footer className="footer">
        AERQ Coding Challenge ©2022 Created by Hamdi Ben Yaflah
      </Footer>
    </Layout>
  );
}

export default App;
