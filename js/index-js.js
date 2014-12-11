/**
 * Created by Emmanuel on 11/12/2014.
 */
var types = ["bar", "pie", "line", "column", "scatter"]
function addChart(){
    $(function(){
        for(var i=0; i<=4; i++) {
            $("#recent-graphs").append($('<li class="col-lg-3 col-md-4 col-sm-6 col-xs-12"><a href="#"><figure><div id="chart' + i+'" class="chart-holder"></div> <figcaption>Graph '+i+'<br>Last viewed: Today</figcaption> </figure> </a> </li>'))
            $('#chart' + i).highcharts({
                chart: {
                    type: types[i]
                },
                title: {
                    text: 'Fruit Consumption'
                },
                xAxis: {
                    categories: ['Apples', 'Bananas', 'Oranges']
                },
                yAxis: {
                    title: {
                        text: 'Fruit eaten'
                    }
                },
                series: [{
                    name: 'Jane',
                    data: [1, 0, 4]
                }, {
                    name: 'John',
                    data: [5, 7, 3]
                }]
            });
        }
    });
}

$(document).ready(
    function(){
        addChart();
    }
)