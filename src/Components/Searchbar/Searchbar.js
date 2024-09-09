import { useState } from "react";
import "./styles.css";
import { stylesInit, styleVariablesInit } from "./styles.js";
import styleManagerService from "../../Services/styleManager";
import StyleUI from "../StyleUI/StyleUI";

let styleManager = new styleManagerService({}, "searchbar");
export default function Searchbar() {
  let [styleVariables, setStyleVariables] = useState(styleVariablesInit);
  let [styles, setStyles] = useState(stylesInit);
  styleManager.updateStyles(styles);
  return(
    <>
      <form className="searchForm">
        <input className="searchText"></input>
        <button>x</button>
        <button className="searchButtonRight">Go!</button>
      </form>
      <StyleUI styles={styles} setStyle={setStyles}/>
    </>
  );
}