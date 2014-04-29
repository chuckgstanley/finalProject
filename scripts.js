function fullData(wageData3){
	var displayDataHeader3 = wageData3.columns;
	console.log(displayDataHeader3);
	
	//insert data table template from fusion tables
	//replace default data with unemployment.rows data
	
	var table3 = new google.visualization.DataTable();    
	table3.addColumn('string', displayDataHeader3[0]);
	table3.addColumn('number', displayDataHeader3[1]);
	table3.addColumn('number', displayDataHeader3[2]);
	table3.addColumn('number', displayDataHeader3[3]);
	table3.addColumn('number', displayDataHeader3[4]);
	table3.addColumn('number', displayDataHeader3[5]);
	table3.addRows(wageData3.rows);                
	
var options = {
	title : 'TITLE',	
	fontName: 'Times New Roman',
	colors:['#003900', '#D9D933', '#175B72', '#990000', '#DE53C2'],
	backgroundColor: { strokeWidth:10, stroke: 'black'},
	legend: {position: 'right', textStyle: {fontSize: 8}}
	
}
	

	// Draw the linegraph in html div "graph div"

	var wageGraph3 = new google.visualization.LineChart(document.getElementById("lineGraphDiv"));
	wageGraph3.draw(table3, options)
	
	
//build googleLoaded function
//with Unemployment file imported
//end of infoLoaded


};



   
/*function infoLoaded(wageData2){
	var displayDataHeader2 = wageData2.columns;
	console.log(displayDataHeader2);
	
	//insert data table template from fusion tables
	//replace default data with unemployment.rows data
	
	var table2 = new google.visualization.DataTable();    
	table2.addColumn('string', displayDataHeader2[0]);
	table2.addColumn('number', displayDataHeader2[1]);
	table2.addColumn('number', displayDataHeader2[2]);
	table2.addColumn('number', displayDataHeader2[3]);
	table2.addRows(wageData2.rows);                
	
	//add title

	var options = {
	title : 'TITLE',	
	isStacked: true,
	colors:['#7CCF7C', '#2B492B', '#0D160D']
	}

	// Draw the linegraph in html div "graph div"

	var wageGraph2 = new google.visualization.ColumnChart(document.getElementById("wageGraphDiv2"));
	wageGraph2.draw(table2, options)
//build googleLoaded function
//with Unemployment file imported

}; //end of infoLoaded






function jsonLoaded(wageData) {
	//Log Unemployment numbers to demonstrate jsonloaded is working
	console.log(wageData);
	// Create Array to hold data, starting with "date" and "value"
	// headers

	var displayDataHeader = wageData.columns;
	console.log(displayDataHeader);
	
	//insert data table template from fusion tables
	//replace default data with unemployment.rows data
	
	var table = new google.visualization.DataTable();    
	table.addColumn('string', displayDataHeader[0]);
	table.addColumn('number', displayDataHeader[1]);
	table.addColumn('number', displayDataHeader[3]);

	table.addRows(wageData.rows);                
	
	//add title



	// Draw the linegraph in html div "graph div"

	var wageGraph = new google.visualization.LineChart(document.getElementById("wageGraphDiv"));
	wageGraph.draw(table)
	

};//end of jsonLoaded function
*/
function wageDemogsAge(){
//source:http://www.bls.gov/cps/minwage2013.pdf obtained 4/29
var minWageAge = google.visualization.arrayToDataTable([
	['Age', 'Minimum Wage Earners'],
	['16 to 19', 797],
	['19 to 24', 866],
	['25 and over', 1638]
	
]);


var ageChart = new google.visualization.PieChart(document.getElementById("ageDiv"));
        ageChart.draw(minWageAge, ageChartOptions);
      }
var ageChartOptions = {
	title: 'Minimum Wage Earners by Age',
	fontName: 'Times New Roman',
	colors:['#2B492B', '#003900', '#D9D933'],
	pieHole: 0.4,
	
};
function wageDemogsSex(){
var minWageSex = google.visualization.arrayToDataTable([
	['Sex', 'Minimum Wage Earners'],
	['Men', 1243],
	['Women', 2058]
	
]);

var sexChart = new google.visualization.PieChart(document.getElementById('wageGraphDiv'));
        sexChart.draw(minWageSex, sexChartOptions);
      }
var sexChartOptions = {
	title: 'Minimum Wage Earners by Gender',
	fontName: 'Times New Roman',
	colors:['#003900', '#D9D933'],
	pieHole: 0.4,
	
};

function workforceSex(){
var fullWorkforceSex = google.visualization.arrayToDataTable([
	['Sex', 'In Workforce'],
	['Men', 37544],
	['Women', 38404]
	
]);

var workforceSexChart = new google.visualization.PieChart(document.getElementById('wageGraphDiv2'));
        workforceSexChart.draw(fullWorkforceSex, workforceSexChartOptions);
      }
