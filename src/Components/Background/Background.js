import { useState } from "react";
import stylesJson from "./styles.json";
import styleManagerService from "../../Services/styleManager";
import BackgroundUI from "./BackgroundUI";
import Dropdown from "../UI/Dropdown.js";

let styleManager = new styleManagerService({}, "background");
export default function Background() {
  let [isCustomizationOpen, setIsCustomizationOpen] = useState(true);
  let [styles, setStyles] = useState(stylesJson);
  styleManager.updateStyles(styles);

  return(
    <>
    <Dropdown
      state={isCustomizationOpen}
      setter={setIsCustomizationOpen}
      subclass={"ui"}
      label={"Background"}
      content={
        <BackgroundUI
        styles={styles}
        setStyles={setStyles}
        />
      }
    />
    </>
  );
};