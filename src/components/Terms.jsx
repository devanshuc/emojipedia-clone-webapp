import React from "react";

function Terms(item) {
  return (
    <dt>
      <span className="emoji" role="img" aria-label="Tense Biceps">
        {item.emoji}
      </span>
      <span>{item.name}</span>
    </dt>
  );
}

export default Terms;
