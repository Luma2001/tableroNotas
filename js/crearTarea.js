function crearTarea(tareaNueva,idTarea,titulo,descripcion){
           
           
            tareaNueva.setAttribute("id",idTarea);
            tareaNueva.classList.add('tarea');
            tareaNueva.innerHTML = `<h4 class="tituloTarea">${titulo.toUpperCase()}</h4>
                                    <p class="descripcion">${descripcion}</p>
                                    <div class=contenedorBotones>
                                        <button class="delete" onclick="borrarTarea(${idTarea})"><img src="./iconos/borrar.png" alt="delete task"> </button>
                                        <button class="edit"><img src="./iconos/edit.png" alt="edit task"></button>   
                                        <button class="checked" onclick="check(${idTarea})"><img src="./iconos/check.png" alt="check task"></button>
                                    </div>`;
            
}