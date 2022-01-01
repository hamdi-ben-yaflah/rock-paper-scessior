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
        <div data-testid="player-one-choice">{choiceOne.component}</div>
        <Result status={status} title={title} />
        <div data-testid="player-two-choice">{choiceTwo.component}</div>
      </Row>
    </Modal>
  );
}

export default ResultPopup;
