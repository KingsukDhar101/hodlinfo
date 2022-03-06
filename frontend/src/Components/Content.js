import React from "react";
import "../Styles/content.css";
import Content1 from "./Content1";
import Content2 from "./Content2";


export default function Content() {
  return (
    <>
      <div className="content-container">
        <Content1 />
        <Content2 />
      </div>
    </>
  );
}
