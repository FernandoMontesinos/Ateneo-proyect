const testRealizados = document.getElementById("testChart");

const policiaN = {
    label: "Policia Nacional",
    lineTension: 0,
    fill: false,
    borderColor: 'rgba(240, 60, 72, 1)',
    backgroundColor: 'rgba(240, 60, 72, 1)'
};

const GuardiaC = {
    label: "Guardia Civil",
    data: [0, 70],
    lineTension: 0,
    fill: false,
    borderColor: 'rgb(255, 223, 0)',
    backgroundColor: 'rgb(255, 223, 0)'
};

const data = {
    labels: ["10", "20"],
    datasets: [policiaN, GuardiaC]
};

const config = {
    type: 'line',
    data: data,
    responsive: true,
    options: {
        plugins: {
            legend: {
                position: 'bottom',
                align: 'end',
                labels: {
                    boxWidth: 18
                }
            }
        },
        scales: {
            x: {
                title:{
                    display: true,
                    text: 'Días',
                    color: 'rgb(255, 223, 0)'
                }
            },
            y: {
                title:{
                    display: true,
                    text: 'Tests',
                    color: 'rgb(255, 223, 0)'
                }
            }
        }  
    }
};

const lineChart = new Chart(testRealizados, config);