import { useEffect } from "react";

function useScrollToTop(){
    useEffect(() => {
        let isScrolling = true;
      
        const scrollToTop = () => {
          if (!isScrolling) return;
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
          if (window.scrollY > 0) {
            window.requestAnimationFrame(scrollToTop);
          }
        };
      
        scrollToTop();
      
        // Cleanup function
        return () => {
          isScrolling = false;
        };
      }, []);

}

export default useScrollToTop;

