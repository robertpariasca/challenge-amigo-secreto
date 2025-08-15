// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let arrayamigos = [];


function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;
    let mostrarAmigoSeleccionado = document.getElementById('resultado');
    mostrarAmigoSeleccionado.innerHTML = '';

    if (nombreAmigo == '') {
        alert('Debe ingresar un nombre');
    }
    else
    {
        if (arrayamigos.includes(nombreAmigo)) {
            alert('Ya ingresó este nombre previamente');
        } else {
            arrayamigos.push(nombreAmigo);
        }
    
    }
    document.querySelector('#amigo').value = '';
    //console.log(arrayamigos);
    mostrarAmigo();
    return;
}

function mostrarAmigo() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";
    
    for (let i = 0; i < arrayamigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = arrayamigos[i];
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    let mostrarAmigoSeleccionado = document.getElementById('resultado');
    let listaAmigos = document.getElementById('listaAmigos');
    mostrarAmigoSeleccionado.innerHTML = '';
    if (arrayamigos.length < 2)
    {
        alert('Debe ingresar al menos 2 personas para sortear');
    }
    else
    {
        let numeroSeleccionado =  Math.floor(Math.random()*arrayamigos.length);
        let amigoSeleccionado = arrayamigos[numeroSeleccionado];


        mostrarAmigoSeleccionado.innerHTML = amigoSeleccionado;

        arrayamigos.length = 0;
        listaAmigos.innerHTML = '';
    }
}