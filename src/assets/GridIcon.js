// @flow
import React from "react";

const GridIcon = (props: Object) => {
  const inverted: boolean = !!props.inverted;

  if (inverted) {
    props = {
      ...props,
      style: {...props.style, backgroundColor: "#909090"},
      inverted: undefined,  // prevent it from being injected into svg props
    };

    return (
      <svg {...props} viewBox="0 0 24 24">
        <path d="M0 0h24v24H0V0z" fill="none"/>
        <path d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z" fill="white"/>
      </svg>
    );
  } else {
    return (
      <svg {...props} viewBox="0 0 24 24">
        <path d="M0 0h24v24H0V0z" fill="none"/>
        <path d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z"/>
      </svg>
    );
  }
};

export default GridIcon;
