// @flow
import React from "react";

const TagIcon = (props: Object) => {
  const inverted: boolean = !!props.inverted;

  if (inverted) {
    props = {
      ...props,
      style: { ...props.style, backgroundColor: "#909090" },
      inverted: undefined, // prevent it from being injected into svg props
    };

    return (
      <svg {...props} viewBox="0 0 24 24">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path
          d="M22.83 12.99L11.83 2H2v9.83l10.99 10.99 9.84-9.83zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"
          fill="white"
        />
      </svg>
    );
  } else {
    return (
      <svg {...props} viewBox="0 0 24 24">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M22.83 12.99L11.83 2H2v9.83l10.99 10.99 9.84-9.83zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z" />
      </svg>
    );
  }
};

export default TagIcon;
