

var um2002dados = [2533, 1559, 1356,1198];
var um2006dados = [2735,1549,1496,1482];
var um2018dados = [5690,3024,1832,1126];
var um2020dados = [66057,27040,18464,18151];

var labelGrafico1 = ['OUTROS', 'AGRICULTOR', 'SERVIDOR', 'EMPRESARIO'];


var ctx = document.getElementById("chart-bars").getContext("2d");
var dataGrafico1 = um2020dados;


var myChart1 = new Chart(ctx, {
    type: "bar",
    data: {
    labels: labelGrafico1,
    datasets: [{
        label: "Ocupações",
        tension: 0.4,
        borderWidth: 0,
        borderRadius: 4,
        borderSkipped: false,
        backgroundColor: "rgba(255, 255, 255, .8)",
        data: dataGrafico1,
        maxBarThickness: 6
    }, ],
    },
    options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
        display: false,
        }
    },
    interaction: {
        intersect: false,
        mode: 'index',
    },
    scales: {
        y: {
        grid: {
            drawBorder: false,
            display: true,
            drawOnChartArea: true,
            drawTicks: false,
            borderDash: [5, 5],
            color: 'rgba(255, 255, 255, .2)'
        },
        ticks: {
            suggestedMin: 0,
            suggestedMax: 500,
            beginAtZero: true,
            padding: 10,
            font: {
            size: 14,
            weight: 300,
            family: "Roboto",
            style: 'normal',
            lineHeight: 2
            },
            color: "#fff"
        },
        },
        x: {
        grid: {
            drawBorder: false,
            display: true,
            drawOnChartArea: true,
            drawTicks: false,
            borderDash: [5, 5],
            color: 'rgba(255, 255, 255, .2)'
        },
        ticks: {
            display: true,
            color: '#f8f9fa',
            padding: 10,
            font: {
            size: 14,
            weight: 300,
            family: "Roboto",
            style: 'normal',
            lineHeight: 2
            },
        }
        },
    },
    },
});

function grafico1(){
    var anoGrafico1 = document.forms[0]['grafico1Form'].value;
    
    myChart1.destroy();

    if(anoGrafico1=='2020'){
        dataGrafico1 = um2020dados;
        labelGrafico1 = ['OUTROS', 'AGRICULTOR', 'SERVIDOR', 'EMPRESARIO'];
    }
    else if(anoGrafico1=='2018'){
        dataGrafico1 = um2018dados;
        labelGrafico1 = ['OUTROS','EMPRESARIO','ADVOGADO','DEPUTADO'];
    }
    else if(anoGrafico1=='2006'){
        dataGrafico1 = um2006dados;
        labelGrafico1 = ['OUTROS','ADVOGADO','COMERCIANTE','EMPRESARIO'];
    }
    else if(anoGrafico1=='2002'){
        dataGrafico1 = um2002dados;
        labelGrafico1 = ['NAO INFORMADA','ADVOGADO','COMERCIANTE','OUTROS'];
    }
    
    myChart1 = new Chart(ctx, {
        type: "bar",
        data: {
        labels: labelGrafico1,
        datasets: [{
            label: "Ocupações",
            tension: 0.4,
            borderWidth: 0,
            borderRadius: 4,
            borderSkipped: false,
            backgroundColor: "rgba(255, 255, 255, .8)",
            data: dataGrafico1,
            maxBarThickness: 6
        }, ],
        },
        options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
            display: false,
            }
        },
        interaction: {
            intersect: false,
            mode: 'index',
        },
        scales: {
            y: {
            grid: {
                drawBorder: false,
                display: true,
                drawOnChartArea: true,
                drawTicks: false,
                borderDash: [5, 5],
                color: 'rgba(255, 255, 255, .2)'
            },
            ticks: {
                suggestedMin: 0,
                suggestedMax: 500,
                beginAtZero: true,
                padding: 10,
                font: {
                size: 14,
                weight: 300,
                family: "Roboto",
                style: 'normal',
                lineHeight: 2
                },
                color: "#fff"
            },
            },
            x: {
            grid: {
                drawBorder: false,
                display: true,
                drawOnChartArea: true,
                drawTicks: false,
                borderDash: [5, 5],
                color: 'rgba(255, 255, 255, .2)'
            },
            ticks: {
                display: true,
                color: '#f8f9fa',
                padding: 10,
                font: {
                size: 14,
                weight: 300,
                family: "Roboto",
                style: 'normal',
                lineHeight: 2
                },
            }
            },
        },
        },
    });
    
}

