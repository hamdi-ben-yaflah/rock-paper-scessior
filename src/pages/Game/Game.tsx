import { Button } from "antd";
import React, { useEffect, useState, useContext } from "react";
import { ChoicesContext } from "../../App";
import Resut from "../../components/Result/Resut";
import { Choice, IResult, IScore } from "../../typings/game";
import { mapStatusToResut, winner } from "../../utils/utils";

interface GameProps {
  setScore: (score: IScore) => void;
}

function Game({ setScore }: GameProps) {
  const choices = useContext(ChoicesContext);
  const [resut, setResult] = useState<IResult>();
  const [playerChoice, setPlayerChoice] = useState<Choice>();
  const [computerChoice, setComputerChoice] = useState<Choice>();

  useEffect(() => {
    setComputerChoice(choices[Math.floor(Math.random() * choices.length)]);
  }, []);

  const handlePlayChoices = (id: number): void => {
    const choisen = choices.find((c) => c.id === id);
    setPlayerChoice(choisen);

    if (playerChoice && computerChoice) {
      const playerResut = winner(playerChoice, computerChoice);
      const { status, title } = mapStatusToResut(playerResut);
      setResult({ status, title });
      // setScore
    }
  };

  return (
    <>
      {choices &&
        choices.map(({ id, name, component }) => (
          <Button key={id} onClick={() => handlePlayChoices(id)}>
            {component}
            {name}
          </Button>
        ))}

      {resut && (
        <Resut
          status={resut.status}
          title={resut.title}
          playAgain={() => setResult(undefined)}
          isModalVisible={!!resut}
        />
      )}
    </>
  );
}

export default Game;
