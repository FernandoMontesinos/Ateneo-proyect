const testRealizados = document.getElementById("testChart");


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
    datasets: [GuardiaC]
};

const config = {
    type: 'line',
    data: data,
    options: {
        maintainAspectRatio: false,
        plugins: {
            legend: false,
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