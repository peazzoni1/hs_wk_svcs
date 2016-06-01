//*** load partials ****

$('#services-container').load('Partials/Services/partial-service-home.html');

$('#faq-container').load('Partials/Faq/partial-faq-parents.html');

//**** faq button actions ****

$('#parents').click(function() {
  $('#faq-container').load('Partials/Faq/partial-faq-parents.html');
});

$('#teachers').click(function() {
  $('#faq-container').load('Partials/Faq/partial-faq-teachers.html');
});

$('#employers').click(function() {
  $('#faq-container').load('Partials/Faq/partial-faq-employers.html');
});

//**** services button actions ****

$(document).on('click', ".backBtn", function() {
  $('#services-container').load('Partials/Services/partial-service-home.html');
});

$(document).on('click', ".careers", function() {
  setTimeout(function() {
    $('#services-container').load('Partials/Services/partial-service-career.html')
  }, 150);
});

$(document).on('click', ".work", function() {
  $('#services-container').load('Partials/Services/partial-service-work.html');
});

$(document).on('click', ".grad", function() {
  $('#services-container').load('Partials/Services/partial-service-grad.html');
});

$(document).on('click', ".planning", function() {
  $('#services-container').load('Partials/Services/partial-service-planning.html');
});

$(document).on('click', ".coaching", function() {
  $('#services-container').load('Partials/Services/partial-service-coaching.html');
});

$(document).on('click', ".assess", function() {
  $('#services-container').load('Partials/Services/partial-service-assess.html');
});


$(function() {
    // Get the form.
    var form = $('#form_fields');

    // Get the messages div.
    var formMessages = $('#contact_form');

$(form).submit(function(event) {
    // Stop the browser from submitting the form.
    event.preventDefault();

var formData = $(form).serialize();
  console.log(formData);
$.ajax({
    type: 'POST',
    url: $(form).attr('action'),
    data: formData
})

.done(function(response) {

    // Make sure that the formMessages div has the 'success' class.
    $(formMessages).removeClass('error');
    $(formMessages).addClass('success');

    // Set the message text.
    $(formMessages).text(response);

    // Clear the form.
    $('#name').val('');
    $('#email').val('');
    $('#message').val('');
})

.fail(function(data) {
    // Make sure that the formMessages div has the 'error' class.
    $(formMessages).removeClass('success');
    $(formMessages).addClass('error');

    // Set the message text.
    if (data.responseText !== '') {
        $(formMessages).text(data.responseText);
    } else {
        $(formMessages).text('Oops! An error occured and your message could not be sent.');
    }
  });
});
});
