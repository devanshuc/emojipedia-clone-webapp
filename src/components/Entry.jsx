import React from "react";
import Terms from "./Terms";
import Description from "./Description";

function Entry(props) {
  return (
    <div className="term">
      <Terms name={props.name} emoji={props.emoji} />
      <Description meaning={props.meaning} />
    </div>
  );
}

export default Entry;
