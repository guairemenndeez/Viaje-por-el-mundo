

const galeria = document.getElementById('galeria');


let cerrarGaleria = () =>{
    galeria.classList.remove('galeria--active');
    document.body.style.overflow = '';
    //document.body.style.remove = 'hidden';
    //document.body.style.removeProperty = 'overflow: hidden';
}


export default cerrarGaleria;