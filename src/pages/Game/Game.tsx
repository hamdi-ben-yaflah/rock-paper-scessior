/* eslint-disable no-unused-vars */
import { Row, Col, Typography, Avatar, Tooltip, Space, Button } from "antd";
import { EditOutlined } from "@ant-design/icons";
import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ChoicesContext } from "../../App";
import ResultPopup from "../../components/ResultPopup/ResultPopup";
import UsernamePopup from "../../components/UsernamePopup/UsernamePopup";
import useLocalStorage from "../../hooks/useLocalStorage";
import QuestionSign from "../../icons/QuestionSign";
import { IChoice, IResult, Status } from "../../typings/game";
import { mapStatusToIResut, getPlayerOneStatus } from "../../utils/utils";
import styles from "./Game.module.css";

interface GameProps {
  setScore: (playerResut: Status) => void;
}

const { Title } = Typography;

function Game({ setScore }: GameProps) {
  const [username, setUsername] = useLocalStorage("username", "");
  const choices = useContext(ChoicesContext);
  const [result, setResult] = useState<IResult>();
  const [playerChoice, setPlayerChoice] = useState<IChoice>();
  const [computerChoice, setComputerChoice] = useState<IChoice>();

  const resetGame = () => {
    setResult(undefined);
    setPlayerChoice(undefined);
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(randomChoice);
  };

  useEffect(() => {
    setScore("not-set");
    resetGame();
  }, []);

  useEffect(() => {
    if (playerChoice) {
      const playerResut = getPlayerOneStatus(playerChoice, computerChoice!);
      const { status, title } = mapStatusToIResut(playerResut);
      setResult({ status, title });
      setScore(playerResut);
    }
  }, [playerChoice]);

  const handlePlayChoices = (id: number): void => {
    const choisen = choices.find((choice) => choice.id === id);
    setPlayerChoice(choisen);
  };

  return (
    <div className={styles.container} data-cy="game-page">
      <Row className={styles.header} data-cy="game-header">
        <Col span={11}>
          <Row
            justify="center"
            className={styles.username}
            data-cy="username-label"
          >
            <Title level={2}>{username || "Username"}</Title>
            {username && (
              <Button
                ghost
                type="primary"
                shape="round"
                icon={<EditOutlined />}
                onClick={() => setUsername("")}
                data-cy="edit-username-button"
              />
            )}
          </Row>
        </Col>
        <Col span={2}>
          <Title level={5}>VS</Title>
        </Col>
        <Col span={11}>
          <Title level={2}>Computer</Title>
        </Col>
      </Row>
      <Row>
        <Col span={11}>
          {choices &&
            choices.map(({ id, name, component }) => (
              <Row key={id} justify="center" className={styles.avatarRow}>
                <Col onClick={() => handlePlayChoices(id)} data-cy={name}>
                  <Tooltip title={name} placement="top">
                    <Avatar
                      className={styles.avatar}
                      size={{
                        sm: 64,
                        md: 64,
                        lg: 64,
                        xl: 80,
                        xxl: 80,
                      }}
                      icon={component}
                    />
                  </Tooltip>
                </Col>
              </Row>
            ))}
        </Col>
        <Col span={2}>/</Col>
        <Col span={11}>
          <QuestionSign />
        </Col>
      </Row>
      <Row justify="center">
        <Button type="primary" shape="round" data-cy="switch-auto-mode">
          <Link to="/auto">Switch to auto play mode</Link>
        </Button>
      </Row>
      {result && (
        <ResultPopup
          status={result?.status!}
          title={result?.title!}
          choiceOne={playerChoice!}
          choiceTwo={computerChoice!}
          playAgain={() => resetGame()}
          isModalVisible={!!result}
        />
      )}

      <UsernamePopup
        setUsername={setUsername}
        isModalVisible={username === ""}
      />
    </div>
  );
}

export default Game;
