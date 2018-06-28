// ****************Chart 1*******************

var ctx = document.getElementById('chart1').getContext('2d');
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'doughnut',

  // The data for our dataset
  data: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [{
          label: "My First dataset",
          backgroundColor: [
            'rgb(255, 99, 132)',
            'blue',
            'yellow',
            'green',
            'orange',
            'purple'
          ],
          // borderColor: 'rgb(255, 99, 132)',
          data: [0, 10, 5, 2, 20, 30, 45],
      }]
  },

  // Configuration options go here
  options: {}
});

// **************chart2*****************
var ctx2 = document.getElementById('chart2').getContext('2d');
var chart2 = new Chart(ctx2, {
  // The type of chart we want to create
  type: 'bar',

  // The data for our dataset
  data: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [{
          label: "My First dataset",
          backgroundColor: [
            'rgb(255, 99, 132)',
            'blue',
            'yellow',
            'green',
            'orange',
            'purple'
          ],
          // borderColor: 'rgb(255, 99, 132)',
          data: [0, 10, 5, 2, 20, 30, 45],
      }]
  },

  // Configuration options go here
  options: {}
});

//**************************chart3*******************
var ctx3 = document.getElementById('chart3').getContext('2d');
var chart3 = new Chart(ctx3, {
  // The type of chart we want to create
  type: 'doughnut',

  // The data for our dataset
  data: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [{
          label: "My First dataset",
          backgroundColor: [
            'rgb(255, 99, 132)',
            'blue',
            'yellow',
            'green',
            'orange',
            'purple'
          ],
          // borderColor: 'rgb(255, 99, 132)',
          data: [0, 10, 5, 2, 20, 30, 45],
      }]
  },

  // Configuration options go here
  options: {}
});

//*******************chart4*****************
var ctx4 = document.getElementById('chart4').getContext('2d');
var chart4 = new Chart(ctx4, {
  // The type of chart we want to create
  type: 'bar',

  // The data for our dataset
  data: {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [{
          label: "My First dataset",
          backgroundColor: [
            'rgb(255, 99, 132)',
            'blue',
            'yellow',
            'green',
            'orange',
            'purple'
          ],
          // borderColor: 'rgb(255, 99, 132)',
          data: [0, 10, 5, 2, 20, 30, 45],
      }]
  },

  // Configuration options go here
  options: {}
});
