import React from 'react';
import './main.css';
import Video from './VIDEO/VideoIndex';
import LogoStart from './LOGO/LogoIndex';
import End from './END/EndIndex';
import Description from './DESCRIPTION/DescIndex';
import Features from './FEATURES/FeatIndex';

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