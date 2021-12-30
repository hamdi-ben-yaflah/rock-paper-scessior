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
    <Space direction="vertical">
      <Title>Welcome To Rock, Paper, Scessior Game</Title>
      <Title level={3}>Choose The Game Mode</Title>
      <Row justify="center">
        <Col span={11}>
          <Link
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
            to="/auto"
            className={styles.link}
            onClick={() => setGameMode("auto")}
          >
            <Computer /> <Title level={3}> VS </Title> <Computer />
          </Link>
        </Col>
      </Row>
    </Space>
  );
}

export default Dashboard;
