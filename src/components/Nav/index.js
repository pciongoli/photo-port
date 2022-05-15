import React from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {
   const {
      categories = [],
      setCurrentCategory,
      contactSelected,
      currentCategory,
      setContactSelected,
   } = props;

   return (
      <header className="flex-row px-1">
         <h2>
            <a data-testid="link" href="/">
               <span role="img" aria-label="camera">
                  {" "}
                  📸
               </span>{" "}
               Oh Snap!
            </a>
         </h2>
         <nav>
            <ul className="flex-row">
               <li className="mx-2">
                  <a
                     data-testid="about"
                     href="#about"
                     // set value of contactSelected based on user's selection
                     onClick={() => setContactSelected(false)}
                  >
                     About me
                  </a>
               </li>
               <li className={`mx-2 ${contactSelected && "navActive"}`}>
                  {/* set value to true when selecting the Contact item in the menu */}
                  <span onClick={() => setContactSelected(true)}>Contact</span>
               </li>
               {categories.map((category) => (
                  <li
                     className={`mx-1 ${
                        currentCategory.name === category.name &&
                        !contactSelected &&
                        `navActive`
                     }`}
                     key={category.name}
                  >
                     {/* ensure Gallary is rendered */}
                     <span
                        onClick={() => {
                           setCurrentCategory(category);
                           setContactSelected(false);
                        }}
                     >
                        {capitalizeFirstLetter(category.name)}
                     </span>
                  </li>
               ))}
            </ul>
         </nav>
      </header>
   );
}

export default Nav;
