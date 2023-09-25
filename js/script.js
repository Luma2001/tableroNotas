
//Capturo los elementos que recibirán la respuesta
    const toDoContainer = document.querySelector("#todoList");
    const checkContainer =  document.querySelector("#checkedList");


//Inicializo contador de tareas y idTareas
    let tareaCounter = 0;
    let idTarea = 0;


//creo una función para agregar la tarea cuando hago click en el boton(+). Incluye detección de errores
    function agregarTarea(){
    
        //debugger;

        //Primero capturo los datos que el usuario ingresa
            const titulo = document.querySelector("#nuevaTarea").value;
            const descripcion = document.querySelector("#nuevaDescripcion").value; 
        
        if(tareaCounter==4){
            alert("Lo siento, ha llegado al máximo de tareas pendientes, debe terminar una para agregar más")
            reset();
        
        }else if((titulo==null || titulo=="") || (descripcion==null || descripcion=="") ){
                    alert("ATENCIÓN!!! Falta información.")

        }

        else{ 
            tareaCounter++; 
            idTarea++;
            //Creo un elemento
            const tareaNueva =document.createElement('div');
            crearTarea(tareaNueva,idTarea,titulo,descripcion);
            //Lo agrego al toDoContainer
            toDoContainer.append(tareaNueva);
            reset();
        
        }    
        
    }  
    

//Creo función para borrar tareas por id
    function borrarTarea(id){
       
        if(confirm("¿Está Seguro que desea borrar?")){
        tareaCounter--;
        const nota = document.getElementById(id);
        toDoContainer.removeChild(nota);}else{
            alert("Genial")
        }
        
    }


//Creo función checked, para indicar tarea realizada
    function check(id){
        tareaCounter--;
        const listo = document.getElementById(id)
        toDoContainer.removeChild(listo);
        checkContainer.appendChild(listo);
       
    }


//Creo función para editar tarea
    function edit(id){

    }