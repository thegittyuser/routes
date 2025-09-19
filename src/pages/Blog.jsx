import { useEffect } from "react";

function Blog() {
  useEffect(() => {
    document.title = "Blog";
  });
  return (
    <>
      <h1>THis is my Blog page</h1>
    </>
  );
}
export default Blog;
