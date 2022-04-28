let posicionDeLlegada: number = Number(prompt("Ingresar posicion de llegada"));

if (posicionDeLlegada === 1) {
  console.log("Entregar medalla de Oro");
} else {
  if (posicionDeLlegada === 2) {
    console.log("Entregar medalla de Plata");
  } else {
    if (posicionDeLlegada === 3) {
      console.log("Entregar medalla de Bronce");
    } else {
      console.log("Se le entrega certificado de participación.");
    }
  }
}
