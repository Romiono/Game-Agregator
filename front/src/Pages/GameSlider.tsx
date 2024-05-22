import {SwiperSlide, Swiper} from "swiper/react";
import 'swiper/css';
import {EffectCoverflow, Navigation} from "swiper/modules";
import {useState} from "react";
import glass from '../Assets/images/png/glass.png'
import pingpong from "../Assets/images/png/img.png";
import {Link} from "react-router-dom";


const GameSlider = () => {
    const [searchVisible, setSearchVisible] = useState(false);
    const [searchText, setSearchText] = useState('');

    const games = [
        { id: 1, title: 'Game 1', image: 'https://via.placeholder.com/300x400' },
        { id: 2, title: 'Ping Pong', image: pingpong },
        { id: 3, title: 'Game 3', image: 'https://via.placeholder.com/300x400' },
        // Добавьте больше игр по необходимости
    ];

    return (
        <div className="h-full p-4 flex flex-col items-center justify-between relative">
            <div>
                <h1 className="text-3xl font-bold text-center mb-4">Games</h1>
                <div className={'flex flex-col items-center justify-between relative'}>
                    <Swiper
                        modules={[Navigation, EffectCoverflow]}
                        effect={'coverflow'}
                        slidesPerView={3}
                        spaceBetween={0}
                        centeredSlides
                        grabCursor
                        slideToClickedSlide
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 20,
                            depth: 200,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        navigation={{
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        }}
                        loop={true}
                    >
                        {games.map(game => (
                            <SwiperSlide key={game.id} className="flex justify-center">
                                <div className="w-full max-w-md p-2 bg-white shadow-lg rounded-lg overflow-hidden">
                                    <img src={game.image} alt={game.title} className="w-full object-cover"/>
                                    <Link to={'/game'}>
                                        <h2 className="mt-4 text-xl font-semibold text-center">{game.title}</h2>
                                    </Link>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div>
                        <div className="swiper-button-next"></div>
                        <div className="swiper-button-prev"></div>
                    </div>
                </div>
            </div>
            <div className="mt-4 flex items-center">
                <button
                    className="btn btn-circle btn-success p-2"
                    onClick={() => setSearchVisible(!searchVisible)}
                >
                    <img src={glass} alt={'glass'}/>
                </button>
                {searchVisible && (
                    <input
                        type="text"
                        placeholder="Search..."
                        className="input input-bordered ml-2"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                )}
            </div>
        </div>
    );
};

export default GameSlider;