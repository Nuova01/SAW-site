import React from 'react';
import './main.css';
import Start from './START/start';
import Desc from './DESCRIPTION/desc';
import End from './END/end';
import Logo from './LOGO/logo';
import Footer from './FOOTER/footer';
import The from './THE/the';

export default function Main() {
  return (
    <div className="wrapper">
        <Logo />
        <Desc />
        <The />
        <Start />
        <End />
        {/* <Footer /> */}
    </div>
  );
}