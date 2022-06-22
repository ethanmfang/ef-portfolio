import React from "react";
import "./ProjectCard.css";
import { Card, Col, Row, Button, Text } from "@nextui-org/react";
import MenuCard from "./MenuCard.png";

const textColor = "#000";

const ProjectCard = () => {
  return (
    <Card css={{ w: "300px", h: "400px" }}>
      <Card.Header css={{ position: "absolute" }}>
        <Col>
          <Text size={12} weight="bold" color={textColor}>
            Test
          </Text>
          <Text h3 color={textColor}>
            Test Again
          </Text>
        </Col>
      </Card.Header>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src={MenuCard}
          width="100%"
          height="100%"
          objectFit="cover"
          alt="Card example background"
        />
      </Card.Body>
      <Card.Footer
        isBlurred
        css={{
          position: "absolute",
          bgBlur: "#ffffff66",
          borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Row>
          <Col>
            <Text size={12} color={textColor}>
              Testy
            </Text>
            <Text size={12} color={textColor}>
              McTesterson
            </Text>
          </Col>
          <Col>
            <Row justify="flex-end">
              <Button flat auto rounded color="secondary">
                <Text weight="bold" transform="uppercase">
                  See Code
                </Text>
              </Button>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};
export default ProjectCard;
