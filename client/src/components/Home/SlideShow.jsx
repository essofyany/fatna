import { useBreakpointValue } from "@chakra-ui/react";
import ProductCard from "../ProductCard/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper/core";

SwiperCore.use([Pagination, Navigation, Autoplay]);

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

  const isLarge = useBreakpointValue({
    lg: "large",
  });

  return (
    <Swiper
      spaceBetween={slidesPadding}
      slidesPerView={slidesPerView}
      navigation={{ nextEl: "" }}
      pagination={
        isLarge
          ? {
              clickable: true,
              dynamicBullets: true,
            }
          : false
      }
      autoplay={{ delay: 3000 }}
      style={{ paddingBottom: isLarge ? "50px" : "10px" }}
    >
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
