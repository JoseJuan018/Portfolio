import { useEffect } from "react";

const CustomCursor = () => {
  useEffect(() => {
    const dot = document.createElement("div");
    const outline = document.createElement("div");

    dot.classList.add("cursor-dot");
    outline.classList.add("cursor-dot-outline");

    document.body.appendChild(dot);
    document.body.appendChild(outline);

    const moveCursor = (e: MouseEvent) => {
      dot.style.top = `${e.clientY}px`;
      dot.style.left = `${e.clientX}px`;
      outline.style.top = `${e.clientY}px`;
      outline.style.left = `${e.clientX}px`;
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      dot.remove();
      outline.remove();
    };
  }, []);

  return null;
};

export default CustomCursor;