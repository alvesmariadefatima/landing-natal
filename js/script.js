function mostrarMensagem() {
    var nome = document.getElementById("floatingInputValue").value;

    if (nome.trim() === "") {
        alert("⚠️ Por favor, preencha seu nome antes de clicar no botão.");
    } else {
        alert("Feliz Natal para você, " + nome + "! ❄️🎅🏻");
    }
}
