//When load or reload this webpage call function "iniciar"
window.onload = iniciar;

/*//We create "iniciar" function and we create the  "btnCalcular" variable 
//whit getElementById("btnCalcular") in index.html*/
function iniciar(){
    let botonCalcular = document.getElementById("btnCalcular");
    /*//Next we create "btnCalcular" variable listening to the event
     //"click" on "btnCalcular" in index.html*/
    btnCalcular.addEventListener("click", clickBtnCalcular);
}

function clickBtnCalcular(){
    alert("click");
    let txtPeso = document.getElementById("txtPeso");
    let peso= txtPeso.value;
    alert(peso);

    let txtAltura = document.getElementById("txtAltura");
    let altura=txtAltura.value
    alert(altura);
}