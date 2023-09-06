window.onload = function () {
  function getIncomeValues() {
    let januaryIncome = document.getElementById("januaryIncome").value;
    let februaryIncome = document.getElementById("februaryIncome").value;
    let marchIncome = document.getElementById("marchIncome").value;
    let aprilIncome = document.getElementById("aprilIncome").value;
    let mayIncome = document.getElementById("mayIncome").value;
    let juneIncome = document.getElementById("juneIncome").value;
    let julyIncome = document.getElementById("julyIncome").value;
    let augustIncome = document.getElementById("augustIncome").value;
    let septemberIncome = document.getElementById("septemberIncome").value;
    let octoberIncome = document.getElementById("octoberIncome").value;
    let novemberIncome = document.getElementById("novemberIncome").value;
    let decemberIncome = document.getElementById("decemberIncome").value;
    return [
      januaryIncome,
      februaryIncome,
      marchIncome,
      aprilIncome,
      mayIncome,
      juneIncome,
      julyIncome,
      augustIncome,
      septemberIncome,
      octoberIncome,
      novemberIncome,
      decemberIncome,
    ];
  }

  function getExpenseValues() {
    let januaryExpenses = document.getElementById("januaryExpenses").value;
    let februaryExpenses = document.getElementById("februaryExpenses").value;
    let marchExpenses = document.getElementById("marchExpenses").value;
    let aprilExpenses = document.getElementById("aprilExpenses").value;
    let mayExpenses = document.getElementById("mayExpenses").value;
    let juneExpenses = document.getElementById("juneExpenses").value;
    let julyExpenses = document.getElementById("julyExpenses").value;
    let augustExpenses = document.getElementById("augustExpenses").value;
    let septemberExpenses = document.getElementById("septemberExpenses").value;
    let octoberExpenses = document.getElementById("octoberExpenses").value;
    let novemberExpenses = document.getElementById("novemberExpenses").value;
    let decemberExpenses = document.getElementById("decemberExpenses").value;
    return [
      januaryExpenses,
      februaryExpenses,
      marchExpenses,
      aprilExpenses,
      mayExpenses,
      juneExpenses,
      julyExpenses,
      augustExpenses,
      septemberExpenses,
      octoberExpenses,
      novemberExpenses,
      decemberExpenses,
    ];
  }

  let ctx = document.getElementById("myChart").getContext("2d");
  let myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      datasets: [
        {
          label: "Expenses",
          data: getExpenseValues(),
          backgroundColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
          ],
          borderWidth: 1,
        },
        {
          label: "Income",
          data: getIncomeValues(),
          backgroundColor: [
            "rgba(75, 192, 192, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(75, 192, 192, 0.2)",
          ],
          borderColor: [
            "rgba(75, 192, 192, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(75, 192, 192, 0.2)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  });

  document.getElementById("download").addEventListener("click", function () {
    let canvas = document.getElementById("myChart");
    let image = canvas.toDataURL("image/png");
    let link = document.createElement("a");
    link.download = "myChart.png";
    link.href = image;
    link.click();
  });

  document.getElementById("chart-tab").addEventListener("click", function () {
    myChart.data.datasets[0].data = getIncomeValues();
    myChart.data.datasets[1].data = getExpenseValues();
    myChart.update();
  });
};
