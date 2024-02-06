'use strict';

var datos = {

    fotos: {
        america: [
            {
                id:1,
                nombre:"America 1",
                descripcion: "Amaercia 1- en america, la diversidad de paisajes es asombrosa: desde los geiseres humeantes y la fauna",
                ruta:'./img/america/1.jpg',
            },
            {
                id:2,
                nombre:"America 2",
                descripcion: "Amaercia 2- en america, la diversidad de paisajes es asombrosa: desde los geiseres humeantes y la fauna",
                ruta:'./img/america/2.jpg',
            },
            {
                id:3,
                nombre:"America 3",
                descripcion: "Amaercia 3- en america, la diversidad de paisajes es asombrosa: desde los geiseres humeantes y la fauna",
                ruta:'./img/america/3.jpg',
            },
            {
                id:4,
                nombre:"America 4",
                descripcion: "Amaercia 4- en america, la diversidad de paisajes es asombrosa: desde los geiseres humeantes y la fauna",
                ruta:'./img/america/4.jpg',
            },
            {
                id:5,
                nombre:"America 5",
                descripcion: "Amaercia 5- en america, la diversidad de paisajes es asombrosa: desde los geiseres humeantes y la fauna",
                ruta:'./img/america/5.jpg',
            },
            {
                id:6,
                nombre:"America 6",
                descripcion: "Amaercia 6- en america, la diversidad de paisajes es asombrosa: desde los geiseres humeantes y la fauna",
                ruta:'./img/america/6.jpg',
            },
            {
                id:7,
                nombre:"America 7",
                descripcion: "Amaercia 7- en america, la diversidad de paisajes es asombrosa: desde los geiseres humeantes y la fauna",
                ruta:'./img/america/7.jpg',
            },
            {
                id:8,
                nombre:"America 8",
                descripcion: "Amaercia 8- en america, la diversidad de paisajes es asombrosa: desde los geiseres humeantes y la fauna",
                ruta:'./img/america/8.jpg',
            },
            {
                id:9,
                nombre:"America 9",
                descripcion: "Amaercia 9- en america, la diversidad de paisajes es asombrosa: desde los geiseres humeantes y la fauna",
                ruta:'./img/america/9.jpg',
            },
            {
                id:10,
                nombre:"America 10",
                descripcion: "Amaercia 10- en america, la diversidad de paisajes es asombrosa: desde los geiseres humeantes y la fauna",
                ruta:'./img/america/10.jpg',
            }
        ],
        europa: [
            {
                id:11,
                nombre:"europa 1",
                descripcion: "Europa 1- en europa, la diversidad de paisajes es asombrosa: desde los geiseres humeantes y la fauna",
                ruta:'./img/europa/1.jpg',
            },
            {
                id:12,
                nombre:"europa 2",
                descripcion: "Europa 2- en europa, la diversidad de paisajes es asombrosa: desde los geiseres humeantes y la fauna",
                ruta:'./img/europa/2.jpg',
            },
            {
                id:13,
                nombre:"europa 3",
                descripcion: "Europa 3- en europa, la diversidad de paisajes es asombrosa: desde los geiseres humeantes y la fauna",
                ruta:'./img/europa/3.jpg',
            },
            {
                id:14,
                nombre:"europa 4",
                descripcion: "Europa 4- en europa, la diversidad de paisajes es asombrosa: desde los geiseres humeantes y la fauna",
                ruta:'./img/europa/4.jpg',
            },
            {
                id:15,
                nombre:"europa 5",
                descripcion: "Europa 5- en europa, la diversidad de paisajes es asombrosa: desde los geiseres humeantes y la fauna",
                ruta:'./img/europa/5.jpg',
            },
            {
                id:16,
                nombre:"europa 6",
                descripcion: "Europa 6- en europa, la diversidad de paisajes es asombrosa: desde los geiseres humeantes y la fauna",
                ruta:'./img/europa/6.jpg',
            },
            {
                id:17,
                nombre:"europa 7",
                descripcion: "Europa 7- en europa, la diversidad de paisajes es asombrosa: desde los geiseres humeantes y la fauna",
                ruta:'./img/europa/7.jpg',
            },
            {
                id:18,
                nombre:"europa 8",
                descripcion: "Europa 8- en europa, la diversidad de paisajes es asombrosa: desde los geiseres humeantes y la fauna",
                ruta:'./img/europa/8.jpg',
            },
            {
                id:19,
                nombre:"europa 9",
                descripcion: "Europa 9- en europa, la diversidad de paisajes es asombrosa: desde los geiseres humeantes y la fauna",
                ruta:'./img/europa/9.jpg',
            },
            {
                id:20,
                nombre:"europa 10",
                descripcion: "Europa 10- en europa, la diversidad de paisajes es asombrosa: desde los geiseres humeantes y la fauna",
                ruta:'./img/europa/10.jpg',
            }
        ],
        africa: [
            {
                id:21,
                nombre:"africa 1",
                descripcion: "Amaercia 1- en africa, la diversidad de paisajes es asombrosa: desde los geiseres humeantes y la fauna",
                ruta:'./img/africa/1.jpg',
            },
            {
                id:22,
                nombre:"africa 2",
                descripcion: "Amaercia 2- en africa, la diversidad de paisajes es asombrosa: desde los geiseres humeantes y la fauna",
                ruta:'./img/africa/2.jpg',
            },
            {
                id:23,
                nombre:"africa 3",
                descripcion: "Amaercia 3- en africa, la diversidad de paisajes es asombrosa: desde los geiseres humeantes y la fauna",
                ruta:'./img/africa/3.jpg',
            },
            {
                id:24,
                nombre:"africa 4",
                descripcion: "Amaercia 4- en africa, la diversidad de paisajes es asombrosa: desde los geiseres humeantes y la fauna",
                ruta:'./img/africa/4.jpg',
            },
            {
                id:25,
                nombre:"africa 5",
                descripcion: "Amaercia 5- en africa, la diversidad de paisajes es asombrosa: desde los geiseres humeantes y la fauna",
                ruta:'./img/africa/5.jpg',
            },
            {
                id:26,
                nombre:"africa 6",
                descripcion: "Amaercia 6- en africa, la diversidad de paisajes es asombrosa: desde los geiseres humeantes y la fauna",
                ruta:'./img/africa/6.jpg',
            },
            {
                id:27,
                nombre:"africa 7",
                descripcion: "Amaercia 7- en africa, la diversidad de paisajes es asombrosa: desde los geiseres humeantes y la fauna",
                ruta:'./img/africa/7.jpg',
            },
            {
                id:28,
                nombre:"africa 8",
                descripcion: "Amaercia 8- en africa, la diversidad de paisajes es asombrosa: desde los geiseres humeantes y la fauna",
                ruta:'./img/africa/8.jpg',
            },
            {
                id:29,
                nombre:"africa 9",
                descripcion: "Amaercia 9- en africa, la diversidad de paisajes es asombrosa: desde los geiseres humeantes y la fauna",
                ruta:'./img/africa/9.jpg',
            },
            {
                id:30,
                nombre:"africa 10",
                descripcion: "Amaercia 10- en africa, la diversidad de paisajes es asombrosa: desde los geiseres humeantes y la fauna",
                ruta:'./img/africa/10.jpg',
            }
        ],
        asia: [
            {
                id:31,
                nombre:"asia 1",
                descripcion: "Amaercia 1- en asia, la diversidad de paisajes es asombrosa: desde los geiseres humeantes y la fauna",
                ruta:'./img/asia/1.jpg',
            },
            {
                id:32,
                nombre:"asia 2",
                descripcion: "Amaercia 2- en asia, la diversidad de paisajes es asombrosa: desde los geiseres humeantes y la fauna",
                ruta:'./img/asia/2.jpg',
            },
            {
                id:33,
                nombre:"asia 3",
                descripcion: "Amaercia 3- en asia, la diversidad de paisajes es asombrosa: desde los geiseres humeantes y la fauna",
                ruta:'./img/asia/3.jpg',
            },
            {
                id:34,
                nombre:"asia 4",
                descripcion: "Amaercia 4- en asia, la diversidad de paisajes es asombrosa: desde los geiseres humeantes y la fauna",
                ruta:'./img/asia/4.jpg',
            },
            {
                id:35,
                nombre:"asia 5",
                descripcion: "Amaercia 5- en asia, la diversidad de paisajes es asombrosa: desde los geiseres humeantes y la fauna",
                ruta:'./img/asia/5.jpg',
            },
            {
                id:36,
                nombre:"asia 6",
                descripcion: "Amaercia 6- en asia, la diversidad de paisajes es asombrosa: desde los geiseres humeantes y la fauna",
                ruta:'./img/asia/6.jpg',
            },
            {
                id:37,
                nombre:"asia 7",
                descripcion: "Amaercia 7- en asia, la diversidad de paisajes es asombrosa: desde los geiseres humeantes y la fauna",
                ruta:'./img/asia/7.jpg',
            },
            {
                id:38,
                nombre:"asia 8",
                descripcion: "Amaercia 8- en asia, la diversidad de paisajes es asombrosa: desde los geiseres humeantes y la fauna",
                ruta:'./img/asia/8.jpg',
            },
            {
                id:39,
                nombre:"asia 9",
                descripcion: "Amaercia 9- en asia, la diversidad de paisajes es asombrosa: desde los geiseres humeantes y la fauna",
                ruta:'./img/asia/9.jpg',
            },
            {
                id:40,
                nombre:"asia 10",
                descripcion: "Amaercia 10- en asia, la diversidad de paisajes es asombrosa: desde los geiseres humeantes y la fauna",
                ruta:'./img/asia/10.jpg',
            }
        ],
        oceania: [
            {
                id:41,
                nombre:"oceania 1",
                descripcion: "Amaercia 1- en oceania, la diversidad de paisajes es asombrosa: desde los geiseres humeantes y la fauna",
                ruta:'./img/oceania/1.jpg',
            },
            {
                id:42,
                nombre:"oceania 2",
                descripcion: "Amaercia 2- en oceania, la diversidad de paisajes es asombrosa: desde los geiseres humeantes y la fauna",
                ruta:'./img/oceania/2.jpg',
            },
            {
                id:43,
                nombre:"oceania 3",
                descripcion: "Amaercia 3- en oceania, la diversidad de paisajes es asombrosa: desde los geiseres humeantes y la fauna",
                ruta:'./img/oceania/3.jpg',
            },
            {
                id:44,
                nombre:"oceania 4",
                descripcion: "Amaercia 4- en oceania, la diversidad de paisajes es asombrosa: desde los geiseres humeantes y la fauna",
                ruta:'./img/oceania/4.jpg',
            },
            {
                id:45,
                nombre:"oceania 5",
                descripcion: "Amaercia 5- en oceania, la diversidad de paisajes es asombrosa: desde los geiseres humeantes y la fauna",
                ruta:'./img/oceania/5.jpg',
            },
            {
                id:46,
                nombre:"oceania 6",
                descripcion: "Amaercia 6- en oceania, la diversidad de paisajes es asombrosa: desde los geiseres humeantes y la fauna",
                ruta:'./img/oceania/6.jpg',
            },
            {
                id:47,
                nombre:"oceania 7",
                descripcion: "Amaercia 7- en oceania, la diversidad de paisajes es asombrosa: desde los geiseres humeantes y la fauna",
                ruta:'./img/oceania/7.jpg',
            },
            {
                id:48,
                nombre:"oceania 8",
                descripcion: "Amaercia 8- en oceania, la diversidad de paisajes es asombrosa: desde los geiseres humeantes y la fauna",
                ruta:'./img/oceania/8.jpg',
            },
            {
                id:49,
                nombre:"oceania 9",
                descripcion: "Amaercia 9- en oceania, la diversidad de paisajes es asombrosa: desde los geiseres humeantes y la fauna",
                ruta:'./img/oceania/9.jpg',
            },
            {
                id:50,
                nombre:"oceania 10",
                descripcion: "Amaercia 10- en oceania, la diversidad de paisajes es asombrosa: desde los geiseres humeantes y la fauna",
                ruta:'./img/oceania/10.jpg',
            }
        ],
        antartida: [
            {
                id:51,
                nombre:"antartida 1",
                descripcion: "Amaercia 1- en antartida, la diversidad de paisajes es asombrosa: desde los geiseres humeantes y la fauna",
                ruta:'./img/antartida/1.jpg',
            },
            {
                id:52,
                nombre:"antartida 2",
                descripcion: "Amaercia 2- en antartida, la diversidad de paisajes es asombrosa: desde los geiseres humeantes y la fauna",
                ruta:'./img/antartida/2.jpg',
            },
            {
                id:53,
                nombre:"antartida 3",
                descripcion: "Amaercia 3- en antartida, la diversidad de paisajes es asombrosa: desde los geiseres humeantes y la fauna",
                ruta:'./img/antartida/3.jpg',
            },
            {
                id:54,
                nombre:"antartida 4",
                descripcion: "Amaercia 4- en antartida, la diversidad de paisajes es asombrosa: desde los geiseres humeantes y la fauna",
                ruta:'./img/antartida/4.jpg',
            },
            {
                id:55,
                nombre:"antartida 5",
                descripcion: "Amaercia 5- en antartida, la diversidad de paisajes es asombrosa: desde los geiseres humeantes y la fauna",
                ruta:'./img/antartida/5.jpg',
            },
            {
                id:56,
                nombre:"antartida 6",
                descripcion: "Amaercia 6- en antartida, la diversidad de paisajes es asombrosa: desde los geiseres humeantes y la fauna",
                ruta:'./img/antartida/6.jpg',
            },
            {
                id:57,
                nombre:"antartida 7",
                descripcion: "Amaercia 7- en antartida, la diversidad de paisajes es asombrosa: desde los geiseres humeantes y la fauna",
                ruta:'./img/antartida/7.jpg',
            },
            {
                id:58,
                nombre:"antartida 8",
                descripcion: "Amaercia 8- en antartida, la diversidad de paisajes es asombrosa: desde los geiseres humeantes y la fauna",
                ruta:'./img/antartida/8.jpg',
            },
            {
                id:59,
                nombre:"antartida 9",
                descripcion: "Amaercia 9- en antartida, la diversidad de paisajes es asombrosa: desde los geiseres humeantes y la fauna",
                ruta:'./img/antartida/9.jpg',
            }
        ] //PAgina 18
    }
};

