import { useEffect } from "react";

function About() {
  useEffect(() => {
    document.title = "About - Dev Sol";
  });
  return (
    <>
      <h1>THis is my About page</h1>
    </>
  );
}
export default About;
