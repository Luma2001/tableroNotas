
const util = {
    //reseteo textareas
    reset:()=>{
        document.querySelector("#nuevaTarea").value="";
        document.querySelector("#nuevaDescripcion").value=""; 
    },
    
    //Limpio tablero y localStorage
    clear:()=>{
        
            const tablero = document.getElementById("tablero"); 
            const panelClear = document.createElement('div'); //acá estamos creando un div
            panelClear.className = 'prompt';
            const mensaje = document.createElement('p');
            mensaje.textContent ="¿Está seguro que desea Limpiar Tablero y Historial?";
            
            const btnAceptar = document.createElement('button');
            texto = document.createTextNode('ACEPTAR');
            btnAceptar.appendChild(texto);

            const btnCancelar = document.createElement('button');
            texto = document.createTextNode('CANCELAR');
            btnCancelar.appendChild(texto);

     
            panelClear.append(mensaje, btnAceptar, btnCancelar);
        
       
            tablero.appendChild(panelClear);
        
      
            btnAceptar.addEventListener('click', ()=>{                
                
                //b)cierro panelBorrar    
                tablero.removeChild(panelClear);
                localStorage.clear();
            })  
        
        // 
            btnCancelar.addEventListener('click', () =>{
                //a)cierro panelBorrar    
                tablero.removeChild(panelClear);
            })


    },
    
}