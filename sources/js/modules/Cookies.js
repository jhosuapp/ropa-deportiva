const Cookies = (()=>{

    const ConfigCookies = ()=>{
        const getBtnAceptCookies = document.querySelector('#cookies #accept-cookies');
        const getBtnDenyCookies = document.querySelector('#cookies #deny-cookies');
        const getCtnCookies = document.querySelector('#cookies');

        const getItemLocalStr = localStorage.getItem('cookies');
        getItemLocalStr ? getCtnCookies.classList.remove('active') : getCtnCookies.classList.add('active');

        getBtnAceptCookies.addEventListener('click', ()=>{
            getCtnCookies.classList.remove('active');
            getCtnCookies.classList.add('animate');
            localStorage.setItem('cookies', true);
        });
        
        getBtnDenyCookies.addEventListener('click', ()=>{
            getCtnCookies.classList.add('animate');
            getCtnCookies.classList.remove('active');
        })
    }


    return {
        CookiesChilds : function(){
            ConfigCookies();
        }
    }

})();

const getChildsCookies = ()=>{
    Cookies.CookiesChilds();
}

export {getChildsCookies }