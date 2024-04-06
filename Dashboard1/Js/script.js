google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawVisualization);

function drawVisualization() {
    var data = google.visualization.arrayToDataTable([
        ['Time', 'Outdoor Temp', 'Dryer Inlet Air ', 'Dryer Outlet Air',  'Moisture'],
        ['8:00', 14, 14, 14, 20.0],
        ['8:05', 14, 60, 15, 20.0],
        ['8:10', 14, 90, 17, 19.5],
        ['8:15', 14, 90, 18, 19.0],
        ['8:20', 15, 90, 19.5, 18.5],
        ['8:25', 15, 90, 20.9, 18.0],
        ['8:30', 15, 90, 22.3, 17.5],
        ['8:35', 15, 90, 23.7, 17.0],
        ['8:40', 15, 90, 25.1, 16.5],
        ['8:45', 15, 90, 26.5, 16.0],
        ['8:50', 15, 90, 27.9, 15.5],
        ['8:55', 15, 90, 29.3, 15.0],
        ['9:00', 15, 90, 30.7, 14.5],
        ['9:05', 15, 90, 32.1, 14.0],
        ['9:10', 15, 90, 33.5, 13.5],
        ['9:15', 16, 90, 34.9, 13.0],
        ['9:20', 17, 60, 34, 12.9],
        ['9:25', 17, 30, 33, 12.8],
        ['9:30', 17, 20, 30, 12.8],
        ['9:35', 17, 17, 28, 12.7],
        ['9:40', 17, 17, 27, 12.7],
        ['9:45', 17, 17, 25, 12.5],
        ['9:50', 17, 17, 24, 12.5]
    ]);

    var options = {
        title: 'Time Series Data',
        vAxis: {title: 'Values'},
        hAxis: {title: 'Time'},
        seriesType: 'bars',
        series: {
            0: {type: 'bars', color: '#3366CC'},
            1: {type: 'bars', color: '#DC3912'},
            2: {type: 'bars', color: '#FF9900'},
            3: {type: 'bars', color: '#109618'},
            4: {type: 'line', color: '#990099'}
        },
        legend: {
            position: 'right' // Position the legend on the right side
        },
        chartArea: { width: '80%', height: '80%', margin: '50px' }, // Adjust chart area size
        width: '80%', // Make the chart fill the container width
        height: '500', // Make the chart fill the container height
        gap: '10px', // Adjust the gap between bars
        margintop: '50px'
    };
    
    var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
    chart.draw(data, options);

}
