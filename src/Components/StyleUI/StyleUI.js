// Generates a UI for modifying a components styles by taking in the component's
// styles state, then creating UI controllers for each property based on the
// rules which are pre-set here in the rules.js

import { rules } from './rules.js';

export default function StyleUI({styles, setStyles}) {
  return(
    <>
      {Object.keys(styles).map((key, index) => {
        return(
          <p key={index}>{key}</p>
        );
      })}
    </>
  );
};