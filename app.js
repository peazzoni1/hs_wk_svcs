
//**** faq button actions ****

$('#faq-container').load('Partials/Faq/partial-faq-parents.html');


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
  $('#modal-container').css('display: none');
});

$(document).on('click', ".careers", function() {
    $('#modal-container').load('Partials/Services/partial-service-career.html');
});

$(document).on('click', ".work", function() {
  $('#modal-container').load('Partials/Services/partial-service-work.html');
});

$(document).on('click', ".grad", function() {
  $('#modal-container').load('Partials/Services/partial-service-grad.html');
});

$(document).on('click', ".planning", function() {
  $('#modal-container').load('Partials/Services/partial-service-planning.html');
});

$(document).on('click', ".coaching", function() {
  $('#modal-container').load('Partials/Services/partial-service-coaching.html');
});

$(document).on('click', ".assess", function() {
  $('#modal-container').load('Partials/Services/partial-service-assess.html');
});

//Worksite list

var list = ['Philadelphia Freedom Valley YMCA', 'Spring Valley YMCA', 'Linfield National Golf Club', 'Wonder Years Preschool', 'The Arc Alliance',
'Upper Schuylkill Valley Park', 'Chick-fil-A','PA Insert Corporations','Sebastian Riding Associates','Sodexo at Ursinus','Firebirds Grille', 'Kiddie Academy',
'Flanagan’s Preschool', 'One Village Coffee','JLI Electronicslectronics', 'Philadelphia Rock Gym', 'Keyser Miller Ford','Evansburg State Park',
'Rolling Turf Golf Course', 'Montgomery County Parks', 'Green Lane', 'Philly Fades Barber Shop', 'Shoemaker Welding', 'Allied Wire and Cable', 'Philly Drums',
'Bikesport', 'Ott’s hardscape/landscape','Luciani Construction','Carpet Craft', 'Hair Cuttery', 'Wendy’s', 'Redners Markets','Reading Phillies',
'Trappe Fire and EMS','3 Paper Dolls', 'Atlantic Printing', 'Slick Ideas Marketing','Trappe Historical Society', 'Art Fusion 19464',
'Interstate Building Maintenance', 'Perkiomen Township', 'Indian Valley YMCA', 'Montgomery County SPCA', 'Wegman’s', 'Giant Food',
'Royersford Historical Society', 'Bon Homie, LTD','Meadowood Senior Living', 'petfooddirect.com'];

var list = list.sort();

for (i= 0; i < list.length; i++) {
  if(i % 2 !== 0 ) {
  $('#worksite-list').append("<li class='worksite-list-item'>" + list[i] + "</li>");
}
  else {
  $('#worksite-list').append("<li class='worksite-list-item'>" + "<span style='color:#00A8E8'>" + list[i] + "</span>" + "</li>");
}
}

//Contact Form
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
