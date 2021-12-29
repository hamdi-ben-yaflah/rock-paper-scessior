import React from "react";
import { Row, Col } from "antd";
import styles from "./Score.module.css";
import { IScore } from "../../typings/game";

interface ScorePrpos {
  score: IScore;
}

function Score({ score = { wins: 0, loses: 0 } }: ScorePrpos) {
  return (
    <Row className={styles.scoreRow}>
      <Col xs={2} sm={4} md={6} lg={8} xl={10}>
        {score.wins}
      </Col>
      <Col xs={20} sm={16} md={12} lg={8} xl={4}>
        Score
      </Col>
      <Col xs={2} sm={4} md={6} lg={8} xl={10}>
        {score.loses}
      </Col>
    </Row>
  );
}

export default Score;
