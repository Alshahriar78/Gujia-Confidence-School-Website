// src/components/Notice.jsx
import React from "react";
import { Container } from "react-bootstrap";
import "./Notice.css";

function Notice() {
  return (
    <div className="notice-bar bg-warning py-2">
      <Container>
        <div className="notice-wrapper">
          <span className="notice-label  fw-bold me-3">📢 Notice:</span>
          <div className="notice-marquee">
            <div className="notice-text">
              Admission going on for Class Play to Ten! | Annual Sports Day will be held on 25th November | Parents Meeting on 10th November |
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Notice;
