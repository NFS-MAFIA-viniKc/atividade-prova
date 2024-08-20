let usuarios=[]
adicionarusuario()
listarusuarios()

function adicionarusuario ()  {
    let usuario= {
        nome: "vinicius",
        idade: "16",
        email: "vinicius@example.com"
    }
    if (usuario.nome==undefined||usuario.nome==""){
        throw new Error("nome não definido")
    }
    if(usuario.idade<=0) {
        throw new Error("idade menor que zero")
    }
    if (usuario.email==undefined||usuario.email=="") {
        throw new Error("email não definido")
    }
    usuarios.push(usuario)
}

function listarusuarios() {
    console.log(usuarios)
}