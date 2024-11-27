// Dados para o gráfico de pessoas que gostam de jogos globalmente
const dataGlobal = [
    {
        x: ['Ação', 'Aventura', 'Estratégia'],
        y: [40, 35, 25], // Percentagens globais
        type: 'bar',
        marker: {
            color: ['#ff0000', '#d4af37', '#111111'] // Cores em vermelho, dourado e preto
        }
    }
];

const layoutGlobal = {
    title: {
        text: 'Preferências Globais de Jogos (2024)',
        font: { family: 'Russo One', size: 24 }
    },
    xaxis: {
        title: 'Categorias de Jogos',
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
Plotly.newPlot('grafico', dataGlobal, layoutGlobal);

// Dados para o gráfico de pessoas que gostam de jogos no Colégio Morelli
const dataMorelli = [
    {
        x: ['Ação', 'Aventura', 'Estratégia'],
        y: [50, 30, 20], // Percentagens específicas do Colégio Morelli
        type: 'bar',
        marker: {
            color: ['#ff0000', '#d4af37', '#111111'] // Cores em vermelho, dourado e preto
        }
    }
];

const layoutMorelli = {
    title: {
        text: 'Preferências de Jogos no Colégio Morelli (2024)',
        font: { family: 'Russo One', size: 24 }
    },
    xaxis: {
        title: 'Categorias de Jogos',
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
// Dados para o gráfico de pessoas que gostam de jogos globalmente
const dataGlobal = [
    {
        x: ['Ação', 'Aventura', 'Estratégia'],
        y: [40, 35, 25], // Percentagens globais
        type: 'bar',
        marker: {
            color: ['#ff0000', '#d4af37', '#111111'] // Cores em vermelho, dourado e preto
        }
    }
];

const layoutGlobal = {
    title: {
        text: 'Preferências Globais de Jogos (2024)',
        font: { family: 'Russo One', size: 24 }
    },
    xaxis: {
        title: 'Categorias de Jogos',
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
Plotly.newPlot('grafico', dataGlobal, layoutGlobal);

// Dados para o gráfico de pessoas que gostam de jogos no Colégio Morelli
const dataMorelli = [
    {
        x: ['Ação', 'Aventura', 'Estratégia'],
        y: [50, 30, 20], // Percentagens específicas do Colégio Morelli
        type: 'bar',
        marker: {
            color: ['#ff0000', '#d4af37', '#111111'] // Cores em vermelho, dourado e preto
        }
    }
];

const layoutMorelli = {
    title: {
        text: 'Preferências de Jogos no Colégio Morelli (2024)',
        font: { family: 'Russo One', size: 24 }
    },
    xaxis: {
        title: 'Categorias de Jogos',
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

