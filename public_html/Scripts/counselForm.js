//JavaScript Document

//Hide one div and show a div. tado
//Should we have multipule JS documents or one for all forms.

$(document).ready(function (e) {

    $('#printPreviewConsultingFormOVER').hide();



    $('#printPreviewButton').click(function (e) {
         //Contact
        var todayDate = $('#todayDate').val();
        var firstName = $('#firstName').val();
        var lastName = $('#lastName').val();
        var age = $('#age').val();
        //Medications
        var perscBy = $('#perscBy').val();
        var medication = $('#medication').val();
        var dosage = $('#dosage').val();
        var howLongTaken = $('#howLongTaken').val();
        //Current Medical Conditions
        var allergie = $('#allergie').is( ':checked');
        var asthma = $('#asthma').is( ':checked');
        var arthritis = $('#arthritis').is( ':checked');
        
        //Print View
        //Contact
        $('#printPreviewTD').html("Today's Date: " + todayDate);
        $('#printPreviewFN').html("FirstName: " + firstName);
        $('#printPreviewLN').html("LastName: " + lastName);
        $('#printPreviewAGE').html("Age: " + age);
        //Medications
        $('#printPreviewPB').html("Prescribed by: " + perscBy);
        $('#printPreviewME').html("Medication: " + medication);
        $('#printPreviewDO').html("Dosage: " + dosage);
        $('#printPreviewHT').html("How long taken: " + howLongTaken);
        //Current Medical Conditions
        $('#printPreviewAL').html("Allergie: " + allergie);
        $('#printPreviewAS').html("Asthma: " + asthma);
        $('#printPreviewAR').html("Arthritis: " + arthritis);

        $('#printPreviewConsultingFormOVER').show();
        $('#formConsultingForm').hide();
    });


    $("#printButton").click(function () {
        var mode = 'iframe';
        var close = mode === "popup";
        var options = {mode: mode, popClose: close};
        $("#printPreviewConsultingForm").printArea(options);
    });






});


