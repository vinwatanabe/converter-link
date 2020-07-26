import React from "react";
import CopyButton from "./CopyButton";
import CloseButton from "./CloseButton";

class LightBox extends React.Component {
  constructor(props){
    super(props);

    this.copyClipboard = this.copyClipboard.bind(this);
  }

  copySuccessfulAlert() {
    const alert = document.querySelector(".alertSuccess");
    alert.classList.add("isActive");
    setTimeout(() => alert.classList.remove("isActive"), 3000);
  }

  copyClipboard() {
    let copyText = document.getElementsByClassName("inputField")[0];
    copyText.select();

    document.execCommand("copy");

    this.copySuccessfulAlert();
  }

  render() {
    return (
      <div className="lightbox">
        <CloseButton alt="Fechar" />

        <h2>\o/</h2>
        <h2>Seu link foi convertido!</h2>

        <div className="outputLink">
          <p className="result"></p>
        </div>

        <CopyButton title="Copiar link" action={this.copyClipboard} />
      </div>
    );
  }
}

export default LightBox;
