import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <div className="containerEnd">
      <footer>
        <h2 className="end">наши квесты</h2>
      </footer>

      <div className="cont-quest-end">
        <div className="box-group-end-1">
          <div className="box box1end"></div>
          <div className="box box2end"></div>
        </div>

        <div className="box box3end"></div>
        <div className="box box4end"></div>
        <div className="box box5end"></div>

        <div className="box-group-end-2">
          <div className="box box6end"></div>
          <div className="box box7end"></div>
        </div>
      </div>
    </div>
  );
}
