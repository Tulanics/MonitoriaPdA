function getName() {
    var name = prompt("digite um nome com apenas letras de A a Z: ")
    console.log(typeof(name))

    while(name.length < 3) {
        alert("Digite um nome válido!")
        name = prompt("digite um nome com apenas letras de A a Z: ")
    }

    return document.write(`Olá, ${name}`)
}

window.onload = getName