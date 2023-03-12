var precos = document.querySelectorAll(".preco");

precos.forEach(function (preco) {
    var num = parseInt(preco.textContent).toFixed(2);
    preco.innerHTML = num.toString().replace('.', ',')
});