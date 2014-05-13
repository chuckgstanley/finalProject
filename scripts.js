/**
 * @author Charles
 */

var tableID = "https://www.googleapis.com/fusiontables/v1/query?sql=SELECT+Year, MinimumWage, Annotation,";
var googleKey = "+FROM+18lKX6m3lUbcN8FGb-MacTa0cyAxeB7m0MayAF0Qa&key=AIzaSyALhD6XEx_Ge1QTHvfmlwy5e_9_p--vouY"
 
//This function builds the linegraph from minimum wage and income data 

function minWage (justMinWage){
	var displayDataHeader1 = justMinWage.columns;
	
	          
var options = {
	title : 'After Falling Drastically in the 1980s, the Minimum Wage Never Regained its pre-1982 Value.',
	colors:['#EB36D3'],
	annotations: {
  	textStyle: {
  	color: 'black',     // The color of the text.
	fontSize: 8,
	}
},
	fontName: 'Times New Roman',
	vAxis: {format:'$###,###,###.00'}, // Money format
	legend: {position: 'right', textStyle: {fontSize: 8}}
      }
      
      
      
	var table1 = new google.visualization.DataTable();    
	table1.addColumn('string', displayDataHeader1[0]);//years
	table1.addColumn('number', displayDataHeader1[1]);
	table1.addColumn({type: 'string', role: 'annotation'});
	table1.addRows(justMinWage.rows);
	
	 var formatter = new google.visualization.NumberFormat({prefix: "$", negativeColor: 'red', negativeParens: true});
  formatter.format(table1, 1); // Apply formatter to second column
    
		var wageGraph1 = new google.visualization.LineChart(document.getElementById("lineGraphDiv"));
	wageGraph1.draw(table1, options)
	

};//End minWage function

//Mobilefunction
function mobileChartData(mobileData){
	var displayDataHeader2 = mobileData.columns;
	
	
	          
var options = {
	title : 'Minimum Wage Loses Value, While Incomes for Top and Middle Earners Grow.',
	colors:['#EB36D3', '#B2ED53', '#43B1E0'],
	vAxis: {format:'$###,###,###.00'}, // Money format
	fontName: 'Times New Roman',
	
	legend: {position: 'right', textStyle: {fontSize: 8}}
      }
	var table2 = new google.visualization.DataTable();    
	table2.addColumn('string', displayDataHeader2[0]);//years
	table2.addColumn('number', displayDataHeader2[1]);//Top 5
	table2.addColumn('number', displayDataHeader2[2]);//Top 20
	table2.addColumn('number', displayDataHeader2[3]);
	table2.addRows(mobileData.rows);                

 var formatter = new google.visualization.NumberFormat({prefix: "$", negativeColor: 'red', negativeParens: true});
  formatter.format(table2, 1); // Apply formatter to second column
	 formatter.format(table2, 2);
	  formatter.format(table2, 3);	
	var wageGraph2 = new google.visualization.LineChart(document.getElementById("mobileChart"));
	wageGraph2.draw(table2, options)
	

}; //End of lineChartData function

function lineChartData(wageData3){
	var displayDataHeader3 = wageData3.columns;
	//console.log(displayDataHeader3);
	
	//insert data table template from fusion tables
	//replace default data with unemployment.rows data
	          
var options = {
	title : 'Minimum Wage Incomes Have Lost Value Since 1967, While Incomes for Top and Middle Earners Have Increased.',
	colors:['#EB36D3', '#43B1E0'],
	vAxis: {format:'$###,###,###.00'}, // Money format
	fontName: 'Times New Roman',
	annotations: {
  		textStyle: {
  		color: 'black',     // The color of the text.
		fontSize: 8,
		}
	},
	legend: {position: 'right', textStyle: {fontSize: 8}}
      }
	var table3 = new google.visualization.DataTable();    
	table3.addColumn('string', displayDataHeader3[0]);//years
	table3.addColumn('number', displayDataHeader3[1]);//Top 5
	table3.addColumn({type: 'string', role: 'annotation'});
	table3.addColumn('number', displayDataHeader3[2]);//Top 20
	
	table3.addRows(wageData3.rows);                

 var formatter = new google.visualization.NumberFormat({prefix: "$", negativeColor: 'red', negativeParens: true});
  formatter.format(table3, 1); // Apply formatter to second column
	 formatter.format(table3, 2);
	  
	//Draw Chart	
	var wageGraph3 = new google.visualization.LineChart(document.getElementById("lineGraphDiv"));
	wageGraph3.draw(table3, options)
	

}; //End of lineChartData function


//Click Handler for unemployment numbers
function clickHandler(e){
	console.log(e.target.id);

	//button recalls button Id 
	var wageVLU = e.target.id;
	
	
	//build query string from table ID; variable year; and key; init. lineChartData function
	$.get(tableID+wageVLU+googleKey, lineChartData, "json");
	//isolated year from button id
	//var wageVlu = myID.split("_")[1];
}//End of Click Handler



//Build and push minwage age donut chart.
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
	colors:['#9DDEFA', '#43B1E0', 'EB36D3'],
	pieHole: 0.4,
	
};//end wageDemogsAge chart

//build and push donut chart for minimumwage gender numbers.
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
	colors:['#43B1E0', '#EB36D3'],
	pieHole: 0.4,
	
};//end wageDemogsSex function

//donut chart for U.S. workforce gender numbers.
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
	colors:['#43B1E0', '#EB36D3'],
	pieHole: 0.4,
	
};//End workforceSex function

//build chart for minwage earner race demographics.
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
	colors:['EB36D3', '#43B1E0','#B2ED53', '#FF5757'],
	pieHole: 0.4,
	
};//End wageDemogsRace function

//build donut chart for U.S. workforce race demographics.
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
	colors:['EB36D3', '#43B1E0','#B2ED53', '#FF5757'],
	pieHole: 0.4,
	
};//end workforceDemogsRace function


//donut graph for full time and part time minwage earners.
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
	colors:['#43B1E0', 'EB36D3'],
	pieHole: 0.4,
	
};//End wageDemogsHours function



//init donut graphs and min wage chart
function chartLoaded() {
	

	//Import fusion table median wage v minwage only
	//$.get("https://www.googleapis.com/fusiontables/v1/query?sql=SELECT+*+FROM+1tLe8OdnLHPO6VSbL8T_lieu3X0csRHHAbCrp_T9h&key=AIzaSyALhD6XEx_Ge1QTHvfmlwy5e_9_p--vouY", wageDemogsSex, "json");
	wageDemogsSex();
	
	workforceSex();
	
	wageDemogsAge();

	//wageDemogsRace();
	
	//workforceDemogsRace();
	
	wageDemogsHours();
	
	$.get("https://www.googleapis.com/fusiontables/v1/query?sql=SELECT+Year, MinimumWage, Annotation+FROM+18lKX6m3lUbcN8FGb-MacTa0cyAxeB7m0MayAF0Qa&key=AIzaSyALhD6XEx_Ge1QTHvfmlwy5e_9_p--vouY", minWage, "json");
	
	$.get("https://www.googleapis.com/fusiontables/v1/query?sql=SELECT+Year, MinimumWage, Middle20Percent, Top20Percent+FROM+18lKX6m3lUbcN8FGb-MacTa0cyAxeB7m0MayAF0Qa&key=AIzaSyALhD6XEx_Ge1QTHvfmlwy5e_9_p--vouY", mobileChartData, "json");
	
	//activate click handler on "click"
$('.btn-default').on("click", clickHandler);


//Auto click MinimumWage
//$("#MinimumWage").click();
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




























