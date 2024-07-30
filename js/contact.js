// Limitierung Formularfeld message
document.addEventListener('DOMContentLoaded', function() {
    // Begrenzung der Zeichenanzahl im Nachrichtentextfeld
    var messageField = document.getElementById('message');
    messageField.addEventListener('input', function() {
        if (messageField.value.length > 700) {
            messageField.value = messageField.value.substring(0, 700);
            alert('Die Nachricht darf maximal 700 Zeichen enthalten.');
        }
    });
});

// Verarbeitung Kontaktformular
document.getElementById('submit-button-contact').addEventListener('click', function() {
    // Erfassung der Formulardaten
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var telephonenumber = document.getElementById('telephonenumber').value;
    var reason = document.getElementById('reason').value;
    var message = document.getElementById('message').value;

    // Regex für E-Mail-Validierung
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // Validierung der Formulardaten
    if (!name || !email || !telephonenumber || !reason || reason === 'Grund' || !message) {
        alert('Bitte füllen Sie alle Felder aus.');
    return;
    }

    if (!emailPattern.test(email)) {
        alert('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
        return;
    }

    // Erstellung des FormData-Objekts
    var formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('telephonenumber', telephonenumber);
    formData.append('reason', reason);
    formData.append('message', message);

    // AJAX-Anfrage
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'send_mail_contact.php', true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            alert(xhr.responseText);
        } else {
            alert('Fehler beim Senden der Nachricht.');
        }
    };
    xhr.send(formData);
});