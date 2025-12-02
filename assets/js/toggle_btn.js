// Esconde e mostra o conteúdo de várias divs
document.querySelectorAll(".toggle-btn").forEach(btn => {
    btn.addEventListener('click', () => {
        const divId = btn.dataset.target;
        const div = document.getElementById(divId);
       // const button = document.classList('mostrarEsconder');

        div.classList.toggle('hidden');

        if (div.classList.contains('hidden')) {
            btn.textContent = 'Mostrar';
            // div.style.color = "red"
            // div.style.display = "none";
            //button.style.backgroundColor = "blue"

            //} //else if (div.classList.contains('!hidden')){
            //  console.log("eeesttt");

        } else {
            btn.textContent = "Esconder";
            // div.style.display = "block";
            // div.style.background = "btn-danger"
             //button.style.backgroundColor = "red"
        }
    });
});

