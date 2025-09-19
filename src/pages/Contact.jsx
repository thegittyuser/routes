import { useEffect } from "react";

function Contact() {
  useEffect(() => {
    document.title = "Contact";
  });
  return (
    <>
      <h1>THis is my Contact page</h1>
    </>
  );
}
export default Contact;
