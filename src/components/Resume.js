import React, { useState } from "react";
import "./Resume.css";
import { Modal, Button, Spacer, Text, Image } from "@nextui-org/react";
import ResumeImage from "./Ethan-Fang-Resume.png";

const Resume = () => {
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
  };
  return (
    <div className="Resume">
      <div className="headerBox">
        <h1 className="resHeader" margin-top="45px">
          Resume
        </h1>
        <div className="resLine"></div>
      </div>
      <ul className="resContainer">
        <Button
          onPress={handler}
          css={{
            width: "100%",
            height: "32px",
            backgroundColor: "#17181f",
            borderRadius: "20px",
            fontSize: "20px",
            display: "flex",
            transition: "0.3s",
            fontWeight: "400",
            "&:hover": {
              width: "105%",
              backgroundColor: "#33353d",
            },
          }}
        >
          <i className="fa-solid fa-magnifying-glass" display="flex" />
          <Spacer x={0.4} />
          <div className="text">View</div>
        </Button>
        <a className="bubble2" href="Ethan-Fang-Resume.pdf" download>
          <i className="fa-solid fa-download" />
          <Spacer x={0.1} />
          <div className="text">Download</div>
        </a>
      </ul>
      <Modal width="700px" closeButton open={visible} onClose={closeHandler}>
        <Modal.Header>
          <Text size={18}>
            Ethan Fang
            <Text b size={18}>
              Resume
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Image src={ResumeImage} width="100%" height="100%" />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Resume;
