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
function multiplica(){
    let n1, n2, resp;
    n1 = document.getElementById("num1").value;
    n2 = document.getElementById("num2").value;
    resp = parseFloat(n1) * parseFloat(n2);
    document.getElementById("result").innerText = "Resultado: " + resp;
}
function divide(){
    let n1, n2, resp;
    n1 = document.getElementById("num1").value;
    n2 = document.getElementById("num2").value;
    resp = parseFloat(n1) / parseFloat(n2);
    document.getElementById("result").innerText = "Resultado: " + resp; 
}