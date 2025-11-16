import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="containerEnd">
      <footer>
        <h2 className="end">наши квесты</h2>
      </footer>

      <div className="cont-quest-end">
        <div className="box-group-end-1 mobile">
          <div className="boxEnd1 box1end"></div>
          <div className="boxEnd2 box2end"></div>
        </div>

        <div className="boxEnd1 box3end"></div>
        <div className="boxEnd2 box4end"></div>
        <div className="boxEnd1 box5end"></div>

        <div className="box-group-end-2 mobile">
          <div className="boxEnd2 box6end"></div>
          <div className="boxEnd1 box7end"></div>
        </div>
      </div>
    </div>
  );
}
