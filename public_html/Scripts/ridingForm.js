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
    $('#printPreviewRiderFormOVER').hide();
    // Brings up the hidden half of the page with the fields filled out for print preview
    $('#printPreviewButton').click(function (e) {
        // Formats the date as mm-dd-yyyy
        var todaysdate = curr_month + "-" + curr_date + "-" + curr_year;

        //***********************************************************************
        //Authorization for Emergency Medical Treatment Form
        //***********************************************************************

        if ($('#EMTopt1').is(':checked')) {
            $('#ppEMTRiderType').text('Therapeutic Riding');
        } else if ($('#EMTopt2').is(':checked')) {
            $('#ppEMTRiderType').text('Occupational Therapy/Hippotherapy');
        }
        $('#ppEMTFirstName').html($('#EMTfirstName').val());
        $('#ppEMTLastName').html($('#EMTlastName').val());
        $('#ppEMTBirthDate').html($('#EMTbirthDate').val());
        $('#ppEMTHomePhone').html($('#EMThomePhone').val());
        $('#ppEMTEmail').html($('#EMTemail').val());
        $('#ppEMTAddress').html($('#EMTaddress').val());
        $('#ppEMTCity').html($('#EMTcity').val());
        $('#ppEMTState').html($('#EMTstate').val());
        $('#ppEMTZip').html($('#EMTzip').val());
        $('#ppEMTDoctor').html($('#EMTdoctor').val());
        $('#ppEMTMedical').html($('#EMTmedical').val());
        $('#ppEMTInsurance').html($('#EMTinsurance').val());
        $('#ppEMTPolicyNo').html($('#EMTpolicyNo').val());
        $('#ppEMTPrimaryDob').html($('#EMTprimaryDob').val());
        $('#ppEMTMedicationAllergies').html($('#EMTmedicationAllergies').val());
        $('#ppEMTCurrentMedications').html($('#EMTcurrentMedications').val());
        $('#ppEMTContactName1').html($('#EMTcontactName1').val());
        $('#ppEMTRelation1').html($('#EMTrelation1').val());
        $('#ppEMTContactNum1').html($('#EMTcontactNum1').val());
        $('#ppEMTContactName2').html($('#EMTcontactName2').val());
        $('#ppEMTRelation2').html($('#EMTrelation2').val());
        $('#ppEMTContactNum2').html($('#EMTcontactNum2').val());
        $('#ppEMTContactName3').html($('#EMTcontactName3').val());
        $('#ppEMTRelation3').html($('#EMTrelation3').val());
        $('#ppEMTContactNum3').html($('#EMTcontactNum3').val());
        $('#ppEMTSignedDate').html(todaysdate);
        $('#ppEMTConsentSign').html("_____________________________________________________");

        //***********************************************************************
        // Participant’s Application 
        //***********************************************************************

        $('#ppPAFirstName').html($('#PAfirstName').val());
        $('#ppPALastName').html($('#PAlastName').val());
        if ($('#PAoptMale').is(':checked')) {
            $('#ppPAGender').text('Male');
        } else if ($('#PAoptFemale').is(':checked')) {
            $('#ppPAGender').text('Female');
        }
        $('#ppPABirthDate').html($('#PAbirthDate').val());
        $('#ppPAHeight').html($('#PAheight').val());
        $('#ppPAWeight').html($('#PAweight').val());
        if ($('#PAoptNo').is(':checked')) {
            $('#ppPAVeteran').text('No');
        } else if ($('#PAoptYes').is(':checked')) {
            $('#ppPAVeteran').text('Yes');
        }
        $('#ppPAEthnicity').html($('#PAethnicity').val());
        $('#ppPAAddress').html($('#PAaddress').val());
        $('#ppPACity').html($('#PAcity').val());
        $('#ppPAState').html($('#PAstate').val());
        $('#ppPAZip').html($('#PAzip').val());
        $('#ppPAPhone').html($('#PAphone').val());
        $('#ppPAAltPhone').html($('#PAaltPhone').val());
        $('#ppPAEmail').html($('#PAemail').val());
        if ($('#PAoptEmployer').is(':checked')) {
            $('#ppPACompany').text('Employer');
        } else if ($('#PAoptSchool').is(':checked')) {
            $('#ppPACompany').text('School');
        } else if ($('#PAoptOther').is(':checked')) {
            $('#ppPACompany').text('Other');
        }
        $('#ppPACompanyName').html($('#PAcompanyName').val());
        $('#ppPACompanyAddress').html($('#PAcompanyAddress').val());
        $('#ppPACompanyCity').html($('#PAcompanyCity').val());
        $('#ppPACompanyState').html($('#PAcompanyState').val());
        $('#ppPACompanyZip').html($('#PAcompanyZip').val());
        $('#ppPACompanyPhone').html($('#PAcompanyPhone').val());
        $('#ppPAGuardianFirstName').html($('#PAguardianFirstName').val());
        $('#ppPAGuardianLastName').html($('#PAguardianLastName').val());
        $('#ppPAGuardianAddress').html($('#PAguardianAddress').val());
        $('#ppPAGuardianCity').html($('#PAguardianCity').val());
        $('#ppPAGuardianState').html($('#PAguardianState').val());
        $('#ppPAGuardianZip').html($('#PAguardianZip').val());
        $('#ppPAGuardianPhone').html($('#PAguardianPhone').val());
        $('#ppPAReferral').html($('#PAreferral').val());
        $('#ppPAReferralNum').html($('#PAreferralNum').val());
        $('#ppPAHearAbout').html($('#PAhearAbout').val());

        //***********************************************************************
        // Participant’s Health History
        //***********************************************************************

        $('#ppPHHDiagnosis').html($('#PHHdiagnosis').val());
        if ($('#PHHvision').is(':checked')) {
            $('#ppPHHVision').html("Yes");
            $('#ppPHHVisionComment').html($('#PHHvisionComment').val());
        } else {
            $('#ppPHHVision').html("No");
        }
        if ($('#PHHhearing').is(':checked')) {
            $('#ppPHHHearing').html("Yes");
            $('#ppPHHHearingComment').html($('#PHHhearingComment').val());
        } else {
            $('#ppPHHHearing').html("No");
        }
        if ($('#PHHsensation').is(':checked')) {
            $('#ppPHHSensation').html("Yes");
            $('#ppPHHSensationComment').html($('#PHHsensationComment').val());
        } else {
            $('#ppPHHSensation').html("No");
        }
        if ($('#PHHcomm').is(':checked')) {
            $('#ppPHHComm').html("Yes");
            $('#ppPHHCommComment').html($('#PHHcommComment').val());
        } else {
            $('#ppPHHComm').html("No");
        }
        if ($('#PHHheart').is(':checked')) {
            $('#ppPHHHeart').html("Yes");
            $('#ppPHHHeartComment').html($('#PHHheartComment').val());
        } else {
            $('#ppPHHHeart').html("No");
        }
        if ($('#PHHbreathing').is(':checked')) {
            $('#ppPHHBreathing').html("Yes");
            $('#ppPHHBreathingComment').html($('#PHHbreathingComment').val());
        } else {
            $('#ppPHHBreathing').html("No");
        }
        if ($('#PHHdigest').is(':checked')) {
            $('#ppPHHDigest').html("Yes");
            $('#ppPHHDigestComment').html($('#PHHdigestComment').val());
        } else {
            $('#ppPHHDigest').html("No");
        }
        if ($('#PHHeliminate').is(':checked')) {
            $('#ppPHHEliminate').html("Yes");
            $('#ppPHHEliminateComment').html($('#PHHeliminateComment').val());
        } else {
            $('#ppPHHEliminate').html("No");
        }
        if ($('#PHHcirculate').is(':checked')) {
            $('#ppPHHCirculate').html("Yes");
            $('#ppPHHCirculateComment').html($('#PHHcirculateComment').val());
        } else {
            $('#ppPHHCirculate').html("No");
        }
        if ($('#PHHemotion').is(':checked')) {
            $('#ppPHHEmotion').html("Yes");
            $('#ppPHHEmotionComment').html($('#PHHemotionComment').val());
        } else {
            $('#ppPHHEmotion').html("No");
        }
        if ($('#PHHbehave').is(':checked')) {
            $('#ppPHHBehave').html("Yes");
            $('#ppPHHBehaveComment').html($('#PHHbehaveComment').val());
        } else {
            $('#ppPHHBehave').html("No");
        }
        if ($('#PHHpain').is(':checked')) {
            $('#ppPHHPain').html("Yes");
            $('#ppPHHPainComment').html($('#PHHpainComment').val());
        } else {
            $('#ppPHHPain').html("No");
        }
        if ($('#PHHbone').is(':checked')) {
            $('#ppPHHBone').html("Yes");
            $('#ppPHHBoneComment').html($('#PHHboneComment').val());
        } else {
            $('#ppPHHBone').html("No");
        }
        if ($('#PHHmuscle').is(':checked')) {
            $('#ppPHHMuscle').html("Yes");
            $('#ppPHHMuscleComment').html($('#PHHmuscleComment').val());
        } else {
            $('#ppPHHMuscle').html("No");
        }
        if ($('#PHHthink').is(':checked')) {
            $('#ppPHHThink').html("Yes");
            $('#ppPHHThinkComment').html($('#PHHthinkComment').val());
        } else {
            $('#ppPHHThink').html("No");
        }
        if ($('#PHHallergy').is(':checked')) {
            $('#ppPHHAllergy').html("Yes");
            $('#ppPHHAllergyComment').html($('#PHHallergyComment').val());
        } else {
            $('#ppPHHAllergy').html("No");
        }
        $('#ppPHHMedications').html($('#PHHmedications').val());
        $('#ppPHHFunction').html($('#PHHfunction').val());
        $('#ppPHHSocial').html($('#PHHsocial').val());
        $('#ppPHHGoals').html($('#PHHgoals').val());
        $('#ppPHHTips').html($('#PHHtips').val());
        $('#ppPHHFriendships').html($("input[name='friendships']:checked").val());
        $('#ppPHHFamily').html($("input[name='family']:checked").val());
        $('#ppPHHJobSchool').html($("input[name='jobSchool']:checked").val());
        $('#ppPHHFinancial').html($("input[name='financial']:checked").val());
        $('#ppPHHPhysical').html($("input[name='physical']:checked").val());
        $('#ppPHHMood').html($("input[name='mood']:checked").val());
        $('#ppPHHConcentrate').html($("input[name='concentrate']:checked").val());
        $('#ppPHHEating').html($("input[name='eating']:checked").val());
        $('#ppPHHSleeping').html($("input[name='sleeping']:checked").val());
        $('#ppPHHRelationships').html($("input[name='relationships']:checked").val());
        $('#ppPHHAnger').html($("input[name='anger']:checked").val());
        $('#ppPHHOtherText').html($('#PHHother').val());
        $('#ppPHHOther').html($("input[name='other']:checked").val());

        //***********************************************************************
        // Progress Reporting
        //***********************************************************************

        $('#ppPRquestion1').html($('#PRquestion1').val());
        $('#ppPRquestion2').html($("input[name='concern']:checked").val());
        $('#ppPRother').html($('#PRother').val());
        $('#ppPRquestion3').html($('#PRquestion3').val());
        $('#ppPRquestion4').html($("input[name='PRquestion4']:checked").val());
        $('#ppPRquestion5').html($("input[name='PRquestion5']:checked").val());
        $('#ppPRadditionalComments').html($('#PRadditionalComments').val());


        //***********************************************************************
        // Participant Waiver and Guest Liability Release Agreement
        //***********************************************************************

        $('#ppGLRParticipantsName').html($('#PAfirstName').val() + " " + $('#PAlastName').val());
        $('#ppGLRParticipantSignedDate').html(todaysdate);
        $('#ppGLRGuardianSignedDate').html(todaysdate);
        $('#ppGLRPhotoSignedDate').html(todaysdate);

        //***********************************************************************
        // Safety Rules
        //***********************************************************************

        $('#ppSafetyRulesPartSignDate').html(todaysdate);
        $('#ppSafetyRulesGuardSignDate').html(todaysdate);

        //***********************************************************************
        // Dismissal of Volunteers and Guest From Center Activities
        //***********************************************************************
        
        $('#ppDismisalPartName').html($('#PAfirstName').val() + " " + $('#PAlastName').val());
        $('#ppDismisalPartSignDate').html(todaysdate);
        
        $('#ppDismisalGuardName').html($('#PAguardianFirstName').val() + " " + $('#PAguardianLastName').val());
        $('#ppDismisalGuardSignDate').html(todaysdate);

        //***********************************************************************
        // LifeStriders Make-Up and Payment Policy
        //***********************************************************************

        $('#ppPaymentPartName').html($('#PAfirstName').val() + " " + $('#PAlastName').val());
        $('#ppPaymentPartSignDate').html(todaysdate);
        
        $('#ppPaymentGuardName').html($('#PAguardianFirstName').val() + " " + $('#PAguardianLastName').val());
        $('#ppPaymentGuardSignDate').html(todaysdate);
        
        //-----------------------------------------------------------------------

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
