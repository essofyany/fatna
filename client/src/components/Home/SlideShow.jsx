import { useBreakpointValue } from "@chakra-ui/react";
import ProductCard from "../ProductCard/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper/core";

// SwiperCore.use([Navigation, Pagination]);

function SlideShow() {
  const slidesPerView = useBreakpointValue({
    base: 2,
    sm: 3,
    md: 4,
    lg: 4,
  });
  const slidesPadding = useBreakpointValue({
    base: 10,
    sm: 20,
    md: 5,
    lg: 20,
  });

  return (
    <Swiper spaceBetween={slidesPadding} slidesPerView={slidesPerView}>
      <SwiperSlide>
        <ProductCard />
      </SwiperSlide>
      <SwiperSlide>
        <ProductCard />
      </SwiperSlide>
      <SwiperSlide>
        <ProductCard />
      </SwiperSlide>
      <SwiperSlide>
        <ProductCard />
      </SwiperSlide>
      <SwiperSlide>
        <ProductCard />
      </SwiperSlide>
      <SwiperSlide>
        <ProductCard />
      </SwiperSlide>
    </Swiper>
  );
}

export default SlideShow;
