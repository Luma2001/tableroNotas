const util = {
    promptConfirmacion: (id) => {
        const nota = document.getElementById(id);

        const tablero = document.querySelector('#tablero');

        const div = document.createElement('div');
        div.className = 'prompt'

        const titulo = document.createElement('h2');
        let palabras = document.createTextNode('¿Estás seguro que querés eliminarlo?');
        titulo.appendChild(palabras);

        const btnok = document.createElement('button');
        palabras = document.createTextNode('aceptar');
        btnok.appendChild(palabras);
       btnok.addEventListener('click', () => {
        const padre = nota.parentNode;
        padre.removeChild(nota);

        const padre2 = div.parentNode;
        padre2.removeChild(div);

    });

        const btnCancelar = document.createElement('button');
        palabras = document.createTextNode('cancelar');
        btnCancelar.appendChild(palabras);
        btnCancelar.addEventListener('click', () => {
            const padre = div.parentNode;
            padre.removeChild(div);
        });

        div.append(titulo, btnok, btnCancelar);

        tablero.appendChild(div);
    }/*,
    btnok: (nota) => {
        const padre = nota.parentNode;
        padre.removeChild(nota);

    },
    btnCancelar: (prompt) => {
        const padre = prompt.parentNode;
        padre.removeChild(prompt);
    }*/

}