var workforceSexChartOptions = {
	title: 'U.S. Workforce by Gender',
	fontName: 'Times New Roman',
	colors:['#003900', '#D9D933'],
	pieHole: 0.4,
	
};
function wageDemogsRace(){
var minWageRace = google.visualization.arrayToDataTable([
		['Race', 'Minimum Wage Earners'],
		['White', 2554],
		['Black', 500],
		['Asian', 114],
		['Latino', 643]
	
]);

var minWageRaceChart = new google.visualization.PieChart(document.getElementById("raceDiv"));
        minWageRaceChart.draw(minWageRace, minWageRaceChartOptions);
      }
var minWageRaceChartOptions = {
	title: 'Minimum Wage Earners by Race',
	fontName: 'Times New Roman',
	colors:['#003900', '#D9D933', '#175B72', '#990000'],
	pieHole: 0.4,
	
};

function workforceDemogsRace(){
var fullWorkforceRace = google.visualization.arrayToDataTable([
		['Race', 'U.S. Workforce by Race'],
		['White', 59515],
		['Black', 10233],
		['Asian', 3495],
		['Latino', 14706]
		]);

var fullWorkforceRaceChart = new google.visualization.PieChart(document.getElementById("moreRaceDiv"));
       fullWorkforceRaceChart.draw(fullWorkforceRace, fullWorkforceRaceChartOptions);
      }
var fullWorkforceRaceChartOptions = {
	title: 'U.S. Workforce by Race',
	fontName: 'Times New Roman',
	colors:['#003900', '#D9D933', '#175B72', '#990000'],
	pieHole: 0.4,
	
};

function wageDemogsHours(){
var pTimeWorkers = google.visualization.arrayToDataTable([
	['Hours', 'Number'],
	['Full Time', 1173],
	['Part Time', 2125]
	
]);

var minWageHoursChart = new google.visualization.PieChart(document.getElementById('wageHoursDiv'));
        minWageHoursChart.draw(pTimeWorkers, minWageHoursChartOptions);
      }
var minWageHoursChartOptions = {
	title: 'Part-Time Vs. Full-Time',
	fontName: 'Times New Roman',
	colors:['#003900', '#D9D933'],
	pieHole: 0.4,
	
};
function chartLoaded() {
	//Console log to show that googleLoaded is working
	console.log("Google Loaded");

	//Import fusion table
	$.get("https://www.googleapis.com/fusiontables/v1/query?sql=SELECT+*+FROM+1tLe8OdnLHPO6VSbL8T_lieu3X0csRHHAbCrp_T9h&key=AIzaSyALhD6XEx_Ge1QTHvfmlwy5e_9_p--vouY", wageDemogsSex, "json");

	$.get("https://www.googleapis.com/fusiontables/v1/query?sql=SELECT+*+FROM+1fktE4abpAfHJzeXzKmOyWUY-ll1yJTtffYH5eoNK&key=AIzaSyALhD6XEx_Ge1QTHvfmlwy5e_9_p--vouY", workforceSex, "json");
	
	$.get("https://www.googleapis.com/fusiontables/v1/query?sql=SELECT+*+FROM+18lKX6m3lUbcN8FGb-MacTa0cyAxeB7m0MayAF0Qa&key=AIzaSyALhD6XEx_Ge1QTHvfmlwy5e_9_p--vouY", fullData, "json");
	
	$.get("https://www.googleapis.com/fusiontables/v1/query?sql=SELECT+*+FROM+1JIQJovyNLFL-UFk5RpuBz6U89Joplk-I9o5Y1a-a&key=AIzaSyALhD6XEx_Ge1QTHvfmlwy5e_9_p--vouY", wageDemogsAge, "json");

	$.get("https://www.googleapis.com/fusiontables/v1/query?sql=SELECT+*+FROM+1JIQJovyNLFL-UFk5RpuBz6U89Joplk-I9o5Y1a-a&key=AIzaSyALhD6XEx_Ge1QTHvfmlwy5e_9_p--vouY", wageDemogsRace, "json");
	$.get("https://www.googleapis.com/fusiontables/v1/query?sql=SELECT+*+FROM+1JIQJovyNLFL-UFk5RpuBz6U89Joplk-I9o5Y1a-a&key=AIzaSyALhD6XEx_Ge1QTHvfmlwy5e_9_p--vouY", workforceDemogsRace, "json");
	
	$.get("https://www.googleapis.com/fusiontables/v1/query?sql=SELECT+*+FROM+1JIQJovyNLFL-UFk5RpuBz6U89Joplk-I9o5Y1a-a&key=AIzaSyALhD6XEx_Ge1QTHvfmlwy5e_9_p--vouY", wageDemogsHours, "json");
}//end chartLoaded function                                                   

function pageLoaded() {

	//indicate page has loaded
	console.log("Page Loaded!");

	//Load chart from google and init. google loaded function
	google.load("visualization", "1", {
		packages : ["corechart"],
		callback : "chartLoaded"
		


	});

}// end pageLoaded function

//load chart


// pageLoaded function
$(document).ready(pageLoaded);




























