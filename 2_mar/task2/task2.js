

// ----------------bar chart-------------------- 
var barColors = ["red", "green","blue","orange","brown"];
new Chart(barChart, {
    type: 'bar',     //the type of chart
    data: {
        labels: ['Shampoo', 'Conditioner', 'Bodywash', 'Detergent', 'Soap'],   //what will be shown ab below on x-axis corresponding to each value
        datasets: [{
            backgroundColor: barColors,
            data: [12, 19, 3, 5, 2],
            borderWidth: 3
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// ---------------------------scatter chart---------------------------
var xyValues = [          //values on x and y axis
    {x:50, y:7},
    {x:60, y:8},
    {x:70, y:8},
    {x:80, y:9},
    {x:90, y:9},
    {x:100, y:9},
    {x:110, y:10},
    {x:120, y:11},
    {x:130, y:14},
    {x:140, y:14},
    {x:150, y:15}
  ];
  
  new Chart("scatterChart", {
    type: "scatter",
    data: {
      datasets: [{         //content inside the chart
        pointRadius: 5, //radius of point scattered to show data
        pointBackgroundColor: "rgb(100,230,155)",
        data: xyValues       //data inside the chart
      }]
    },
    options: {
      legend: {display: false},
      scales: {
        xAxes: [{ticks: {min: 40, max:160}}],
        yAxes: [{ticks: {min: 6, max:16}}],
      }
    }
  });

//   ------------------------------line chart----------------------- 
var xValues = [50,60,70,80,90,100,110,120,130,140,150];
var yValues = [7,8,8,9,9,9,10,11,14,14,15];

new Chart("lineChart", {
  type: "line",
  data: {
    labels: xValues,       //give the label to that value a the value of x
    datasets: [{
      fill: true,   //fill the area covered by the graph points
      lineTension: 0,
      backgroundColor: "rgba(0,0,105,0.5)",
      borderColor: "rgba(0,0,255,0.5)",
      data: yValues        //give the data as y
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 6, max:16}}],  //min and max value on yaxes
    }
  }
});

// --------------------------pie chart-------------- 
var xValues = ["HP", "Lenovo", "MacBook", "Dell"];
var yValues = [59, 49, 44, 24];
var barColors = [
  "#b94788",
  "#12bbb7",
  "#e65789",
  "#08c3b9",
 
];

new Chart("pieChart", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: false,
      
    }
  }
});

// ---------------------------doughnutchart-------------------------- 
new Chart("doughnutChart", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: false,
      
    }
  }
});
