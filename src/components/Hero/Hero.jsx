import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Zoom from 'react-reveal/Zoom';
import RubberBand from 'react-reveal/RubberBand';
import LightSpeed from 'react-reveal/LightSpeed';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

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
    <section id="hero" className="jumbotron">
      <Container>
        <Zoom bottom>
          <RubberBand left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
            <h1 className="hero-title">
              {title || 'Hi, my name is'}{' '}
              <span className="text-danger">{name || 'Jonathyn Carter'}</span>
              <br />
              {subtitle || "Your next developer!"}
            </h1>
            </RubberBand>
          </Zoom>
        <LightSpeed right={isDesktop} left={isMobile} duration={1000} delay={1970} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                {cta || 'Know more'}
              </Link>
            </span>
          </p>
        </LightSpeed>
      </Container>
    </section>
  );
};

export default Header;
