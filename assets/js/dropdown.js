document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const divId = btn.dataset.target;
        const div = document.getElementById(divId);

        div.classList.toggle('hidden');

        if (div.classList.contains('hidden')) {
            btn.textContent = "Mostrar";
        } else {
            btn.textContent = "Esconder";
        }
    });
});