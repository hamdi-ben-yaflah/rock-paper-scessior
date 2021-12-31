/* eslint-disable no-unused-vars */
import { Button, Input, Modal } from "antd";
import React, { useState } from "react";

interface UsernamePopupProps {
  setUsername: (value: string) => void;
  isModalVisible: boolean;
}

function UsernamePopup({ setUsername, isModalVisible }: UsernamePopupProps) {
  const [localUsername, setLocalUsername] = useState<string>("");

  const handleOk = () => {
    setUsername(localUsername);
    setLocalUsername("");
  };

  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocalUsername(event.target.value);
  };

  return (
    <Modal
      wrapProps={{
        "data-cy": "username-popup",
        "data-testid": "username-popup",
      }}
      title="Username"
      visible={isModalVisible}
      footer={[
        <Button
          key="ok"
          type="primary"
          onClick={handleOk}
          data-cy="save-button"
        >
          Save
        </Button>,
      ]}
    >
      <Input
        placeholder="Enter your username"
        value={localUsername}
        onChange={handleUsername}
        data-cy="username-input"
      />
    </Modal>
  );
}

export default UsernamePopup;
