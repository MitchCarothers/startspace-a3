import { useState } from "react";
import "./styles.css";
import styleManagerService from "../../Services/styleManager";
import UI from "./UI.js";
import stylesJson from "./styles.json"
import propertiesJson from "./properties.json";
import { BsX } from "react-icons/bs";
import EngineSelect from "./EngineSelect.js";
import SearchIcon from "./SearchIcon.js";

let styleManager = new styleManagerService({}, "searchbar");
export default function Searchbar() {
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
        <EngineSelect
          properties={properties}
          setProperties={setProperties}
        />
        <input
          placeholder={properties.placeholderText}
          className="searchText"
          value={searchValue}
          onChange={(e) => { setSearchValue(e.target.value) }}
        />
        {searchValue !== "" &&
        <div className="searchCancel">
          <button onClick={() => {setSearchValue("")}} className={"searchCancelButton"} type="button">
            <BsX size={"20"}/>
          </button>
        </div>
        }
        {properties.isRightSearchEnabled &&
          <button className="searchButtonRight" type="submit" onClick={search}>
            {properties.rightSearchText}
            <SearchIcon properties={properties}/>
          </button>
        }
      </form>
      <UI
        styles={styles}
        setStyles={setStyles}
        properties={properties}
        setProperties={setProperties}
      />
    </>
  );
}