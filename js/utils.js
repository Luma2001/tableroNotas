
const util = {
    //reseteo textareas
    reset:()=>{
        document.querySelector("#nuevaTarea").value="";
        document.querySelector("#nuevaDescripcion").value=""; 
    },
    //guardo en localstorage
    guardarHistorial:()=>{
        const li = document.querySelector('item').value;
        console.log("Valor="+item.value);
        let itemsArray =
            localStorage.getItem('items')?JSON.parse(localStorage.getItem('items')):[];
        itemsArray.push(li.value);
        console.log("Valor item:" + li.value);
        localStorage.setItem('items',JSON.stringify(itemsArray));

    },

    traerNotas : ()=>{
      let notas =  ( localStorage.getItem('historia') == '' ||  localStorage.getItem('historia') == NaN)
     || localStorage.getItem('historia') == null
    ? [] : JSON.parse(localStorage.getItem('historial'));

    
    },
    
}