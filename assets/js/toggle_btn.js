// Esconde e mostra o conteúdo de várias divs
document.querySelectorAll(".toggle-btn").forEach(btn => {
    btn.addEventListener('click', () => {
        const divId = btn.dataset.target;
        const div = document.getElementById(divId);

        div.classList.toggle('hidden');

        if(div.classList.contains('hidden')) {
            btn.textContent = 'Esconder';
            div.style.display = "none"
        } else {
            btn.textContent = "Mostrar";
            div.style.display = "block";
        }
    });
});

