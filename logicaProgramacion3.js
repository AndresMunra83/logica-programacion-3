document
  .getElementById("calcularFactorial")
  .addEventListener("click", function () {
    let numero;
    let boolean = false;

    while (!boolean) {
      numero = prompt(
        "Ingrese un número entero no negativo para calcular su factorial:"
      );
      if (numero === null) {
        return;
      }

      numero = parseInt(numero);

      if (!isNaN(numero) && numero >= 0) {
        boolean = true;
      } else {
        alert("Por favor, ingrese un valor numerico entero no negativo");
      }
    }

    const factorial = calculoFactorial(numero);
    document.getElementById(
      "result"
    ).textContent = `El factorial de ${numero} es ${factorial}.`;
    alert(`el factorial de ${numero} es ${factorial}`);
  });

function calculoFactorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * calculoFactorial(n - 1);
}
