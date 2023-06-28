import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            My passion for coding started to developed when I was pursuing my Business bachelor degree at junior year.
            <br />
           As a growth mindset person, I'm strongly inspired by the idea of creating new things and making an impact.
            <br />
            Experience at UCLA Coding Boot camp has sharpen my skillsets and had me interact with real-world projects.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Working out (strengthen my mentality and body)
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading (sharpen my knowledge)
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
