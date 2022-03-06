import React from "react";
import "../Styles/content.css";

export default function Card({ item }) {
  return (
    <div key={item.id} className="header-container card">
      <div className="h1 data">{item.id}</div>
      <div className="h2 data">{item.name}</div>
      <div className="h3 data">₹ {item.last}</div>
      <div className="h4 data">
        ₹ {item.buy} / ₹ {item.sell}
      </div>
      <div className="h5 data">{item.volume}</div>
      <div className="h6 data">{item.base_unit}</div>
    </div>
  );
}
