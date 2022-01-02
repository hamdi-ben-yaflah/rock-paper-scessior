/* eslint-disable no-unused-vars */
import React from "react";
import { Row, Typography, Col, Button } from "antd";
import styles from "./Score.module.css";
import { IScore, Status } from "../../typings/game";

const { Title } = Typography;

interface ScorePrpos {
  score: IScore;
  setScore: (playerResut: Status) => void;
}

function Score({ score = { wins: 0, loses: 0 }, setScore }: ScorePrpos) {
  return (
    <Row
      className={styles.scoreRow}
      data-cy="score-banner"
      data-testid="score-banner"
    >
      <Col xs={2} sm={4} md={4} lg={6} xl={8} xxl={10}>
        <Title type="success" level={2}>
          <span data-testid="player-one-score">{score.wins}</span>
        </Title>
      </Col>
      <Col xs={20} sm={4} md={12} lg={8} xl={4} xxl={4}>
        <Title type="warning" level={2}>
          Score
        </Title>
      </Col>
      <Col xs={2} sm={4} md={4} lg={6} xl={8} xxl={8}>
        <Title type="danger" level={2}>
          <span data-testid="player-two-score"> {score.loses}</span>
        </Title>
      </Col>
      <Col xs={24} sm={4} md={4} lg={4} xl={4} xxl={2}>
        <Button
          danger
          type="primary"
          shape="round"
          onClick={() => setScore("not-set")}
        >
          Reset The Game
        </Button>
      </Col>
    </Row>
  );
}

export default Score;
