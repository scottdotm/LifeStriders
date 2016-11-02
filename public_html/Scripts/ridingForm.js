$(document).ready(function (e) {
    var d = new Date();
    var curr_date = d.getDate();
    //Months are zero based
    var curr_month = d.getMonth() + 1;
    var curr_year = d.getFullYear();
    $('html,body').scrollTop(0);
    $('#printPreviewRiderFormOVER').hide();
    
    $('#printPreviewButton').click(function (e) {
        var todaysdate = curr_month + "-" + curr_date + "-" + curr_year;
        if ($('#opt1').is(':checked')) {
            $('#pRiderType').text('Therapeutic Riding');
        }else if ($('#opt2').is(':checked')) {
            $('#pRiderType').text('Occupational Therapy/Hippotherapy');
        }
        $('#pFirstName').html($('#firstName').val());
        $('#pLastName').html($('#lasstName').val());
        $('#pBirthDate').html($('#birthDate').val());
        $('#pHomePhone').html($('#homePhone').val());
        $('#pEmail').html($('#email').val());
        $('#pAddress').html($('#address').val());
        $('#pCity').html($('#city').val());
        $('#pState').html($('#state').val());
        $('#pZip').html($('#zip').val());
        $('#pDoctor').html($('#doctor').val());
        $('#pMedical').html($('#medical').val());
        $('#pInsurance').html($('#insurance').val());
        $('#pPolicyNo').html($('#policyNo').val());
        $('#pPrimaryDob').html($('#primaryDob').val());
        $('#pAllergies').html($('#allergies').val());
        $('#pMedications').html($('#medications').val());
        $('#participantSignedDate').html(todaysdate);
        $('#guardianSignedDate').html(todaysdate);
        $('#photoSignedDate').html(todaysdate);
        

        //--------------------------------------------------------
        
        $('html,body').scrollTop(0);
        $('#printPreviewRiderFormOVER').show();
        $('#formRiderForm').hide();
    });


    $("#printButton").click(function () {
        var mode = 'iframe';
        var close = mode === "popup";
        var options = {mode: mode, popClose: close};
        $("#printPreviewRiderForm").printArea(options);
    });
 
 });
