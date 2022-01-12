import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Project Roadmap',
    paragraph: 'Welcome to the DeFi 3.0 Revolution'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                {/* <div className="testimonial-item-content"> */}
                  <h5 className=" mb-0">
                  <span className="testimonial-item-link">Phase 1:</span> Launch 🚀
                  </h5>
                {/* </div> */}
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <p className="testimonial-item-name text-sm "> - Token Fair Launch </p>
                  <p className="testimonial-item-name text-sm "> - CG & CMC Listings </p>
                  <p className="testimonial-item-name text-sm "> - Holdings Dashboard </p>
                  <p className="testimonial-item-name text-sm "> - Advisor Reveal</p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                {/* <div className="testimonial-item-content"> */}
                  <h5 className=" mb-0">
                    <span className="testimonial-item-link">Phase 2:</span> Enter Space 🌌
                  </h5>
                {/* </div> */}
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <p className="testimonial-item-name text-sm "> - DAO Launch </p>
                  <p className="testimonial-item-name text-sm "> - DAO Custodian Established </p>
                  <p className="testimonial-item-name text-sm "> - Marketing Rampage </p>
                  <p className="testimonial-item-name text-sm "> - 100M Market Cap </p>
                </div>
              </div>
            </div>


            <div className="tiles-item reveal-from-right" data-reveal-delay="200">
              <div className="tiles-item-inner">
                {/* <div className="testimonial-item-content"> */}
                  <h5 className=" mb-0">
                  <span className="testimonial-item-link">Phase 3:</span> Moon Landing 🌕
                  </h5>
                {/* </div> */}
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <p className="testimonial-item-name text-sm "> - Establish Foundation </p>
                  <p className="testimonial-item-name text-sm "> - Partnerships </p>
                  <p className="testimonial-item-name text-sm "> - Token Bridging </p>
                  <p className="testimonial-item-name text-sm "> - Integrations </p>
                </div>
              </div>
            </div>

            {/* <div className="tiles-item reveal-from-left" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <p className="text-sm mb-0">
                    — Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.
                      </p>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Ben Stafford</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">AppName</a>
                  </span>
                </div>
              </div>
            </div> */}

          </div>
        </div>
      </div>
    </section>
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;