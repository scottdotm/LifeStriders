//JavaScript Document

//Hide one div and show a div. tado

$(document).ready(function (e) {
    var d = new Date();
    var curr_date = d.getDate();
    //Months are zero based
    var curr_month = d.getMonth() + 1;
    var curr_year = d.getFullYear();
    $('html,body').scrollTop(0);
    $('#printPreviewConsultingFormOVER').hide();
    
    

    var medId = 1;
    $("#add-medication").click(function(){
        medId++;
        $("#meds").append('<div class="input-group medication-'+medId+'">'+
            '\n\<label for="medication-'+medId+'-name">Medication</label>'+
            '\n\<input type="text" class="medication-name" id="medication-'+medId+'-name">'+
            '\n\<label for="medication-'+medId+'-prescriber">Prescribed By</label>'+
            '\n\<input type="text" class="medication-prescriber" id="medication-'+medId+'-prescriber">'+
            '\n\<label for="medication-'+medId+'-dosage">Dosage</label>'+
            '\n\<input type="text" class="medication-dosage" id="medication-'+medId+'-dosage">'+
            '\n\<label for="medication-'+medId+'-duration">Taken How Long?</label>'+
            '\n\<input type="text" class="medication-duration" id="medication-'+medId+'-duration">'+
            '\n\</div>')
    });

    $('#printPreviewButton').click(function (e) {
        var todaysdate = curr_month + "-" + curr_date + "-" + curr_year;
        $('#printPreviewTD').html(todaysdate);
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

        $('#pParentName').html($('#parentName').val());
        $('#pHisHerDOB').html($('#hisherDOB').val());
        $('#pHisHerSSN').html($('#hisherSSN').val());

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
        
        $('html,body').scrollTop(0);
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


