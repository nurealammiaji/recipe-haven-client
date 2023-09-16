import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useContext, useRef, useState } from 'react';
import "./Home.css";
import Slider1 from "../../assets/Slider-1.jpg";
import Slider2 from "../../assets/Slider-2.jpg";
import Slider3 from "../../assets/Slider-3.jpg";
import Slider4 from "../../assets/Slider-4.jpg";
import Slider5 from "../../assets/Slider-5.jpg";
import Slider6 from "../../assets/Slider-6.jpg";
import { AuthContext } from '../../Providers/Providers';
import Chef from '../Chef/Chef';
import Popular from '../Popular/Popular';

const Home = () => {

    const { chefs, recipes, loading } = useContext(AuthContext);

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <div className="min-h-screen">
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
            <br /><br /><br />
            <div>
                <h1 className='text-4xl font-bold text-center divider'>Popular Chefs</h1>
                <br /><br />
                <div className='grid gap-10 md:grid-cols-3'>
                    {
                        (loading) ?
                            <div className="text-center">
                                <br /><br />
                                <span className="loading loading-ring loading-lg text-primary"></span>
                                <br /><br />
                                <h3 className="text-2xl text-primary">Loading <span className="ml-3 loading loading-dots loading-md text-primary"></span></h3>
                                <br /><br />
                            </div> :
                            chefs.map(chef => <Chef key={chef.id} chef={chef}></Chef>)
                    }
                </div>
            </div>
            <br /><br /><br />
            <h1 className='text-4xl font-bold text-center divider'>Popular Recipes</h1>
            <br /><br />
            <div className='grid gap-10 md:grid-cols-3'>
                {
                    recipes.slice(0, 9).map(recipe => <Popular key={recipe.id} recipe={recipe}></Popular>)
                }
            </div>
            <br /><br /><br />
        </div>
    );
};

export default Home;