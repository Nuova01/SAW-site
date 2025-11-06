import React from 'react';
import './main.css';
import Start from './START/start';
import Desc from './DESCRIPTION/desc';
import Feat from './FEATURES/feat';
import End from './END/end';

export default function Main() {
  return (
    <div className="wrapper">
        <Start />
        <Desc />
        <Feat />
        <End />
    </div>
  );
}