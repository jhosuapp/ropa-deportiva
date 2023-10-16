const ScrollSmoth = (()=>{

    //==============================================//
    //CONFIGURACIÓN GENERAL DEL SCROLL ANIMADO + ANCLA
    //=============================================//
    const ConfigScrollSmoth = ()=>{
        const ReuseConfigScrollSmoth = ()=>{
            const body = document.body;
            const main = document.getElementById('main');
            const getAnchor = document.getElementById('parallax-anchor');
            const getCookies = document.getElementById('cookies');
            let sx = 0, // For scroll positions
                sy = 0;
            let dx = sx, // For container positions
                dy = sy;
            body.style.height = main.clientHeight + 'px';
            
            main.style.position = 'fixed';
            main.style.top = 0;
            main.style.left = 0;
            window.addEventListener('scroll', easeScroll);

            window.addEventListener('scroll', ()=>{
                body.style.height = main.clientHeight + 'px';
            });
            
            window.addEventListener('resize', ()=>{
                body.style.height = main.clientHeight + 'px';
            });

            function easeScroll() {
                sx = window.pageXOffset;
                sy = window.pageYOffset;
            }
            
            window.requestAnimationFrame(render);

            function render() {
                //We calculate our container position by linear interpolation method
                dx = li(dx, sx, 0.07);
                dy = li(dy, sy, 0.07);

                dx = Math.floor(dx * 100) / 100;
                dy = Math.floor(dy * 100) / 100;

                main.style.transform = `translate3d(-${dx}px, -${dy}px, 0px)`;
                getAnchor.style.transform = `translate3d(-${dx}px, -${dy}px, 0px)`;
                getCookies.style.transform = `translate3d(-${dx}px, -${dy / 3}px, 0px)`;
                window.requestAnimationFrame(render);
            }

            function li(a, b, n) {
                return (1 - n) * a + n * b;
            }
        }

        //VALIDAMOS QUE SEA UNA PANLLA DE DESKTOP Y EJECUTAMOS EL EFECTO SCROLL SMOTH
        window.screen.width >= 992 && ReuseConfigScrollSmoth();

    }
    //=============================================================/
    //RETORNAMOS LAS FUNCIONES HIJAS QUE VAMOS A USAR
    //=============================================================/
    return {
        ScrollSmothChilds: function(){
            try{ConfigScrollSmoth()}catch(err){  };
        }
    }

})();

const getChildScrollSmoth = ()=>{ 
    ScrollSmoth.ScrollSmothChilds(); 
}

export { getChildScrollSmoth }