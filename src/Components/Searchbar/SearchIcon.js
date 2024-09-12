import { BsArrowRight, BsCaretRight, BsCaretRightFill, BsChevronRight } from "react-icons/bs";
import { FaAngleDoubleRight, FaFrog, FaHandPointRight, FaSearch, FaSeedling } from "react-icons/fa";
import { FaRightLong } from "react-icons/fa6";

export default function SearchIcon({properties}) {
    return(
      <>
      {properties.isRightSearchIconEnabled &&
        <>
        {properties.rightSearchIcon === "simple" &&
          <FaSearch size={properties.rightSearchIconSize} color={properties.rightSearchIconColor}/>
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
        {properties.rightSearchIcon === "hand-right" &&
          <FaHandPointRight size={properties.rightSearchIconSize} color={properties.rightSearchIconColor}/>
        }
        {properties.rightSearchIcon === "fat-arrow" &&
          <FaRightLong size={properties.rightSearchIconSize} color={properties.rightSearchIconColor}/>
        }
        {properties.rightSearchIcon === "double-angle" &&
          <FaAngleDoubleRight size={properties.rightSearchIconSize} color={properties.rightSearchIconColor}/>
        }
        {properties.rightSearchIcon === "seedling" &&
          <FaSeedling size={properties.rightSearchIconSize} color={properties.rightSearchIconColor}/>
        }
        {properties.rightSearchIcon === "frog" &&
          <FaFrog size={properties.rightSearchIconSize} color={properties.rightSearchIconColor}/>
        }
        </>
      }
      </>
    );
  }