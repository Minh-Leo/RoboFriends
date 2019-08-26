import React from "react";

const Scroll = props => {
  return <div style={style}>{props.children}</div>;
};

const style = {
  overflow: "scroll",
  border: "1px solid black",
  height: "800px"
};

export default Scroll;