// grafico 2

var ctx2 = document.getElementById("chart-line").getContext("2d");

new Chart(ctx2, {
    type: "line",
    data: {
    labels: [1945, 1966, 1986,2006, 2020],
    datasets: [{
        label: "Porcentagem",
        tension: 0,
        borderWidth: 0,
        pointRadius: 5,
        pointBackgroundColor: "rgba(255, 255, 255, .8)",
        pointBorderColor: "transparent",
        borderColor: "rgba(255, 255, 255, .8)",
        borderColor: "rgba(255, 255, 255, .8)",
        borderWidth: 4,
        backgroundColor: "transparent",
        fill: true,
        data: [2.69,2.76,8.5,14.35,33.7],
        maxBarThickness: 6

    }],
    },
    options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
        display: false,
        }
    },
    interaction: {
        intersect: false,
        mode: 'index',
    },
    scales: {
        y: {
        grid: {
            drawBorder: false,
            display: true,
            drawOnChartArea: true,
            drawTicks: false,
            borderDash: [5, 5],
            color: 'rgba(255, 255, 255, .2)'
        },
        ticks: {
            display: true,
            color: '#f8f9fa',
            padding: 10,
            font: {
            size: 14,
            weight: 300,
            family: "Roboto",
            style: 'normal',
            lineHeight: 2
            },
        }
        },
        x: {
        grid: {
            drawBorder: false,
            display: false,
            drawOnChartArea: false,
            drawTicks: false,
            borderDash: [5, 5]
        },
        ticks: {
            display: true,
            color: '#f8f9fa',
            padding: 10,
            font: {
            size: 14,
            weight: 300,
            family: "Roboto",
            style: 'normal',
            lineHeight: 2
            },
        }
        },
    },
    },
});




var ctx3 = document.getElementById("chart-line-tasks").getContext("2d");

var myChart3 = new Chart(ctx3, {
    type: "line",
    data: {
    labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
        label: "Mobile apps",
        tension: 0,
        borderWidth: 0,
        pointRadius: 5,
        pointBackgroundColor: "rgba(255, 255, 255, .8)",
        pointBorderColor: "transparent",
        borderColor: "rgba(255, 255, 255, .8)",
        borderWidth: 4,
        backgroundColor: "transparent",
        fill: true,
        data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
        maxBarThickness: 6

    }],
    },
    options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
        display: false,
        }
    },
    interaction: {
        intersect: false,
        mode: 'index',
    },
    scales: {
        y: {
        grid: {
            drawBorder: false,
            display: true,
            drawOnChartArea: true,
            drawTicks: false,
            borderDash: [5, 5],
            color: 'rgba(255, 255, 255, .2)'
        },
        ticks: {
            display: true,
            padding: 10,
            color: '#f8f9fa',
            font: {
            size: 14,
            weight: 300,
            family: "Roboto",
            style: 'normal',
            lineHeight: 2
            },
        }
        },
        x: {
        grid: {
            drawBorder: false,
            display: false,
            drawOnChartArea: false,
            drawTicks: false,
            borderDash: [5, 5]
        },
        ticks: {
            display: true,
            color: '#f8f9fa',
            padding: 10,
            font: {
            size: 14,
            weight: 300,
            family: "Roboto",
            style: 'normal',
            lineHeight: 2
            },
        }
        },
    },
    },
});

