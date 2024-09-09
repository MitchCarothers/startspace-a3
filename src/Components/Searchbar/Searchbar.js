import { useState } from "react";
import "./styles.css";
import styleManagerService from "../../Services/styleManager";
import UI from "./UI.js";
import stylesJson from "./styles.json"
import propertiesJson from "./properties.json";
import { BsArrowRight, BsCaretRight, BsCaretRightFill, BsChevronRight, BsSearch } from "react-icons/bs";

let styleManager = new styleManagerService({}, "searchbar");
export default function Searchbar() {
  let [properties, setProperties] = useState(propertiesJson);
  let [styles, setStyles] = useState(stylesJson);
  styleManager.updateStyles(styles);

  let rightSearchIcon = () => {
    return(
      <>
      {properties.isRightSearchIconEnabled &&
        <>
        {properties.rightSearchIcon === "simple" &&
          <BsSearch size={properties.rightSearchIconSize} color={properties.rightSearchIconColor}/>
        }
        {properties.rightSearchIcon === "modern" &&
          <BsChevronRight size={properties.rightSearchIconSize} color={properties.rightSearchIconColor}/>
        }
        {properties.rightSearchIcon === "arrow" &&
          <BsArrowRight size={properties.rightSearchIconSize} color={properties.rightSearchIconColor}/>
        }
        {properties.rightSearchIcon === "caret" &&
          <BsCaretRight size={properties.rightSearchIconSize} color={properties.rightSearchIconColor}/>
        }
        {properties.rightSearchIcon === "caret-solid" &&
          <BsCaretRightFill size={properties.rightSearchIconSize} color={properties.rightSearchIconColor}/>
        }
        </>
      }
      </>
    );
  }

  return(
    <>
      <form className="searchForm">
        <input className="searchText"></input>
        <button>x</button>
        {properties.isRightSearchEnabled &&
          <button className="searchButtonRight">
            {properties.rightSearchText}
            {rightSearchIcon()}
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