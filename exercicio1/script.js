const objeto = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

//1
function caixaAlta(object) {
    const letraGrande = {...object, nome: object.nome.toUpperCase(), profissao: object.profissao.toUpperCase(), username: object.username.toUpperCase(), senha: object.senha.toUpperCase()}
    
    return letraGrande
}
// console.log(caixaAlta(objeto));

//2
function textoCorrrido(objeto) {
    const objetoNovo={...objeto, textoCorrrido: objeto.nome + objeto.profissao + objeto.username + objeto.senha}
    return objetoNovo.textoCorrrido
}
// console.log(textoCorrrido(objeto));

//3
function imprimir(objeto, callback) {
    const imprimir = callback(objeto)

    return console.log(imprimir);
}

imprimir(objeto, caixaAlta)
imprimir(objeto, textoCorrrido)