
const util = {
    //reseteo textareas
    reset:()=>{
        document.querySelector("#nuevaTarea").value="";
        document.querySelector("#nuevaDescripcion").value=""; 
    },
    
    //Limpio tablero y localStorage
    clear:()=>{
        
            //otra forma de hacerlo, creando prompt propio
        //1)llamo el id donde quiero que se abra el prompt   
        const tablero = document.getElementById("tablero");
        
        //2)Creo un elemento donde voy a mostrar la nota que quiero editar    
            const panelPrompt = document.createElement('div'); //acá estamos creando un div
        
        //3)Le asigno una clase a panelEditor
            panelPrompt.className = 'prompt';
        
        //Nota: Mi panel editor debe mostrar:
        //      mensaje: por ejemplo "¿Está Seguro que desea borrar?"
        //      boton para confirmar
        //      boton para cancelar

        //4) Creando el elemento párrafo y agrego mensaje
            const mensaje = document.createElement('p');
            mensaje.textContent ="¿Está seguro que desea Limpiar Tablero e Historial?";
           
        //5) Creando el boton aceptar y boton cancelar
            const btnAceptar = document.createElement('button');
            let texto = document.createTextNode('ACEPTAR');
            btnAceptar.appendChild(texto);

            const btnCancelar = document.createElement('button');
            texto = document.createTextNode('CANCELAR');
            btnCancelar.appendChild(texto);

        //6) Agrego mensaje y botones al panelBorrar
            panelPrompt.append(mensaje, btnAceptar, btnCancelar);
        
        //7) Agrego panelEditor como hijo de tablero
            tablero.appendChild(panelPrompt);

            btnAceptar.addEventListener('click', ()=>{
                    //b)cierro panelPrompt   
                tablero.removeChild(panelPrompt);
                toDoContainer.remove();
                checkContainer.remove();
                panelhistorial.remove();
                localStorage.clear();
            })
            btnCancelar.addEventListener('click', ()=>{
                //a)cierro panelBorrar    
                tablero.removeChild(panelPrompt);
            })
    
    },

    
   
}