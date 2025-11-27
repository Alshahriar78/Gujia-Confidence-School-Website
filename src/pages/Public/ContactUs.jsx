import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

function ContactUs() {
  return (
    <section id="contact" className="py-5 bg-light">
      <Container>
        <h2 className="text-center fw-bold mb-4 text-primary">Contact Us</h2>
        <Row className="justify-content-center">
          <Col md={6}>
            <Card className="shadow-sm border-0">
              <Card.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="formName">
                    <Form.Label className="fw-semibold">Full Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" required />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label className="fw-semibold">Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" required />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formSubject">
                    <Form.Label className="fw-semibold">Subject</Form.Label>
                    <Form.Control type="text" placeholder="Enter subject" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formMessage">
                    <Form.Label className="fw-semibold">Message</Form.Label>
                    <Form.Control as="textarea" rows={4} placeholder="Write your message..." />
                  </Form.Group>

                  <div className="text-center">
                    <Button variant="primary" type="submit" className="px-4">
                      Send Message
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          <Col md={5} className="mt-4 mt-md-0">
            <Card className="shadow-sm border-0 h-100">
              <Card.Body>
                <h5 className="fw-bold mb-3">School Information</h5>
                <p className="mb-1">
                  <strong>MH Model School, Mokamtola</strong>
                </p>
                <p className="mb-1">Mokamtola, Gabtali, Bogura, Bangladesh</p>
                <p className="mb-1">📞 Phone: +880 1700-000000</p>
                <p className="mb-1">✉️ Email: mhschool@example.com</p>
                <hr />
                <h6 className="fw-semibold">Office Hours:</h6>
                <p className="mb-1">Sunday – Thursday: 9:00 AM – 4:00 PM</p>
                <p>Friday – Saturday: Closed</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ContactUs;
