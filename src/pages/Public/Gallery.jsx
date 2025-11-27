// src/components/Gallery.jsx
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function Gallery() {
  const galleryImages = [
    { id: 1, src: "../../src/assets/images/c4.jpeg", title: "Classroom Activities" },
    { id: 2, src: "../../src/assets/images/c3.jpeg", title: "Sports Day" },
    { id: 3, src: "../../src/assets/images/c2.jpeg", title: "Cultural Program" },
    { id: 4, src: "../../src/assets/images/c1.jpeg", title: "School Library" },
  ];

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4 fw-bold">School Gallery</h2>
      <Row>
        {galleryImages.map((image) => (
          <Col key={image.id} xs={12} sm={6} md={4} className="mb-4">
            <Card className="shadow-sm border-0 rounded-3">
              <Card.Img
                variant="top"
                src={image.src}
                alt={image.title}
                style={{ height: "250px", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title className="text-center">{image.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Gallery;
