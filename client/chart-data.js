// ****************Chart 1*******************

var ctx = document.getElementById('chart1').getContext('2d');
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'doughnut',

  // The data for our dataset
  data: {
      labels: ["Save documents", "Edit and View files", "Organize documents", "Share files", "Other"],
      datasets: [{
          label: "My First dataset",
          backgroundColor: [
            '#ff6384',
            '#ddbbdd',
            '#79F2C4',
            '#bbddcc',
            '#ccddaa',
          ],
          // borderColor: 'rgb(255, 99, 132)',
          data: [20, 14, 14, 1, 1],
      }]
  },

  // Configuration options go here
  options: {
    legend: {
      display: false,
    }
  }
});

// **************chart2*****************
var ctx2 = document.getElementById('chart2').getContext('2d');
var chart2 = new Chart(ctx2, {
  // The type of chart we want to create
  type: 'doughnut',

  // The data for our dataset
  data: {
      labels: ["Google Drive", "OneCloud", "DropBox", "iCloud", "Mega"],
      datasets: [{
          label: "My First dataset",
          backgroundColor: [
            '#79C4F2',
            '#004466',
            '#573f7f',
            '#bdadd8',
            '#555577',
          ],
          // borderColor: 'rgb(255, 99, 132)',
          data: [18, 5, 12, 9, 2],
      }]
  },

  // Configuration options go here
  options: {
    legend: {
      display: false,
    }
  }
});

//**************************chart3*******************
var ctx3 = document.getElementById('chart3').getContext('2d');
var chart3 = new Chart(ctx3, {
  // The type of chart we want to create
  type: 'horizontalBar',

  // The data for our dataset
  data: {
      labels: ["Storage space", "Share content", "Backup files", "Collaboration", "Security", "Save from Web"],
      datasets: [{
          label: "My First dataset",
          backgroundColor: '#add8d9',
          // borderColor: 'rgb(255, 99, 132)',
          data: [19, 12, 18, 10, 13, 4],
      }]
  },

  // Configuration options go here
  options: {
   legend: {
       display: false
   },
   tooltips: {
       callbacks: {
          label: function(tooltipItem) {
                 return tooltipItem.yLabel;
          }
       }
   }
}
});

//*******************chart4*****************
var ctx4 = document.getElementById('chart4').getContext('2d');
var chart4 = new Chart(ctx4, {
  // The type of chart we want to create
  type: 'horizontalBar',

  // The data for our dataset
  data: {
      labels: ["Free trial", "Extra storage", "others"],
      datasets: [{
          label: "My First dataset",
          backgroundColor: '#ff7f9a',
          // borderColor: 'rgb(255, 99, 132)',
          data: [9, 3, 3],
      }]
  },

  // Configuration options go here
    options: {
     legend: {
         display: false
     },
     tooltips: {
         callbacks: {
            label: function(tooltipItem) {
                   return tooltipItem.yLabel;
            }
         }
     }
  }
});
