import React from 'react';
import './styles.scss';

export default function TradeComponent() {
  return (
    <div className="trade-content">
      <span className="line" />
      <h4>Expore our solution</h4>
      <h2>
        Our NFT infrastructure help you to focus
        completely on your users growth.
      </h2>
      <div className="cards-content">
        <div>
          <h3>Games scholarships</h3>
          <p>
            Build your own scholarship program
            withouth worring about software
            development and maintenance.
          </p>
        </div>
        <div>
          <h3>Subscriptions</h3>
          <p>
            Generate a new revenue stream
            by NFT´ing your memebership
            suscriptions.
          </p>
        </div>
        <div>
          <h3>DeFi Protocols</h3>
          <p>
            Convert  liquidity injection in NFTs
            wTokens, fostering composability
            with other protocols.
          </p>
        </div>
      </div>
      <div className="cards-content">
        <div>
          <h3>Identity</h3>
          <p>
            Convert your users profiles in NFTs,
            so they will be able to trade their
            reputation.
          </p>
        </div>
        <div>
          <h3>Digital Art</h3>
          <p>
            Allow digital art owners to rent
            their NFTs, generating a new revenue
            model for your collection/marketplace.
          </p>
        </div>
        <div>
          <h3>And More..</h3>
          <p>
            Use cases have no limit:
            off-chain assets, metaverse items,
            music, social status, and more..
          </p>
        </div>
      </div>
    </div>
  );
}
