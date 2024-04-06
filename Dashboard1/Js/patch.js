// Data provided
const data = [
    { time: "8:00", moisture: 20.0 },
    { time: "8:15", moisture: 20.0 },
    { time: "8:30", moisture: 19.5 },
    { time: "8:45", moisture: 19.0 },
    { time: "9:00", moisture: 18.5 },
    { time: "9:15", moisture: 18.0 },
    { time: "9:30", moisture: 17.5 },
    { time: "9:45", moisture: 17.0 },
    { time: "10:00", moisture: 16.5 },
    { time: "10:15", moisture: 16.0 },
    { time: "10:30", moisture: 15.5 },
    { time: "10:45", moisture: 15.0 },
    { time: "11:00", moisture: 14.5 },
    { time: "11:15", moisture: 14.0 },
    { time: "11:30", moisture: 13.5 },
    { time: "11:45", moisture: 13.0 },
    { time: "12:00", moisture: 12.9 },
    { time: "12:15", moisture: 12.8 },
    { time: "12:30", moisture: 12.8 },
    { time: "12:45", moisture: 12.7 },
    { time: "13:00", moisture: 12.7 },
    { time: "13:15", moisture: 12.5 },
    { time: "13:30", moisture: 12.5 }
];

// Extracting time and moisture data
const times = data.map(entry => entry.time);
const moistureValues = data.map(entry => entry.moisture);

// Find the index of the data point closest to the threshold
const threshold = 12.5;
let estimatedTimeIndex = moistureValues.findIndex(value => value <= threshold);

// Interpolate to estimate the ending time
let x1 = parseFloat(times[estimatedTimeIndex - 1].replace(":", "."));
let y1 = moistureValues[estimatedTimeIndex - 1];
let x2 = parseFloat(times[estimatedTimeIndex].replace(":", "."));
let y2 = moistureValues[estimatedTimeIndex];
let estimatedTime = x1 + (threshold - y1) * ((x2 - x1) / (y2 - y1));

// Create the data trace for the graph
const trace = {
    x: times,
    y: moistureValues,
    mode: 'lines+markers',
    type: 'scatter',
    name: 'Moisture Percentage'
};

// Create the layout for the graph
const layout = {
    title: 'Moisture Percentage Over Time',
    xaxis: {
        title: 'Time',
        tickvals: times,
        ticktext: times,
        tickangle: 45
    },
    yaxis: {
        title: 'Moisture Percentage'
    },
    shapes: [{
        type: 'line',
        x0: times[0],
        y0: threshold,
        x1: times[times.length - 1],
        y1: threshold,
        line: {
            color: 'red',
            dash: 'dashdot'
        }
    }, {
        type: 'circle',
        xref: 'x',
        yref: 'y',
        x0: estimatedTime,
        y0: threshold,
        x1: estimatedTime + 0.1,
        y1: threshold + 0.1,
        line: {
            color: 'green'
        }
    }],
    annotations: [{
        x: estimatedTime,
        y: threshold,
        text: `Estimated Ending Time: ${parseInt(estimatedTime)}:${parseInt((estimatedTime % 1) * 60)}`
    }]
};

// Plot the graph
Plotly.newPlot('graph', [trace], layout);
