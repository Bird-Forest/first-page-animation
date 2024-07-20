"use client";

// import Image from "next/image";
import React from "react";
import styles from "../_filesabout/About.module.css";

export default function DocumentPDF({ doc }) {
  //   console.log(doc);
  return (
    <div className={styles.about}>
      <h3 className={styles.itemTitle}>{doc.title}</h3>
      {/* <Image alt="Policy" src={doc.path} /> */}
    </div>
  );
}

// "use client";

// import { useCallback, useState } from "react";
// import { useResizeObserver } from "@wojtekmaj/react-hooks";
// import { pdfjs, Document, Page } from "react-pdf";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// import "react-pdf/dist/esm/Page/TextLayer.css";

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   "pdfjs-dist/build/pdf.worker.min.mjs",
//   import.meta.url
// ).toString();

// const options = {
//   cMapUrl: "/cmaps/",
//   standardFontDataUrl: "/standard_fonts/",
// };

// const resizeObserverOptions = {};

// const maxWidth = 800;

// export default function Sample() {
//   const [file, setFile] = useState();
//   const [numPages, setNumPages] = useState();
//   const [containerRef, setContainerRef] = useState(null);
//   const [containerWidth, setContainerWidth] = useState();

//   const onResize = useCallback((entries) => {
//     const [entry] = entries;

//     if (entry) {
//       setContainerWidth(entry.contentRect.width);
//     }
//   }, []);

//   useResizeObserver(containerRef, resizeObserverOptions, onResize);

//   function onFileChange(event) {
//     const { files } = event.target;
//     console.log(files);

//     const nextFile = files?.[0];
//     console.log(nextFile);
//     if (nextFile) {
//       setFile(nextFile);
//     }
//   }

//   function onDocumentLoadSuccess({ numPages: nextNumPages }) {
//     setNumPages(nextNumPages);
//   }

//   return (
//     <div className="Example">
//       <div className="Example__container">
//         <div className="Example__container__load">
//           <label htmlFor="file">Load from file:</label>{" "}
//           <input onChange={onFileChange} type="file" />
//         </div>
//         <div className="Example__container__document" ref={setContainerRef}>
//           <Document
//             file={file}
//             onLoadSuccess={onDocumentLoadSuccess}
//             options={options}
//           >
//             {Array.from(new Array(numPages), (el, index) => (
//               <Page
//                 key={`page_${index + 1}`}
//                 pageNumber={index + 1}
//                 width={
//                   containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth
//                 }
//               />
//             ))}
//           </Document>
//         </div>
//       </div>
//     </div>
//   );
// }
