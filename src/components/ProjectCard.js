import React from "react";
import { Card, Col, Row, Button, Text, Link } from "@nextui-org/react";

const textColor = "#000";

const ProjectCard = ({ data }) => {
  const openBuild = (url) => {
    window.open(url);
  };

  return (
    <Card css={{ w: "300px", h: "400px" }}>
      <Card.Header css={{ position: "absolute", h: "35px" }}>
        <Col>
          <Text size={18} color="#17181f" b>
            {data.title}
          </Text>
        </Col>
      </Card.Header>
      <Card.Body
        css={{ p: 0 }}
        onClick={() => {
          openBuild(data.build);
        }}
      >
        <Card.Image
          src={data.image}
          width="100%"
          height="100%"
          objectFit="cover"
          alt="Card background"
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
            {data.languages.map((e) => (
              <Text size={12} color={textColor}>
                {e}
              </Text>
            ))}
          </Col>
          <Col>
            <Row justify="flex-end">
              <Link href={data.link} target="_blank">
                <Button flat auto rounded css={{ color: "#b57f50" }}>
                  <Text weight="bold" transform="uppercase">
                    See Code
                  </Text>
                </Button>
              </Link>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>
  );
};
export default ProjectCard;
