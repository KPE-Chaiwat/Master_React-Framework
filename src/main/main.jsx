import React from "react";
import { BodyResizeBar, Header } from "./UI/exportUI.jsx";

function Mian() {
  return (
    <div style={appStyle}>
      <Header />
      <BodyResizeBar widgetLeft={<div>tong</div>} widgetBody={<div>top</div>} />
    </div>
  );
}

//--------------- Inline CSS styles
const appStyle = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
};

export default Mian;
