
function validar() {
  var usuario = document.getElementById("nombre").value;
  var clave = document.getElementById("clave").value;

  if (usuario == "geronimo" && clave == "PASSWORD") {
    window.location.href = "./index3.html";
  } else {
    alert("USUARIO O CLAVE INCORRECTA :(");
  }
}

function limpiar() {
  document.getElementById("nombre").value = "";
  document.getElementById("clave").value = "";
}

function ENVIAR() {
  document.getElementById("nombre y apellido").value = "";
  document.getElementById("DIRECCION").value = "";
  document.getElementById("dni").value = "";
  document.getElementById("fecha de nacimiento").value = "";
  document.getElementById("metodo de pago").value="";
  document.getElementById("resultado").textContent = "datos de entrega enviados";
}

function precio() {
  var v1 = document.getElementById("marca").value;
  var v2 = document.getElementById("modelo").value;

  var prices = {
    "1-1": 50000,
    "1-2": 40000,
    "1-3": 60000,
    "2-1": 12000,
    "2-2": 10000,
    "2-3": 11000,
    "3-1": 12000,
    "3-2": 1000,
    "3-3": 11100
  };

  document.getElementById("valor1").textContent = "EL PRECIO ES " + prices[`${v1}-${v2}`];
}

function calcular() {
  var valor1 = parseFloat(document.getElementById("n1").value);
  var valor2 = parseFloat(document.getElementById("n2").value);
  var op = document.getElementById("opera").value;
  var precio = parseFloat(document.getElementById("valor1").textContent.replace("EL PRECIO ES ", ""));

  var resultado;
  switch (op) {
    case "1":
      resultado = (precio * valor2) * 0.80;
      break;
    case "2":
      resultado = (precio * valor2) * 0.85;
      break;
    case "3":
      resultado = (precio * valor2) * 0.95;
      break;
    case "4":
      resultado = precio * valor2;
      break;
    default:
      resultado = "Operación no válida";
  }

  document.getElementById("resultado2").textContent = "EL RESULTADO ES: " + resultado;
}