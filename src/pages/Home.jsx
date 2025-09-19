import { useEffect } from "react";

function Home() {
  useEffect(() => {
    document.title = "Home";
  });
  return (
    <>
      <h1>THis is my home page</h1>
    </>
  );
}
export default Home;
