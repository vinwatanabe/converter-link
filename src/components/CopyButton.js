import React from "react";

class CopyButton extends React.Component {
  render() {
    return (
      <button onClick={this.props.action} className="btnCopy">
        {this.props.title}
      </button>
    );
  }
}

export default CopyButton;
