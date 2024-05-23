// import React from "react";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { wrap } from "popmotion";
// import { pictures } from "./Partners";

// const variants = {
//   enter: (direction) => {
//     return {
//       x: direction > 0 ? 1000 : -1000,
//       opacity: 0,
//     };
//   },
//   center: {
//     zIndex: 1,
//     x: 0,
//     opacity: 1,
//   },
//   exit: (direction) => {
//     return {
//       zIndex: 0,
//       x: direction < 0 ? 1000 : -1000,
//       opacity: 0,
//     };
//   },
// };

// const swipeConfidenceThreshold = 10000;
// const swipePower = (offset, velocity) => {
//   return Math.abs(offset) * velocity;
// };

// export default function ParticipantItem() {
//   const [[page, direction], setPage] = useState([0, 0]);
//   const imgId = wrap(0, pictures.length, page);

//   const paginate = (newDirection) => {
//     setPage([page + newDirection, newDirection]);
//   };
//   return (
//     <li>
//       <AnimatePresence initial={false} custom={direction}>
//         <motion.img
//           key={page}
//           src={pictures[imgId]}
//           custom={direction}
//           variants={variants}
//           initial="enter"
//           animate="center"
//           exit="exit"
//           transition={{
//             x: { type: "spring", stiffness: 300, damping: 30 },
//             opacity: { duration: 0.2 },
//           }}
//           drag="x"
//           dragConstraints={{ left: 0, right: 0 }}
//           dragElastic={1}
//           onDragEnd={(e, { offset, velocity }) => {
//             const swipe = swipePower(offset.x, velocity.x);

//             if (swipe < -swipeConfidenceThreshold) {
//               paginate(1);
//             } else if (swipe > swipeConfidenceThreshold) {
//               paginate(-1);
//             }
//           }}
//         />
//       </AnimatePresence>
//       <div className="next" onClick={() => paginate(1)}>
//         {"‣"}
//       </div>
//       <div className="prev" onClick={() => paginate(-1)}>
//         {"‣"}
//       </div>
//     </li>
//   );
// }
