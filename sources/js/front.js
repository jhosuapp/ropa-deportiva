//CSS
import "../sass/main.scss";
//LIBRARY
import { getChildsAos } from './library/LibAos';
import { getChildsSwiper } from "./library/LibSwiper";
//MODULES
import { getChildsNav } from './modules/Nav';
import { getChildScrollSmoth } from "./modules/ScrollSmoth";
import { getChildsParallax } from "./modules/Parallax";
import { getChildsCookies } from "./modules/Cookies";
//LAYOUT
import { getChildsClients } from "./layout/Clients";

//EJECUTAMOS LAS FUNCIONES CUANDO SE HAYA CARGADO EL NAVEGADOR
window.addEventListener('load', ()=>{
    getChildsAos();
    getChildsSwiper();
    getChildsNav();
    getChildScrollSmoth();
    getChildsParallax();
    getChildsCookies();
    getChildsClients();
});