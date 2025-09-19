import { useEffect } from "react";

function About() {
  useEffect(() => {
    document.title = "About";
  });
  return (
    <>
      <h1>THis is my About page</h1>
    </>
  );
}
export default About;
