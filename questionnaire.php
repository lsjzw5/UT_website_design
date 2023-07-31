<?php
//put ALL info to the ASCII file
$name = $_POST["name"];
$email = $_POST["email"];
$helpful = $_POST["q1"];
$job = $_POST["job"];
$info = $_POST["q4"];
$comments = $_POST["comments"];
if (isset($_POST["relevant"])) {
	$relevant = $_POST["relevant"];
}


$file = fopen("questionnaire.txt", "a");
fputs($file, "Job: $job; \nIs our website helpful? $helpful; \nRelevant page(s): ");
foreach ($relevant as $key => $value) {
	fputs($file, "$value ");
}
fputs($file, "\nInformation level: $info;\nComments: $comments \n\n");

fclose($file);


//put user's personal information into the database
$server = "fall-2020.cs.utexas.edu";
$dbName = "cs329e_bulko_lwang5";
$username = "cs329e_bulko_lwang5";
$pwd = "Snack+field6induce";

$mysqli = new mysqli($server, $username, $pwd, $dbName);

if ($mysqli->connect_errno) {
  	die('Connect Error: ' . $mysqli->connect_errno . ": " . $mysqli->connect_error);
}

$mysqli->select_db($dbName) or die($mysqli->error);

$name = $mysqli->real_escape_string($name);
$email = $mysqli->real_escape_string($email);

$query = "SELECT * FROM questionnaire WHERE email = '$email';";
$result = $mysqli->query($query);
if (!$result) {
	die("Query failed: ($mysqli->error <br>");
}

if ($result->num_rows == 0) {
	$query = "INSERT INTO questionnaire VALUES ('$name', '$email');";
	$result = $mysqli->query($query);
	if (!$result) {
		die("Query failed: ($mysqli->error <br>");
	} else {
		echo "<script>alert('Successfully submitted!');</script>";
	}
}


//print a thank you page
print <<<THANKS_PAGE
<html>
<head>
<title>Thank you page</title>
<link rel='icon' href='logo.png'>
<link rel='stylesheet' href='contact_us.css'>
</head>
<body>
<table class="navigation">
<tr>
<td><a href="https://fall-2020.cs.utexas.edu/cs329e-bulko/lwang5/Project/main_page.html"><img src="logo.png" alt="Website Logo" id="logo"></a></td>
<td><a href="https://fall-2020.cs.utexas.edu/cs329e-bulko/chrisch/Project/news.php">Disease News</a></td>
<td><a href="https://fall-2020.cs.utexas.edu/cs329e-bulko/chrisch/Project/what.html">What is disease prevention?</a></td>
<td><a href="https://fall-2020.cs.utexas.edu/cs329e-bulko/yuyiliu/Project/why.php">Why disease prevention?</a></td>
<td><a href="https://fall-2020.cs.utexas.edu/cs329e-bulko/yuyiliu/Project/info.php">Infectious Disease Information</a></td>
<td><a href="https://fall-2020.cs.utexas.edu/cs329e-bulko/lwang5/Project/research.html">Research</a></td>
<td><a href="https://fall-2020.cs.utexas.edu/cs329e-bulko/lwang5/Project/external.html">Useful links</a></td>
<td><a href="https://fall-2020.cs.utexas.edu/cs329e-bulko/lwang5/Project/contact_us.html">Contact Us</a></td>
</tr>
</table>
<br><br><hr><br><br>
<h1>Thank you, $name, for completing the questionnaire!</h1>
<br>
<h1>We hope you have found our website to be helpful! </h1>
<footer id="footer">
<b>&#169; Christopher Hsu, Yuyi Liu, Louie Wang</b>&nbsp;&nbsp;October 23, 2020
</footer>
</body>
</html>
THANKS_PAGE;

?>
