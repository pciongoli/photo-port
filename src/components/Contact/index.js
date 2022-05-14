import React from "react";

function ContactForm() {
   return (
      // JSX
      <section>
         <h1>Contact me</h1>
         <form id="contact-form">
            {/* name input */}
            <div>
               <label htmlFor="name">Name:</label>
               <input type="text" name="name" />
            </div>
            {/* email input */}
            <div>
               <label htmlFor="email">Email address:</label>
               <input type="email" name="email" />
            </div>
            {/* message text area */}
            <div>
               <label htmlFor="message">Message:</label>
               <textarea name="message" rows="5" />
            </div>
            {/* button */}
            <button type="submit">Submit</button>
         </form>
      </section>
   );
}

// name of function needs to be in export statement
export default ContactForm;
