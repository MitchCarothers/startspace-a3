// Used for creating the customizations UI in each component

import { BsArrowsMove, BsChevronDown, BsChevronRight } from "react-icons/bs";
import Draggable from "react-draggable";
import { useState } from "react";

export default function Dropdown({state, setter, label, content, subclass}) {
  let [isDragging, setIsDragging] = useState(false);

  let chevrons = (condition) => {
    if(condition) {
      return(<BsChevronDown className="chevron" />);
    } else if (!condition) {
      return(<BsChevronRight className="chevron" />);
    }
  };

  return(
    <Draggable
      handle={".dropdownLabelContainer"}
      onStart={(e) => { setIsDragging(true) }}  
      onStop={(e) => { setIsDragging(false) }}
    >
    <div className={`dropdown ${subclass}`} >
      <div onClick={() => {
          console.log(isDragging)
          if(!isDragging) {setter(!state)}
        }}
        className={"dropdownLabelContainer"}
      >
        {chevrons(state)}
        <span className="label">{label}</span>
        {
        subclass === "ui" &&
        <div className={"uiMover"}>
          <BsArrowsMove className="uiMoverIcon" />
        </div>
        }
      </div>
      {
        state &&
        <div className="propertyContainer">
          {content}
        </div>
      }
    </div>
    </Draggable>
  );
};