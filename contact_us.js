function checkanswers() {
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var job = document.getElementById("job").value;

	var q1 = document.getElementById("q1").checked;
	var q3 = true;
	var q3_options = Array("q31","q32","q33","q34","q35","q36","q37","q38");
	var q3_selected = 0
	for (i = 0; i < q3_options.length; i ++) {
		var q = document.getElementById(q3_options[i]);
		if (q.checked) {
			q3_selected += 1;
		} else {
			q3_selected += 0;
		}
	}
	if (q3_selected == 0) {
		q3 = false;
	}
	var q4 = document.getElementById("q4").checked;
	if ((name == "") || (email == "") || (job == "") || (q1 == false) || (q3 == false) || (q4 == false)) {
		
		return false;
	} else {
		return true;
	}
}

function checkemail() {
	var email = document.getElementById("email").value;
	if (email.includes("@") == false) {
		alert("Please enter a valid email address!");
	}
}


function validify() {
	if (checkanswers()) {
		return true;
	} else {
		alert("You have empty fields left");
		return false;
	}
}