let form = document.getElementById("formRecarga");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    // Pegando os inputs e selects
    let selects = document.querySelectorAll("select");
    let inputs = document.querySelectorAll("input");

    let tipoUsuario = selects[0].value;
    let horario = selects[1].value;

    let tempo = Number(inputs[0].value);
    let potencia = Number(inputs[1].value);

    // Validação
    if (tempo <= 0 || potencia <= 0) {
        alert("Preencha os valores corretamente!");
        return;
    }

    // Energia
    let energia = (potencia * tempo) / 60;

    // Tarifa
    let valor = 1.0;

    if (tipoUsuario === "Premium") {
        valor = 0.8;
    }

    if (horario === "Pico") {
        valor += 0.3;
    }

    let valorTotal = energia * valor;

    // Pegando os <p> de resultado
    let resultados = document.querySelectorAll(".resultado p");

    resultados[0].innerHTML = `<strong>Energia Consumida:</strong> ${energia.toFixed(2)} kWh`;
    resultados[1].innerHTML = `<strong>Tempo Total:</strong> ${tempo} min`;
    resultados[2].innerHTML = `<strong>Valor Total:</strong> R$ ${valorTotal.toFixed(2)}`;

});