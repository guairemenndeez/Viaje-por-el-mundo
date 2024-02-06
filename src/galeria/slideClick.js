import datos from './../datos/fotos';
import { cargarImagen } from './cargarImagen';



const galeria = document.getElementById('galeria');



const slideClick =(e) =>{
    let ruta, nombre, descripcion;

    const categoriaActiva = galeria.dataset.categoria;
    const id=parseInt(e.target.dataset.id);
    console.log('Hiciste clic en un slide', id, categoriaActiva);
    console.log(datos.fotos[categoriaActiva])


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






}

export default slideClick;