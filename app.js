cartao.innerHTML = `
<!--  <article class="cartao"
        <div clas"cartao_conteudo">
            <h3>${categoria}</h3>
            <div class=”cartao__conteudo__pergunta”>
                <p>${pergunta}</p>
            </div>
            <div class=”cartao__conteudo__resposta”>
                <p>${resposta}</p>
            </div>
        </div>
        </article>!-->
`
let respostaEstaVisivel = false
container.appendChild(cartao)
function viraCartao () {
respostaEstaVisivel = !respostaEstaVisivel
let respostaEstaVisivel = false
function viraCartao () {
respostaEstaVisivel = !respostaEstaVisivel
}
}
cartao.addEventListener("click", viraCartao)