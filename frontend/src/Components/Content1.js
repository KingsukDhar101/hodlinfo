import React from "react";
export default function Content1() {
  
  
  return (
    <div className="content1-container">
      <div className="heading">Best Price to Trade</div>
      <div className="content">
        <div className="wrapper">
          <div className="text-heading">0.99 %</div>
          <div className="text">5 Mins</div>
        </div>
        <div className="wrapper">
          <div className="text-heading">1.3 %</div>
          <div className="text">1 Hour</div>
        </div>
        <div className="big-text">
          ₹ <span>3127505</span>
        </div>
        <div className="wrapper">
          <div className="text-heading">5.34 %</div>
          <div className="text">1 Day</div>
        </div>
        <div className="wrapper">
          <div className="text-heading">12.45 %</div>
          <div className="text">7 Days</div>
        </div>
      </div>
      <div className="small-text">
        Average BTC/INR net price including commission
      </div>
    </div>
  );
}
