import React, { useEffect } from 'react';
import AppSwitch from '../ui/components/AppSwitch';
import FormPage from '../ui/pages/FormPage';

import './styles.css';

function App() {

  function darkTheme(isDark: boolean) {

    const app = document.getElementsByClassName("app")[0];
    const formPage = document.getElementById("form-page");
    const buttonList = document.getElementsByTagName("button");
    const appSwitch = document.getElementsByClassName("app-switch")[0];

    if (isDark) {
      app.className = "app dark";
      formPage!.className = "dark";
      buttonColors(isDark, buttonList, "firebrick", "forestgreen");
      appSwitch.querySelector("label")!.style.color="white";
    } else {
      app.className = "app";
      formPage!.className = "";
      buttonColors(isDark, buttonList, "#ff9999", "#3ddc84");
      appSwitch.querySelector("label")!.style.color="black";
    }
  }

  function buttonColors(
    isDark: boolean,
    buttonList: HTMLCollectionOf<HTMLButtonElement>, 
    errorColor: string, 
    success: string) {
    for (var i = 0; i < buttonList.length; i++) {
      if (buttonList[i].getAttribute("color-type") == "error") {
        buttonList[i].style.backgroundColor = errorColor;
      } else if (buttonList[i].getAttribute("color-type") == "success") {
        buttonList[i].style.backgroundColor = success;
      }
      
      if (isDark) {
        buttonList[i].style.color = "white";
      } else {
        buttonList[i].style.color = "black";
      }
    }
  }

  return (
    <div className="app">
      <FormPage />
      <AppSwitch label="Tema escuro:" action={darkTheme}/>
    </div>
  );
}

export default App;
