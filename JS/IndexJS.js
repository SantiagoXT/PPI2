
function mayorMenor()
{
    resultado = "";
    var edad = document.getElementById("number").value;
    edad=parseInt(edad);
    while((isNaN(edad))||(edad < 0)||(edad > 120))
    {
        edad = prompt("Edad no valida, ingrese una edad valida");
        edad = parseInt(edad);
    }
    if((edad >= 18) && (edad >= 0))
    {
        resultado = "Eres mayor de edad";
    }
    else if((edad < 18)&&(edad <= 100))
    {
        resultado = "No Eres mayor de edad";
    }
    else
    {
        resultado = "edad no valida";
    }
    document.getElementById("resultado").innerHTML = resultado;
}

function IMC()
{
    resultado = "";
    peso = document.getElementById("peso").value;
    peso=parseFloat(peso);
    altura = document.getElementById("altura").value;
    altura = parseFloat(altura);
    altura = altura/100;
    imc = peso/(altura*altura);
    switch(true)
    {
        case (imc < 16.1):
        {
            resultado = "desnutricion severa";
            document.getElementById("IMC").innerHTML = resultado;
            document.querySelector(".imcResultado").style.backgroundColor = "red";
            document.querySelector(".imcResultado").style.color = "white";
            break;
        }
        case((imc >= 16.1)&&(imc <18.5)):
        {
            resultado = "desnutricion moderada";
            document.getElementById("IMC").innerHTML = resultado;
            document.querySelector(".imcResultado").style.backgroundColor = "orange";
            document.querySelector(".imcResultado").style.color = "white";
            break;
        }
        case ((imc >= 18.5)&&(imc < 22)):
        {
            resultado = "Peso insuficiente";
            document.getElementById("IMC").innerHTML = resultado;
            document.querySelector(".imcResultado").style.backgroundColor = "yellow";
            document.querySelector(".imcResultado").style.color = "black";
            break;
        }
        case ((imc >= 22) && (imc <= 24.9)):
        {
            resultado = "Peso normal";
            document.getElementById("IMC").innerHTML = resultado;
            document.querySelector(".imcResultado").style.backgroundColor = "green";
            document.querySelector(".imcResultado").style.color = "white";
            break;
        }
        case ((imc >= 25) && (imc <= 26.9)):
        {
            resultado = "Sobrepeso grado I";
            document.getElementById("IMC").innerHTML = resultado;
            document.querySelector(".imcResultado").style.backgroundColor = "yellow";
            document.querySelector(".imcResultado").style.color = "black";
            break;
        }
        case ((imc >= 27) && (imc <= 29.9)):
        {
            resultado = "Sobrepeso grado II (preobesidad)";
            document.getElementById("IMC").innerHTML = resultado;
            document.querySelector(".imcResultado").style.backgroundColor = "orange";
            document.querySelector(".imcResultado").style.color = "white";
            break;
        }
        case ((imc >= 30) && (imc <= 34.9)):
        {
            resultado = "Obesidad tipo I";
            document.getElementById("IMC").innerHTML = resultado;
            document.querySelector(".imcResultado").style.backgroundColor = "darkorange";
            document.querySelector(".imcResultado").style.color = "white";
            break;
        }
        case ((imc >= 35) && (imc <= 39.9)):
        {
            resultado = "Obesidad tipo II";
            document.getElementById("IMC").innerHTML = resultado;
            document.querySelector(".imcResultado").style.backgroundColor = "red";
            document.querySelector(".imcResultado").style.color = "white";
            break;
        }
        case (imc >= 40):
        {
            resultado = "Obesidad tipo III (mórbida)";
            document.getElementById("IMC").innerHTML = resultado;
            document.querySelector(".imcResultado").style.backgroundColor = "darkred";
            document.querySelector(".imcResultado").style.color = "white";
            break;
        }
        default:
        {
            resultado = "No se pudo calcular el IMC";
        }
    }
}

