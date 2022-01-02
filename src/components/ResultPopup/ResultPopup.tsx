import React from "react";
import { Result, Modal, Button, Row, Col } from "antd";
import { IChoice, IResult } from "../../typings/game";

interface ResutProps extends IResult {
  isModalVisible: boolean;
  choiceOne: IChoice;
  choiceTwo: IChoice;
  playAgain: () => void;
}

function ResultPopup({
  status,
  title,
  isModalVisible,
  choiceOne,
  choiceTwo,
  playAgain,
}: ResutProps) {
  return (
    <Modal
      wrapProps={{
        "data-cy": "result-popup",
        "data-testid": "result-popup",
      }}
      title="Resut"
      visible={isModalVisible}
      footer={[
        <Button
          key="back"
          type="primary"
          onClick={playAgain}
          data-cy="play-again-button"
        >
          Play Again
        </Button>,
      ]}
      onCancel={playAgain}
    >
      <Row justify="space-between">
        <Col span={7} data-testid="player-one-choice">
          {choiceOne.component}
        </Col>
        <Col span={10}>
          <Result status={status} title={title} />
        </Col>
        <Col span={7} data-testid="player-two-choice">
          {choiceTwo.component}
        </Col>
      </Row>
    </Modal>
  );
}

export default ResultPopup;
