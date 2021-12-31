/* eslint-disable no-unused-vars */
import { Row, Col, Typography, Avatar, Tooltip, Button, Space } from "antd";
import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ChoicesContext } from "../../App";
import ResultPopup from "../../components/ResultPopup/ResultPopup";
import QuestionSign from "../../icons/QuestionSign";
import { IChoice, IResult, Status } from "../../typings/game";
import { mapStatusToIResut, getPlayerOneStatus } from "../../utils/utils";
import styles from "./AutoPlay.module.css";

interface AutoPlayProps {
  setScore: (playerResut: Status) => void;
}

const { Title } = Typography;

function AutoPlay({ setScore }: AutoPlayProps) {
  const choices = useContext(ChoicesContext);
  const [computerOneChoice, setComputerOneChoice] = useState<IChoice>();
  const [computerTwoChoice, setComputerTwoChoice] = useState<IChoice>();
  const [result, setResult] = useState<IResult>();

  const resetGame = () => {
    setResult(undefined);
    setComputerOneChoice(undefined);
    setComputerTwoChoice(undefined);
  };

  useEffect(() => {
    setScore("not-set");
    resetGame();
  }, []);

  useEffect(() => {
    if (computerOneChoice && computerTwoChoice) {
      const computerOneResult = getPlayerOneStatus(
        computerOneChoice,
        computerTwoChoice!
      );
      const { status, title } = mapStatusToIResut(computerOneResult);
      setResult({ status, title });
      setScore(computerOneResult);
    }
  }, [computerOneChoice, computerTwoChoice]);

  const handleComputersChoices = () => {
    const randomChoiceOne = choices[Math.floor(Math.random() * choices.length)];
    const randomChoiceTwo = choices[Math.floor(Math.random() * choices.length)];
    setComputerOneChoice(randomChoiceOne);
    setComputerTwoChoice(randomChoiceTwo);
  };

  return (
    <div className={styles.container}>
      <Row className={styles.header}>
        <Col span={11}>
          <Title level={2}>Computer 1</Title>
        </Col>
        <Col span={2}>
          <Title level={5}>VS</Title>
        </Col>
        <Col span={11}>
          <Title level={2}>Computer 2</Title>
        </Col>
      </Row>

      <Row>
        <Col span={11}>
          <QuestionSign />
        </Col>
        <Col span={2}>/</Col>
        <Col span={11}>
          <QuestionSign />
        </Col>
      </Row>
      <Space direction="vertical">
        <Row justify="center">
          <Button
            ghost
            type="primary"
            shape="round"
            onClick={handleComputersChoices}
          >
            Start The Game
          </Button>
        </Row>
        <Row justify="center">
          <Button type="primary" shape="round">
            <Link to="/solo">Switch to solo mode</Link>
          </Button>
        </Row>
      </Space>

      {result && (
        <ResultPopup
          status={result?.status!}
          title={result?.title!}
          choiceOne={computerOneChoice!}
          choiceTwo={computerTwoChoice!}
          playAgain={() => resetGame()}
          isModalVisible={!!result}
        />
      )}
    </div>
  );
}

export default AutoPlay;
