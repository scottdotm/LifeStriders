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

    // Hides the Print Preview Half of this Form at start up
    $('#printPreviewRiderFormOVER').hide();

    // Enables print Button by clicking the physicians forms buttion
    $('#enablePrint').click(function () {
        $('#printButtonRF').prop('disabled', false);
    });

    // Simulates a back button by hiding the print preview page and showing the rider form
    // Also it scroles to the top
    $('#edit').click(function () {
        $('#printPreviewRiderFormOVER').hide();
        $('html,body').scrollTop(0);
        $('#formRiderForm').show();
    });

    /* Scrolls the page to the top each time a next or previous button is clicked*/
    $('#PAnext,#PHHnext,#EMTnext,#PHHprevious,#EMTprevious,#PRprevious,#PRnext,#Cprevious,\n\
        #headingOne,#headingTwo,#headingThree,#headingFour,#headingFive').click(function () {
        $('html,body').scrollTop(225);
    });

    /* Adds another emergency contact by showing the hidden divs
     * and stops at 3*/
    var count = 1;
    $('#addEMT').click(function () {
        count++;
        $('#EMT' + count).show();
        $('#ppEMT' + count).show();

        if (count === 3) {
            $('#addEMT').prop("disabled", true);
        }

    });
    /* Toggles the comment text area on the health history*/
    $('.healthCheck').change(function () {
        // If the value checked is the same show the comment text area and focus the cursor
        // in the text area.
        // The prefix 'PHH' Stands for Participants Health History
        if ($(this).is(':checked')) {
            if (this.value === "vision") {
                $('#PHH1').show(function () {
                    $('#PHHvisionComment').focus();
                });
            } else if (this.value === "hearing") {
                $('#PHH2').show(function () {
                    $('#PHHhearingComment').focus();
                });
            } else if (this.value === "sensation") {
                $('#PHH3').show(function () {
                    $('#PHHsensationComment').focus();
                });
            } else if (this.value === "comm") {
                $('#PHH4').show(function () {
                    $('#PHHcommComment').focus();
                });
            } else if (this.value === "heart") {
                $('#PHH5').show(function () {
                    $('#PHHheartComment').focus();
                });
            } else if (this.value === "breathing") {
                $('#PHH6').show(function () {
                    $('#PHHbreathingComment').focus();
                });
            } else if (this.value === "digest") {
                $('#PHH7').show(function () {
                    $('#PHHdigestComment').focus();
                });
            } else if (this.value === "eliminate") {
                $('#PHH8').show(function () {
                    $('#PHHeliminateComment').focus();
                });
            } else if (this.value === "circulate") {
                $('#PHH9').show(function () {
                    $('#PHHcirculateComment').focus();
                });
            } else if (this.value === "emotion") {
                $('#PHH10').show(function () {
                    $('#PHHemotionComment').focus();
                });
            } else if (this.value === "behave") {
                $('#PHH11').show(function () {
                    $('#PHHbehaveComment').focus();
                });
            } else if (this.value === "pain") {
                $('#PHH12').show(function () {
                    $('#PHHpainComment').focus();
                });
            } else if (this.value === "bone") {
                $('#PHH13').show(function () {
                    $('#PHHboneComment').focus();
                });
            } else if (this.value === "muscle") {
                $('#PHH14').show(function () {
                    $('#PHHmuscleComment').focus();
                });
            } else if (this.value === "think") {
                $('#PHH15').show(function () {
                    $('#PHHthinkComment').focus();
                });
            } else if (this.value === "allergy") {
                $('#PHH16').show(function () {
                    $('#PHHallergyComment').focus();
                });
            }
            // The opposite happens if the value is unchecked the corrisponding text area is hidden
            // If a value is entered hiding and showing it does not delete the entered text.
        } else {
            if (this.value === "vision") {
                $('#PHH1').hide();
            } else if (this.value === "hearing") {
                $('#PHH2').hide();
            } else if (this.value === "sensation") {
                $('#PHH3').hide();
            } else if (this.value === "comm") {
                $('#PHH4').hide();
            } else if (this.value === "heart") {
                $('#PHH5').hide();
            } else if (this.value === "breathing") {
                $('#PHH6').hide();
            } else if (this.value === "digest") {
                $('#PHH7').hide();
            } else if (this.value === "eliminate") {
                $('#PHH8').hide();
            } else if (this.value === "circulate") {
                $('#PHH9').hide();
            } else if (this.value === "emotion") {
                $('#PHH10').hide();
            } else if (this.value === "behave") {
                $('#PHH11').hide();
            } else if (this.value === "pain") {
                $('#PHH12').hide();
            } else if (this.value === "bone") {
                $('#PHH13').hide();
            } else if (this.value === "muscle") {
                $('#PHH14').hide();
            } else if (this.value === "think") {
                $('#PHH15').hide();
            } else if (this.value === "allergy") {
                $('#PHH16').hide();
            }
        }
    });
    /* Toggles The option to fill in the guardian fields
     * The prefix 'pp' stands for print preview
     * Thr prefix 'PA' stands for Participant's Application*/
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
        // The lowercase 'pp' prefix stands for print preview
        // The the Uppercase "PA" prefix stands for Participants Aplication
        // Each section of the accordion is prefexed by its title
        $('#ppPAFirstName').html($('#PAfirstName').val());
        $('#ppPALastName').html($('#PAlastName').val());
        // If Male is checked show the 'male' string
        if ($('#PAoptMale').is(':checked')) {
            $('#ppPAGender').text('Male');
            // If female is checked show the 'female' string
        } else if ($('#PAoptFemale').is(':checked')) {
            $('#ppPAGender').text('Female');
        }
        $('#ppPABirthDate').html($('#PAbirthDate').val());
        $('#ppPAHeight').html($('#PAheight').val());
        $('#ppPAWeight').html($('#PAweight').val());
        // If no is checked show the 'no' string
        if ($('#PAoptNo').is(':checked')) {
            $('#ppPAVeteran').text('No');
            // If yes is checked show the 'yes' string
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
        // The Uppercase 'PHH' prefix stands for Participant's Health History
        // Each if statement checks if the value of the checkbox matches the value of the 
        // corrisponding textarea, opposite is true if the checkbox is unchecked
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
        // Hides the "other" div on the print preview page if there is nothing entered
        if ($('#PHHother').val() === "") {
            $('#ppPHHOtherText').hide();
            $('#ppPHHOther').hide();
        } else {
            $('#ppPHHOtherText').html($('#PHHother').val());
            $('#ppPHHOther').html($("input[name='other']:checked").val());
        }

        //***********************************************************************
        //Authorization for Emergency Medical Treatment Form
        //***********************************************************************
        // The Uppercase "EMT" prefix string stands for Emergency Medical Treatment
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
        // If logic to display the participants name or if there is a guardian the guardian name
        // on the line where the signature goes
        if ($('#PAguardianFirstName').val() === "" && $('#PAguardianLastName').val() === "") {
            $('#ppNameGuard').html("Participant's Name");
            $('#ppEMTName').html($('#PAfirstName').val() + " " + $('#PAlastName').val());
        } else {
            $('#ppNameGuard').html("Guardian's Name");
            $('#ppEMTName').html($('#PAguardianFirstName').val() + " " + $('#PAguardianLastName').val());
        }
        // Displays todays date on the line where the signature goes
        $('#ppEMTSignedDate').html(todaysdate);


        //***********************************************************************
        // Progress Reporting
        //***********************************************************************
        // The Uppercase "PR" prefix stands for Progress Reporting
        $('#ppPRquestion1').html($('#PRquestion1').val());
        $('#ppPRquestion2').html($("input[name='concern']:checked").val());
        $('#ppPRother').html($('#PRother').val());
        $('#ppPRquestion3').html($('#PRquestion3').val());
        $('#ppPRquestion4').html($("input[name='PRquestion4']:checked").val());
        $('#ppPRquestion5').html($("input[name='PRquestion5']:checked").val());
        $('#ppPRadditionalComments').html($('#PRadditionalComments').val());


        //***********************************************************************
        //Consent For Release Form
        //***********************************************************************

        $('#ppConsentDoctorName').html($('#consentDoctorName').val());
        $('#ppConsentPartName').html($('#consentPartName').val());
        $('#ppConsentPartDob').html($('#consentPartDob').val());
        // If nothing is selected on who the information should be released to
        // It returns as if they selected all
        // Else the actuall selection is displayed
        if ($('#consentQuestion3').val() === "0") {
            $('#ppConsentQuestion3').html("Veronica Sosa/Chrystal Schipper/Amber Osterberger/LifeStriders Therapists/Intelirev");
        } else {
            $('#ppConsentQuestion3').html($('#consentQuestion3').val());
        }
        // Shows what records are to be released
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
        // Displays todays date on the line where the signature goes
        $('#ppConsentSignedDate').html(todaysdate);

        //***********************************************************************
        // Participant Waiver and Guest Liability Release Agreement
        //***********************************************************************
        // The Upercase "GLR" prefix stands for Guest Liability Release
        $('#ppGLRPartName').html($('#PAfirstName').val() + " " + $('#PAlastName').val());
        $('#ppGLRPartSignedDate').html(todaysdate);
        // If there is something entered in the guardian name text fields it shows the guardian name
        // If there is not sometihing it just shows the participant's name instead
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
        // Shows todays date
        $('#ppGLRPhotoSignedDate').html(todaysdate);





        //***********************************************************************
        // Safety Rules
        //***********************************************************************
        // SHows either the guardians name if needed
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
        // SHows either the guardians name if needed
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
        // SHows either the guardians name if needed
        $('#ppPaymentPartName').html($('#PAfirstName').val() + " " + $('#PAlastName').val());
        $('#ppPaymentPartSignDate').html(todaysdate);
        if ($('#PAguardianFirstName').val() !== "" && $('#PAguardianLastName').val() !== "") {
            $('#ppPaymentGuardSignBox').show();
            $('#ppPaymentGuardName').html($('#PAguardianFirstName').val() + " " + $('#PAguardianLastName').val());
            $('#ppPaymentGuardSignDate').html(todaysdate);
        }
        //-----------------------------------------------------------------------
        // scrolls to the top of the page while hiding all the input fields and showing the print preview page
        $('html,body').scrollTop(0);
        $('#printPreviewRiderFormOVER').show();
        $('#formRiderForm').hide();
    });

    // Captures the print preview print area and sends it to the printer
    $("#printButtonRF").click(function () {
        var mode = 'iframe';
        var close = mode === "popup";
        var options = {mode: mode, popClose: close};
        $("#printPreviewRiderForm").printArea(options);

    });

});
