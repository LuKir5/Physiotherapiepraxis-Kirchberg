<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $service = $_POST['service'];
    $date = $_POST['date'];
    $message = $_POST['message'];

    $to = "Lukas.Kirchberg@gmx.net";
    $subject = "Neue Buchungsanfrage";
    $body = "Name: $name\nE-Mail: $email\nLeistung: $service\nDatum: $date\nNachricht:\n$message";
    $headers = "From: $email";

    // Zusätzliche Debug-Informationen
    $mail_success = mail($to, $subject, $body, $headers);
    if ($mail_success) {
        echo "Buchung erfolgreich gesendet!";
    }
    else {
        echo "Fehler beim Senden der Buchung. Bitte überprüfen Sie Ihre E-Mail-Server-Konfiguration.";
    }

} else {
    echo "Ungültige Anfragemethode.";

}
?>

