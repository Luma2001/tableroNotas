

const nota = {
    

    agregar: () => {

        //Primero capturo los datos que el usuario ingresa
        const titulo = document.querySelector("#nuevaTarea").value;
        const descripcion = document.querySelector("#nuevaDescripcion").value;

        if (tareaCounter == 4) {

                  
        //1 llama donde aparece prompt     
            const tablero = document.getElementById("tablero");
        
        //2)Creo un elemento donde voy a mostrar la nota que quiero editar    
            const panelPrompt = document.createElement('div'); //acá estamos creando un div
        
        //3)Le asigno una clase a panelEditor
            panelPrompt.className = 'prompt';
        
        //Nota: Mi panel editor debe mostrar:
        //      mensaje: "Lo siento, ha llegado al máximo de tareas pendientes, debe terminar una para agregar más.""
        //      boton para ok
       

        //4) Creando el elemento párrafo y agrego mensaje
            const mensaje = document.createElement('p');
            mensaje.textContent ="Lo siento, ha llegado al máximo de tareas pendientes, debe terminar una para agregar más.";
           
        //5) Creando el boton aceptar y boton cancelar
            const btnAceptar = document.createElement('button');
            let texto = document.createTextNode('OK');
            btnAceptar.appendChild(texto);

           
            panelPrompt.append(mensaje, btnAceptar);
        
        //7) Agrego panelEditor como hijo de tablero
            tablero.appendChild(panelPrompt);
            util.reset();
            btnAceptar.addEventListener('click', ()=>{
                    //b)cierro panelPrompt   
                tablero.removeChild(panelPrompt);
            })
        

        } else if ((titulo == null || titulo == "") || (descripcion == null || descripcion == "")) {
        //1 llama donde aparece prompt     
            const tablero = document.getElementById("tablero");
        
        //2)Creo un elemento donde voy a mostrar la nota que quiero editar    
            const panelPrompt = document.createElement('div'); //acá estamos creando un div
        
        //3)Le asigno una clase a panelEditor
            panelPrompt.className = 'prompt';
        
        //Nota: Mi panel editor debe mostrar:
        //      mensaje: por ejemplo "ATENCIÓN!!! Falta información."
        //      boton para ok
       

        //4) Creando el elemento párrafo y agrego mensaje
            const mensaje = document.createElement('p');
            mensaje.textContent ="ATENCIÓN!!! Falta información.";
           
        //5) Creando el boton aceptar y boton cancelar
            const btnAceptar = document.createElement('button');
            let texto = document.createTextNode('OK');
            btnAceptar.appendChild(texto);

           
            panelPrompt.append(mensaje, btnAceptar);
        
        //7) Agrego panelEditor como hijo de tablero
            tablero.appendChild(panelPrompt);

            btnAceptar.addEventListener('click', ()=>{
                    //b)cierro panelPrompt   
                tablero.removeChild(panelPrompt);
            })
        }

        else {
            tareaCounter++;
            idTarea++;
            //Creo un elemento
            const tareaNueva = document.createElement('div');
            nota.crear(tareaNueva, idTarea, titulo, descripcion);
            //Lo agrego al toDoContainer
            toDoContainer.append(tareaNueva);
            util.reset();
            console.log(tareaNueva.childNodes);
            nota.guardar();
           
        }    
        
    },  

    crear: (tareaNueva, idTarea, titulo, descripcion) => {

        tareaNueva.setAttribute("id", idTarea);
        tareaNueva.classList.add('tarea');
        tareaNueva.innerHTML = `<div class="clip"><img src="./img/clip.png/" alt="°"></div>
                                <h4 class="tituloTarea">${titulo.toUpperCase()}</h4>
                                <p class="descripcion">${descripcion}</p>
                                
                        
                                <div class="contenedorBotones">
                                    <button class="delete" onclick="nota.borrar(${idTarea})"><img src="./iconos/borrar.png" alt="delete task"> </button>
                                    <button class="edit" onclick="nota.editar(${idTarea})"><img src="./iconos/edit.png" alt="edit task"></button>   
                                    <button class="checked" onclick="nota.terminar(${idTarea})"><img src="./iconos/check.png" alt="check task"></button>
                                </div>`;
    },

    borrar:(id)=>{
        //Capturo nota que quiero borrar
        const notaParaBorrar= document.getElementById(id);
       
       /*
        //Creo función para borrar tareas por id
        if(confirm("¿Está Seguro que desea borrar?")){
        tareaCounter--;
        const nota = document.getElementById(id);
        const padre= nota.parentNode;
        padre.removeChild(nota);}else{
            alert("Genial")
        }
        nota.guardar();
        */

        //otra forma de hacerlo, creando prompt propio
        //1)llamo el id donde quiero que se abra el prompt   
            const tablero = document.getElementById("tablero");
        
        //2)Creo un elemento donde voy a mostrar la nota que quiero editar    
            const panelBorrar = document.createElement('div'); //acá estamos creando un div
        
        //3)Le asigno una clase a panelEditor
            panelBorrar.className = 'prompt';
        
        //Nota: Mi panel editor debe mostrar:
        //      mensaje:"¿Está Seguro que desea borrar?"
        //      boton para confirmar borrado
        //      boton para cancelar borrado

        //4) Creando el elemento párrafo y agrego mensaje
            const mensaje = document.createElement('p');
            mensaje.textContent ="¿Está seguro que desea borrar nota?";
           
        //5) Creando el boton aceptar y boton cancelar
            const btnAceptar = document.createElement('button');
            texto = document.createTextNode('ACEPTAR');
            btnAceptar.appendChild(texto);

            const btnCancelar = document.createElement('button');
            texto = document.createTextNode('CANCELAR');
            btnCancelar.appendChild(texto);

        //6) Agrego mensaje y botones al panelBorrar
            panelBorrar.append(mensaje, btnAceptar, btnCancelar);
        
        //7) Agrego panelEditor como hijo de tablero
            tablero.appendChild(panelBorrar);
        
        //8) Creo un eventListener para agregar acciones al btnAceptar
            btnAceptar.addEventListener('click', (id)=>{                
                //a)llamo al padre y la borro
                tareaCounter--;
                const papa= notaParaBorrar.parentNode;
                papa.removeChild(notaParaBorrar);

                //b)cierro panelBorrar    
                tablero.removeChild(panelBorrar);
                nota.guardar();
            })  
        
        // 
            btnCancelar.addEventListener('click', () =>{
                //a)cierro panelBorrar    
                tablero.removeChild(panelBorrar);
            })






       
    }, 

    editar: (id)=>{
        //1)llamamos la nota que queremos editar
        const notaParaEditar = document.getElementById(id);

        //Nota: console.log(notaParaEditar.childNodes);//pido un console.log de notaParaEditar para ver los nodos internos en un array.
       
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
        titulo.id = 'editarTitulo';

        //6) creando el elemento textarea para la descripcion y le asigno un id
        const descripcion = document.createElement('textarea');
        descripcion.id = 'editarDescripcion';

        //7) Asigno textos de titulo y descripcion que quiero editar al textarea correspondiente
            //a)Agrego texto contenido en h4 en titulo
            titulo.textContent=notaParaEditar.childNodes[2].textContent
            //b)Agrego texto contenido en p en descripcion
            descripcion.textContent=notaParaEditar.childNodes[4].textContent;//especificamente llamo el texto contenido en p
        
        //8) Creando el boton aceptar para confirmar cambios
            const btnAceptar = document.createElement('button');
            texto = document.createTextNode('ACEPTAR');
            btnAceptar.appendChild(texto);
        
        //9) Agrego titulo, descripcion y btnAceptar como hijos de panelEditar
            panelEditor.append(titulo,descripcion,btnAceptar);
        
        //10) Agrego panelEditor como hijo de tablero
            tablero.appendChild(panelEditor);
        
        //11) Creo un eventListener para agregar acciones al btnAceptar
            btnAceptar.addEventListener('click', ()=>{
                //a)capturo las modificaciones en el titulo y descripcion
                const nuevoTitulo = document.getElementById('editarTitulo');
                const nuevaDescripcion = document.getElementById('editarDescripcion');
                //b)Copio los valores capturados al titulo y descripcion original
                notaParaEditar.childNodes[2].textContent=nuevoTitulo.value.toUpperCase();
                notaParaEditar.childNodes[4].textContent=nuevaDescripcion.value;
                //c)cierro panel editor    
                const padre = panelEditor.parentNode;//llamo al padre de panelEditor
                padre.removeChild(panelEditor);
                nota.guardar();
            })    
            
    },

    terminar: (id)=>{
        
        const tareaLista = document.getElementById(id);
        const padre= tareaLista.parentNode;
        padre.removeChild(tareaLista);
        
        if(padre==toDoContainer){
            tareaCounter--;
            checkContainer.appendChild(tareaLista);
        } else {//creo elemento donde voy a colocar los datos para el panelHistorial

                //Creo elemento li y adjudico la clase tareaArchivadas
                const item = document.createElement('li');
                item.className = 'tareasArchivadas';
                
                //LLamo h4, p  y creo fecha
                const titulo = document.createElement('span');
                titulo.textContent = tareaLista.childNodes[2].textContent + ": ";
                const descripcion = document.createElement('span');
                descripcion.textContent=tareaLista.childNodes[4].textContent+". Finalizada el ";
                const fecha = new Date().toLocaleString();
                const textContenido = document.createTextNode(titulo.innerText + descripcion.innerText  + fecha);
                //Agrego titulo, descripcion y fecha como hijos de item
                item.appendChild(textContenido);
                console.log(item.childNodes);

                //Agrego item al panelHistorial
                panelhistorial.appendChild(item);
            
                //Guardo en localStorage    
                nota.guardarHistorial();
        
        }  
        //Guardo en localStorage  
        nota.guardar();
    },

    guardar: ()=>{
        const notasGuardadas = document.querySelectorAll('.tarea');
        const arr = [];

        for(let n of notasGuardadas){
            const parent = n.parentNode;
            objeto = {
                padre: parent.id,
                id: n.id,
                titulo: n.childNodes[2].textContent,
                descripcion: n.childNodes[4].textContent
            }  
        arr.push(objeto);    
        }
        localStorage.setItem('notas',JSON.stringify(arr));
        localStorage.setItem('idTarea',JSON.stringify(idTarea));
        localStorage.setItem('tareaCounter',JSON.stringify(tareaCounter));
    },

    guardarHistorial: ()=>{
        const historial = document.querySelectorAll('.tareasArchivadas');
        const array = [];
        for(let h of historial){
            const parent = h.parentNode;
            objeto = {
                padre:parent.id,
                texto:h.innerText
            }
            array.push(objeto);
        }
        localStorage.setItem('historial',JSON.stringify(array));

    },

    cargar: ()=>{
        const notasCargadas = JSON.parse(localStorage.getItem('notas'))??[];
        notasCargadas.forEach((n) => {
            const tareaNueva = document.createElement('div');
            const padre = document.getElementById(n.padre);
            nota.crear(tareaNueva,n.id,n.titulo,n.descripcion);
            padre.appendChild(tareaNueva);      
        });

        const historialCargado = JSON.parse(localStorage.getItem('historial'))??[];
        historialCargado.forEach((h) => {
            const item = document.createElement('li');
            item.className = 'tareasArchivadas';
            const padre = document.getElementById(h.padre);
            item.textContent = h.texto;
            padre.appendChild(item);
        });

        idTarea = JSON.parse(localStorage.getItem('idTarea')??0);
        tareaCounter=JSON.parse(localStorage.getItem('tareaCounter')??0);
        //console.log(idTarea);
        console.log('tareaCounter');
    },

    
    
}