<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the form data and sanitize it
    $name = isset($_POST['contact-name']) ? strip_tags(trim($_POST['contact-name'])) : '';
    $phone = isset($_POST['contact-phone']) ? strip_tags(trim($_POST['contact-phone'])) : '';
    $email = isset($_POST['contact-email']) ? filter_var(trim($_POST['contact-email']), FILTER_SANITIZE_EMAIL) : '';
    $subject = isset($_POST['subject']) ? strip_tags(trim($_POST['subject'])) : '';
    $message = isset($_POST['contact-message']) ? strip_tags(trim($_POST['contact-message'])) : '';

    // Validate the email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(["code" => false, "err" => "Invalid email address."]);
        exit;
    }

    // Construct the email message
    $to = "ishmam.abir57@gmail.com"; // The email to which the form will send data
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8" . "\r\n";
    $headers .= "From: " . $email . "\r\n"; // Sender email
    $headers .= "Reply-To: " . $email . "\r\n"; // Reply-to email

    // Email subject and message
    $email_subject = "Contact Form Submission: " . $subject;
    $email_message = "<html><body>";
    $email_message .= "<h2>New Contact Form Submission</h2>";
    $email_message .= "<p><strong>Name:</strong> " . $name . "</p>";
    $email_message .= "<p><strong>Phone:</strong> " . $phone . "</p>";
    $email_message .= "<p><strong>Email:</strong> " . $email . "</p>";
    $email_message .= "<p><strong>Subject:</strong> " . $subject . "</p>";
    $email_message .= "<p><strong>Message:</strong> " . nl2br($message) . "</p>";
    $email_message .= "</body></html>";

    // Send the email
    if (mail($to, $email_subject, $email_message, $headers)) {
        echo json_encode([
            "code" => true,
            "success" => "Your message has been sent successfully."
        ]);
    } else {
        echo json_encode([
            "code" => false,
            "err" => "There was an error sending the email. Please try again later."
        ]);
    }
} else {
    // Invalid request method
    echo json_encode([
        "code" => false,
        "err" => "Invalid request method."
    ]);
}
?>
