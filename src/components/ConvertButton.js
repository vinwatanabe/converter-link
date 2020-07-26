import React from "react";

class ConvertButton extends React.Component {
  render() {
    return <button onClick={this.props.action}>{this.props.title}</button>;
  }
}

export default ConvertButton;
