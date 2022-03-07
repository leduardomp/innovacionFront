/* globals Chart:false, feather:false */

(function () {
  'use strict'

  feather.replace({ 'aria-hidden': 'true' })

  /** Grafica 1 */

  var ctx = document.getElementById('saboresRestantes')

  var data = {
    labels: ['Chocolate', 'Fresa', 'Limon', 'Zanahoria'],
    datasets: [{
      label: 'Sabores de pasteles',
      data: [20, 0, 15, 13],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 65, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)'
      ],
      borderWidth: 1
    }]
  }


  var options = {
    scales: {
      y: {
        beginAtZero: true
      }
    },
    legend:{
      labels: false
    }
  }

  var config = {
    type: 'bar',
    data: data,
    options: options
  }

  var myChart = new Chart(ctx, config)


  /** Grafica 2 */

  var ctx2 = document.getElementById('adornosRestantes')

  var data2 = {
    labels: ['Velas', 'Laminas de chocolate', 'Rosas', 'Muñeco'],
    datasets: [{
      label: 'Adornos',
      data: [40, 2, 32, 13],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(20, 120, 207, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(20, 120, 207 )',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)'
      ],
      hoverOffset: 4
    }]
  }

  var config2 = {
    type: 'pie',
    data: data2
  }

  var myChart2 = new Chart(ctx2, config2)

})()
