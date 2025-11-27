import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const Activities = () => {
  const activities = [
    {
      title: "Problem Solving on LeetCode",
      description:
        "Practicing Data Structures and Algorithms in Java and JavaScript to strengthen my backend logic building.",
      icon: "💻",
    },
    {
      title: "Learning Spring Boot",
      description:
        "Building REST APIs using Java Spring Boot and exploring authentication with JWT and Spring Security.",
      icon: "☕",
    },
    {
      title: "Building MERN Projects",
      description:
        "Developing full-stack applications using MongoDB, Express.js, React.js, and Node.js with CRUD functionality.",
      icon: "🌐",
    },
    {
      title: "Open Source & GitHub",
      description:
        "Contributing to open-source projects and maintaining clean version control workflows using Git and GitHub.",
      icon: "📦",
    },
  ];

  return (
    <section id="activities" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4 fw-bold">My Activities</h2>
        <Row className="justify-content-center">
          {activities.map((activity, index) => (
            <Col md={6} lg={4} className="mb-4" key={index}>
              <Card className="shadow-sm border-0 h-100 text-center">
                <Card.Body>
                  <div
                    className="display-4 mb-3"
                    style={{ fontSize: "3rem" }}
                  >
                    {activity.icon}
                  </div>
                  <Card.Title className="fw-bold">{activity.title}</Card.Title>
                  <Card.Text>{activity.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Activities;