function conversor()
{
  
    var grados = document.getElementById("entrada").value;
    grados = parseFloat(grados);
    var resultado = 0;
  
    var index1 = document.getElementById("select").selectedIndex;
    var opcion1 = document.getElementById("select").options[index1].value;

    var index2 = document.getElementById("select2").selectedIndex;
    var opcion2 = document.getElementById("select2").options[index2].value;


    switch (true)
    {
        case(opcion1 == 0):
        {
            if(opcion2 == 0)
            {
                resultado = grados;
            }
            if(opcion2 == 1)
            {
                valor = (grados * 1.8)+32;
                resultado = valor.toFixed(2);
            }
            if(opcion2 == 2)
            {
                valor = grados + 273.15;
                resultado = valor.toFixed(2);
            }
            if(opcion2 == 3)
            {
                valor = (grados + 273.15)*1.8;
                resultado = valor.toFixed(2);
            }
            input =document.getElementById("salida").value = resultado;
            input.value = resultado;
            break;
        }
        case (opcion1 == 1):
        {
            if(opcion2 == 0)
            {
                valor = (grados - 32)/1.8;
                resultado = valor.toFixed(2);
            }
            if(opcion2 == 1)
            {
                resultado = grados;
            }
            if(opcion2 == 2)
            {
                valor = ((grados - 32)/1.8)+273.15;
                resultado = valor.toFixed(2);
            }
            if(opcion2 == 3)
            {
                valor = grados + 459.67;
                resultado = valor.toFixed(2);
            }
            input =document.getElementById("salida").value = resultado;
            input.value = resultado;
            break;
        }
        case (opcion1 == 2):
        {
            if(opcion2 == 0)
            {
                valor = grados - 273.15;
                resultado = valor.toFixed(2);
            }
            if(opcion2 == 1)
            {
                valor = ((grados - 273.15)*1.8)+32;
                resultado = valor.toFixed(2);
            }
            if(opcion2 == 2)
            {
                resultado = grados;
            }
            if(opcion2 == 3)
            {
                valor = grados*1.8;
                resultado = valor.toFixed(2);
            }
            input =document.getElementById("salida").value = resultado;
            input.value = resultado;
            break;
        }
        case (opcion1 == 3):
        {
            if(opcion2 == 0)
            {
                valor = (grados-491.67)*1.8;
                resultado = valor.toFixed(2);
            }
            if(opcion2 == 1)
            {
                valor = grados - 459.67;
                resultado = valor.toFixed(2);
            }
            if(opcion2 == 2)
            {
                valor = grados *1.8;
                resultado = valor.toFixed(2);
            }
            if(opcion2 == 3)
            {
                resultado = grados;
            }
            input = document.getElementById("salida").value = resultado;
            input.value = resultado;
            break;
        }
        default:
        {
            resultado = "No se pudo realizar la conversion";
            break;
        }
    }
}


window.addEventListener('load', ()=>
{

    const display = document.querySelector('.display');
    const KeypadButtons = document.getElementsByClassName('keypadButtons');

    const keypadButtonsArray = Array.from(KeypadButtons);

    keypadButtonsArray.forEach((button)=>{
        button.addEventListener('click', (e)=>
        {
            calculadora(button, display);
        })
    })
})

function calculadora(button, display)
{
    switch(button.innerHTML)
    {
        case 'C':
        {
            borrar(display);
            break;
        }
        case '=':
        {
            calcular(display);
            break;
        }
        default:
        {
            actualizar(display, button);
            break;
        }
    }
}

function calcular(display)
{
    display.innerHTML = eval(display.innerHTML); 
}
function  actualizar(display, button)
{
    if(display.innerHTML == 0)
    {
        display.innerHTML = "";
    }
    display.innerHTML += button.innerHTML;
}
function borrar(display)
{
    display.innerHTML = 0;
}

function rojoFcn() {
    const encabezados = document.querySelectorAll("table .color__fuente");
    for (let i = 0;i < encabezados.length; i++) {
        encabezados[i].style.color = "red";
    }
}

function verdeFcn() {
    const encabezados = document.querySelectorAll("table .color__fuente");
    for (let i = 0;i < encabezados.length; i++) {
        encabezados[i].style.color = "green";
    }
}

function azulFcn() {
    const encabezados = document.querySelectorAll("table .color__fuente");
    for (let i = 0;i < encabezados.length; i++) {
        encabezados[i].style.color = "blue";
    }
}

function blancoFcn() {
    const encabezados = document.querySelectorAll("table .color__fuente");
    for (let i = 0;i < encabezados.length; i++) {
        encabezados[i].style.color = "white";
    }
}


function negroFcn() {
    const encabezados = document.querySelectorAll("table .color__fuente");
    for (let i = 0;i < encabezados.length; i++) {
        encabezados[i].style.color = "black";
    }
}


function moradoFcn() {
    const encabezados = document.querySelectorAll("table .color__fuente");
    for (let i = 0;i < encabezados.length; i++) {
        encabezados[i].style.color = "purple";
    }
}

function encabezado()
{
    var fuentes = document.getElementById("fuentes").value;
    fuentes = parseInt(fuentes);
    const encabezados = document.querySelectorAll(".customers .color__fuente");
    switch(fuentes)
    {
        case (0):
        {
            for(let i = 0; i<encabezados.length;i++)
            {
                encabezados[i].style.fontFamily = "Times New Roman";
            }
            break;
        }
        case (1):
        {
            for(let i=0;i<encabezao0s.length;i++)
            {
                encabezados[i].style.fontFamily = "Arial";
            }
            break;
        }
        case (2):
        {
            for(let i=0;i<encabezados.length;i++)
            {
                encabezados[i].style.fontFamily = "Helvetica";
            }
            break;
        }
        case (3):
        {
            for(let i=0;i<encabezados.length;i++)
            {
                encabezados[i].style.fontFamily = "Verdana";
            }
            break;
        }
        case (4):
        {
            for(let i = 0; i<encabezados.length;i++)
            {
                encabezados[i].style.fontFamily = "Cambria";
            }
            break;
        }

        case (5):
        {
            for(let i = 0; i<encabezados.length;i++)
            {
                encabezados[i].style.fontFamily = "Arial Black";
            }
            break;
        }
    }
}

