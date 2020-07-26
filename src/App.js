import React from "react";
import ConverterLink from "./components/ConverterLink";
import LightBox from "./components/LightBox";
import Credits from "./components/Credits";
import Background from "./components/Background";
import AlertField from "./components/AlertField";

class App extends React.Component {
  render() {
    return (
      <div className="Container">
        <Background />
        <ConverterLink name="ConverterLink" />
        <Credits />
        <LightBox />
        <AlertField message="O campo precisa ser preenchido!" classCSS="alertField alert" color="#E13D31" />
        <AlertField message="Link copiado com sucesso! \o/" classCSS="alertSuccess alert" color="#4BB543" />
      </div>
    );
  }
}

export default App;
