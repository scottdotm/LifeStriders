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
    
    /* adds another emergency contact and stops at 3*/
    var count = 1;
    $('#addEMT').click(function () {
        count++;
        $('#EMT'+count).show();
        $('#ppEMT'+count).show();
        
        if (count === 3) {
            $('#addEMT').prop("disabled",true);
        }

    });
    /* toggles the comment text area on the health history*/
    $('.healthCheck').change(function () {
        if ($(this).is(':checked')) {
            
            if (this.value == "vision") {
                $('#PHH1').show();
            } else if (this.value == "hearing") {
                $('#PHH2').show();
            } else if (this.value == "sensation") {
                $('#PHH3').show();
            } else if (this.value == "comm") {
                $('#PHH4').show();
            } else if (this.value == "heart") {
                $('#PHH5').show();
            } else if (this.value == "breathing") {
                $('#PHH6').show();
            } else if (this.value == "digest") {
                $('#PHH7').show();
            } else if (this.value == "eliminate") {
                $('#PHH8').show();
            } else if (this.value == "circulate") {
                $('#PHH9').show();
            } else if (this.value == "emotion") {
                $('#PHH10').show();
            } else if (this.value == "behave") {
                $('#PHH11').show();
            } else if (this.value == "pain") {
                $('#PHH12').show();
            } else if (this.value == "bone") {
                $('#PHH13').show();
            } else if (this.value == "muscle") {
                $('#PHH14').show();
            } else if (this.value == "think") {
                $('#PHH15').show();
            } else if (this.value == "allergy") {
                $('#PHH16').show();
            }
        } else {
            if (this.value == "vision") {
                $('#PHH1').hide();
            } else if (this.value == "hearing") {
                $('#PHH2').hide();
            } else if (this.value == "sensation") {
                $('#PHH3').hide();
            } else if (this.value == "comm") {
                $('#PHH4').hide();
            } else if (this.value == "heart") {
                $('#PHH5').hide();
            } else if (this.value == "breathing") {
                $('#PHH6').hide();
            } else if (this.value == "digest") {
                $('#PHH7').hide();
            } else if (this.value == "eliminate") {
                $('#PHH8').hide();
            } else if (this.value == "circulate") {
                $('#PHH9').hide();
            } else if (this.value == "emotion") {
                $('#PHH10').hide();
            } else if (this.value == "behave") {
                $('#PHH11').hide();
            } else if (this.value == "pain") {
                $('#PHH12').hide();
            } else if (this.value == "bone") {
                $('#PHH13').hide();
            } else if (this.value == "muscle") {
                $('#PHH14').hide();
            } else if (this.value == "think") {
                $('#PHH15').hide();
            } else if (this.value == "allergy") {
                $('#PHH16').hide();
            }
        }
    });
    /* Toggles The Guardians tab*/
    $('#PAguardianCheckbox').change(function () {
        if ($(this).is(':checked')) {
            $('#g1').show();
            $('#g2').show();
            $('#g3').show();
            $('#g4').show();
            $('#g5').show();
            $('#g6').show();
            $('#g7').show();
            $('#ppG1').show();
            $('#ppG2').show();
        } else {
            $('#g1').hide();
            $('#g2').hide();
            $('#g3').hide();
            $('#g4').hide();
            $('#g5').hide();
            $('#g6').hide();
            $('#g7').hide();
            $('#ppG1').hide();
            $('#ppG2').hide();
            $('#PAguardianFirstName').val("");
            $('#PAguardianLastName').val("");
            $('#PAguardianAddress').val("");
            $('#PAguardianCity').val("");
            $('#PAguardianState').val("");
            $('#PAguardianZip').val("");
            $('#PAguardianPhone').val("");
        }

    });
    // Brings up the hidden half of the page with the fields filled out for print preview
    $('#printPreviewButton').click(function (e) {
        // Formats the date as mm-dd-yyyy
        var todaysdate = curr_month + "-" + curr_date + "-" + curr_year;



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
        if ($('#PAguardianFirstName').val() == "" && $('#PAguardianLastName').val() == "") {
            $('#ppNameGuard').html("Participant's Name")
            $('#ppEMTName').html($('#PAfirstName').val() + " " + $('#PAlastName').val());
        } else {
            $('#ppNameGuard').html("Guardian's Name")
            $('#ppEMTName').html($('#PAguardianFirstName').val() + " " + $('#PAguardianLastName').val());
        }
        $('#ppEMTSignedDate').html(todaysdate);


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

        $('#ppGLRPartName').html($('#PAfirstName').val() + " " + $('#PAlastName').val());
        $('#ppGLRPartSignedDate').html(todaysdate);
        if ($('#PAguardianFirstName').val() !== "" && $('#PAguardianLastName').val() !== "") {
            $('#ppGLRGuardSignBox').show();
            $('#ppGLRGuardianName').html($('#PAguardianFirstName').val() + " " + $('#PAguardianLastName').val());
            $('#ppGLRGuardianSignedDate').html(todaysdate);
            $('#ppGLRPhotoGuardName').html("Guardian's Name");
            $('#ppGLRPhotoName').html($('#PAguardianFirstName').val() + " " + $('#PAguardianLastName').val());
        } else {
            $('#ppGLRPhotoGuardName').html("Participant's Name");
            $('#ppGLRPhotoName').html($('#PAfirstName').val() + " " + $('#PAlastName').val());
        }
        $('#ppGLRPhotoSignedDate').html(todaysdate);





        //***********************************************************************
        // Safety Rules
        //***********************************************************************
        $('#ppSafetyRulesPartName').html($('#PAfirstName').val() + " " + $('#PAlastName').val());
        $('#ppSafetyRulesPartSignDate').html(todaysdate);
        if ($('#PAguardianFirstName').val() !== "" && $('#PAguardianLastName').val() !== "") {
            $('#ppSafetyRulesGuardSignBox').show();
            $('#ppSafetyRulesGuardName').html($('#PAguardianFirstName').val() + " " + $('#PAguardianLastName').val());
            $('#ppSafetyRulesGuardSignDate').html(todaysdate);
        }


        //***********************************************************************
        // Dismissal of Volunteers and Guest From Center Activities
        //***********************************************************************

        $('#ppDismisalPartName').html($('#PAfirstName').val() + " " + $('#PAlastName').val());
        $('#ppDismisalPartSignDate').html(todaysdate);
        if ($('#PAguardianFirstName').val() !== "" && $('#PAguardianLastName').val() !== "") {
            $('#ppDismisalGuardSignBox').show();
            $('#ppDismisalGuardName').html($('#PAguardianFirstName').val() + " " + $('#PAguardianLastName').val());
            $('#ppDismisalGuardSignDate').html(todaysdate);
        }

        //***********************************************************************
        // LifeStriders Make-Up and Payment Policy
        //***********************************************************************

        $('#ppPaymentPartName').html($('#PAfirstName').val() + " " + $('#PAlastName').val());
        $('#ppPaymentPartSignDate').html(todaysdate);
        if ($('#PAguardianFirstName').val() !== "" && $('#PAguardianLastName').val() !== "") {
            $('#ppPaymentGuardSignBox').show();
            $('#ppPaymentGuardName').html($('#PAguardianFirstName').val() + " " + $('#PAguardianLastName').val());
            $('#ppPaymentGuardSignDate').html(todaysdate);
        }
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
