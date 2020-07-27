import React from "react";
import btnClose from "./../img/btnClose.svg";

class CloseButton extends React.Component {
  constructor(props) {
    super(props);

    this.closeClick = this.closeClick.bind(this);
    this.closeKey = this.closeKey.bind(this);
    this.closeLightbox = this.closeLightbox.bind(this);
  }

  componentWillMount() {
    this.closeKey();
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

  closeKey(event) {
    document.addEventListener("keydown", event => {
      if (event.keyCode === 27) {
        this.closeLightbox();
      }
    });
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
