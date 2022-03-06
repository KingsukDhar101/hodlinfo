import React from "react";
import "../Styles/header.css";

export default function Header() {
  return (
    <>
      <div className="header-container">
        <div className="header-left">
          <div className="header-logo-text-large">HODLINFO</div>
          <div className="header-logo-text-small">
            Powered By{" "}
            <span style={{ color: "rgb(54,164,162)" }}>Finstreet</span>
          </div>
        </div>
        <div className="header-middle">
          <button>INR</button>
          <button className="btn-middle">BTC</button>
          <button>BUY BTC</button>
        </div>
        <div className="header-right">
          <div className="circle">50</div>
          <div className="connect-container">
            <i className="fa fa-telegram"></i>
            <div className="connect-text">Connect Telegram</div>
          </div>
          <button className="toggle-btn">
            <button className="circle inside-btn"></button>
          </button>
        </div>
      </div>
    </>
  );
}
