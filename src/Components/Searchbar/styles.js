export let styleVariablesInit = {
  "border-radius": "20px",
  "border-style": "solid",
  "border-color": "gray"
};
export let stylesInit = {
  ".searchForm > :first-child": {
    "border-style": styleVariablesInit["border-style"],
    "border-right-style": "none",
    "border-top-left-radius": styleVariablesInit["border-radius"],
    "border-bottom-left-radius": styleVariablesInit["border-radius"],
    "border-color": styleVariablesInit["border-color"]
  },
  ".searchForm > :last-child": {
    "border-style": styleVariablesInit["border-style"],
    "border-left-style": "none",
    "border-top-right-radius": styleVariablesInit["border-radius"],
    "border-bottom-right-radius": styleVariablesInit["border-radius"],
    "border-color": styleVariablesInit["border-color"]
  },
  ".searchForm > :not(:first-child):not(:last-child)": {
    "border-style": styleVariablesInit["border-style"],
    "border-left-style": "none",
    "border-right-style": "none",
    "border-color": styleVariablesInit["border-color"]
  },
  ".searchForm": {
    "display": "flex",
    "width": "300px",
    "height": "35px"
  },
  ".searchText": {
    "flex": "1",
    "padding": "0px 10px",
    "font-size": "16px",
    "outline": "none"
  },
  ".searchButtonRight": {
  }
}