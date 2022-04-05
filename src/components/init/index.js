import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
import image from '../../assets/img/crypto.png';

export default function Init() {
  return (
    <div className="content-init">
      <div className="welcome-box">
        <div className="left-box">
          <span>Join Us</span>
          <h2>The NFT protocol to wake up your App</h2>
          <p>
            {' '}
            We provide the NFT infraestructure so you can focus
            completely on your core business
          </p>
          <div className="buttons-box">
            <Link to="/" className="btn-gral">Get Started</Link>
            <Link to="/" className="btn-gral no-fill">How it works</Link>
          </div>
        </div>
        <div className="right-box"><img alt="" src={image} /></div>
      </div>
      <div className="cards-content">
        <div>
          <h3>Plug-and-play API</h3>
          <p>
            Our API removes all the complexity
            and overhead of interacting with
            NFT protocols.
          </p>
        </div>
        <div>
          <h3>Web3 composability</h3>
          <p>
            Launch scholarship/rental features
            using an interoperable protocol.
          </p>
        </div>
        <div>
          <h3>Security First</h3>
          <p>
            All our smart contracts are audited
            by certified third parties to prevent
            any possible vulnerability.
          </p>
        </div>
      </div>
    </div>
  );
}
