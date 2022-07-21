import React from "react";

function Container({
  header,
  children,
  textPosition = "right", // possible values: left, right, center
  direction = "vertical", // possible values: verical, horizontal
  contentPosition = "left", // possible values: left, right, center
}) {
  return (
    <div className={`container ${textPosition}`}>
      {header ? <h2>{header}THIS IS MY TEXT</h2> : null}

      <div className={`container-children ${direction} ${contentPosition}`}>
        {children}
      </div>
    </div>
  );
}

export default Container;
