import { useState } from "react";
import { minMaxChecker, removeUnit } from "../../Services/microservices";
import Dropdown from "../UI/Dropdown";
import Property from "../UI/Property";

export default function UI({styles, setStyles, properties, setProperties}) {
  let [isBorderOpen, setIsBorderOpen] = useState(false);
  let [isSearchOpen, setIsSearchOpen] = useState(false);
  let [isSearchIconOpen, setIsSearchIconOpen] = useState(false);
  let [isSearchHoverOpen, setIsSearchHoverOpen] = useState(false);
  let [isGeneralOpen, setIsGeneralOpen] = useState(false);
  let [isEngineSelectOpen, setIsEngineSelectOpen] = useState(false);
  let [isSearchTextOpen, setIsSearchTextOpen] = useState(false);
  let [isPlaceholderOpen, setIsPlaceholderOpen] = useState(false);
  let [isCancelButtonOpen, setIsCancelButtonOpen] = useState(false);
  let [isShadowOpen, setIsShadowOpen] = useState(false);

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
              e = minMaxChecker(e);
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
              e = minMaxChecker(e);
              result[":root"]["--searchHeight"] = `${e.target.value}px`;
              setStyles(result);
            }}
          />
          <Property
            label={"Base Color"}
            type={"color"}
            value={styles[".searchForm > :first-child:not(.searchButton)"]["background-color"]}
            action={(e) => {
              let result = {...styles};
              result[".searchForm > :first-child:not(.searchButton)"]["background-color"] = e.target.value;
              result[".searchForm > :last-child:not(.searchButton)"]["background-color"] = e.target.value;
              result[".searchForm > :not(:first-child):not(:last-child)"]["background-color"] = e.target.value;
              setStyles(result);
            }}
          />
          <Property
            label={"Radius"}
            type={"number"}
            value={removeUnit(styles[".searchForm > :first-child"]["border-top-left-radius"])}
            min={"0"}
            max={"200"}
            action={(e) => {
              let result = {...styles};
              e = minMaxChecker(e);
              result[".searchForm > :first-child"]["border-top-left-radius"] = `${e.target.value}px`;
              result[".searchForm > :first-child"]["border-bottom-left-radius"] = `${e.target.value}px`;
              result[".searchForm > :last-child"]["border-top-right-radius"] = `${e.target.value}px`;
              result[".searchForm > :last-child"]["border-bottom-right-radius"] = `${e.target.value}px`;
              result[".searchForm"]["border-radius"] = `${e.target.value}px`
              setStyles(result);
            }}
          />
          </>
        }
      />
      
      {/* SEARCH BUTTON */}
      <Dropdown
        state={isSearchOpen}
        setter={setIsSearchOpen}
        label={"Search Button"}
        content={
          <>
          <Property
            label={"Enabled"}
            type={"select"}
            value={properties["searchButtonSide"]}
            action={(e) => {
              let result = {...properties};
              result["searchButtonSide"] = e.target.value;
              setProperties(result);
            }}
            options={
              <>
              <option value="none">None</option>
              <option value="left">Left</option>
              <option value="right">Right</option>
              </>
            }
          />
          <Property
            label={"Color"}
            type={"color"}
            value={styles[".searchButton"]["background-color"]}
            action={(e) => {
              let result = {...styles};
              result[".searchButton"]["background-color"] = e.target.value;
              setStyles(result);
            }}
          />
          <Property
            label={"Width"}
            type={"number"}
            value={removeUnit(styles[".searchButton"]["width"])}
            min={"1"}
            max={"900"}
            action={(e) => {
              let result = {...styles};
              e = minMaxChecker(e);
              result[".searchButton"]["width"] = `${e.target.value}px`;
              setStyles(result);
            }}
          />
          <Property
            label={"Left Margin"}
            type={"number"}
            value={removeUnit(styles[".searchButton"]["padding-left"])}
            min={"0"}
            max={"20"}
            action={(e) => {
              let result = {...styles};
              e = minMaxChecker(e);
              result[".searchButton"]["padding-left"] = `${e.target.value}px`
              setStyles(result);
            }}
          />
          <Property
            label={"Right Margin"}
            type={"number"}
            value={removeUnit(styles[".searchButton"]["padding-right"])}
            min={"0"}
            max={"20"}
            action={(e) => {
              let result = {...styles};
              e = minMaxChecker(e);
              result[".searchButton"]["padding-right"] = `${e.target.value}px`
              setStyles(result);
            }}
          />
          <Property
            label={"Text"}
            type={"text"}
            value={properties["searchText"]}
            action={(e) => {
              let result = {...properties};
              result["searchText"] = e.target.value;
              setProperties(result);
            }}
          />
          <Property
            label={"Font"}
            type={"select"}
            value={styles[".searchButton"]["font-family"]}
            action={(e) => {
              let result = {...styles};
              result[".searchButton"]["font-family"] = e.target.value;
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
            value={removeUnit(styles[".searchButton"]["font-size"])}
            min={"1"}
            max={"60"}
            action={(e) => {
              let result = {...styles};
              e = minMaxChecker(e);
              result[".searchButton"]["font-size"] = `${e.target.value}px`;
              setStyles(result);
            }}
          />
          <Property
            label={"Font Color"}
            type={"color"}
            value={styles[".searchButton"]["color"]}
            action={(e) => {
              let result = {...styles};
              result[".searchButton"]["color"] = e.target.value;
              setStyles(result);
            }}
          />
          {/* ICON (SEARCH BUTTON) */}
          <Dropdown
            state={isSearchIconOpen}
            setter={setIsSearchIconOpen}
            label={"Icon"}
            subclass={"nested"}
            content={
              <>
              <Property
                label={"Enabled"}
                type={"checkbox"}
                value={properties["isSearchIconEnabled"]}
                action={(e) => {
                  let result = {...properties};
                  result["isSearchIconEnabled"] = e.target.checked;
                  setProperties(result);
                }}
              />
              <Property
                label={"Type"}
                type={"select"}
                value={properties["searchIcon"]}
                action={(e) => {
                  let result = {...properties};
                  result["searchIcon"] = e.target.value;
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
                value={properties["searchIconSize"]}
                min={"1"}
                max={"30"}
                action={(e) => {
                  let result = {...properties};
                  e = minMaxChecker(e);
                  result["searchIconSize"] = e.target.value;
                  setProperties(result);
                }}
              />
              <Property
                label={"Color"}
                type={"color"}
                value={properties["searchIconColor"]}
                action={(e) => {
                  let result = {...properties};
                  result["searchIconColor"] = e.target.value;
                  setProperties(result);
                }}
              />
              </>
            }
          />
          {/* HOVER EFFECTS (SEARCH BUTTON) */}
          <Dropdown
            state={isSearchHoverOpen}
            setter={setIsSearchHoverOpen}
            label={"Hover Effects"}
            subclass={"nested"}
            content={
              <>
              <Property
                label={"Opacity"}
                type={"number"}
                value={removeUnit(styles[".searchButton:hover"]["opacity"])}
                min={"0"}
                max={"100"}
                action={(e)=> {
                  let result = {...styles};
                  e = minMaxChecker(e);
                  result[".searchButton:hover"]["opacity"] = `${e.target.value}%`;
                  setStyles(result);
                }}
              />
              <Property
                label={"Enable Color"}
                type={"checkbox"}
                value={properties["isSearchHoverColor"]}
                action={(e) => {
                  if(e.target.checked === false) {
                    let result = {...styles};
                    result[".searchButton:hover"]["background-color"] = result[".searchButton"]["background-color"];
                    setStyles(result);
                  }
                  let result = {...properties};
                  result["isSearchHoverColor"] = e.target.checked;
                  setProperties(result);
                }}
              />
              {properties.isSearchHoverColor &&
                <Property
                  label={"Color"}
                  type={"color"}
                  value={styles[".searchButton:hover"]["background-color"]}
                  action={(e) => {
                    let result = {...styles};
                    result[".searchButton:hover"]["background-color"] = e.target.value;
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

      {/* ENGINE SELECTOR */}
      <Dropdown
        state={isEngineSelectOpen}
        setter={setIsEngineSelectOpen}
        label={"Engine Select"}
        content={
          <>
          <Property
            label={"Enabled"}
            type={"select"}
            value={properties["engineSelectSide"]}
            action={(e) => {
              let result = {...properties};
              result["engineSelectSide"] = e.target.value;
              setProperties(result);
            }}
            options={
              <>
              <option value="disabled">None</option>
              <option value="left">Left</option>
              <option value="right">Right</option>
              </>
            }
          />
          <Property
            label={"Default"}
            type={"select"}
            value={properties["defaultEngine"]}
            action={(e) => {
              let result = {...properties};
              result["defaultEngine"] = e.target.value;
              setProperties(result);
            }}
            options={
              <>
              <option value="google">Google</option>
              <option value="duckduckgo">DuckDuckGo</option>
              <option value="bing">Bing</option>
              <option value="yahoo">Yahoo!</option>
              <option value="ecosia">Ecosia</option>
              </>
            }
          />
          <Property
            label={"Left Margin"}
            type={"number"}
            value={removeUnit(styles[".engineSelectContainer"]["padding-left"])}
            min={"0"}
            max={"20"}
            action={(e) => {
              let result = {...styles};
              e = minMaxChecker(e);
              result[".engineSelectContainer"]["padding-left"] = `${e.target.value}px`;
              setStyles(result);
            }}
          />
          <Property
            label={"Right Margin"}
            type={"number"}
            value={removeUnit(styles[".engineSelectContainer"]["padding-right"])}
            min={"0"}
            max={"20"}
            action={(e) => {
              let result = {...styles};
              e = minMaxChecker(e);
              result[".engineSelectContainer"]["padding-right"] = `${e.target.value}px`;
              setStyles(result);
            }}
          />
          <Property
            label={"Icon Color"}
            type={"color"}
            value={properties["engineSelectIconColor"]}
            action={(e) => {
              let result = {...properties};
              result["engineSelectIconColor"] = e.target.value;
              setProperties(result);
            }}
          />
          <Property
            label={"Icon Size"}
            type={"number"}
            value={properties["engineSelectIconSize"]}
            min={"1"}
            max={"35"}
            action={(e) => {
              let result = {...properties};
              let styleResult = {...styles};
              e = minMaxChecker(e);
              result["engineSelectIconSize"] = e.target.value;
              styleResult[".engineSelectButton"]["width"] = `${parseInt(e.target.value) + 14}px`;
              setProperties(result);
            }}
          />
          <Property
            label={"Icon Offset"}
            type={"number"}
            value={removeUnit(styles[":root"]["--engineIconOffset"])}
            min={"-100"}
            max={"100"}
            action={(e) => {
              let result = {...styles};
              e = minMaxChecker(e);
              result[":root"]["--engineIconOffset"] = `${e.target.value}px`
              setStyles(result);
            }}
          />
          </>
        }
      />

      {/* SEARCH TEXT */}
      <Dropdown
        state={isSearchTextOpen}
        setter={setIsSearchTextOpen}
        label={"Search Text"}
        content={
          <>
          <Property
            label={"Font"}
            type={"select"}
            value={styles[".searchText"]["font-family"]}
            action={(e) => {
              let result = {...styles};
              result[".searchText"]["font-family"] = e.target.value;
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
            value={removeUnit(styles[".searchText"]["font-size"])}
            action={(e) => {
              let result = {...styles};
              result[".searchText"]["font-size"] = `${e.target.value}px`;
              setStyles(result);
            }}
          />
          <Property
            label={"Font Color"}
            type={"color"}
            value={styles[".searchText"]["color"]}
            action={(e) => {
              let result = {...styles};
              result[".searchText"]["color"] = e.target.value;
              setStyles(result);
            }}
          />
          <Property
            label={"Left Margin"}
            type={"number"}
            value={removeUnit(styles[".searchText"]["padding-left"])}
            min={"0"}
            max={"40"}
            action={(e) => {
              let result = {...styles};
              e = minMaxChecker(e);
              result[".searchText"]["padding-left"] = `${e.target.value}px`;
              setStyles(result);
            }}
          />
          <Dropdown
            state={isPlaceholderOpen}
            setter={setIsPlaceholderOpen}
            label={"Text Placeholder"}
            subclass={"nested"}
            content={
              <>
              <Property
                label={"Text"}
                type={"text"}
                value={properties["placeholderText"]}
                action={(e) => {
                  let result = {...properties};
                  result["placeholderText"] = e.target.value;
                  setProperties(result);
                }}
              />
              <Property
                label={"Font Color"}
                type={"color"}
                value={styles["::placeholder"]["color"]}
                action={(e) => {
                  let result = {...styles};
                  result["::placeholder"]["color"] = e.target.value;
                  result[":-ms-input-placeholder"]["color"] = e.target.value;
                  result[":-moz-placeholder"]["color"] = e.target.value;
                  result["::-webkit-input-placeholder"]["color"] = e.target.value;
                  setStyles(result);
                }}
              />
              </>
            }
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
              if (e.target.value === 0) {
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
            min={"0"}
            max={"200"}
            action={(e) => {
              let result = {...styles};
              e = minMaxChecker(e);
              result[".searchForm > :first-child"]["border-top-left-radius"] = `${e.target.value}px`;
              result[".searchForm > :first-child"]["border-bottom-left-radius"] = `${e.target.value}px`;
              result[".searchForm > :last-child"]["border-top-right-radius"] = `${e.target.value}px`;
              result[".searchForm > :last-child"]["border-bottom-right-radius"] = `${e.target.value}px`;
              result[".searchForm"]["border-radius"] = `${e.target.value}px`
              setStyles(result);
            }}
          />
          </>
        }
      />

      {/* SHADOW */}
      <Dropdown
        state={isShadowOpen}
        setter={setIsShadowOpen}
        label={"Shadow"}
        content={
          <>
          <Property
            label={"Color"}
            type={"color"}
            value={styles[":root"]["--searchShadowColorCode"]}
            action={(e) => {
              let result = {...styles};
              result[":root"]["--searchShadowColorCode"] = e.target.value;
              result[":root"]["--searchShadowColor"] = `${e.target.value}${result[":root"]["--searchShadowOpacity"]}`;
              setStyles(result);
            }}
          />
          <Property
            label={"Opacity"}
            type={"number"}
            value={parseInt(styles[":root"]["--searchShadowOpacity"], 16)}
            min={"0"}
            max={"255"}
            action={(e) => {
              let result = {...styles};
              e = minMaxChecker(e);
              result[":root"]["--searchShadowOpacity"] = parseInt(e.target.value).toString(16);
              result[":root"]["--searchShadowColor"] = `${result[":root"]["--searchShadowColorCode"]}${parseInt(e.target.value).toString(16)}`;
              setStyles(result);
            }}
          />
          <Property
            label={"Blur Radius"}
            type={"number"}
            value={removeUnit(styles[":root"]["--searchShadowBlur"])}
            min={"0"}
            max={"30"}
            action={(e) => {
              let result = {...styles};
              e = minMaxChecker(e);
              result[":root"]["--searchShadowBlur"] = `${e.target.value}px`;
              setStyles(result);
            }}
          />
          <Property
            label={"Offset X"}
            type={"number"}
            value={removeUnit(styles[":root"]["--searchShadowOffsetX"])}
            min={"-30"}
            max={"30"}
            action={(e) => {
              let result = {...styles};
              e = minMaxChecker(e);
              result[":root"]["--searchShadowOffsetX"] = `${-e.target.value}px`;
              setStyles(result);
            }}
          />
          <Property
            label={"Offset Y"}
            type={"number"}
            value={removeUnit(styles[":root"]["--searchShadowOffsetY"])}
            min={"-30"}
            max={"30"}
            action={(e) => {
              let result = {...styles};
              e = minMaxChecker(e);
              result[":root"]["--searchShadowOffsetY"] = `${e.target.value}px`;
              setStyles(result);
            }}
          />
          <Property
            label={"Size"}
            type={"number"}
            value={removeUnit(styles[":root"]["--searchShadowStart"])}
            min={"0"}
            max={"20"}
            action={(e) => {
              let result = {...styles};
              e = minMaxChecker(e);
              result[":root"]["--searchShadowStart"] = `${e.target.value}px`;
              setStyles(result);
            }}
          />
          </>
        }
      />

      {/* CANCEL BUTTON */}
      <Dropdown
        state={isCancelButtonOpen}
        setter={setIsCancelButtonOpen}
        label={"Cancel Button"}
        content={
          <>
          <Property
            label={"Enabled"}
            type={"checkbox"}
            value={properties["isCancelButtonEnabled"]}
            action={(e) => {
              let result = {...properties};
              result["isCancelButtonEnabled"] = e.target.checked;
              setProperties(result);
            }}
          />
          <Property
            label={"Icon Color"}
            type={"color"}
            value={properties["searchCancelIconColor"]}
            action={(e) => {
              let result = {...properties};
              result["searchCancelIconColor"] = e.target.value;
              setProperties(result);
            }}
          />
          <Property
            label={"Base Color"}
            type={"color"}
            value={styles[".searchCancelButton:hover"]["background-color"]}
            action={(e) => {
              let result = {...styles};
              result[".searchCancelButton:hover"]["background-color"] = e.target.value;
              setStyles(result);
            }}
          />
          <Property
            label={"Size"}
            type={"number"}
            value={removeUnit(styles[".searchCancelButton"]["width"])}
            min={"0"}
            max={"50"}
            action={(e) => {
              let result = {...styles};
              e = minMaxChecker(e);
              result[".searchCancelButton"]["width"] = `${e.target.value}px`;
              result[".searchCancelButton"]["height"] = `${e.target.value}px`;
              setStyles(result);
            }}
          />
          <Property
            label={"Icon Size"}
            type={"number"}
            value={properties["searchCancelIconSize"]}
            min={"0"}
            max={"50"}
            action={(e) => {
              let result = {...properties};
              e = minMaxChecker(e);
              result["searchCancelIconSize"] = e.target.value;
              setProperties(result);
            }}
          />
          </>
        }
      />
    </div>
  );
};