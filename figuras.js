function perimetroCuadrado(lado){
    return lado*4;
}

function areaCuadrado(lado){
    return lado*lado;
}

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    alert(perimetroCuadrado(value));
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    alert(areaCuadrado(value));
}

//Este bloque empieza la seccion de triangulo
function perimetroTriangulo(base){
    
    return base*3;
}
function areaTriangulo(base, altura){
    return (base*altura)/2;
}

function calcularAreaTriangulo(){
    const base = document.getElementById("InputTriangulo");
    const value = base.value;

    const altura = document.getElementById("InputAltura");
    const valor = altura.value;

    alert(areaTriangulo(value, valor));
}

function calcularPerimetroTriangulo(){
    const base = document.getElementById("InputTriangulo");
    const value = base.value;

    alert(perimetroTriangulo(value));
}

//funciones para la circunferencia

function perimetroCirculo(radio){
    return 2*Math.PI*radio;
}

function areaCirculo(radio){
    return Math.PI*radio*radio;
}

function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    alert(perimetroCirculo(value));
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    alert(areaCirculo(value));
}