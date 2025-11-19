import React from 'react';
import './main.css';
import Video from './VIDEO';
import LogoStart from './LOGO';
import End from './END';
import Description from './DESCRIPTION';
import Features from './FEATURES';

export default function Main() {
  return (
    <div className="wrapper">
        <LogoStart /> 
        <Description />
        <Features />
        <Video/>
        <End/>
        {/* <Footer /> */}
    </div>
  );
}