function grafico3(){
    var anoGrafico3 = document.forms[2]['grafico3Form'].value;
    
    myChart3.destroy();

    myChart3 = new Chart(ctx3, {
        type: "line",
        data: {
        labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
            label: "Mobile apps",
            tension: 0,
            borderWidth: 0,
            pointRadius: 5,
            pointBackgroundColor: "rgba(255, 255, 255, .8)",
            pointBorderColor: "transparent",
            borderColor: "rgba(255, 255, 255, .8)",
            borderWidth: 4,
            backgroundColor: "transparent",
            fill: true,
            data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
            maxBarThickness: 6
    
        }],
        },
        options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
            display: false,
            }
        },
        interaction: {
            intersect: false,
            mode: 'index',
        },
        scales: {
            y: {
            grid: {
                drawBorder: false,
                display: true,
                drawOnChartArea: true,
                drawTicks: false,
                borderDash: [5, 5],
                color: 'rgba(255, 255, 255, .2)'
            },
            ticks: {
                display: true,
                padding: 10,
                color: '#f8f9fa',
                font: {
                size: 14,
                weight: 300,
                family: "Roboto",
                style: 'normal',
                lineHeight: 2
                },
            }
            },
            x: {
            grid: {
                drawBorder: false,
                display: false,
                drawOnChartArea: false,
                drawTicks: false,
                borderDash: [5, 5]
            },
            ticks: {
                display: true,
                color: '#f8f9fa',
                padding: 10,
                font: {
                size: 14,
                weight: 300,
                family: "Roboto",
                style: 'normal',
                lineHeight: 2
                },
            }
            },
        },
        },
    });

}

// GRAFICO 4 //
var result2008= [20366,626346];
var result2004 = [16051,330767];
var result2006 = [237,249,13127,5659];
var result2002 =  [238,339,12516,4799];
var labelGrafico4 = ['PREFEITO','VEREADOR'];


var dataGrafico4 = result2008;


var ctx4 = document.getElementById("grafico4").getContext("2d");
var myChart4 = new Chart(ctx4, {
    type: "bar",
    data: {
    labels: labelGrafico4,
    datasets: [{
        label: "Cargos",
        tension: 0,
        borderWidth: 0,
        pointRadius: 5,
        pointBackgroundColor: "rgba(255, 255, 255, .8)",
        pointBorderColor: "transparent",
        borderColor: "rgba(255, 255, 255, .8)",
        borderWidth: 4,
        backgroundColor: "transparent",
        fill: true,
        data: dataGrafico4,
        maxBarThickness: 6

    }],
    },
    options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
        display: false,
        position: 'top',
        }
    },
    interaction: {
        intersect: false,
        mode: 'index',
    },
    scales: {
        y: {
        grid: {
            drawBorder: false,
            display: true,
            drawOnChartArea: true,
            drawTicks: false,
            borderDash: [5, 5],
            color: 'rgba(255, 255, 255, .2)'
        },
        ticks: {
            display: true,
            padding: 10,
            color: '#f8f9fa',
            font: {
            size: 14,
            weight: 300,
            family: "Roboto",
            style: 'normal',
            lineHeight: 2
            },
        }
        },
        x: {
        grid: {
            drawBorder: false,
            display: false,
            drawOnChartArea: false,
            drawTicks: false,
            borderDash: [5, 5]
        },
        ticks: {
            display: true,
            color: '#f8f9fa',
            padding: 10,
            font: {
            size: 14,
            weight: 300,
            family: "Roboto",
            style: 'normal',
            lineHeight: 2
            },
        }
        },
    },
    },
});

