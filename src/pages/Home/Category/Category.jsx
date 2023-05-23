import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'

const Category = () => {
    return (
        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide><img src={slide1} alt="slide img" /><h3 className="text-4xl text-white uppercase text-center -mt-16">Salads</h3></SwiperSlide>
        <SwiperSlide><img src={slide2} alt="slide img" /><h3 className="text-4xl text-white uppercase text-center -mt-16">Pizzas</h3></SwiperSlide>
        <SwiperSlide><img src={slide3} alt="slide img" /><h3 className="text-4xl text-white uppercase text-center -mt-16">soups</h3></SwiperSlide>
        <SwiperSlide><img src={slide4} alt="slide img" /><h3 className="text-4xl text-white uppercase text-center -mt-16">desserts</h3></SwiperSlide>
        <SwiperSlide><img src={slide5} alt="slide img" /><h3 className="text-4xl text-white uppercase text-center -mt-16"></h3></SwiperSlide>
      
      </Swiper>
    );
};

export default Category;