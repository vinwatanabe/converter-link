import React from "react";

class AlertField extends React.Component {
  render() {
    return <div style={{backgroundColor: this.props.color }} className={this.props.classCSS}>{this.props.message}</div>;
  }
}

export default AlertField;
