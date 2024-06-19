"use client";
import { useState, useEffect } from "react";

export default function useViewport() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  // console.log(width);
  return width;
}

// function getWindowDimensions() {
//   const { innerWidth: width, innerHeight: height } = window;
//   return { width, height };
// }

// export default function useWindowDimensions() {
//   const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

//   useEffect(() => {
//     function handleResize() {
//       setWindowDimensions(getWindowDimensions());
//     }

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   return windowDimensions;
// }

// // Использование в компоненте:
// const Component = () => {
//   const { height, width } = useWindowDimensions();
//   return (
//     <div>
//       Ширина: {width} ~ Высота: {height}
//     </div>
//   );
// };
