import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import { Link } from 'react-router-dom';


const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h3 className="mt-10 mb-32 reveal-from-bottom" data-reveal-delay="200">
              JOIN <span style={{"color": "rgb(0, 176, 255)"}}>POPOLO ($PPL) MULTI GAMES STRATEGY</span> startups
              <br/>
                We invest in multiple P2E games to generate returns
            </h3>
            <div className="container-xs">
              <p className="m-10 mb-32 reveal-from-bottom" data-reveal-delay="400">
                POPOLO ($PPL) is a multi games strategy reflection token supported by real revenues in P2E games.<br/> We invest in multiple games to maximize returns.<br/> You have exposure to games and earn rewards. 
              </p>
              <h4 className="m-10 mb-32 reveal-from-bottom" data-reveal-delay="500">
                You earn rewards through reflections	
              </h4>
            </div>
              <div className="reveal-from-bottom" style={{"margin-top": "50px"}} data-reveal-delay="600">

                {/* <ButtonGroup> */}
                <Link to="#">
                  <Button style={{"background": "rgb(0, 176, 255)", "color": "white", "border-bottom-left-radius": "10px", "border-top-left-radius": "10px", "box-shadow": "rgb(0 176 255 / 24%) 0px 8px 16px 0px"}} wideMobile href="https://cruip.com/">
                    Dashboard  
                  </Button>
                </Link>
                <Link to="#">
                  <Button color="dark" style={{"border-color": "rgb(0, 176, 255)", "color": "rgb(0, 176, 255)"}} wideMobile href="#">
                    Twitter
                  </Button>
                </Link>
                <Link to="#">
                  <Button color="dark" style={{"border-color": "rgb(0, 176, 255)", "color": "rgb(0, 176, 255)"}} wideMobile href="#">
                    Telegram
                  </Button>
                </Link>
                <Link to="#">
                  <Button color="dark" style={{"border-color": "rgb(0, 176, 255)", "color": "rgb(0, 176, 255)"}} wideMobile href="#">
                    Medium
                  </Button>
                </Link>
                <Link to="#">
                  <Button color="dark" style={{"border-color": "rgb(0, 176, 255)", "color": "rgb(0, 176, 255)"}} wideMobile href="#">
                    Dextools
                  </Button>
                </Link>
                {/* </ButtonGroup> */}
              </div>
          </div>
          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
            <a
              data-video="https://player.vimeo.com/video/174002812"
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              <Image
                className="has-shadow"
                src={require('./../../assets/images/video-placeholder.jpg')}
                alt="Hero"
                width={896}
                height={504} />
            </a>
          </div>
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://player.vimeo.com/video/174002812"
            videoTag="iframe" />
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;