const { fotos } = datos;

var dataCategorias = {
    categorias:[
        {id:'america',nombre:'America',numeroFotos: fotos['america'].length, imagenPortada: './img/america.jpg'},
        {id:'europa',nombre:'Europa',numeroFotos: fotos['europa'].length, imagenPortada: './img/europa.jpg'},
        {id:'africa',nombre:'Africa',numeroFotos: fotos['africa'].length, imagenPortada: './img/africa.jpg'},
        {id:'asia',nombre:'Asia',numeroFotos: fotos['asia'].length, imagenPortada: './img/asia.jpg'},
        {id:'oceania',nombre:'Oceania',numeroFotos: fotos['oceania'].length, imagenPortada: './img/oceania.jpg'},
        {id:'antartida',nombre:'Antartida',numeroFotos: fotos['antartida'].length, imagenPortada: './img/antartida.jpg'},
    ]
};

//console.log('Cargando...');

const {categorias} = dataCategorias;
//console.log(categorias)

let contenedorCategorias$1 = document.getElementById('categorias');
categorias.forEach((categoria)=>{
    //console.log(categoria);


const plantilla =`
<img class="categoria__img" src="${categoria.imagenPortada}" alt="" />
<div class="categoria__datos">
    <p class="categoria__nombre">${categoria.nombre}</p>
    <p class="categoria__numero-fotos">${categoria.numeroFotos} Fotos</p>
</div>
`;
let nuevaCategoria=document.createElement('a');
nuevaCategoria.innerHTML = plantilla;
nuevaCategoria.classList.add('categoria');
nuevaCategoria.href ='#';
nuevaCategoria.dataset.categoria = categoria.id;

contenedorCategorias$1.append(nuevaCategoria);

});

