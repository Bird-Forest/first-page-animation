"use client";

import React, { useState } from "react";
import { Document, Page } from "react-pdf";

import samplePDF from "../../../../public/documents/rules_participant.pdf";
import { pdfjs } from "react-pdf";
import Loading from "./Loading";

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   "pdfjs-dist/build/pdf.worker.min.mjs",
//   import.meta.url
// ).toString();

export default function FDFfile() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <>
      <Document file={samplePDF} onLoadSuccess={onDocumentLoadSuccess}>
        {!samplePDF ? <Loading /> : <Page pageNumber={pageNumber} />}
      </Document>
      <div>
        <p>
          Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
        </p>
        <button type="button" disabled={pageNumber <= 1} onClick={previousPage}>
          Previous
        </button>
        <button
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          Next
        </button>
      </div>
    </>
  );
}
// import { pdfjs, Document, Page } from "react-pdf";
// import { useCallback, useState } from "react";
// import { useResizeObserver } from "@wojtekmaj/react-hooks";
// import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// import "react-pdf/dist/esm/Page/TextLayer.css";
// import styles from "./FDFfile.module.css";
// import rules from "../../../../public/documents/rules_participant.pdf";

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   "pdfjs-dist/build/pdf.worker.min.mjs",
//   //   "npm:pdfjs-dist/build/pdf.worker.min.mjs",
//   import.meta.url
// ).toString();

// // pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

// // const options = {
// //   cMapUrl: "/cmaps/",
// //   standardFontDataUrl: "/standard_fonts/",
// // };
// const resizeObserverOptions = {};
// const maxWidth = 800;

// export default function PDFfile() {
//   const [file, setFile] = useState(
//     "../../../../public/documents/rules_participant.pdf"
//   );
//   console.log(file);
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

//     const nextFile = files?.[0];

//     if (nextFile) {
//       setFile(nextFile);
//     }
//   }

//   function onDocumentLoadSuccess(nextNumPages) {
//     setNumPages(nextNumPages);
//   }

//   return (
//     <div className={styles.Example}>
//       {/* <header>
//         <h1>react-pdf sample page</h1>
//       </header> */}
//       <div className={styles.Example__container}>
//         <div className={styles.Example__container__load}>
//           <label htmlFor="file">Load from file:</label>
//           <input onChange={onFileChange} type="file" />
//         </div>
//         <div
//           className={styles.Example__container__document}
//           ref={setContainerRef}
//         >
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
