



// src/components/ImageGallery.jsx
import React from "react";
import { Carousel, Container } from "react-bootstrap";

function ImageGallery() {
  return (
    <section className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">School Image Gallery</h2>

        {/* interval={3000} = 3 seconds, pause="hover" = stop when hovered */}
        <Carousel interval={3000} pause="hover" fade>
          <Carousel.Item>
            <img
              className="d-block w-100 rounded shadow"
              src="../../src/assets/images/c4.jpeg"
              alt="Annual Sports Day"
              height="450"
              style={{ objectFit: "cover" }}
            />
            <Carousel.Caption>
              <h5>Annual Sports Day</h5>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 rounded shadow"
              src="../../src/assets/images/c2.jpeg"
              alt="Science Fair"
              height="450"
              style={{ objectFit: "cover" }}
            />
            <Carousel.Caption>
              <h5>Science Fair 2025</h5>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 rounded shadow"
              src="../../src/assets/images/c1.jpeg"
              alt="Cultural Event"
              height="450"
              style={{ objectFit: "cover" }}
            />
            <Carousel.Caption>
              <h5>Cultural Event</h5>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </section>
  );
}

export default ImageGallery;