const galeria$5 = document.getElementById('galeria');

let cargarImagen = (id,nombre,ruta,descripcion) =>{
    galeria$5.querySelector('.galeria__imagen').dataset.idImagen= id;
    galeria$5.querySelector('.galeria__titulo').innerText= nombre;
    galeria$5.querySelector('.galeria__imagen').src= ruta;
    galeria$5.querySelector('.galeria__descripcion-imagen-activa').innerText= descripcion;

    const categoriaActual = galeria$5.dataset.categoria;
    const fotos = datos.fotos[categoriaActual];
    let indexImagenActual;
    fotos.forEach((foto, index) => {
		if (foto.id === id) {
            indexImagenActual= index;
        }
    });
    if (galeria$5.querySelectorAll('.galeria__carousel-slide').length > 0){
        galeria$5.querySelector('.galeria__carousel-slide--active').classList.remove('galeria__carousel-slide--active');
        galeria$5.querySelectorAll('.galeria__carousel-slide')[indexImagenActual].classList.add('galeria__carousel-slide--active');
       }
    console.log(fotos);
};

const cargarAnteriorSiguiente =(direccion)=>{
    const categoriaActual = galeria$5.dataset.categoria;
    const fotos = datos.fotos[categoriaActual];
    const idImagenActual = parseInt(galeria$5.querySelector('.galeria__imagen').dataset.idImagen);

    let indexImagenActual;
    fotos.forEach((foto,index) => {
        if(foto.id === idImagenActual){
            indexImagenActual = index;         
        }
    });

    if(direccion ==='siguiente'){
        if(fotos[indexImagenActual+1]){
            console.log('Cargando siguiente imagen');
        const {id,nombre,ruta,descripcion}=fotos[indexImagenActual+1];
        cargarImagen (id,nombre,ruta,descripcion);
        }
        
    }else if(direccion==='anterior'){
        if(fotos[indexImagenActual-1]){
        console.log('Cargando anterior imagen');
        const {id,nombre,ruta,descripcion}=fotos[indexImagenActual-1];
        cargarImagen (id,nombre,ruta,descripcion);
        }
    }
};

