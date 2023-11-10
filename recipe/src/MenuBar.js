// Plan
// Array of recipes,
// Pass down delete recipes.
//

import RecipeName from "./RecipeName.js";

//import key from App
export default function MenuBar({ recipelist }) {
  return (<section>

    {recipelist.map((recipe) => (<RecipeName recipelist={recipelist} />)
    )
    }
  </section>
  )
}


