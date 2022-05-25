
function insert(num) {
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}
function clean() {
    document.getElementById('resultado').innerHTML = "";
}
function back() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1)
}
function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    if (resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else {
        document.getElementById('resultado').innerHTML = "nada..."
    }
}
.dados{
    font-family: 'Poppins', sans-serif;
    list-style: none;
    display:block;
    text-align: center;
    color: #fff;
     height: 100vh;
    width: 100vw;
    flex-direction:row;
    align-items:center;
    background: linear-gradient(0deg, #23232e 1%, #8956F3 99%);
    font-size: 2rem;
}
.conteudo{
    top: 50%;
    transform: translateY(50%);
}
<div class="dados">
          <div class="conteudo">
              <p>Nome: Samuel Muniz Heredia</p>
              <p>Email Instituicional: d2021005503@unifei.edu.br</p>
              <li><a class="github" href="https://github.com/SamuelHereds">GitHub:SamuelHereds</a></li>
          </div>
     </div>
