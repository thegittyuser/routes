import { useEffect } from "react";

function Events() {
  useEffect(() => {
    document.title = "Events";
  });
  return (
    <>
      <h1>THis is my Events page</h1>
    </>
  );
}
export default Events;
