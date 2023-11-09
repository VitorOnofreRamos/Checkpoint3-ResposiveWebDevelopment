document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('formulario').addEventListener('submit', (event) => {
        event.preventDefault();

        const peso = Number(document.querySelector("#kg").value);
    
        const altura = Number(document.querySelector("#m").value);
    
        const imc = peso / (altura ^ 2)

        document.getElementById('imc').textContent = 'Seu IMC é: ' + imc.toFixed(2);
    })
})