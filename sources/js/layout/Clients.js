const Clients = (()=>{
    //=============================/
    //CREAMOS EL TEMPLATE POR DEFAULT
    //=============================/
    const TemplateClients = (index, url)=>{
        const createDiv = document.createElement('div');
        const templateString = `
                                <picture style="--index:${index}s">
                                    <img style="--index:${index}s" src="${url}" loading="lazy" alt="Highlighting urban redevelopment in virtual reality">
                                </picture>
                               `;
        createDiv.innerHTML = templateString;
        //RETORNAMOS UN ELEMENTO HTML
        return createDiv;
    }
    //=============================/
    //CREAMOS UNA FUNCIÓN QUE RETORNE
    //LAS URLS DE LAS IMAGENES
    //=============================/
    const ArrayWithImages = ()=>{
        const arrImages = ['https://150page.150porciento.com/wp-content/uploads/2023/04/Corona_Extra-1.png', 'https://150page.150porciento.com/wp-content/uploads/2023/04/doritos-seeklogo-1.png', 'https://150page.150porciento.com/wp-content/uploads/2023/04/Vector.png', 'https://150page.150porciento.com/wp-content/uploads/2023/04/Vector-Smart-Object-1.png', 'https://150page.150porciento.com/wp-content/uploads/2023/04/Corona_Extra-1.png', 'https://150page.150porciento.com/wp-content/uploads/2023/04/doritos-seeklogo-1.png', 'https://150page.150porciento.com/wp-content/uploads/2023/04/Vector.png', 'https://150page.150porciento.com/wp-content/uploads/2023/04/Vector-Smart-Object-1.png', 'https://150page.150porciento.com/wp-content/uploads/2023/04/Corona_Extra-1.png', 'https://150page.150porciento.com/wp-content/uploads/2023/04/doritos-seeklogo-1.png', 'https://150page.150porciento.com/wp-content/uploads/2023/04/Vector.png'];

        return arrImages;
    }

    //=============================/
    //HACEMOS LA CONFIGURACIÓN GENERAL 
    //=============================/
    const ConfigClients = ()=>{
        const getCtnForClients = document.querySelector('#ctn-clients');
        const getUrlImages = ArrayWithImages();
        let i = 0,
            count = 0,
            limit = 6,
            interval = limit * 200;
        //CREAMOS EL TEMPLATE 12 VECES
        for(i; i < limit; i++){
            getCtnForClients.append(TemplateClients(i / 10, getUrlImages[0]));
        }
        //CADA CIERTO TIEMPO CAMBIAMOS LA IMAGEN
        const getAllImg = document.querySelectorAll('#ctn-clients picture img');
        setInterval(()=>{
            count++;
            if(count === limit){
                count = 1;
            }
            getAllImg.forEach((data, index)=>{
                setTimeout(()=>{
                    data.src = getUrlImages[count - 1];
                }, (index * 100));
            });
        },interval);
    }


    return {
        ChildsClients : function(){
            ConfigClients();
        }
    }

})();


const getChildsClients = ()=>{
    Clients.ChildsClients();
}

export { getChildsClients }
