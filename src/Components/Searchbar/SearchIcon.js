import { BsArrowRight, BsCaretRight, BsCaretRightFill, BsChevronRight } from "react-icons/bs";
import { FaAngleDoubleRight, FaFrog, FaHandPointRight, FaSearch, FaSeedling } from "react-icons/fa";
import { FaRightLong } from "react-icons/fa6";

export default function SearchIcon({properties}) {
    return(
      <>
      {properties.isSearchIconEnabled &&
        <>
        {properties.searchIcon === "simple" &&
          <FaSearch
            size={properties.searchIconSize}
            color={properties.searchIconColor}
            className="searchIcon"
          />
        }
        {properties.searchIcon === "modern" &&
          <BsChevronRight
            size={properties.searchIconSize}
            color={properties.searchIconColor}
            className="searchIcon"
          />
        }
        {properties.searchIcon === "arrow" &&
          <BsArrowRight
            size={properties.searchIconSize}
            color={properties.searchIconColor}
            className="searchIcon"
          />
        }
        {properties.searchIcon === "caret" &&
          <BsCaretRight
            size={properties.searchIconSize}
            color={properties.searchIconColor}
            className="searchIcon"
          />
        }
        {properties.searchIcon === "caret-solid" &&
          <BsCaretRightFill
            size={properties.searchIconSize}
            color={properties.searchIconColor}
            className="searchIcon"
          />
        }
        {properties.searchIcon === "hand-right" &&
          <FaHandPointRight
            size={properties.searchIconSize}
            color={properties.searchIconColor}
            className="searchIcon"
          />
        }
        {properties.searchIcon === "fat-arrow" &&
          <FaRightLong
            size={properties.searchIconSize}
            color={properties.searchIconColor}
            className="searchIcon"  
          />
        }
        {properties.searchIcon === "double-angle" &&
          <FaAngleDoubleRight
            size={properties.searchIconSize}
            color={properties.searchIconColor}
            className="searchIcon"
          />
        }
        {properties.searchIcon === "seedling" &&
          <FaSeedling
            size={properties.searchIconSize}
            color={properties.searchIconColor}
            className="searchIcon"
          />
        }
        {properties.searchIcon === "frog" &&
          <FaFrog
            size={properties.searchIconSize}
            color={properties.searchIconColor}
            className="searchIcon"
          />
        }
        </>
      }
      </>
    );
  }