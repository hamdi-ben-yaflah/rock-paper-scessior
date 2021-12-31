/* eslint-disable no-unused-vars */
import { Input, Modal } from "antd";
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
    <Modal title="Username" visible={isModalVisible} onOk={handleOk}>
      <Input
        placeholder="Enter your username"
        value={localUsername}
        onChange={handleUsername}
      />
    </Modal>
  );
}

export default UsernamePopup;
