<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $telephonenumber = $_POST['telephonenumber'];
    $reason = $_POST['reason'];
    $message = $_POST['message'];

    $to = "Lukas.Kirchberg@gmx.net";
    $subject = "Neue Nachricht";
    $body = "Name: $name\nE-Mail: $email\nTelefonnummer: $telephonenumber\nGrund: $reason\nNachricht:\n$message";
    $headers = "From: $email";

    // Zusätzliche Debug-Informationen
    $mail_success = mail($to, $subject, $body, $headers);
    if ($mail_success) {
        echo "Nachricht erfolgreich gesendet!";
    }
    else {
        echo "Fehler beim Senden der Nachricht. Bitte überprüfen Sie Ihre E-Mail-Server-Konfiguration.";
    }

} else {
    echo "Ungültige Anfragemethode.";
}
?>