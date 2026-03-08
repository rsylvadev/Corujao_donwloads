document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const cards = document.querySelectorAll('.card');

    searchInput.addEventListener('input', (evento) => {
        const termoBusca = evento.target.value.toLowerCase();

        cards.forEach(card => {
            const titulo = card.querySelector('.card-title').textContent.toLowerCase();
            const descricao = card.querySelector('.card-desc').textContent.toLowerCase();

            if (titulo.includes(termoBusca) || descricao.includes(termoBusca)) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }
        });
    });
});
