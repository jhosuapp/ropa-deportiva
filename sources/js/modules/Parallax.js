const Parallax = (()=>{

    const ConfigParallax = ()=>{
    }

    //=============================================================/
    //CREAMOS EFECTO PARALLAX QUE SIGUE AL CURSOR DEL MOUSE
    //=============================================================/

    const ParallaxCursor = ()=>{
        const getCursorParallax = document.querySelector('#parallax-cursor');
        const getBody = document.querySelector('body');
        const getCursorParallaxSwiper = document.querySelector('#parallax-cursor-swiper');
        const getCtnParallaxSwiper = document.querySelector('#parallax-ctn-swiper');
        const getAllCtns = document.querySelectorAll('section');

        getBody.addEventListener('mousemove', (e)=>{
            getCursorParallax.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0px)`
        });
        //PARALLAX BTN SWIPER
        getCtnParallaxSwiper.addEventListener('mousemove', (e)=>{
            getCursorParallaxSwiper.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0px)`
            getCursorParallaxSwiper.classList.add('active');
        });
        //FUNCIÓN PARA REMOVER PARALLAX
        getAllCtns.forEach((data)=>{
            if(!data.classList.contains('ctn--carousel')){
                data.addEventListener('mousemove', ()=>{
                    getCursorParallaxSwiper.classList.remove('active');
                    getCursorParallaxSwiper.classList.remove('active');
                });
            }
        });
    }

    //=============================================================/
    //CREAMOS EFECTO PARALLAX PARA CUANDO SE HAGA HOVER EN IMÁGENES
    //=============================================================/
    const ParallaxHover = ()=>{
        let myPanel = document.querySelector("body");
        let subpanel = document.querySelector("#panel-container");
    
        myPanel.onmousemove = transformPanel;
        myPanel.onmouseenter = handleMouseEnter;
        myPanel.onmouseleave = handleMouseLeave;
    
        let mouseX, mouseY;
    
        let transformAmount = 5;
    
        function transformPanel(mouseEvent) {
            mouseX = mouseEvent.pageX;
            mouseY = mouseEvent.pageY;
    
            const centerX = myPanel.offsetLeft + myPanel.clientWidth / 2;
            const centerY = myPanel.offsetTop + myPanel.clientHeight / 2;
    
            const percentX = (mouseX - centerX) / (myPanel.clientWidth / 2);
            const percentY = -((mouseY - centerY) / (myPanel.clientHeight / 2));
    
            subpanel.style.transform = "perspective(400px) rotateY(" + percentX * transformAmount + "deg) rotateX(" + percentY * transformAmount + "deg)";
        }
    
        function handleMouseEnter() {
            setTimeout(() => {
                subpanel.style.transition = "";
            }, 100);
            subpanel.style.transition = "transform 0.1s";
        }
    
        function handleMouseLeave() {
            subpanel.style.transition = "transform 0.1s";
            setTimeout(() => {
                subpanel.style.transition = "";
            }, 100);
    
            subpanel.style.transform = "perspective(400px) rotateY(0deg) rotateX(0deg)";
        }
    }
    //=============================================================/
    //CREAMOS EFECTO PARALLAX PARA CUANDO SE HAGA HOVER EN IMÁGENES
    //=============================================================/
    const ParallaxSwiperHome = ()=>{
        const getSwiper = document.querySelector('.swiper-home .swiper-wrapper');

        window.addEventListener('scroll', ()=>{
            getSwiper.style.transform = `translate3d(-${window.scrollY}px, 0px, 0px)`;
        });

    }

    //=============================================================/
    //RETORNAMOS LAS FUNCIONES HIJAS QUE VAMOS A USAR
    //=============================================================/

    return {
        ParallaxChilds : function(){
            try { ParallaxHover(); } catch (error) {  }
            try { ParallaxCursor(); } catch (error) {  }
            try { ParallaxSwiperHome(); } catch (error) {  }
        }
    }

})();


const getChildsParallax = ()=>{
    Parallax.ParallaxChilds();
}

export { getChildsParallax }