function grafico4(){
    var anoGrafico4 = document.forms[2]['grafico4Form'].value;
    
    myChart4.destroy();
    if(anoGrafico4 == '2004' || anoGrafico4 == '2008' ){
        labelGrafico4 = ['PREFEITO','VEREADOR'];
        if(anoGrafico4=='2004'){
            dataGrafico4 = result2004;
        }
        else if(anoGrafico4=='2008'){
            dataGrafico4 = result2008;
        };
    }
    else{
        labelGrafico4 = ['GOVERNADOR','SENADOR','DEP FEDERAL', 'DEP ESTADUAL'];
        if(anoGrafico4=='2006'){
            dataGrafico4 = result2006;
        }
        else if(anoGrafico4=='2002'){
            dataGrafico4 = result2002;
        }
    }
    
    myChart4 = new Chart(ctx4, {
        type: "bar",
        data: {
        labels: labelGrafico4,
        datasets: [{
            label: "Cargos",
            tension: 0,
            borderWidth: 0,
            pointRadius: 5,
            pointBackgroundColor: "rgba(255, 255, 255, .8)",
            pointBorderColor: "transparent",
            borderColor: "rgba(255, 255, 255, .8)",
            borderWidth: 4,
            backgroundColor: "transparent",
            fill: true,
            data: dataGrafico4,
            maxBarThickness: 6

        }],
        },
        options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
            display: false,
            position: 'top',
            }
        },
        interaction: {
            intersect: false,
            mode: 'index',
        },
        scales: {
            y: {
            grid: {
                drawBorder: false,
                display: true,
                drawOnChartArea: true,
                drawTicks: false,
                borderDash: [5, 5],
                color: 'rgba(255, 255, 255, .2)'
            },
            ticks: {
                display: true,
                padding: 10,
                color: '#f8f9fa',
                font: {
                size: 14,
                weight: 300,
                family: "Roboto",
                style: 'normal',
                lineHeight: 2
                },
            }
            },
            x: {
            grid: {
                drawBorder: false,
                display: false,
                drawOnChartArea: false,
                drawTicks: false,
                borderDash: [5, 5]
            },
            ticks: {
                display: true,
                color: '#f8f9fa',
                padding: 10,
                font: {
                size: 14,
                weight: 300,
                family: "Roboto",
                style: 'normal',
                lineHeight: 2
                },
            }
            },
        },
        },
    });
    
};

// GRAFICO 5
var Cincoresult2008= [50301,51095,55122];
var Cincoresult2006 = [1241,1398,1401];
var Cincoresult2004 = [32663,35428,38885];
var Cincoresult2002 =  [1300,1317,1598];
var labelGrafico5 = ['PSDB', 'PT', 'PMDB'];


var dataGrafico5 = Cincoresult2008;


var ctx5 = document.getElementById("grafico5").getContext("2d");
var myChart5 = new Chart(ctx5, {
    type: "bar",
    data: {
    labels: labelGrafico5,
    datasets: [{
        label: 'Partidos',
        tension: 0,
        borderWidth: 0,
        pointRadius: 5,
        pointBackgroundColor: "rgba(255, 255, 255, .8)",
        pointBorderColor: "transparent",
        borderColor: "rgba(255, 255, 255, .8)",
        borderWidth: 4,
        backgroundColor: "transparent",
        fill: true,
        data: dataGrafico5,
        maxBarThickness: 6

    }],
    },
    options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
        display: false,
        }
    },
    interaction: {
        intersect: false,
        mode: 'index',
    },
    scales: {
        y: {
        grid: {
            drawBorder: false,
            display: true,
            drawOnChartArea: true,
            drawTicks: false,
            borderDash: [5, 5],
            color: 'rgba(255, 255, 255, .2)'
        },
        ticks: {
            display: true,
            padding: 10,
            color: '#f8f9fa',
            font: {
            size: 14,
            weight: 300,
            family: "Roboto",
            style: 'normal',
            lineHeight: 2
            },
        }
        },
        x: {
        grid: {
            drawBorder: false,
            display: false,
            drawOnChartArea: false,
            drawTicks: false,
            borderDash: [5, 5]
        },
        ticks: {
            display: true,
            color: '#f8f9fa',
            padding: 10,
            font: {
            size: 14,
            weight: 300,
            family: "Roboto",
            style: 'normal',
            lineHeight: 2
            },
        }
        },
    },
    },
});

