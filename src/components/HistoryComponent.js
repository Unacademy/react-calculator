import React from "react";
import { Link } from "react-router-dom";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function History(props) {
  const historyVal = props.history.map((h, i) => {
    return (
      <div key={i} className="historyVal">
        <div className="historyExp">{h.exp} </div>
        <div className="historyResults"> {h.result}</div>
      </div>
    );
  });
  return (
    <div className="App">
      <div className="calculator">
        <div className="top-pane">
          <div className="backButton">
            <Link to="/main">
              <FontAwesomeIcon icon={faArrowLeft} color="var(--mainWhite)" />
            </Link>
          </div>
          <div className="title">History</div>
        </div>
        <div className="historySec">{historyVal}</div>
      </div>
    </div>
  );
}