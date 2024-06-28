console.log("Script carregado");

function cumprimentarUsuario() {
    const nome = prompt("Informe seu nome, por favor: ");

    if(nome)
        return alert(`Olá, ${nome}`)
    else
        return alert('Olá, visitante')
}

window.onload = cumprimentarUsuario