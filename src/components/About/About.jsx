import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import Tada from 'react-reveal/Tada';
import Flash from 'react-reveal/Flash';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade delay={1000}>
            <Tada bottom duration={900} delay={1270} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
              </Tada>
              </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'Junior software engineer, motivated and passionate about creating impactful solutions that makes life easier and difficult tasks, simple.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    'Since I was in highschool I have been curious on the why/how everyday things I look at on a screen get there. After speaking with a few friends who are CS majors I got my first real world look into what possibilities the field has to offer, and I have been interested ever since!'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree || 'Outside of tech, my hobbies involve playing piano, hiking & shoe shopping.'}
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
