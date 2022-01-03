//en esta seccion tenemos las funciones para calcular el area y el perimetro del cuadrado
function perimetroCuadrado(lado){
    return lado*4;
}

function areaCuadrado(lado){
    return lado*lado;
}

//en esta seccion tenemos las funciones para calcular el area y el perimetro del triangulo

function perimetroTriangulo(lado1, lado2, base){
    return lado1+lado2+base;
}

function areaTriangulo(base, altura){
    return (base*altura)/2;
}

//Funcion para calcular la altura de un triangulo isoseles
function alturaTrianguloIsoseles(lado1,lado2, base){
    return Math.sqrt(lado1*lado2-((base*base)/4));
}


// Interactuamos con el HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

//Interactuamos con el HTML para el calculo de el perimetro y el area del triangulo

function calcularPerimetroTriangulo(){
    const lado1 = document.getElementById("InputTrianguloLado1");
    const lado2 = document.getElementById("InputTrianguloLado2");
    const base = document.getElementById("InputBase");

    const lado1Value = lado1.value;
    const lado2Value = lado2.value;
    const baseValue = base.value;
    const perimetro = perimetroTriangulo(Number(lado1Value), Number(lado2Value), Number(baseValue));
    alert(perimetro);
}