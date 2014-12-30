/**
 * Created by Emmanuel on 11/12/2014.
 */
function addChart(i){
    $(function(){
        $('#chart' + i).highcharts({
            chart: {
                type: 'bar'
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
    });
}

function newChart(){
    var charts = $("#current-charts");
    var i = $("#current-charts li").length + 1;
    charts.append(
        $('<li class="col-lg-6 col-md-6 col-sm-12 col-xs-12">'+
                '<div class="col-md-12">'+
                    '<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">'+
                        '<div class="form-group">'+
                            '<label for="filter'+ i +'">Filter by:</label>'+
                            '<select class="form-control" id="filter'+ i +'">'+
                                '<option>Male</option>'+
                                '<option>Female</option>'+
                            '</select>'+
                        '</div>'+
                    '</div>'+
                    '<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">'+
                        '<div class="form-group">'+
                            '<label for="datasource'+ i +'">Filter by:</label>'+
                            '<select class="form-control" id="datasource'+ i +'">'+
                                '<option>Hospitalization fees</option>'+
                                '<option>Medication fees</option>'+
                            '</select>'+
                        '</div>'+
                    '</div>'+
                '</div>'+
                '<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 chart-holder" id="chart' + i + '"></div>'+
            '</li>')
    );
    addChart(i);
}

function resetCharts(){
    if(confirm("Are you sure you want to reset all charts?")){
        $("#current-charts").html("");    
    }
}

$(document).ready(
    function(){
        addChart(1);
    }
)