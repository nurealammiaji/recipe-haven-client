import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useRef } from 'react';
import "./Home.css";
import Slider1 from "../../assets/Slider-1.jpg";
import Slider2 from "../../assets/Slider-2.jpg";
import Slider3 from "../../assets/Slider-3.jpg";
import Slider4 from "../../assets/Slider-4.jpg";
import Slider5 from "../../assets/Slider-5.jpg";
import Slider6 from "../../assets/Slider-6.jpg";

const Home = () => {

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <div className="min-h-screen">
            <>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="mySwiper"
                >
                    <SwiperSlide><img src={Slider1} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={Slider2} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={Slider3} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={Slider4} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={Slider5} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={Slider6} alt="" /></SwiperSlide>
                    <div className="autoplay-progress" slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                            <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span ref={progressContent}></span>
                    </div>
                </Swiper>
            </>
        </div>
    );
};

export default Home;