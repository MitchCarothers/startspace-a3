import { useState } from "react";
import styleManagerService from "../../Services/styleManager";
import UI from "./UI.js";
import stylesJson from "./styles.json"
import propertiesJson from "./properties.json";
import { BsX } from "react-icons/bs";
import EngineSelect from "./EngineSelect.js";
import SearchIcon from "./SearchIcon.js";
import Dropdown from "../UI/Dropdown.js";

let styleManager = new styleManagerService({}, "searchbar");
export default function Searchbar() {
  let [isCustomizationOpen, setIsCustomizationOpen] = useState(false);
  let [searchValue, setSearchValue] = useState("");
  let [properties, setProperties] = useState(propertiesJson);
  let [styles, setStyles] = useState(stylesJson);
  styleManager.updateStyles(styles);

  function search(event) {
    event.preventDefault();
    let target = properties.isOpenNewTab ? "_blank" : "_self";
    window.open(
      `${properties["searchEngines"][properties.currentEngine]}${searchValue}`, target
    );
  }

  return(
    <>
      <form className="searchForm">
        {properties.searchButtonSide === "left" &&
        <button className="searchButton" type="submit" onClick={search}>
          {properties.searchText}
          <SearchIcon properties={properties}/>
        </button>
        }

        {properties.engineSelectSide === "left" &&
        <EngineSelect
          properties={properties}
          setProperties={setProperties}
          styles={styles}
          setStyles={setStyles}
        />
        }

        <input
          placeholder={properties.placeholderText}
          className="searchText"
          value={searchValue}
          onChange={(e) => { setSearchValue(e.target.value) }}
        />

        {searchValue !== "" && properties.isCancelButtonEnabled &&
        <div className="searchCancel">
          <button onClick={() => {setSearchValue("")}} className={"searchCancelButton"} type="button">
            <BsX color={properties["searchCancelIconColor"]} size={properties["searchCancelIconSize"]}/>
          </button>
        </div>
        }

        
        {properties.engineSelectSide === "right" &&
        <EngineSelect
          properties={properties}
          setProperties={setProperties}
          styles={styles}
          setStyles={setStyles}
        />
        }

        {properties.searchButtonSide === "right" &&
        <button className="searchButton" type="submit" onClick={search}>
          {properties.searchText}
          <SearchIcon properties={properties}/>
        </button>
        }
      </form>
      <Dropdown
        state={isCustomizationOpen}
        setter={setIsCustomizationOpen}
        label={"Search Bar"}
        subclass={"ui"}
        content={
          <UI
          styles={styles}
          setStyles={setStyles}
          properties={properties}
          setProperties={setProperties}
          />
        }
      />
    </>
  );
}