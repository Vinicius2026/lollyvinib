document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.auth-tab');
    const formPanels = document.querySelectorAll('.form-panel');

    // Função para mostrar o painel correto e definir aba ativa
    function showPanel(tabData) {
        formPanels.forEach(panel => {
            if (panel.id === `${tabData}-panel`) {
                panel.style.display = 'flex'; // Usar flex para manter alinhamento central
            } else {
                panel.style.display = 'none';
            }
        });

        tabs.forEach(tab => {
            if (tab.dataset.tab === tabData) {
                tab.classList.add('active-tab');
            } else {
                tab.classList.remove('active-tab');
            }
        });
    }

    // Adicionar event listeners para as abas
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabData = tab.dataset.tab;
            showPanel(tabData);
        });
    });

    // Mostrar painel de cadastro por padrão ao carregar a página
    // (O HTML já tem a aba e o painel de signup como ativos/visíveis inicialmente,
    // mas podemos garantir com JS também se quisermos generalizar para qualquer aba inicial)
    // const initialActiveTab = document.querySelector('.auth-tab.active-tab');
    // if (initialActiveTab) {
    //     showPanel(initialActiveTab.dataset.tab);
    // }
}); 