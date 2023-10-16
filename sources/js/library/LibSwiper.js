import Swiper, {Pagination, Autoplay, Parallax, Navigation } from 'swiper';
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

const LibSwiper = (()=>{

    const configSwiperHome = ()=>{
        var swiper = new Swiper(".swiper-home", {
            modules: [Autoplay, Navigation],
            slidesPerView: 1.2,
            spaceBetween: 20,
            // loop: true,
            speed: 1500,
            // autoplay: {
            //     delay: 0,
            //     disableOnInteraction: true,
            // },
            breakpoints: {
                576: {
                    slidesPerView: 2.2,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 2.2,
                    spaceBetween: 20,
                },
                1200: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                },
            }
    
        });
    }

    return {
        SwiperChilds: function(){
            try {configSwiperHome();}catch(err){  }
        }
    }

})();


const getChildsSwiper = ()=>{
    LibSwiper.SwiperChilds();
}


export { getChildsSwiper }