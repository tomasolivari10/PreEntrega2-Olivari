//CODIGO PRE ENTREGA NUMERO 1 

alert("Bienvenido a BetsTennis.com")
alert("A continuacion te solicitaremos ciertos datos para validar el ingreso.")

function betsTennis() {

    do {
        let usuario = prompt("ingresa tu nombre completo").trim()
        if (usuario === "") {
            alert("No ingresaste ningun dato, volve a intentarlo")
            usuario = prompt("Para continuar deberas ingresar tu nombre y apellido");
        } 

        let edad = parseInt(prompt("Ingresa tu edad"))
        let pais = prompt("Ingresa tu pais de residencia").trim()

        if (edad < 18 && pais !== "argentina") {
            alert("Este sitio no es para ti.")
            break;
        }
        else if ((edad >= 18 && pais !== "argentina") || (edad < 18 && pais === "argentina")) {
            alert("No cumples con todos los requisitos necesarios para ingresar.")

        }
        else if (edad >= 18 && pais === "argentina") {
            alert("Muchas gracias, ya puedes disfrutar de nuestro sitio de apuestas.")
        }

    } while (confirm("Queres agregar o reemplazar algun dato?"));
}

betsTennis()

//CODIGO PRE ENTREGA NUMERO 2 

alert("Ya estas dentro del sitio, a continuacion podras elegir y apostar libremente en nuestros eventos en vivo.")


let apuestasDisponibles = [
{ jugador1: "Alcaraz", ganancia1: 1.40, jugador2: "Rublev", ganancia2: 3.40 },
{ jugador1: "Djokovic", ganancia1: 1.20, jugador2: "Tsitsipas", ganancia2: 5 },
{ jugador1: "Medvedev", ganancia1: 1.50, jugador2: "Sinner", ganancia2: 2 },
{ jugador1: "Kyrgios", ganancia1: 1.50, jugador2: "Rune", ganancia2: 1.80},
{ jugador1: "Shelton", ganancia1: 1.30, jugador2: "Cerundolo", ganancia2: 4},
{ jugador1: "De Minaur", ganancia1: 2, jugador2: "Ruud", ganancia2: 3},
{ jugador1: "Kachanov", ganancia1: 2, jugador2: "Fritz", ganancia2: 1.70},
{ jugador1: "Berretini", ganancia1: 3, jugador2: "Aliassime", ganancia2: 5}
]


function eventoDisponible() {
  alert(`Roland Garros es el único evento disponible para realizar apuestas el día de hoy.

  Hay 8 partidos correspondientes a los octavos de final disponibles para apostar: `);
  
  console.log(
  `0. Alcaraz vs Rublev
  1. Djokovic vs Tsitsipas
  2. Medvedev vs Sinner
  3. Kyrgios vs Rune
  4. Shelton vs Cerundolo
  5. De Minaur vs Ruud
  6. Kachanov vs Fritz
  7. Berretini vs Aliassime
  
  A continuacion podras filtrar o elegir las opciones que te interesen y asi poder visualizar sus respectivas ganancias,
  deberas hacerlo mediante los indices numericos a la izquierda de cada juego.`)

  const eleccionUsuario = prompt("Ingresa los índices de los partidos que deseas filtrar (separados por comas)");
  const indicesSeleccionados = eleccionUsuario.split(',').map(index => parseInt(index));

  const apuestasObtenidas = apuestasDisponibles.filter((apuesta, index) => indicesSeleccionados.includes(index));

  if (apuestasObtenidas.length === 0) {
    console.log("No se encontraron partidos para los índices ingresados.");
  } else {
    console.table(apuestasObtenidas);
  }
}

eventoDisponible();


function calculoGananciasEsperadas (){
  let cantidadApostada = parseFloat(prompt("Ingresa cuanto deseas apostar"))
  let gananciasEstimadas = [];

    //bucle para iterar el array original y crear dos copias multiplicando lo que ingresa el usuario por las ganancias por jugador.

  for (let i = 0; i < apuestasDisponibles.length; i++) {
    const resultado1 = apuestasDisponibles[i].ganancia1;
    const resultado2 = apuestasDisponibles[i].ganancia2;
    const gananciaEstimada1 = resultado1 * cantidadApostada;
    const gananciaEstimada2 = resultado2 * cantidadApostada;

    gananciasEstimadas.push({
      ganancia1: gananciaEstimada1,
      ganancia2: gananciaEstimada2
    });
  }

  console.log("Ganancias estimadas para cada apuesta:");
  gananciasEstimadas.forEach(apuesta => {
    console.log(`Ganancia 1: ${apuesta.ganancia1}`);
    console.log(`Ganancia 2: ${apuesta.ganancia2}`);
  });
}


calculoGananciasEsperadas()
