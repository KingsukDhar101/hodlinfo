import React, { useState, useEffect } from "react";
import Card from "./Card";
import "../Styles/content.css";
import axios from "axios";

export default function Content2() {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await axios.get("/api/getdata");
      const DATA = res.data.Data;
      setData(DATA);
    })();
  }, []);
  // console.log(data);

  return (
    <>
      <div className="content2-container">
        <div className="header-container">
          <div className="h1">#</div>
          <div className="h2">Name</div>
          <div className="h3">Last</div>
          <div className="h4">Buy / Sell Price</div>
          <div className="h5">Volume</div>
          <div className="h6">Base Unit</div>
        </div>
        {data.length > 0
          ? data.map((item) => <Card item={item} />)
          : "no data found"}
      </div>
    </>
  );
}
