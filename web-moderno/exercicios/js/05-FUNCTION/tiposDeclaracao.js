console.log(soma(3,4))

// function declaration (Forma "Padrão")
// esse tipo de função é lida antes pelo interpretador
function soma(x, y) {
    return x + y
}

// function expression (Função anônima)
const sub = function (x, y) {
    return x - y
}

// named function expression (Junção das duas, com a função sendo nomeada, não anônonima)
const mult = function mult(x, y) {
    return x * y
}