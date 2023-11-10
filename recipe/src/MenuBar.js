// Plan
// Array of recipes,
// Pass down delete recipes.
//

import RecipeName from "./RecipeName.js";

export default function MenuBar({ recipelist }) {
  return (
    <section>
      {/* <p>menu bar works</p> */}
      {recipelist.map((recipelist) => (
        <RecipeName key={recipelist.id} recipelist={recipelist} />
      ))}
    </section>
  );
}