//11. Evento Slides

let contenedorCategorias = document.getElementById('categorias');
const galeria$4 = document.getElementById('galeria');


contenedorCategorias.addEventListener('click',(e)=>{
    //e.preventDefault;
    if(e.target.closest('a')){
        galeria$4.classList.add('galeria--active');

        document.body.style.overflow = 'hidden';
        const categoriaActiva = e.target.closest('a').dataset.categoria;
        galeria$4.dataset.categoria= categoriaActiva;
        const fotos = datos.fotos[categoriaActiva];
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
               galeria$4.querySelector('.galeria__carousel-slides').innerHTML += slide;
               galeria$4.querySelector('.galeria__carousel-slide').classList.add('galeria__carousel-slide--active');
        });

        
        const {id,nombre,ruta,descripcion} = fotos[0];
        cargarImagen(id,nombre,ruta,descripcion);






    }





});

const galeria$3 = document.getElementById('galeria');


let cerrarGaleria = () =>{
    galeria$3.classList.remove('galeria--active');
    document.body.style.overflow = '';
    //document.body.style.remove = 'hidden';
    //document.body.style.removeProperty = 'overflow: hidden';
};

const galeria$2 = document.getElementById('galeria');



const slideClick =(e) =>{
    let ruta, nombre, descripcion;

    const categoriaActiva = galeria$2.dataset.categoria;
    const id=parseInt(e.target.dataset.id);
    console.log('Hiciste clic en un slide', id, categoriaActiva);
    console.log(datos.fotos[categoriaActiva]);


    datos.fotos[categoriaActiva].forEach((foto) => {
        //console.log(foto.id, id);
        if(foto.id===id){
            console.log(foto);
            ruta = foto.ruta;
            nombre = foto.nombre;
            descripcion = foto.descripcion;
        }
    });

    cargarImagen(id,nombre,ruta,descripcion);






};

