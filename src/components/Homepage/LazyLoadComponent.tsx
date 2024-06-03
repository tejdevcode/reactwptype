import React, { useRef, useEffect, useState } from 'react';

const LazyLoadComponent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
   const [isVisible, setIsVisible] = useState<boolean>(false);
   const targetRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      const observer = new IntersectionObserver(entries => {
         entries.forEach(entry => {
            if (entry.isIntersecting) {
               setIsVisible(true);
               if (targetRef.current) {
                  observer.unobserve(targetRef.current);
               }
            }
         });
      });

      if (targetRef.current) {
         observer.observe(targetRef.current);
      }

      return () => {
         if (targetRef.current) {
            observer.unobserve(targetRef.current);
         }
      };
   }, []);

   return <div ref={targetRef}>{isVisible ? children : null}</div>;
};

export default LazyLoadComponent;
