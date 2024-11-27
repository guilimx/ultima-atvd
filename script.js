// Dados para o gráfico de Jogos Globais
const dataGlobal = [
    {
        x: ['RPG', 'Ação', 'Estratégia', 'Aventura', 'Esportes'],
        y: [40, 25, 15, 12, 8], // Percentagens de jogos mais jogados globalmente em 2024
        type: 'bar',
        marker: {
            color: ['#ff0000', '#d43f00', '#af5500', '#d4af37', '#ffd700'] // Vermelho, dourado e variações
        }
    }
];

const layoutGlobal = {
    title: {
        text: 'Distribuição Global de Jogos por Categoria (2024)',
        font: { family: 'Russo One', size: 24, color: '#d4af37' }
    },
    xaxis: {
        title: 'Categoria de Jogo',
        titlefont: { family: 'Roboto', size: 18, color: '#ffd700' },
        tickfont: { family: 'Roboto', size: 14, color: '#ffffff' }
    },
    yaxis: {
        title: 'Percentagem (%)',
        titlefont: { family: 'Roboto', size: 18, color: '#ffd700' },
        tickfont: { family: 'Roboto', size: 14, color: '#ffffff' }
    },
    plot_bgcolor: '#1c1c1c',
    paper_bgcolor: '#0d0d0d',
    font: { color: '#d4af37' }
};

// Exibe o gráfico na seção com id 'grafico'
Plotly.newPlot('grafico', dataGlobal, layoutGlobal);

// Dados para o gráfico de Jogos no Colégio Morelli
const dataMorelli = [
    {
        x: ['RPG', 'Estratégia', 'Ação', 'Aventura', 'Jogos Educativos'],
        y: [35, 30, 20, 10, 5], // Percentagens de jogos mais jogados no Colégio Morelli
        type: 'bar',
        marker: {
            color: ['#ff0000', '#d43f00', '#af5500', '#d4af37', '#ffd700'] // Vermelho, dourado e variações
        }
    }
];

const layoutMorelli = {
    title: {
        text: 'Distribuição de Jogos no Colégio Morelli (2024)',
        font: { family: 'Russo One', size: 24, color: '#d4af37' }
    },
    xaxis: {
        title: 'Categoria de Jogo',
        titlefont: { family: 'Roboto', size: 18, color: '#ffd700' },
        tickfont: { family: 'Roboto', size: 14, color: '#ffffff' }
    },
    yaxis: {
        title: 'Percentagem (%)',
        titlefont: { family: 'Roboto', size: 18, color: '#ffd700' },
        tickfont: { family: 'Roboto', size: 14, color: '#ffffff' }
    },
    plot_bgcolor: '#1c1c1c',
    paper_bgcolor: '#0d0d0d',
    font: { color: '#d4af37' }
};

// Exibe o gráfico na seção com id 'grafico-morelli'
Plotly.newPlot('grafico-morelli', dataMorelli, layoutMorelli);