const galeria$1 = document.getElementById('galeria');
const carousel = (direccion)=>{

    const opciones = {
		root: document.querySelector('.galeria__carousel'),
		rootMargin: '0px',
		threshold: 0.9, 
	};



    const observer = new IntersectionObserver((entradas) =>{
        const slidesVisibles = entradas.filter((entrada) => {
			if (entrada.isIntersecting === true) {
				return entrada;
			}

            
        });

        if(direccion === 'atras'){
            const primerSlideVisible = slidesVisibles[0];
            const indexPrimerSlideVisible = entradas.indexOf(primerSlideVisible);
            if (indexPrimerSlideVisible >= 1) {
                entradas[indexPrimerSlideVisible-1].target.scrollIntoView({
                behavior: 'smooth',
					inline: 'start',
            });
            }
        }else if (direccion === 'adelante'){
            const ultimaSlideVisible = slidesVisibles[slidesVisibles.length - 1];
            const indexUltimaSlideVisible = entradas.indexOf(ultimaSlideVisible);
            if (entradas.length - 1 > indexUltimaSlideVisible) {
                entradas[indexUltimaSlideVisible+1].target.scrollIntoView({
                behavior: 'smooth',
					inline: 'start',
            });
            }
            
        
        }

        const slides = galeria$1.querySelectorAll('.galeria__carousel-slide');
        slides.forEach((slide)=>{
            observer.unobserve(slide);
        });
    
    },opciones);

    galeria$1.querySelectorAll('.galeria__carousel-slide').forEach((slide) => {
		observer.observe(slide);
	});
};

// 8. Evento de cerrar galería.



const galeria = document.getElementById('galeria');


galeria.addEventListener('click',(e)=>{ 
let boton = e.target.closest('button');
    if(boton?.dataset?.accion==='cerrar-galeria'){
        console.log(boton.dataset.accion);
        cerrarGaleria();
    }
    if(e.target.dataset.id){
        slideClick(e);
    }

    if(boton?.dataset?.accion==='siguiente-imagen'){
        cargarAnteriorSiguiente('siguiente');
    }
    if(boton?.dataset?.accion==='anterior-imagen'){
        cargarAnteriorSiguiente('anterior');
    }
    
    if(boton?.dataset?.accion==='siguiente-slide'){
        carousel('adelante');
    }
    if(boton?.dataset?.accion==='anterior-slide'){
        carousel('atras');
    }
}); 
//“cerrarGaleria.js” en la carpeta
// “galeria” que hemos creado y volvemos a acceder al elemento con id ‘galeria y lo
// guardamos en la variable constante “galeria”.

console.log('Hola');
