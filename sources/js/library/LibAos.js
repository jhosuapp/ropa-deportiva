import * as AOS from 'aos';
import 'aos/dist/aos.css';

const Aos = function(){
    //=============================================================/
    //INICIZALIZAMOS LA LIBRERÍA Y LA EJECUTAMOS UN SEGUNDO DESPUÉS
    //=============================================================/
    const AosConfig = ()=>{
        setTimeout(() => {
            AOS.init({
                duration: 1000,
                easing: 'ease',
                once: true,
            });
        }, 3000);
    }
    //=============================================================/
    //RETORNAMOS LAS FUNCIONES HIJAS QUE VAMOS A USAR
    //=============================================================/
    return {
        AosChilds : function(){
            try{
                AosConfig();
            }catch(error){ }
        }
    }
    
}();

const getChildsAos = ()=>{
    Aos.AosChilds();
}

export{
    getChildsAos
}