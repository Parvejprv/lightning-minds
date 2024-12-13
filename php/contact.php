<?php 
// Database configuration
$host = 'localhost';
$dbname = 'lightning minds';
$username = 'root';			// Default username for MySQL
$password = '';				// Default password for MySQL


// Step 1: Eshtablish a database connection using MySQLi
$conn = new mysqli($host, $username, $password, $dbname,);

// Check the connection
if($conn->connect_error) {
	die("<div class='error-message'>Connection failed: " . $conn->connect_error . "</div>" );
} 
// else {
	// echo "<p>Database connection eshtablished successfully.</p>";
// }

// Step 2: Check if form data is submitted
if($_SERVER['REQUEST_METHOD'] === 'POST') {
	// Retrieve form data
	$name = htmlspecialchars($_POST['name']);
	$email = htmlspecialchars($_POST['email']);
	$message = htmlspecialchars($_POST['message']);
	
	// Step 3: Validate data (check if not empty)
	if(!empty($name) && !empty($email) && !empty($message)) {
		// Step 4: Prepare SQL statement
		$stmt = $conn->prepare("INSERT INTO contacts (name, email, message, submitted_at) VALUES(?, ?, ?, NOW())");
		
		// Bind parameters to avoid SQL injection
		$stmt->bind_param('sss', $name, $email, $message);
		
		// Step 5: Execute the statement
		if($stmt->execute()) {
			echo "<div class='success-message'>Thank you! Your message has been submitted successfully.</div>";
		} else {
			echo "<div class='error-message'>Error: " . $stmt->error . "</div>";
		}
		
		// Close the statement
		$stmt->close();
	} else {
		// Validation failed
		echo "<div class='warning-message'>Error: All fields are required. Please fill in all details</div>";
	}
}

// Close the Connection
$conn->close();
?>