function grafico5(){
    var anoGrafico5 = document.forms[3]['grafico5Form'].value;
    
    myChart5.destroy();
    if(anoGrafico5=='2002'){
        labelGrafico5 = ['PSB', 'PMDB', 'PT'];
        dataGrafico5 = Cincoresult2002;
    }
    else if(anoGrafico5=='2004'){
        labelGrafico5 = ['PSDB', 'PT', 'PMDB'];
        dataGrafico5 = Cincoresult2004;
    }
    else if(anoGrafico5=='2006'){
        labelGrafico5 = ['PT','PMDB','PDT'];
        dataGrafico5 = Cincoresult2006;
    }
    else if(anoGrafico5=='2008'){
        labelGrafico5 = ['PSDB', 'PT', 'PMDB'];
        dataGrafico5 = Cincoresult2008;
    }

    myChart5 = new Chart(ctx5, {
        type: "bar",
        data: {
        labels: labelGrafico5,
        datasets: [{
            label: 'Partidos',
            tension: 0,
            borderWidth: 0,
            pointRadius: 5,
            pointBackgroundColor: "rgba(255, 255, 255, .8)",
            pointBorderColor: "transparent",
            borderColor: "rgba(255, 255, 255, .8)",
            borderWidth: 4,
            backgroundColor: "transparent",
            fill: true,
            data: dataGrafico5,
            maxBarThickness: 6
    
        }],
        },
        options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
            display: false,
            }
        },
        interaction: {
            intersect: false,
            mode: 'index',
        },
        scales: {
            y: {
            grid: {
                drawBorder: false,
                display: true,
                drawOnChartArea: true,
                drawTicks: false,
                borderDash: [5, 5],
                color: 'rgba(255, 255, 255, .2)'
            },
            ticks: {
                display: true,
                padding: 10,
                color: '#f8f9fa',
                font: {
                size: 14,
                weight: 300,
                family: "Roboto",
                style: 'normal',
                lineHeight: 2
                },
            }
            },
            x: {
            grid: {
                drawBorder: false,
                display: false,
                drawOnChartArea: false,
                drawTicks: false,
                borderDash: [5, 5]
            },
            ticks: {
                display: true,
                color: '#f8f9fa',
                padding: 10,
                font: {
                size: 14,
                weight: 300,
                family: "Roboto",
                style: 'normal',
                lineHeight: 2
                },
            }
            },
        },
        },
    });

}

// grafico 6

var ctx6 = document.getElementById("grafico6").getContext("2d");
new Chart(ctx6, {
    type: "line",
    data: {
    labels: ["Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [{
        label: "Mobile apps",
        tension: 0,
        borderWidth: 0,
        pointRadius: 5,
        pointBackgroundColor: "rgba(255, 255, 255, .8)",
        pointBorderColor: "transparent",
        borderColor: "rgba(255, 255, 255, .8)",
        borderWidth: 4,
        backgroundColor: "transparent",
        fill: true,
        data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
        maxBarThickness: 6

    }],
    },
    options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
        display: false,
        }
    },
    interaction: {
        intersect: false,
        mode: 'index',
    },
    scales: {
        y: {
        grid: {
            drawBorder: false,
            display: true,
            drawOnChartArea: true,
            drawTicks: false,
            borderDash: [5, 5],
            color: 'rgba(255, 255, 255, .2)'
        },
        ticks: {
            display: true,
            padding: 10,
            color: '#f8f9fa',
            font: {
            size: 14,
            weight: 300,
            family: "Roboto",
            style: 'normal',
            lineHeight: 2
            },
        }
        },
        x: {
        grid: {
            drawBorder: false,
            display: false,
            drawOnChartArea: false,
            drawTicks: false,
            borderDash: [5, 5]
        },
        ticks: {
            display: true,
            color: '#f8f9fa',
            padding: 10,
            font: {
            size: 14,
            weight: 300,
            family: "Roboto",
            style: 'normal',
            lineHeight: 2
            },
        }
        },
    },
    },
});
