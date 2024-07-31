// import React from 'react';
// import { useInView } from 'react-intersection-observer';

// const AppearOnScroll = ({ children }) => {
//   const { ref, inView } = useInView({
//     threshold: 0.5, // Adjust as needed
//     triggerOnce: true,
//   });

//   return (
//     <div
//       ref={ref}
//       className={`transition-opacity duration-700 ease-out transform ${
//         inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
//       }`}
//     >
//       {children}
//     </div>
//   );
// };

// export default AppearOnScroll;

import React from 'react';
import { useInView } from 'react-intersection-observer';

const AppearOnScroll = ({ children }) => {
  const { ref, inView } = useInView({
    threshold: 0.5, // Adjust as needed
  });

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-700 ease-out transform ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      {children}
    </div>
  );
};

export default AppearOnScroll;

