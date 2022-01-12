import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import { Link } from 'react-router-dom';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
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
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Games we initially invest',
    paragraph: 'We Invest in nodes that play to earn games (P2E) for you and generate revenues that are returned to nodes holders creating a sustainable lifetime form of passive income.'
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

            <a href='https://legendsofvenari.com' target='_blank'>
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                  <Image
                    src={require('./../../assets/images/p1.png')}
                    alt="Open"
                    width={200} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Legends of Venari
                  </h4>
                  <p className="m-0 text-sm">
                    Merging NFTs with a creature collecting RPG. Join the alpha pass sale on December 12, 9pm EST
                  </p>
                </div>
              </div>
            </div>
            </a>
            <a href='https://pegaxy.io/' target='_blank'>
            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/p2.png')}
                      alt="Open"
                      width={200} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    PEGAXY
                  </h4>
                  <p className="m-0 text-sm">
                    Pegaxy (Pegasus Galaxy) is a racing game with futuristic mythological styling.
                  </p>
                </div>
              </div>
            </div>
            </a>
            <a href='https://cosmicguild.one/' target='_blank'>
            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/p3.png')}
                      alt="Open"
                      width={200} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Cosmic Universe
                  </h4>
                  <p className="m-0 text-sm">
                    A play-to-earn fantasy crypto gaming metaverse on the Harmony blockchain.
                  </p>
                </div>
              </div>
            </div>

            </a>
            <a href='https://cryptoraiders.xyz/' target='_blank'>
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/p4.png')}
                      alt="Open"
                      width={200} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Crypto Raiders
                    </h4>
                  <p className="m-0 text-sm">
                    Raid Dungeons ☠️ Earn Gear 🛡️ Level Up 💪 <br/> An NFT-based dungeon crawler on Polygon. Launching next: PVP Duels!
                  </p>
                </div>
              </div>
            </div>

            </a>
            <a href='https://elfinkingdom.com/home' target='_blank'>
            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/p5.png')}
                      alt="Open"
                      width={200} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Elfin Kingdom
                  </h4>
                  <p className="m-0 text-sm">
                    You are part of the kingdom, create your own adventure, solve quests, earn for your efforts and compete to be the best.
                  </p>
                </div>
              </div>
            </div>

            </a>
            <a href='https://defikingdoms.com/' target='_blank'>
            <div className="tiles-item reveal-from-bottom" data-reveal-delay="400">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/p6.png')}
                      alt="Open"
                      width={200} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    DeFi Kingdoms
                  </h4>
                  <p className="m-0 text-sm">
                    A DeFi game built on the blockchain, designed with useable NFTs
                  </p>
                </div>
              </div>
            </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;