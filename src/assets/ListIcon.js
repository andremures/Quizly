// @flow
import React from "react";

type Props = {
  inverted: boolean,
};

class ListIcon<Props> extends React.PureComponent {
  render() {
    const inverted: boolean = this.props.inverted;
    let props = this.props;

    if (inverted) {
      props = {
        ...props,
        style: {...props.style, backgroundColor: "#909090"},
        inverted: undefined,  // prevent it from being injected into svg props
      };

      return (
        <svg {...props} viewBox="0 0 24 24" >
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z" fill="white"/>
        </svg>
      );
    } else {
      return (
        <svg {...props} viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/>
        </svg>
      );
    }
  }
}

export default ListIcon;
