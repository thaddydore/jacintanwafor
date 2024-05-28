import { useState, useEffect, ReactNode } from 'react';

interface Props {
  pictures: Array<ReactNode>;
}

const PictureChangeOnScroll = ({ pictures }: Props) => {
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPictureIndex((prevIndex) => (prevIndex + 1) % pictures.length);
    }, 2000); // Change picture every 2 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [pictures.length]);

  return (
    <div>
      {/* Display the current picture */}
      <div className='w-full h-full'>
        {pictures[currentPictureIndex]}
      </div>
    </div>
  );
};

export default PictureChangeOnScroll;
