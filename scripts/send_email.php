<?php

require("/var/www/scripts/library/sendgrid-php/sendgrid-php.php");

header('Access-Control-Allow-Origin: *');

$recipients = $from = $subject = $emailBody = '';

if(isset($_POST['recipients'], $_POST['from'], $_POST['subject'], $_POST['emailBody'])) {
	$recipients = $_POST['recipients'];
	$from = $_POST['from'];
	$subject = $_POST['subject'];
	$emailBody = $_POST['emailBody'];
	
	foreach($recipients as $person){
		sendEmail($person, $from, $subject, $emailBody);
	}
}
else
	error_log("No data received");

function sendEmail($recipient, $from, $subject, $emailBody){
	$sendgrid = new SendGrid('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');
	$email = new SendGrid\Email();

	$email
	    ->addTo($recipient)
	    ->setFrom($from)
	    ->setSubject($subject)
	    ->setHtml($emailBody);

	$sendgrid->send($email);
}

?>