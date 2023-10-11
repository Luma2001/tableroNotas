const nota = {

    agregar:()=>{
    
        //debugger;

        //Primero capturo los datos que el usuario ingresa
            const titulo = document.querySelector("#nuevaTarea").value;
            const descripcion = document.querySelector("#nuevaDescripcion").value; 
        
        if(tareaCounter==4){
            alert("Lo siento, ha llegado al máximo de tareas pendientes, debe terminar una para agregar más.");
            util.reset();
        
        }else if((titulo==null || titulo=="") || (descripcion==null || descripcion=="") ){
                    alert("ATENCIÓN!!! Falta información.")

        }

        else{ 
            tareaCounter++; 
            idTarea++;
            //Creo un elemento
            const tareaNueva =document.createElement('div');
            nota.crear(tareaNueva,idTarea,titulo,descripcion);
            //Lo agrego al toDoContainer
            toDoContainer.append(tareaNueva);
            util.reset();
        
        }    
        
    },  

    crear: (tareaNueva,idTarea,titulo,descripcion)=>{
           
           
        tareaNueva.setAttribute("id",idTarea);
        tareaNueva.classList.add('tarea');
        tareaNueva.innerHTML = `<h4 class="tituloTarea">${titulo.toUpperCase()}</h4>
                                <p class="descripcion">${descripcion}</p>
                                <div class="contenedorBotones">
                                    <button class="delete" onclick="nota.borrar(${idTarea})"><img src="./iconos/borrar.png" alt="delete task"> </button>
                                    <button class="edit" onclick="nota.editar(${idTarea})"><img src="./iconos/edit.png" alt="edit task"></button>   
                                    <button class="checked" onclick="nota.terminar(${idTarea})"><img src="./iconos/check.png" alt="check task"></button>
                                </div>`;
        
    },

    borrar:(id)=>{
        //Creo función para borrar tareas por id
       
        if(confirm("¿Está Seguro que desea borrar?")){
        tareaCounter--;
        const nota = document.getElementById(id);
        const padre= nota.parentNode;
        padre.removeChild(nota);}else{
            alert("Genial")
        }

    },

    editar: (id) => {
        //1)llamamos la nota que queremos editar
            const notaParaEditar = document.getElementById(id);
        
        //Nota: console.log(notaParaEditar.childNodes);//pido un console.log de notaParaEditar para ver los nodos internos en un array.
        console.log(notaParaEditar.childNodes);
        //2)llamo el id donde quiero que se abra el prompt   
            const tablero = document.getElementById("tablero");
        
        //3)Creo un elemento donde voy a mostrar la nota que quiero editar    
            const panelEditor = document.createElement('div'); //acá estamos creando un div
        
        //4)Le asigno una clase a panelEditor
            panelEditor.className = 'prompt';
        
        //Nota: Mi panel editor debe mostrar: (9)
        //      un textarea para el titulo,(5)
        //      un textarea para la descripcion (6)
        //      y un boton aceptar, para confirmar los cambios.(8)

        //5) Creando el elemento textarea para el titulo y le asigno un id
            const titulo = document.createElement('textarea');
            titulo.id = 'editarTarea';

        //6) creando el elemento textarea para la descripcion y le asigno un id
            const descripcion = document.createElement('textarea');
            descripcion.id = 'editarDescripcion';

        //7) Asigno textos de titulo y descripcion que quiero editar al textarea correspondiente
            //a)copio texto contenido en h4 en titulo
            let texto = document.createTextNode(notaParaEditar.childNodes[0].textContent);//Especificamente llama el texto contenido en h4
            //b)agrego este texto en titulo
            titulo.appendChild(texto);
            //c)copio texto contenido en p en descripcion
            let detalle = document.createTextNode(notaParaEditar.childNodes[2].textContent);//especificamente llamo el texto contenido en p
            //d)agrego este texto en descripcion
            descripcion.appendChild(detalle);

        //8) Creando el boton aceptar para confirmar cambios
            const btnAceptar = document.createElement('button');
            texto = document.createTextNode('ACEPTAR');
            btnAceptar.appendChild(texto);
        
        //9)Agrego titulo, descripcion y btnAceptar como hijos de panelEditar
            panelEditor.append(titulo,descripcion,btnAceptar);
        
        //10)Agrego panelEditor como hijo de tablero
            tablero.appendChild(panelEditor);
        
        //11)Creo un eventListener para agregar acciones al btnAceptar
            btnAceptar.addEventListener('click', ()=>{
                //a)capturo las modificacione en el titulo y descripcion
                const nuevoTitulo = document.getElementById('editarTarea');
                const nuevaDescripcion = document.getElementById('editarDescripcion');
                //b)Copio los valores capturados al titulo y descripcion original
                notaParaEditar.childNodes[0].textContent=nuevoTitulo.value.toUpperCase();
                notaParaEditar.childNodes[2].textContent=nuevaDescripcion.value;
                //c)cierro panel editor    
                const padre = panelEditor.parentNode;//llamo al padre de panelEditor
                padre.removeChild(panelEditor);
            })    
            
    },

    terminar: (id)=>{
        tareaCounter--;
        const listo = document.getElementById(id);
        const padre= listo.parentNode;
        padre.removeChild(listo);
        
        if(padre==toDoContainer){
            checkContainer.appendChild(listo);
        }    
            
        else if(padre==checkContainer){
           
            const panelHistorial = document.getElementById("lista");
            //creo elemento donde voy a colocar los datos
            const item = document.createElement('li');
            item.className = 'tareaArchivadas';
            //LLamo h4 y p 
            const titulo = document.createElement('span');
            let text = document.createTextNode(listo.childNodes[0].textContent + ": ");
            titulo.appendChild(text);
            const descripcion = document.createElement('span');
            let texto = document.createTextNode(listo.childNodes[2].textContent+". ");
            descripcion.appendChild(texto);
            const fecha=new Date();

            item.append(titulo,descripcion,fecha);
            panelHistorial.appendChild(item);
        }    
    }

}