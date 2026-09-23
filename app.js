


function calcularTotal (Itens) {
    let total = 0

    for (let i = 0; i < itens.length; i++){
        total += itens [i].preco * 1.1
    }

    return total
}