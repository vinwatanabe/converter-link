import React from "react";
import ConvertButton from "./ConvertButton";
import convertMacToWin from "./../functions/convertMacToWin";
import convertWinToMac from "./../functions/convertWinToMac";

class ConverterLink extends React.Component {
  constructor(props) {
    super(props);

    this.convertM2W = this.convertM2W.bind(this);
    this.convertW2M = this.convertW2M.bind(this);
  }

  getLightbox() {
    const lightbox = document.getElementsByClassName("lightbox")[0];
    lightbox.classList.add("isActive");
  }

  inputNotFilled() {
    const alert = document.querySelector(".alertField");
    alert.classList.add("isActive");
    setTimeout(() => alert.classList.remove("isActive"), 3000);
    const inputField = document.querySelector(".inputField");
    inputField.focus();
  }

  convertM2W(event) {
    event.preventDefault();

    const inputField = document.querySelector(".inputField");
    if (inputField.value === "" || null) {
      this.inputNotFilled();
    } else {
      this.getLightbox();
      convertMacToWin();
    }
  }

  convertW2M(event) {
    event.preventDefault();

    const inputField = document.querySelector(".inputField");
    if (inputField.value === "" || null) {
      this.inputNotFilled();
    } else {
      this.getLightbox();
      convertWinToMac();
    }
  }

  render() {
    return (
      <div className="main">
        <h1>/ {this.props.name} /</h1>

        <input type="text" className="inputField" autoFocus />

        <br />

        <ConvertButton action={this.convertM2W} title="Mac > Windows" />
        <ConvertButton action={this.convertW2M} title="Windows > Mac" />
      </div>
    );
  }
}

export default ConverterLink;