function tamanio()
{
    var tamanio = document.getElementById("tamanio").value;
    tamanio = parseInt(tamanio);
    const tamanioFuente = document.querySelectorAll(".customers .color__fuente");
    for (let i = 0; i < tamanioFuente.length; i++) {
        tamanioFuente[i].style.fontSize = tamanio + "px";
    }
}

function formatosFnc()
{
    var formato = document.getElementById("formatos").value;
    formato= parseFloat(formato);
    const formatoFuente = document.querySelectorAll(".customers .color__fuente");
    const formatoTabla = document.querySelectorAll(".customers td ");
    const formatoTabla2 = document.querySelectorAll(".customers th");
    const formatoTabla3 = document.querySelectorAll(".customers tr:nth-child(even)");
    const formatoOriginalFuente = document.querySelectorAll(".customers .color__fuente");
    const formatoOriginalTabla = document.querySelectorAll(".customers td ");
    const formatoOriginalTabla2 = document.querySelectorAll(".customers th");
    const formatoOriginalTabla3 = document.querySelectorAll(".customers tr:nth-child(even)");

    switch(formato)
    {
        case(0):
        {
            for(let i = 0; i<formatoFuente.length;i++)
            {
                formatoFuente[i].style.fontStyle = "normal";
                formatoFuente[i].style.fontWeight = "normal";
                formatoFuente[i].style.textDecoration = "none";
            }
            break;
        }
        case(1):
        {
            for(let i = 0;i<formatoTabla.length;i++)
            {
                formatoTabla[i].style.cssText = "border: 1px solid #ddd;padding: 8px; background-color: rgb(218, 70, 215);color:white;";
            }
            break;
        }
        case(2):
        {
            for(let i = 0;i<formatoTabla2.length;i++)
            {
                formatoTabla2[i].style.cssText =
                    "padding-top: 12px;padding-bottom: 12px;text-align: left;background-color:purple;color: white;";
            }
            break;
        }
        case (3):
        {
            for(let i = 0;i<formatoTabla3.length;i++)
            {
                formatoTabla3[i].style.cssText =
                    "padding-top: 18px;padding-bottom: 18px;text-align: center;background-color: black;color: white;";
            }
            break;
        }
        case(4): {
            for (let i = 0; i < formatoOriginalFuente.length; i++) {
                formatoOriginalFuente[i].style.fontStyle = "normal";
                formatoOriginalFuente[i].style.fontWeight = "normal";
                formatoOriginalFuente[i].style.textDecoration = "none";
                formatoOriginalFuente[i].style.backgroundColor = "darkcyan";
                formatoOriginalFuente[i].style.padding =  "10px";;
            }
            for (let i = 0; i < formatoOriginalTabla.length; i++) {
                formatoOriginalTabla[i].style.cssText = "border: 1px solid #ddd;padding: 8px;";
            }
            for (let i = 0; i < formatoOriginalTabla2.length; i++) {
                formatoOriginalTabla2[i].style.cssText =
                    "padding-top: 12px;padding-bottom: 12px;text-align: left;background-color: #4CAF50;color: white;";
            }
            for (let i = 0; i < formatoOriginalTabla3.length; i++) {
                formatoOriginalTabla3[i].style.cssText =
                    "padding-top: 18px;padding-bottom: 18px;text-align: left;background-color: #ddd;color: black;";
            }
        }
    }
}

function añadirFila()
{
    var table = document.getElementById("customers");
    var row = table.insertRow();
    var nombre = prompt("Ingrese el nombre de la compañia");
    while(nombre == null || nombre == "")
    {
        alert("Ingrese un nombre");
        nombre = prompt("Ingrese el nombre de la compañia");
    }
    var contacto = prompt("Ingrese el nombre del contacto");
    while(contacto == null || contacto == "")
    {
        alert("Ingrese un nombre");
        contacto = prompt("Ingrese el nombre del contacto");
    }
    var country = prompt("Ingrese el pais");
    while(country == null || country == "")
    {
        alert("Ingrese un nombre");
        country = prompt("Ingrese el pais");
    }

    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.innerHTML = nombre;
    cell2.innerHTML = contacto;
    cell3.innerHTML = country;


}