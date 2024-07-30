// Limitierung Formularfeld date & message
document.addEventListener('DOMContentLoaded', function() {
    // Setzt das minimale Datum auf heute für das Datumseingabefeld
    var today = new Date().toISOString().split('T')[0];
    document.getElementById('date').setAttribute('min', today);

    // Begrenzung der Zeichenanzahl im Nachrichtentextfeld
    var messageField = document.getElementById('message');
    messageField.addEventListener('input', function() {
        if (messageField.value.length > 700) {
            messageField.value = messageField.value.substring(0, 700);
            alert('Die Nachricht darf maximal 700 Zeichen enthalten.');
        }
    });
});

// Verarbeitung Terminformular
document.getElementById('submit-button-appointment').addEventListener('click', function() {
    // Erfassung der Formulardaten
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var service = document.getElementById('service').value;
    var date = document.getElementById('date').value;
    var message = document.getElementById('message').value;

     // Regex für E-Mail-Validierung
     var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // Validierung der Formulardaten
    if (!name || !email || !service || service === 'Leistung' || !date || !message) {
        alert('Bitte füllen Sie alle Felder aus.');
    return;
    }

    if (!emailPattern.test(email)) {
        alert('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
        return;
    }

    // Überprüfen, ob das ausgewählte Datum ein Sonntag ist
    var selectedDate = new Date(date);
    if (selectedDate.getDay() === 0) { // 0 steht für Sonntag
        alert('Sonntage können nicht ausgewählt werden. Bitte wählen Sie ein anderes Datum.');
        return;
    }

    // Erstellung des FormData-Objekts
    var formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('service', service);
    formData.append('date', date);
    formData.append('message', message);

    // AJAX-Anfrage
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'send_mail_appointment.php', true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            alert(xhr.responseText);
        } else {
            alert('Fehler beim Senden der Buchung.');
        }
    };
    xhr.send(formData);
});