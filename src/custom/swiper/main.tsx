import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { ReactNode } from "react";

interface Props {
  slide1?: ReactNode;
  slide2?: ReactNode;
  slide3?: ReactNode;
  slide4?: ReactNode;
}
const CustomSwiper = ({ slide1, slide2, slide3, slide4 }: Props) => {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        // pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
        autoplay

      >
        
        <SwiperSlide className="w-full rounded-xl">{slide1}</SwiperSlide>
        <SwiperSlide className="w-full rounded-xl">{slide2}</SwiperSlide>
        <SwiperSlide className="w-full rounded-xl">{slide3}</SwiperSlide>
        <SwiperSlide className="w-full rounded-xl">{slide4}</SwiperSlide>
     
      </Swiper>
 
    </>
  );
};

export default CustomSwiper;

