var signo = prompt("¿ Cual es tu signo?");

switch (signo) {
  case "acuario":
    console.log(
      "Cuando deba dar una opinión de alguna persona, trate de censurar menos y no juzgar a los demás sin conocerlos. Abandone esa posición autoritaria que tiene."
    );
    break;
  case "pisis":
    console.log(
      "Intente pensar en usted. Destínese tiempo para poder terminar esa carrera que hace tiempo comenzó y por diversas situaciones no puedo finalizarla."
    );
    break;
  case "cancer":
    console.log(
      "Lo más recomendable para esta jornada cuando intente comunicarse con alguien, será que busque un diálogo conciliador sin confrontar con la gente que lo rodea."
    );
    break;
  case "leo":
    console.log(
      "Sería bueno que aprenda y cambie la manera en que enfrenta la vida a diario. Comience a disfrutar de lo que tiene y no se haga tanto problema."
    );
    break;
  case "virgo":
    console.log(
      "Haga lo posible para desprenderse de aquello que le hace mal a su vida. Elija nuevos rumbos y vivirá una etapa de renovación interna muy enriquecedora.Horóscopo de Virgo completo"
    );
    break;
  case "libra":
    console.log(
      "Intente conservar una sola dirección y ponga toda su energía en lo que realmente quiere. De esta forma, podrá alcanzar lo que desea con rapidez."
    );
    break;
  case "escorpion":
    console.log(
      "Seguramente en esta jornada, se le presentará una situación donde deberá buscar una solución inmediata a ese conflicto. Trate de no involucrarse."
    );
    break;
  case "sagitario":
    console.log(
      "Comprenda que utilizar pensamientos claros y desapegados le permitirá resolver rápidamente todos los problemas cotidianos que está teniendo hace días."
    );
    break;
  case "geminis":
  case "géminis":
    console.log(
      "Relájese, ya que será una jornada donde su espontaneidad será bien recibida. No deje pasar el tiempo y exprese sus emociones en el momento oportuno."
    );
    break;

  default:
      console.log('No es un signo zodiacal valido!')
    break;
}

if (signo === "acuario") {
}
if (signo === "pisis") {
  console.log(
    "Intente pensar en usted. Destínese tiempo para poder terminar esa carrera que hace tiempo comenzó y por diversas situaciones no puedo finalizarla."
  );
}
if (signo === "cancer") {
  console.log(
    "Lo más recomendable para esta jornada cuando intente comunicarse con alguien, será que busque un diálogo conciliador sin confrontar con la gente que lo rodea."
  );
}
