function soma() {
    let n1, n2, resp;
    n1 = document.getElementById("num1").value;
    n2 = document.getElementById("num2").value;
    resp = parseFloat(n1) + parseFloat(n2);
    document.getElementById("result").innerText = "Resultado: " + resp;
}
function subtrai() {
    let n1, n2, resp;
    n1 = document.getElementById("num1").value;
    n2 = document.getElementById("num2").value;
    resp = parseFloat(n1) - parseFloat(n2);
    document.getElementById("result").innerText = "Resultado: " + resp;

}
function multiplica() {
    let n1, n2, resp;
    n1 = document.getElementById("num1").value;
    n2 = document.getElementById("num2").value;
    resp = parseFloat(n1) * parseFloat(n2);
    document.getElementById("result").innerText = "Resultado: " + resp;
}
function divide() {
    let n1, n2, resp;
    n1 = document.getElementById("num1").value;
    n2 = document.getElementById("num2").value;
    resp = parseFloat(n1) / parseFloat(n2);
    document.getElementById("result").innerText = "Resultado: " + resp;
}
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