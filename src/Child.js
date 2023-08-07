import React, { memo } from "react";

const Child = (props) => {
  console.log("Child rendered");
  return <></>;
};
export default memo(Child);
