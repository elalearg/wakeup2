import React from 'react';
import './styles.scss';
import Header from '../../components/header';
import Init from '../../components/init';
import TradeComponent from '../../components/trade';
import JoinUs from '../../components/join-us';
import Footer from '../../components/footer';

export default function Home() {
  return (
    <>
      <Header />
      <Init />
      <TradeComponent />
      <JoinUs />
      <Footer />
    </>
  );
}
