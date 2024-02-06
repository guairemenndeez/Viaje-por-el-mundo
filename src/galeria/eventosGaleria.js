// 8. Evento de cerrar galería.
import cerrarGaleria from "./cerrarGaleria";
import slideClick from "./slideClick";
import { cargarAnteriorSiguiente } from "./cargarImagen";
import carousel from "./carousel";



const galeria = document.getElementById('galeria');


galeria.addEventListener('click',(e)=>{ 
let boton = e.target.closest('button')
    if(boton?.dataset?.accion==='cerrar-galeria'){
        console.log(boton.dataset.accion)
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
}) 
//“cerrarGaleria.js” en la carpeta
// “galeria” que hemos creado y volvemos a acceder al elemento con id ‘galeria y lo
// guardamos en la variable constante “galeria”.