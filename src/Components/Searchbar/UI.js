import { useState } from "react";
import removeUnit from "../../Services/unitConverter";
import Dropdown from "../UI/Dropdown";
import Property from "../UI/Property";

export default function UI({styles, setStyles, properties, setProperties}) {
  let [isBorderOpen, setIsBorderOpen] = useState(false);
  let [isRightSearchOpen, setIsRightSearchOpen] = useState(false);
  let [isRightSearchIconOpen, setIsRightSearchIconOpen] = useState(false);
  let [isRightSearchHoverOpen, setIsRightSearchHoverOpen] = useState(false);
  let [isGeneralOpen, setIsGeneralOpen] = useState(true);

  return(
    <div className="ui">
      <Dropdown
        state={isGeneralOpen}
        setter={setIsGeneralOpen}
        label={"General"}
        content={
          <>
          <Property
            label={"Width"}
            type={"number"}
            value={removeUnit(styles[".searchForm"]["width"])}
            min={"1"}
            max={"1800"}
            action={(e) => {
              let result = {...styles};
              if(parseInt(e.target.value) >= parseInt(e.target.max)) {e.target.value = e.target.max};
              if(parseInt(e.target.value) < parseInt(e.target.min)) {e.target.value = e.target.min};
              result[".searchForm"]["width"] = `${e.target.value}px`;
              setStyles(result);
            }}
          />
          <Property
            label={"Height"}
            type={"number"}
            value={removeUnit(styles[":root"]["--searchHeight"])}
            min={"1"}
            max={"500"}
            action={(e) => {
              let result = {...styles};
              if(parseInt(e.target.value) >= parseInt(e.target.max)) {e.target.value = e.target.max};
              if(parseInt(e.target.value) < parseInt(e.target.min)) {e.target.value = e.target.min};
              result[":root"]["--searchHeight"] = `${e.target.value}px`;
              setStyles(result);
            }}
          />
          </>
        }
      />

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
              if(e.target.value > result[".searchForm > :first-child"]["border-width"]) {
                result[":root"]["--engineOffset"] = (`${parseInt(removeUnit(result[":root"]["--engineOffset"])) + 2}px`)
              } else if (e.target.value < result[".searchForm > :first-child"]["border-width"]) {
                result[":root"]["--engineOffset"] = (`${parseInt(removeUnit(result[":root"]["--engineOffset"])) - 2}px`)
              }
              if (e.target.value == 0) {
                result[":root"]["--engineOffset"] = (`0px`)
              }
              result[".searchForm > :first-child"]["border-width"] = `${e.target.value}px`;
              result[".searchForm > :last-child"]["border-width"] = `${e.target.value}px`;
              result[".searchForm > :not(:first-child):not(:last-child)"]["border-width"] = `${e.target.value}px`;
              setStyles(result);
            }}
          />
          <Property
            label={"Style"}
            type={"select"}
            value={styles[".searchForm > :first-child"]["border-style"]}
            action={(e) => {
              let result = {...styles};
              result[".searchForm > :first-child"]["border-style"] = e.target.value;
              result[".searchForm > :last-child"]["border-style"] = e.target.value;
              result[".searchForm > :not(:first-child):not(:last-child)"]["border-style"] = e.target.value;
              setStyles(result);
            }}
            options={
              <>
              <option value="solid">Solid</option>
              <option value="inset">Inset</option>
              <option value="outset">Outset</option>
              <option value="double">Double</option>
              <option value="none">None</option>
              </>
            }
          />
          <Property
            label={"Radius"}
            type={"number"}
            value={removeUnit(styles[".searchForm > :first-child"]["border-top-left-radius"])}
            action={(e) => {
              let result = {...styles};
              result[".searchForm > :first-child"]["border-top-left-radius"] = `${e.target.value}px`;
              result[".searchForm > :first-child"]["border-bottom-left-radius"] = `${e.target.value}px`;
              result[".searchForm > :last-child"]["border-top-right-radius"] = `${e.target.value}px`;
              result[".searchForm > :last-child"]["border-bottom-right-radius"] = `${e.target.value}px`;
              setStyles(result);
            }}
          />
          </>
        }
      />

      {/* RIGHT SEARCH BUTTON */}
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
          <Property
            label={"Font Color"}
            type={"color"}
            value={styles[".searchButtonRight"]["color"]}
            action={(e) => {
              let result = {...styles};
              result[".searchButtonRight"]["color"] = e.target.value;
              setStyles(result);
            }}
          />
          {/* ICON (RIGHT SEARCH BUTTON) */}
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
                  <option value="hand-right">Hand Right</option>
                  <option value="fat-arrow">Fat Arrow</option>
                  <option value="double-angle">Double Angle</option>
                  <option value="seedling">Seedling</option>
                  <option value="frog">Frog</option>
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
          {/* HOVER EFFECTS (RIGHT SEARCH BUTTON) */}
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