import React from "react";

function Holiday(props) {
  const { Day } = props;
  return (
    <div>
      <h1> {Day} : Today is Holiday</h1>
    </div>
  );
}
export default Holiday;
