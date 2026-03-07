// Espera a página carregar completamente antes de rodar o script
document.addEventListener('DOMContentLoaded', () => {
    
    // Pega a barra de busca pelo ID
    const searchInput = document.getElementById('searchInput');
    
    // Pega todos os cartões de download da página
    const cards = document.querySelectorAll('.card');

    // Escuta cada vez que o usuário digita algo na barra
    searchInput.addEventListener('input', (evento) => {
        // Pega o texto digitado e transforma tudo em minúsculo para facilitar a comparação
        const termoBusca = evento.target.value.toLowerCase();

        // Passa por cada cartão de programa na tela
        cards.forEach(card => {
            // Pega o título e a descrição do programa
            const titulo = card.querySelector('.card-title').textContent.toLowerCase();
            const descricao = card.querySelector('.card-desc').textContent.toLowerCase();

            // Verifica se o texto digitado existe no título ou na descrição
            if (titulo.includes(termoBusca) || descricao.includes(termoBusca)) {
                // Se encontrar, mostra o cartão (mantém o padrão do CSS)
                card.style.display = '';
            } else {
                // Se não encontrar, esconde o cartão
                card.style.display = 'none';
            }
        });
    });
});
