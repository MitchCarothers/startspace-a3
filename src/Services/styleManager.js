// A note about the service:
// All functions starting with an underscore are intended to be private.
//
// The service is intended to manage the styles associated with a specific
// component. It accomplishes this by being an intermediary between the
// component and the style element which is styling the component. 
// The purpose of this is to allow easier implementation of features which
// allow the user to customize the styles of the component.
//
// Therefore, this class standardizes the ways that a component can interract
// with its styles.

export default class styleManagerService {
  // Master is provided by the component and it represents all the styles which
  // are to be applied to that component's dedicated style tag in the header.
  // Expected format is {selector: {styles}, selector: {styles}, ...}
  master;

  // The styleID is a string which uniquely identifies this instance of the
  // style manager, and it's used specifically to generate and maintan the
  // style tag which is generated in the DOM head for this component.
  // The styleID is provided by the component.
  styleID;

  constructor(master, styleID) {
    this.master = master;
    this.styleID = styleID;
  };

  // Only used for the initial generation of the component's unique
  // style element.
  _generateStyleElement() {
    let generatedElement = document.createElement('style');
    document.head.appendChild(generatedElement);
    generatedElement.setAttribute('id', this.styleID);
    return generatedElement;
  }

  // Always returns the component's style element.
  // If the element doesn't exist, it will generate the style element.
  _getStyleElement() {
    let element = document.getElementById(this.styleID);
    if(element) {
      return element;
    } else {
      return(this._generateStyleElement());
    };
  };

  // Sets the contents of the component's style element in the head tag.
  _setStyleElement(content) {
    this._getStyleElement().textContent = content;
  };

  // Converts an object into a string formatted as CSS, ready to be directly
  // added to the style tag. Expects either the master object or similarly
  // structure objects. That is, {selector: {styles}, selector: {styles}, ...}
  _computeStyles(target) {
    let output = "";
    for(let selector in target) {
      let selectorStyles = "";
      for(let style in target[selector]) {
        selectorStyles += `${style}: ${target[selector][style]}; `;
      };
      output += `${selector} { ${selectorStyles}}`;
    };
    return(output);
  };

  // Calls all the necessary methods to take a master style object or equivalent
  // and add the described styles to the component's dedicated style element.
  updateStyles(target) {
    let styles = this._computeStyles(target);
    this._setStyleElement(styles);
  };
};