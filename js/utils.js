
const util = {
    //reseteo textareas
    reset:()=>{
        document.querySelector("#nuevaTarea").value="";
        document.querySelector("#nuevaDescripcion").value=""; 
    },
    
    
    //Limpio tablero y localStorage
    clear:()=>{
        
    //Creando prompt propio(la ventanita, el panel, etc. :)

        //1)llamo el id donde quiero que se abra el prompt   
        const tablero = document.getElementById("tablero");
        
        //2)Creo un elemento donde voy a mostrar la nota que quiero editar    
            const panelPrompt = document.createElement('div'); //acá estamos creando un div
        
        //3)Le asigno una clase a panelEditor
            panelPrompt.className = 'prompt';
        
        //Nota: Mi panel de Limpieza debe mostrar:
        //      mensaje:"¿Está seguro que desea Limpiar Tablero e Historial?"
        //      botón para confirmar
        //      botón para cancelar

        //4) Creando el elemento párrafo y agrego mensaje
            const mensaje = document.createElement('p');
            mensaje.textContent ="¿Está seguro que desea Limpiar Tablero e Historial?";
           
        //5) Creando el (a)botón aceptar y (b)botón cancelar
            //(a)
            const btnAceptar = document.createElement('button');
            let texto = document.createTextNode('ACEPTAR');
            btnAceptar.appendChild(texto);
            //(b)
            const btnCancelar = document.createElement('button');
            texto = document.createTextNode('CANCELAR');
            btnCancelar.appendChild(texto);

        //6) Agrego mensaje y botones al panelPrompt
            panelPrompt.append(mensaje, btnAceptar, btnCancelar);
        
        //7) Agrego panelPrompt como hijo de tablero
            tablero.appendChild(panelPrompt);

        //8) Creo funcionalidades de botones 
            //(a)   
            btnAceptar.addEventListener('click', ()=>{
                //a)cierro panelPrompt   
                tablero.removeChild(panelPrompt);
                toDoContainer.remove();
                checkContainer.remove();
                panelhistorial.remove();
                localStorage.clear();//borro localstorage
                location.reload();//reseteo página
            })
            //(b)
            btnCancelar.addEventListener('click', ()=>{
                //a)cierro panelPrompt    
                tablero.removeChild(panelPrompt);
            })
    
    },
   
}