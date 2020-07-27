import React from "react";
import btnClose from "./../img/btnClose.svg";

class CloseButton extends React.Component {
  constructor(props) {
    super(props);

    this.closeClick = this.closeClick.bind(this);
    this.closeLightbox = this.closeLightbox.bind(this);
  }

  closeLightbox() {
    const inputField = document.getElementsByClassName("inputField")[0];
    inputField.value = "";
    inputField.focus();

    const lightbox = document.getElementsByClassName("lightbox")[0];
    lightbox.classList.remove("isActive");
  }

  closeClick(event) {
    event.preventDefault();

    this.closeLightbox();
  }

  render() {
    return (
      <div className="btnClose">
        <img
          src={btnClose}
          alt={this.props.alt}
          onClick={this.closeClick}
        />
      </div>
    );
  }
}

export default CloseButton;
