import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function ContactForm() {
   // set ititial state to empty strings
   const [formState, setFormState] = useState({
      name: "",
      email: "",
      message: "",
   });

   const [errorMessage, setErrorMessage] = useState("");
   const { name, email, message } = formState;

   // function to handle the submission of the form data
   function handleSubmit(e) {
      e.preventDefault();
      console.log(formState);
   }

   // handleChange function
   function handleChange(e) {
      if (e.target.name === "email") {
         const isValid = validateEmail(e.target.value);
         console.log(isValid);
         if (!isValid) {
            setErrorMessage("Your email is invalid.");
         } else {
            setErrorMessage("");
         }
      } else {
         if (!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required.`);
         } else {
            setErrorMessage("");
         }
      }
      if (!errorMessage) {
         setFormState({ ...formState, [e.target.name]: e.target.value });
      }
      //    make the property name a dynamic variable thats determined by the form element
   }
   console.log(formState);

   return (
      // JSX
      <section>
         <h1>Contact me</h1>
         <form id="contact-form" onSubmit={handleSubmit}>
            {/* name input */}
            <div>
               <label htmlFor="name">Name:</label>
               <input
                  type="text"
                  defaultValue={name}
                  onBlur={handleChange}
                  name="name"
               />
            </div>
            {/* email input */}
            <div>
               <label htmlFor="email">Email address:</label>
               <input
                  type="email"
                  defaultValue={email}
                  onBlur={handleChange}
                  name="email"
               />
            </div>
            {/* message text area */}
            <div>
               <label htmlFor="message">Message:</label>
               <textarea
                  name="message"
                  defaultValue={message}
                  rows="5"
                  onBlur={handleChange}
               />
            </div>
            {errorMessage && (
               <div>
                  <p className="error-text">{errorMessage}</p>
               </div>
            )}
            {/* button */}
            <button type="submit">Submit</button>
         </form>
      </section>
   );
}

// name of function needs to be in export statement
export default ContactForm;
