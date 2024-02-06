//console.log('Cargando...');
import dataCategorias from './datos/categorias';

const {categorias} = dataCategorias;
//console.log(categorias)

let contenedorCategorias = document.getElementById('categorias');
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
nuevaCategoria.href ='#'
nuevaCategoria.dataset.categoria = categoria.id

contenedorCategorias.append(nuevaCategoria);

})