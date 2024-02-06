import dataFotos from './datos/fotos';
import { cargarImagen } from './galeria/cargarImagen';




let contenedorCategorias = document.getElementById('categorias');
const galeria = document.getElementById('galeria');


contenedorCategorias.addEventListener('click',(e)=>{
    //e.preventDefault;
    if(e.target.closest('a')){
        galeria.classList.add('galeria--active');

        document.body.style.overflow = 'hidden';
        const categoriaActiva = e.target.closest('a').dataset.categoria;
        galeria.dataset.categoria= categoriaActiva;
        const fotos = dataFotos.fotos[categoriaActiva];
        console.log(fotos[0]);


        const carousel = document.querySelector('.galeria__carousel-slides');
        carousel.innerHTML = '';

         console.log(fotos);
          fotos.forEach((foto) => {
             const slide =`
            <a href="#" class="galeria__carousel-slide">
                 <img class="galeria__carousel-image" src="${foto.ruta}" data-id="${foto.id}" alt=""/>
             </a>
             `;
               galeria.querySelector('.galeria__carousel-slides').innerHTML += slide;
               galeria.querySelector('.galeria__carousel-slide').classList.add('galeria__carousel-slide--active');
        });

        
        const {id,nombre,ruta,descripcion} = fotos[0];
        cargarImagen(id,nombre,ruta,descripcion);






    }





})
