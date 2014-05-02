/**
 * @author Charles
 */
var tableID = "https://www.googleapis.com/fusiontables/v1/query?sql=SELECT+Year, MinimumWage, ";
var googleKey = "+FROM+18lKX6m3lUbcN8FGb-MacTa0cyAxeB7m0MayAF0Qa&key=AIzaSyALhD6XEx_Ge1QTHvfmlwy5e_9_p--vouY"
 
function fullData(wageData3){
	var displayDataHeader3 = wageData3.columns;
	console.log(displayDataHeader3);
	
	//insert data table template from fusion tables
	//replace default data with unemployment.rows data
	          
var options = {
	title : 'Minimum Wage Since 1967',
	colors:['#6AD3D9', '#FC72F1'],
	fontName: 'Times New Roman',
	backgroundColor: { strokeWidth:10, stroke: 'black'},
	legend: {position: 'right', textStyle: {fontSize: 8}}
      }
	var table3 = new google.visualization.DataTable();    
	table3.addColumn('string', displayDataHeader3[0]);//years
	table3.addColumn('number', displayDataHeader3[1]);//Top 5
	table3.addColumn('number', displayDataHeader3[2]);//Top 20
	table3.addRows(wageData3.rows);                

/*	var table5 = new google.visualization.DataTable();    
	table5.addColumn('string', displayDataHeader3[0]);//years
	table5.addColumn('number', displayDataHeader3[1]);//Top 5
	table5.addColumn('number', displayDataHeader3[2]);//Top 20
	table5.addColumn('number', displayDataHeader3[3]);//Mid 20
	table5.addColumn('number', displayDataHeader3[4]);//low 20
	table5.addColumn('number', displayDataHeader3[5]); //minWage
	table5.addRows(wageData3.rows);
	
var minButton = document.getElementById('minWageComp');
var allButton = document.getElementById('showAll');


minButton.onclick = function(){
	table3.removeColumn(4);
	table3.removeColumn(3);
	table3.removeColumn(2);
	table3.removeColumn(1);
	
	wageGraph3.draw(table3, options);

allButton.onclick = function(){
	table5.removeColumn(4);
	table5.removeColumn(2);
	table5.removeColumn(1);
	wageGraph3.draw(table5, options)
}

}



/*	
var button = document.getElementById('b1');
	// Disabling the button while the chart is drawing.
      button.disabled = true;
      google.visualization.events.addListener(chart, 'ready',
          function() {
            button.disabled = false;
          });
*/

	// Draw the linegraph in html div "graph div"

	var wageGraph3 = new google.visualization.LineChart(document.getElementById("lineGraphDiv"));
	wageGraph3.draw(table3, options)
	
	
//build googleLoaded function
//with Unemployment file imported
//end of infoLoaded


};


//build googleLoaded function
//with Unemployment file imported
function clickHandler(e){
	console.log(e.target.id);

	//button recalls button Id 
	var wageVLU = e.target.id;
	
	
	//build query string from table ID; variable year; and key; init. unemploymentLoaded
	$.get(tableID+wageVLU+googleKey, fullData, "json");
	//isolated year from button id
	//var wageVlu = myID.split("_")[1];
}   
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


var ageChart = new google.visualization.PieChart(document.getElementById("mwAgeDiv"));
        ageChart.draw(minWageAge, ageChartOptions);
      }
var ageChartOptions = {
	title: 'Minimum Wage Earners by Age',
	fontName: 'Times New Roman',
	colors:['#DAFC5D', '#6AD3D9', '#FC72F1'],
	pieHole: 0.4,
	
};
function wageDemogsSex(){
var minWageSex = google.visualization.arrayToDataTable([
	['Sex', 'Minimum Wage Earners'],
	['Men', 1243],
	['Women', 2058]
	
]);

var sexChart = new google.visualization.PieChart(document.getElementById('mwGenderDiv'));
        sexChart.draw(minWageSex, sexChartOptions);
      }
var sexChartOptions = {
	title: 'Minimum Wage Earners by Gender',
	fontName: 'Times New Roman',
	colors:['#DAFC5D', '#6AD3D9'],
	pieHole: 0.4,
	
};

function workforceSex(){
var fullWorkforceSex = google.visualization.arrayToDataTable([
	['Sex', 'In Workforce'],
	['Men', 37544],
	['Women', 38404]
	
]);

var workforceSexChart = new google.visualization.PieChart(document.getElementById('wfGenderDiv'));
        workforceSexChart.draw(fullWorkforceSex, workforceSexChartOptions);
      }
var workforceSexChartOptions = {
	title: 'U.S. Workforce by Gender',
	fontName: 'Times New Roman',
	colors:['#DAFC5D', '#6AD3D9'],
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

var minWageRaceChart = new google.visualization.PieChart(document.getElementById("mwraceDiv"));
        minWageRaceChart.draw(minWageRace, minWageRaceChartOptions);
      }
var minWageRaceChartOptions = {
	title: 'Minimum Wage Earners by Race',
	fontName: 'Times New Roman',
	colors:['#DAFC5D', '#6AD3D9', '#FC72F1', '#FF5757'],
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

var fullWorkforceRaceChart = new google.visualization.PieChart(document.getElementById("wfRaceDiv"));
       fullWorkforceRaceChart.draw(fullWorkforceRace, fullWorkforceRaceChartOptions);
      }
var fullWorkforceRaceChartOptions = {
	title: 'U.S. Workforce by Race',
	fontName: 'Times New Roman',
	colors:['#DAFC5D', '#6AD3D9', '#FC72F1', '#FF5757'],
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
	colors:['#DAFC5D', '#6AD3D9'],
	pieHole: 0.4,
	
};




function chartLoaded() {
	//Console log to show that googleLoaded is working
	console.log("Google Loaded");

	//Import fusion table
	//$.get("https://www.googleapis.com/fusiontables/v1/query?sql=SELECT+*+FROM+1tLe8OdnLHPO6VSbL8T_lieu3X0csRHHAbCrp_T9h&key=AIzaSyALhD6XEx_Ge1QTHvfmlwy5e_9_p--vouY", wageDemogsSex, "json");
	wageDemogsSex();
	
	workforceSex();
	
	wageDemogsAge();

	wageDemogsRace();
	
	workforceDemogsRace();
	
	wageDemogsHours();
	
	//$.get("https://www.googleapis.com/fusiontables/v1/query?sql=SELECT+Year, MinimumWage, Middle20Percent+FROM+18lKX6m3lUbcN8FGb-MacTa0cyAxeB7m0MayAF0Qa&key=AIzaSyALhD6XEx_Ge1QTHvfmlwy5e_9_p--vouY", fullData, "json");
	
	//activate click handler on "click"
$('.btn-default').on("click", clickHandler);

$("#MinimumWage").click();
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




























