import React, { ReactNode, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import "./App.css";
import Score from "./components/Score/Score";
import Game from "./pages/Game/Game";
import AutoPlay from "./pages/Auto-play/AutoPlay";
import Dashboard from "./pages/Dashboard/Dashboard";
import { Choice, IGameMode, IScore } from "./typings/game";
import Rock from "./icons/Rock";
import Paper from "./icons/Paper";
import Scessior from "./icons/Scessior";

const { Header, Footer, Content } = Layout;

const CHOICES: Choice[] = [
  { id: 1, name: "rock", component: <Rock />, beats: 3 },
  { id: 2, name: "paper", component: <Paper />, beats: 1 },
  { id: 3, name: "scissors", component: <Scessior />, beats: 2 },
];

export const ChoicesContext = React.createContext<Choice[]>([]);

function App() {
  const [socre, setScore] = useState<IScore>({ wins: 0, loses: 0 });
  const [gameMode, setGameMode] = useState<IGameMode>();

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
              <Route path="/solo" element={<Game setScore={setScore} />} />
              <Route path="/auto" element={<AutoPlay />} />
            </Routes>
          </Router>
        </ChoicesContext.Provider>
      </Content>
      <Footer className="footer">AERQ ©2022 Created by Hamdi Ben Yaflah</Footer>
    </Layout>
  );
}

export default App;
