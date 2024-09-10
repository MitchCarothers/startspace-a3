// Yes, it's confusing, yes, it is a mess.
// But believe it or not, this is actually the easiest way to make a
// customization UI. Since each CSS property is unique, there just isn't
// a way to create a standardized component for any of these things.
// And there isn't really a way to automate it, trust me, I've tried
// for quite some time...
//
// Although I got close, there is just too many unforseeable circumstances
// regarding all the quirks of HTML interacting with CSS

import { useState } from "react";
import { BsChevronDown, BsChevronRight, BsSearch } from "react-icons/bs";
import removeUnit from "../../Services/unitConverter";
import Dropdown from "../UI/Dropdown";
import Property from "../UI/Property";

export default function UI({styles, setStyles, properties, setProperties}) {
  let [isBorderOpen, setIsBorderOpen] = useState(false);
  let [isRightSearchOpen, setIsRightSearchOpen] = useState(true);
  let [isRightSearchIconOpen, setIsRightSearchIconOpen] = useState(false);
  let [isRightSearchHoverOpen, setIsRightSearchHoverOpen] = useState(true);

  function toggle(getter, setter) {
    setter(!getter);
  };

  let chevrons = (condition) => {
    if(condition) {
      return(<BsChevronDown />)
    } else if (!condition) {
      return(<BsChevronRight />)
    }
  }

  return(
    <div className="ui">
      {/* BORDER */}
      <Dropdown 
        state={isBorderOpen}
        setter={setIsBorderOpen}
        label={"Border"}
        content={
          <>
          <Property
            label={"Color"}
            type={"color"}
            value={styles[".searchForm > :first-child"]["border-color"]}
            action={(e) => {
              let result = {...styles};
              result[".searchForm > :first-child"]["border-color"] = e.target.value;
              result[".searchForm > :last-child"]["border-color"] = e.target.value;
              result[".searchForm > :not(:first-child):not(:last-child)"]["border-color"] = e.target.value;
              setStyles(result);
            }}
          />
          <Property
            label={"Width"}
            type={"number"}
            value={removeUnit(styles[".searchForm > :first-child"]["border-width"])}
            min={"0"}
            max={"20"}
            action={(e) => {
              let result = {...styles};
              if(parseInt(e.target.value) >= parseInt(e.target.max)) {e.target.value = e.target.max};
              result[".searchForm > :first-child"]["border-width"] = `${e.target.value}px`;
              result[".searchForm > :last-child"]["border-width"] = `${e.target.value}px`;
              result[".searchForm > :not(:first-child):not(:last-child)"]["border-width"] = `${e.target.value}px`;
              setStyles(result);
            }}
          />
          </>
        }
      />
      <div className="dropdown">
        <div onClick={() => {toggle(isBorderOpen, setIsBorderOpen)}}>
          {chevrons(isBorderOpen)}
          <span className="label" >Border</span>
        </div>
        {isBorderOpen &&
          <div className="propertyContainer">
            <div className="property">
              <span>Color</span>
              <input
                type="color"
                className="color"
                value={styles[".searchForm > :first-child"]["border-color"]}
                onChange={(e) => {
                  let result = {...styles};
                  result[".searchForm > :first-child"]["border-color"] = e.target.value;
                  result[".searchForm > :last-child"]["border-color"] = e.target.value;
                  result[".searchForm > :not(:first-child):not(:last-child)"]["border-color"] = e.target.value;
                  setStyles(result);
                }}
              />
            </div>
            <div className="property">
              <span>Width</span>
              <input
                className="number"
                type="number"
                min="0"
                max="20"
                value={removeUnit(styles[".searchForm > :first-child"]["border-width"])}
                onChange={(e) => {
                  let result = {...styles};
                  if(parseInt(e.target.value) >= parseInt(e.target.max)) {e.target.value = e.target.max};
                  result[".searchForm > :first-child"]["border-width"] = `${e.target.value}px`;
                  result[".searchForm > :last-child"]["border-width"] = `${e.target.value}px`;
                  result[".searchForm > :not(:first-child):not(:last-child)"]["border-width"] = `${e.target.value}px`;
                  setStyles(result);
                }}
              />
            </div>
            <div className="property">
              <span>Style</span>
              <select
                value={styles[".searchForm > :first-child"]["border-style"]}
                onChange={(e) => {
                  let result = {...styles};
                  result[".searchForm > :first-child"]["border-style"] = e.target.value;
                  result[".searchForm > :last-child"]["border-style"] = e.target.value;
                  result[".searchForm > :not(:first-child):not(:last-child)"]["border-style"] = e.target.value;
                  setStyles(result);
                }}
              >
                <option value="solid">Solid</option>
                <option value="inset">Inset</option>
                <option value="outset">Outset</option>
                <option value="double">Double</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
        }
      </div>

      {/* Right Search Button */}
      <Dropdown
        state={isRightSearchOpen}
        setter={setIsRightSearchOpen}
        label={"Search Button (Right)"}
        content={
          <>
          <Property
            label={"Enabled"}
            type={"checkbox"}
            value={properties.isRightSearchEnabled}
            action={(e) => {
              let result = {...properties};
              result["isRightSearchEnabled"] = e.target.checked;
              setProperties(result);
            }}
          />
          <Property
            label={"Color"}
            type={"color"}
            value={styles[".searchButtonRight"]["background-color"]}
            action={(e) => {
              let result = {...styles};
              result[".searchButtonRight"]["background-color"] = e.target.value;
              setStyles(result);
            }}
          />
          <Property
            label={"Width"}
            type={"number"}
            value={removeUnit(styles[".searchButtonRight"]["width"])}
            min={"1"}
            max={"900"}
            action={(e) => {
              let result = {...styles};
              if(parseInt(e.target.value) >= parseInt(e.target.max)) {e.target.value = e.target.max};
              if(parseInt(e.target.value) < parseInt(e.target.min)) {e.target.value = e.target.min};
              result[".searchButtonRight"]["width"] = `${e.target.value}px`;
              setStyles(result);
            }}
          />
          <Property
            label={"Text"}
            type={"text"}
            value={properties["rightSearchText"]}
            action={(e) => {
              let result = {...properties};
              result["rightSearchText"] = e.target.value;
              setProperties(result);
            }}
          />
          <Property
            label={"Font"}
            type={"select"}
            value={styles[".searchButtonRight"]["font-family"]}
            action={(e) => {
              let result = {...styles};
              result[".searchButtonRight"]["font-family"] = e.target.value;
              setStyles(result);
            }}
            options={
              <>
              <option value="Arial">Arial</option>
              <option value="Times New Roman">Times New Roman</option>
              <option value="Franklin Gothic">Franklin Gothic</option>
              <option value="Georgia">Georgia</option>
              <option value="Verdana">Verdana</option>
              <option value="Courier New">Courier New</option>
              <option value="Brush Script MT">Brush Script MT</option>
              <option value="Garamond">Garamond</option>
              </>
            }
          />
          <Property
            label={"Font Size"}
            type={"number"}
            value={removeUnit(styles[".searchButtonRight"]["font-size"])}
            min={"1"}
            max={"60"}
            action={(e) => {
              let result = {...styles};
              if(parseInt(e.target.value) >= parseInt(e.target.max)) {e.target.value = e.target.max};
              if(parseInt(e.target.value) < parseInt(e.target.min)) {e.target.value = e.target.min};
              result[".searchButtonRight"]["font-size"] = `${e.target.value}px`;
              setStyles(result);
            }}
          />
          {/* Icon (Right Search Button) */}
          <Dropdown
            state={isRightSearchIconOpen}
            setter={setIsRightSearchIconOpen}
            label={"Icon"}
            subclass={"nested"}
            content={
              <>
              <Property
                label={"Enabled"}
                type={"checkbox"}
                value={properties["isRightSearchIconEnabled"]}
                action={(e) => {
                  let result = {...properties};
                  result["isRightSearchIconEnabled"] = e.target.checked;
                  setProperties(result);
                }}
              />
              <Property
                label={"Type"}
                type={"select"}
                value={properties["rightSearchIcon"]}
                action={(e) => {
                  let result = {...properties};
                  result["rightSearchIcon"] = e.target.value;
                  setProperties(result);
                }}
                options={
                  <>
                  <option value="simple">Simple</option>
                  <option value="modern">Modern</option>
                  <option value="arrow">Arrow</option>
                  <option value="caret">Caret</option>
                  <option value="caret-solid">Caret Solid</option>
                  <option value="none">None</option>
                  </>
                }
              />
              <Property
                label={"Size"}
                type={"number"}
                value={properties["rightSearchIconSize"]}
                min={"1"}
                max={"30"}
                action={(e) => {
                  let result = {...properties};
                  if(parseInt(e.target.value) >= parseInt(e.target.max)) {e.target.value = e.target.max};
                  if(parseInt(e.target.value) < parseInt(e.target.min)) {e.target.value = e.target.min};
                  result["rightSearchIconSize"] = e.target.value;
                  setProperties(result);
                }}
              />
              <Property
                label={"Color"}
                type={"color"}
                value={properties["rightSearchIconColor"]}
                action={(e) => {
                  let result = {...properties};
                  result["rightSearchIconColor"] = e.target.value;
                  setProperties(result);
                }}
              />
              </>
            }
          />
          {/* Hover Effects (Right Search Button) */}
          <Dropdown
            state={isRightSearchHoverOpen}
            setter={setIsRightSearchHoverOpen}
            label={"Hover Effects"}
            subclass={"nested"}
            content={
              <>
              <Property
                label={"Opacity"}
                type={"number"}
                value={removeUnit(styles[".searchButtonRight:hover"]["opacity"])}
                min={"0"}
                max={"100"}
                action={(e)=> {
                  let result = {...styles};
                  if(parseInt(e.target.value) >= parseInt(e.target.max)) {e.target.value = e.target.max};
                  if(parseInt(e.target.value) < parseInt(e.target.min)) {e.target.value = e.target.min};
                  result[".searchButtonRight:hover"]["opacity"] = `${e.target.value}%`;
                  setStyles(result);
                }}
              />
              <Property
                label={"Enable Color"}
                type={"checkbox"}
                value={properties["isRightSearchHoverColor"]}
                action={(e) => {
                  if(e.target.checked === false) {
                    let result = {...styles};
                    result[".searchButtonRight:hover"]["background-color"] = result[".searchButtonRight"]["background-color"];
                    setStyles(result);
                  }
                  let result = {...properties};
                  result["isRightSearchHoverColor"] = e.target.checked;
                  setProperties(result);
                }}
              />
              {properties.isRightSearchHoverColor &&
                <Property
                  label={"Color"}
                  type={"color"}
                  value={styles[".searchButtonRight:hover"]["background-color"]}
                  action={(e) => {
                    let result = {...styles};
                    result[".searchButtonRight:hover"]["background-color"] = e.target.value;
                    setStyles(result);
                  }}
                />
              }
              </>
            }
          />
          </>
        }
      />
    </div>
  );
};