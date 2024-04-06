google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'Time');
    data.addColumn('number', 'Value');
    data.addColumn({type: 'string', role: 'annotation'});

    var xValues = [8, 8.15, 8.3, 8.45, 9, 9.15, 9.3, 9.45, 10, 10.15, 10.3, 10.45, 11, 11.15, 11.3, 11.45, 12, 12.15, 12.3, 12.45, 13, 13.15, 13.3];
    var yValues = [20, 20, 19.5, 19, 18.5, 18, 17.5, 17, 16.5, 16, 15.5, 15, 14.5, 14, 13.5, 13, 12.9, 12.8, 12.7, 12.7, 12.5, 12.5];

    for (var i = 0; i < xValues.length; i++) {
        data.addRow([xValues[i], yValues[i], null]);
    }

    // Add the point with annotation
    data.addRow([11.45, 13, 'Drying is finished and cooling starts']);

    var options = {
        hAxis: {
            title: 'Time'
        },
        vAxis: {
            title: 'Value'
        },
        series: {
            0: {color: '#109618'} 
        }
    };

    var chart = new google.visualization.LineChart(document.getElementById('crosshairs-chart'));

    chart.draw(data, options);
}
