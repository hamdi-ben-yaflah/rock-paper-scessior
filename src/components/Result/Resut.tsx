import React from "react";
import { Result, Modal, Button } from "antd";
import { IResult } from "../../typings/game";

interface ResutProps extends IResult {
  isModalVisible: boolean;
  playAgain: () => void;
}

function Resut({ status, title, isModalVisible, playAgain }: ResutProps) {
  return (
    <Modal
      title="Resut"
      visible={isModalVisible}
      footer={[
        <Button key="back" type="primary" onClick={playAgain}>
          Play Again
        </Button>,
      ]}
    >
      <Result status={status} title={title} />
    </Modal>
  );
}

export default Resut;
