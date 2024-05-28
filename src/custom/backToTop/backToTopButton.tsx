import React, { useState, useEffect } from 'react';
import styles from "./styles.module.css" // Create a CSS file for styles
import {ReactComponent as TopButton} from "../../assets/svg/scroll-to-top.svg"

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.back_to_top}>
      {isVisible && (
        <button
        title='Go up'
        //   type="primary"
        //   shape="circle"
        //   icon={<UpOutlined />}
        //   size="large"
          onClick={scrollToTop}
        ><TopButton/></button>
      )}
    </div>
  );
};

export default BackToTopButton;
