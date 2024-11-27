// Dados para o gráfico de Estatísticas Globais de Jogos
const data = [
    {
        x: ['Ação', 'Aventura', 'RPG', 'Esportes', 'Simulação'], // Categorias de jogos
        y: [40, 25, 15, 10, 10], // Percentagens dos jogos mais populares globalmente
        type: 'bar',
        marker: {
            color: ['#ff4500', '#ff6a33', '#ff8f66', '#ffb399', '#ffd6cc']
        }
    }
];

const layout = {
    title: {
        text: 'Distribuição Global de Jogos por Gênero (2024)',
        font: { family: 'Russo One', size: 24 }
    },
    xaxis: {
        title: 'Gênero de Jogo',
        titlefont: { family: 'Roboto', size: 18 },
        tickfont: { family: 'Roboto', size: 14 }
    },
    yaxis: {
        title: 'Percentagem (%)',
        titlefont: { family: 'Roboto', size: 18 },
        tickfont: { family: 'Roboto', size: 14 }
    },
    plot_bgcolor: '#f8f9fa',
    paper_bgcolor: '#f8f9fa'
};

// Exibe o gráfico na seção com id 'grafico'
Plotly.newPlot('grafico', data, layout);

// Dados para o gráfico de Estatísticas de Jogos no Colégio Morelli
const dataMorelli = [
    {
        x: ['Ação', 'Aventura', 'RPG', 'Esportes', 'Jogos Educativos'], // Categorias de jogos no Colégio Morelli
        y: [30, 25, 20, 10, 15], // Percentagens de jogos populares no Colégio Morelli em 2024
        type: 'bar',
        marker: {
            color: ['#ff4500', '#ff6a33', '#ff8f66', '#ffb399', '#ffd6cc']
        }
    }
];

const layoutMorelli = {
    title: {
        text: 'Distribuição de Jogos no Colégio Morelli (2024)',
        font: { family: 'Russo One', size: 24 }
    },
    xaxis: {
        title: 'Gênero de Jogo',
        titlefont: { family: 'Roboto', size: 18 },
        tickfont: { family: 'Roboto', size: 14 }
    },
    yaxis: {
        title: 'Percentagem (%)',
        titlefont: { family: 'Roboto', size: 18 },
        tickfont: { family: 'Roboto', size: 14 }
    },
    plot_bgcolor: '#f8f9fa',
    paper_bgcolor: '#f8f9fa'
};

// Exibe o gráfico na seção com id 'grafico-morelli'
Plotly.newPlot('grafico-morelli', dataMorelli, layoutMorelli);
