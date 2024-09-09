import { BsChevronDown, BsChevronRight } from "react-icons/bs";

export default function Dropdown({state, setter}) {
  let chevrons = (condition) => {
    if(condition) {
      return(<BsChevronDown />);
    } else if (!condition) {
      return(<BsChevronRight />);
    }
  };

  return(
    <div className="dropdown nested">
      <div onClick={() => {setter(!state)}}>
        {chevrons(state)}
      </div>
    </div>
  );
};