import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { Autoplay } from "swiper/modules";

function Visual() {
  return (
    <>
      <section className="visual">
        <h2>메인 비주얼</h2>
        {/* 스와이퍼 */}
        <Swiper className="visual-sw">
          <SwiperSlide>슬라이드 1</SwiperSlide>
          <SwiperSlide>슬라이드 2</SwiperSlide>
          <SwiperSlide>슬라이드 3</SwiperSlide>
          <SwiperSlide>슬라이드 4</SwiperSlide>
        </Swiper>
        <Swiper
          className="visual-container"
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <img src="https://picsum.photos/800/300" alt="slide1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://picsum.photos/801/300" alt="slide2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://picsum.photos/802/300" alt="slide3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://picsum.photos/803/300" alt="slide4" />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}
export default Visual;
