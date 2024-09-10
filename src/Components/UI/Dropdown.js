// Used for creating the customizations UI in each component

import { BsChevronDown, BsChevronRight } from "react-icons/bs";

export default function Dropdown({state, setter, label, content, subclass}) {
  let chevrons = (condition) => {
    if(condition) {
      return(<BsChevronDown />);
    } else if (!condition) {
      return(<BsChevronRight />);
    }
  };

  return(
    <div className={`dropdown ${subclass}`}>
      <div onClick={() => {setter(!state)}}>
        {chevrons(state)}
        <span className="label">{label}</span>
      </div>
      {
        state &&
        <div className="propertyContainer">
          {content}
        </div>
      }
    </div>
  );
};