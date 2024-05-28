import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { ReactNode } from "react";
import classNames from "classnames";

interface Props {
  slide1?: ReactNode;
  slide2?: ReactNode;
  slide3?: ReactNode;
  slide4?: ReactNode;
  pagination?: boolean;
  className?: string;
  fourSlides?: boolean;
}
const CustomSwiper = ({ slide1, slide2, slide3, slide4, pagination = false, className, fourSlides = true }: Props) => {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={pagination}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        // className="mySwiper"
        className={classNames("mySwiper", className)}
        autoplay
      >
        {fourSlides ? (
          <>
            <SwiperSlide className="w-full rounded-xl">{slide1}</SwiperSlide>
            <SwiperSlide className="w-full rounded-xl">{slide2}</SwiperSlide>
            <SwiperSlide className="w-full rounded-xl">{slide3}</SwiperSlide>
            <SwiperSlide className="w-full rounded-xl">{slide4}</SwiperSlide>
          </>
        ) : (
          <>
            {" "}
            <SwiperSlide className="w-full rounded-xl">{slide1}</SwiperSlide>
            <SwiperSlide className="w-full rounded-xl">{slide2}</SwiperSlide>{" "}
          </>
        )}
      </Swiper>
    </>
  );
};

export default CustomSwiper;
