import React from "react";
import { Row, Typography, Col } from "antd";
import styles from "./Score.module.css";
import { IScore } from "../../typings/game";

const { Title } = Typography;

interface ScorePrpos {
  score: IScore;
}

function Score({ score = { wins: 0, loses: 0 } }: ScorePrpos) {
  return (
    <Row className={styles.scoreRow}>
      <Col sm={4} md={6} lg={8} xl={10}>
        <Title type="success" level={2}>
          {score.wins}
        </Title>
      </Col>
      <Col sm={16} md={12} lg={8} xl={4}>
        <Title type="warning" level={2}>
          Score
        </Title>
      </Col>
      <Col sm={4} md={6} lg={8} xl={10}>
        <Title type="danger" level={2}>
          {score.loses}
        </Title>
      </Col>
    </Row>
  );
}

export default Score;
