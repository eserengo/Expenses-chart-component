(function () {
  const xValues = [];
  const yValues = [];
  const color = getComputedStyle(document.querySelector(":root")).getPropertyValue("--soft-red");

  (function getJSONdata() {
    let request = new XMLHttpRequest();
      request.open("GET", "data.json", false);
      request.send(null);
    let data = JSON.parse(request.responseText);
    data.forEach(object => {
      xValues.push(object.day);
      yValues.push(object.amount);
    })
  })();

  const chart = new Chart("bars", {
    type: "bar",
    data: {
      labels: xValues,
      datasets: [{
        backgroundColor: color,
        data: yValues,
      }]
    },
    options: {
      plugins: {
        legend: [{
          skipNull: true,
          display: false
        }]
      },
      scales: {
        xAxes: [{
          gridLines: {
            display: false
          }
        }],
        yAxes: [{
          gridLines: {
            display: false
          },
          ticks: {
            display: false
          }
        }]
      }
    }
  });
  document.getElementById("total").textContent = "$ " + yValues.reduce((a, b) => a + b);
})();