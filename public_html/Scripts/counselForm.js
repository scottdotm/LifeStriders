//JavaScript Document

//Hide one div and show a div. tado

$(document).ready(function (e) {
 
    //hide the print preview page to start off
    $('#printPreviewConsultingFormOVER').hide();

    //Gets the values from the form and puts the values on the print preview page
    $('#printPreviewButton').click(function (e) {
        


        $('#printPreviewTD').html($('#todayDate').val());
        $('#printPreviewFN').html($('#firstName').val());
        $('#printPreviewLN').html($('#lastName').val());
        $('#printPreviewBD').html($('#birthDate').val());
        $('#printPreviewSX').html($('#sex').val());
        $('#printPreviewMS').html($('#marital').val());

        $('#pAddress').html($('#cAddress').val());
        $('#pCity').html($('#cCity').val());
        $('#pState').html($('#cState').val());
        $('#pZipCode').html($('#cZipCode').val());

        $('#pHomePhone').html($('#homePhone').val());
        $('#pMyEmail').html($('#myEmail').val());
        $('#pWorkPhone').html($('#workPhone').val());
        $('#pCellPhone').html($('#cellPhone').val());

        $('#pEmployersName').html($('#employerName').val());
        $('#pSocSecNum').html($('#socSecNum').val());


        // if person is not a minor, hides the row so blank information isn't shown
        if ($('#parentName').val().length === 0 || $('#hisherDOB').val().length === 0 || $('#hisherSSN').val().length === 0) {
            $('#listRow5').hide();
        } else {
            $('#pParentName').html($('#parentName').val());
            $('#pHisHerDOB').html($('#hisherDOB').val());
            $('#pHisHerSSN').html($('#hisherSSN').val());
        }

        $('#pEmerCon').html($('#emerCon').val());
        $('#pEmerRel').html($('#emerRelation').val());
        $('#pEmerPhone').html($('#emerPhone').val());

        $('#pHearAbout').html($('#hearAbout').val());

        $('#pAllegMed').html($('#allegMed').val());

        $('#pCurrentCare').html($('#currentCare').val());
        $('#pCurrentName').html($('#currentName').val());
        $('#pCurrentDateSeen').html($('#currentDateSeen').val());
        $('#pCurrentProblem').html($('#currentProblem').val());

        $('#pMedDocName').html($('#medDoctorName').val());
        $('#pMedDocPhone').html($('#medDocPhone').val());
        $('#pMedDocDate').html($('#medDocDate').val());

        $('#pSigMedProb').html($('#sigMedProb').val());

        $('#pPastSurg').html($('#pastSurg').val());

        $('#pPastAccid').html($('#pastAccid').val());

        $('#pRateHealth').html($('#rateHealth').val());

        $('#pReasonSeekTreat').html($('#reasonSeekTreat').val());

        $('#pExpectTreatment').html($('#expectTreatment').val());

        $('#pMentalHealthTreatment').html($('#mentalHealthTreatment').val());

        //--------------------------------------------------------

        //Showes the print review(print preview) page and hides the input form
        $('#printPreviewConsultingFormOVER').show();
        $('#formConsultingForm').hide();
    });

    //takes the review page(print preview page) and launches the iframe to print.
    $("#printButton").click(function () {
        var mode = 'iframe';
        var close = mode === "popup";
        var options = {mode: mode, popClose: close};
        $("#printPreviewConsultingForm").printArea(options);
    });






});
