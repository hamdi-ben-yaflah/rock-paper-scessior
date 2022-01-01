/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Typography, Row, Col, Space } from "antd";
import { Link } from "react-router-dom";
import Computer from "../../icons/Computer";
import Person from "../../icons/Person";
import styles from "./Dashboard.module.css";
import { IGameMode } from "../../typings/game";

interface DashboardProps {
  setGameMode: (gameMode: IGameMode) => void;
}

const { Title } = Typography;

function Dashboard({ setGameMode }: DashboardProps) {
  useEffect(() => setGameMode("not-set"), []);

  return (
    <div data-cy="dashboard-page" data-testid="dashboard-page">
      <Space direction="vertical">
        <Title data-testid="dashboard-header">
          Welcome To Rock, Paper, Scessior Game
        </Title>
        <Title level={3} data-testid="dashboard-subheader">
          Choose The Game Mode
        </Title>
        <Row justify="center">
          <Col span={11}>
            <Link
              data-cy="solo-button"
              data-testid="solo-button"
              to="/solo"
              className={styles.link}
              onClick={() => setGameMode("solo")}
            >
              <Person /> <Title level={3}> VS </Title> <Computer />
            </Link>
          </Col>
          <Col span={2}>/</Col>
          <Col span={11}>
            <Link
              data-cy="auto-play-button"
              data-testid="auto-play-button"
              to="/auto"
              className={styles.link}
              onClick={() => setGameMode("auto")}
            >
              <Computer /> <Title level={3}> VS </Title> <Computer />
            </Link>
          </Col>
        </Row>
      </Space>
    </div>
  );
}

export default Dashboard;
