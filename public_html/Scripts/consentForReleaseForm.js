$(document).ready(function (e) {
    // Instantiates an empty date object as d
    var d = new Date();
    // Stores the day of the Month as curr_date
    var curr_date = d.getDate();
    // Months are zero based 
    // Stores the Month as curr_month
    var curr_month = d.getMonth() + 1;
    // Stores the year as curr_year
    var curr_year = d.getFullYear();
    // Scrolls to the top of the document
    $('html,body').scrollTop(0);
    // Hides the Print Preview Half of this Form
    $('#printPreviewReleaseFormOVER').hide();
    
    $('#edit').click(function () {
        $('#printPreviewReleaseFormOVER').hide();
        $('html,body').scrollTop(0);
        $('#formReleaseForm').show();
    });
    
    // Brings up the hidden half of the page with the fields filled out for print preview
    $('#printPreviewButton').click(function (e) {
        // Formats the date as mm-dd-yyyy
        var todaysdate = curr_month + "-" + curr_date + "-" + curr_year;

        //***********************************************************************
        //Consent For Release Form
        //***********************************************************************

        $('#ppConsentDoctorName').html($('#consentDoctorName').val());
        $('#ppConsentPartName').html($('#consentPartName').val());
        $('#ppConsentPartDob').html($('#consentPartDob').val());
        $('#ppConsentQuestion3').html($('#consentQuestion3').val());
        if ($('#consentMedHistory').is(':checked')) {
            $('#ppConsentMedHistoryL').html($('#consentMedHistory:checked').val());
            $('#ppConsentMedHistory').html("Yes");
        } else {
            $('#ppConsentMedHistoryL').html($('#consentMedHistory').val());
            $('#ppConsentMedHistory').html("No");
        }
        if ($('#consentPhysicalTherapy').is(':checked')) {
            $('#ppConsentPhysicalTherapyL').html($('#consentPhysicalTherapy:checked').val());
            $('#ppConsentPhysicalTherapy').html("Yes");
        } else {
            $('#ppConsentPhysicalTherapyL').html($('#consentPhysicalTherapy').val());
            $('#ppConsentPhysicalTherapy').html("No");
        }
        if ($('#consentOccupationalTherapy').is(':checked')) {
            $('#ppConsentOccupationalTherapyL').html($('#consentOccupationalTherapy:checked').val());
            $('#ppConsentOccupationalTherapy').html("Yes");
        } else {
            $('#ppConsentOccupationalTherapyL').html($('#consentOccupationalTherapy').val());
            $('#ppConsentOccupationalTherapy').html("No");
        }
        if ($('#consentSpeechTherapy').is(':checked')) {
            $('#ppConsentSpeechTherapyL').html($('#consentSpeechTherapy:checked').val());
            $('#ppConsentSpeechTherapy').html("Yes");
        } else {
            $('#ppConsentSpeechTherapyL').html($('#consentSpeechTherapy').val());
            $('#ppConsentSpeechTherapy').html("No");
        }
        if ($('#consentClassroom').is(':checked')) {
            $('#ppConsentClassroomL').html($('#consentClassroom:checked').val());
            $('#ppConsentClassroom').html("Yes");
        } else {
            $('#ppConsentClassroomL').html($('#consentClassroom').val());
            $('#ppConsentClassroom').html("No");
        }
        if ($('#consentPsychosocial').is(':checked')) {
            $('#ppConsentPsychosocialL').html($('#consentPsychosocial:checked').val());
            $('#ppConsentPsychosocial').html("Yes");
        } else {
            $('#ppConsentPsychosocialL').html($('#consentPsychosocial').val());
            $('#ppConsentPsychosocial').html("No");
        }
        if ($('#consentCognitive').is(':checked')) {
            $('#ppConsentCognitiveL').html($('#consentCognitive:checked').val());
            $('#ppConsentCognitive').html("Yes");
        } else {
            $('#ppConsentCognitiveL').html($('#consentCognitive').val());
            $('#ppConsentCognitive').html("No");
        }
        if ($('#consentOther').is(':checked')) {
            $('#ppConsentOtherL').html($('#consentOtherText').val());
            $('#ppConsentOther').html("Yes");
            $('#ppConsentOtherText').html($('#consentOtherText').val());
        } else {
            $('#ppConsentOtherL').html($('#consentOther').val());
            $('#ppConsentOther').html("No");
        }
        $('#ppConsentSignedDate').html(todaysdate);


        //-----------------------------------------------------------------------

        $('html,body').scrollTop(0);
        $('#printPreviewReleaseFormOVER').show();
        $('#formReleaseForm').hide();
    });
    
    
    $("#printButtonCR").click(function () {
        var mode = 'iframe';
        var close = mode === "popup";
        var options = {mode: mode, popClose: close};
        $("#printPreviewReleaseForm").printArea(options);
    });

});
