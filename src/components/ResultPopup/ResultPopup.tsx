import React from "react";
import { Result, Modal, Button, Row } from "antd";
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
      title="Resut"
      visible={isModalVisible}
      footer={[
        <Button key="back" type="primary" onClick={playAgain}>
          Play Again
        </Button>,
      ]}
      onCancel={playAgain}
    >
      <Row justify="space-between">
        {choiceOne.component}
        <Result status={status} title={title} />
        {choiceTwo.component}
      </Row>
    </Modal>
  );
}

export default ResultPopup;
