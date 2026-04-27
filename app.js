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

    // Tarifa base
    let tarifa = 1.0;

    // Adicional de pico
    let adicional = 0;
    if (horario === "Pico (Taxa de 30%)") {
    adicional = 0.3;
    }

    // Desconto
    let desconto = 0;
    if (tipoUsuario === "Premium (20% de Desconto)") {
    desconto = 0.2;
    }

    // Valor base
    let valorBase = energia * tarifa;

    // Valor adicional (pico)
    let valorTarifa = energia * adicional;

    // Soma tudo
    let valorComTarifa = valorBase + valorTarifa;

    // Desconto
    let valorDesconto = valorComTarifa * desconto;

    // Valor final
    let valorTotal = valorComTarifa - valorDesconto;
    

   let resultados = document.querySelectorAll(".resultado p");

resultados[0].innerHTML = `<strong>Energia Consumida:</strong> ${energia.toFixed(2)} kWh`;
resultados[1].innerHTML = `<strong>Tempo Total:</strong> ${tempo} min`;
resultados[2].innerHTML = `<strong>Tarifa Extra:</strong> R$ ${valorTarifa.toFixed(2)}`;
resultados[3].innerHTML = `<strong>Valor Total:</strong> R$ ${valorTotal.toFixed(2)}`;
resultados[4].innerHTML = `<strong>Desconto:</strong> R$ ${valorDesconto.toFixed(2)}`;
});