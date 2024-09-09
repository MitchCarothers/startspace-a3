export let rules = {
  "border-radius": {
    type: "number",
    unit: "px"
  },
  "border-color": {
    type: "color"
  },
  "border-width": {
    type: "number",
    unit: "px"
  },
  "border-style": {
    type: "select",
    options: ["solid", "dotted", "double", "dashed"]
  },
  "display": {
    private: true
  },
  "flex": {
    private: true
  }
};