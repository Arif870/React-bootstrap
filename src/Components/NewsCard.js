import React from "react";
import { Card, Col } from "react-bootstrap";

export default function NewsCard(props) {
  let { urlToImage, description, author } = props.article;
  return (
    <div>
      <Col>
        <Card>
          <Card.Img variant="top" src={urlToImage} />
          <Card.Body>
            <Card.Title>{author}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
}
