function fetchGradeData() {
	//This function will query the postgreSQL database and return grade data
	console.log("Fetching grade data...");
	// create a new request for http data
	let xhr = new XMLHttpRequest();
	// this is the addresss on the machine we're asking for data
	let apiRoute = "/api/grades";
	// when the request changes status, we run this anonymous function
	xhr.onreadystatechange = function(){
		let results;
		// check if we're done
		if(xhr.readyState === xhr.DONE){
			if(xhr.status !== 200){
				console.error('Could not get grades.
					Status: ${xhr.status}');
			}
		populateGradebook(JSON.parse(xhr.responseText));	
		}
	}.bind(this);
	xhr.open("get",apiRoute, true);
	xhr.send();
}
function populateGradebook(data) {
	console.log("Populating gradebook with data:", data);
	let tableElm = document.getElementById("gradebook");
	data.forEach(function(assignment){
		let row = document.createElement("tr");
		let columns = [];
		columns.name = document.createElement('td');
		columns.grade.appendChild(
			document.createTextNode(assignment.last_name + ", " + assignment.first_name)
		);
		columns.grade = document.createElement('td');
		columns.grade.appendChild(
			document.createTextNode(assignment.total_grade)
		);
		row.appendChild(columns.name);
		row.appendChild(columns.grade);
		tableElm.appendChild(row);
	});
}
// Stub: Load grade data from the database
function loadGrades() {
  // This function will load grades from the database
  console.log("loadGrades() called");
}

// Stub: Add a new student row to the gradebook
function addStudentRow(studentName) {
  // This function will add a student to the gradebook table
  console.log("addStudentRow() called for", studentName);
}

// Stub: Populate a grade cell
function addGrade(studentName, assignmentIndex, grade) {
  // This function will populate the table with a student's grade
  console.log(`addGrade() called for ${studentName}, assignment ${assignmentIndex}, grade ${grade}`);
}

// Call the stub to simulate behavior
loadGrades();
