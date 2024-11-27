// Dados para o gráfico de pessoas que gostam de jogos (global)
const dataGlobal = [
    {
        x: ['Ação', 'Aventura', 'Estratégia'],
        y: [40, 35, 25],
        type: 'bar',
        marker: {
            color: ['#ff0000', '#d4af37', '#111111'] // Vermelho, dourado, preto
        }
    }
];

const layoutGlobal = {
    title: 'Preferências Globais de Jogos',
    xaxis: { title: 'Categorias' },
    yaxis: { title: 'Percentual (%)' },
    plot_bgcolor: '#f8f9fa',
    paper_bgcolor: '#f8f9fa'
};

Plotly.newPlot('grafico', dataGlobal, layoutGlobal);

// Dados para o gráfico de pessoas que gostam de jogos (Colégio Morelli)
const dataMorelli = [
    {
        x: ['Ação', 'Aventura', 'Estratégia'],
        y: [50, 30, 20],
        type: 'bar',
        marker: {
            color: ['#ff0000', '#d4af37', '#111111'] // Vermelho, dourado, preto
        }
    }
];

const layoutMorelli = {
    title: 'Preferências de Jogos no Colégio Morelli',
    xaxis: { title: 'Categorias
