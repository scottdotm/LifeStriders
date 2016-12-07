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
    $('#printPreviewMedicalHistoryFormOVER').hide();
    
    $('#edit').click(function () {
        $('#printPreviewMedicalHistoryFormOVER').hide();
        $('html,body').scrollTop(0);
        $('#formMedicalHistoryForm').show();
    });
    /* toggles the comment text area on the health history*/
    $('.healthCheck').change(function () {
        if ($(this).is(':checked')) {

            if (this.value === "medHisAuditory") {
                $('#PHH1').show(function () {
                    $('#medHisAuditoryComment').focus();
                });
            } else if (this.value == "medHisVisual") {
                $('#PHH2').show(function () {
                    $('#medHisVisualComment').focus();
                })
            } else if (this.value == "medHisTactSensation") {
                $('#PHH3').show(function () {
                    $('#medHisTactSensationComment').focus();
                })
            } else if (this.value == "medHisSpeech") {
                $('#PHH4').show(function () {
                    $('#medHisSpeechComment').focus();
                })
            } else if (this.value == "medHisCardiac") {
                $('#PHH5').show(function () {
                    $('#medHisCardiacComment').focus();
                })
            } else if (this.value == "medHisCirculatory") {
                $('#PHH6').show(function () {
                    $('#medHisCirculatoryComment').focus();
                })
            } else if (this.value == "medHisIntegumentary") {
                $('#PHH7').show(function () {
                    $('#medHisIntegumentaryComment').focus();
                })
            } else if (this.value == "medHisImmunity") {
                $('#PHH8').show(function () {
                    $('#medHisImmunityComment').focus();
                })
            } else if (this.value == "medHisPulmonary") {
                $('#PHH9').show(function () {
                    $('#medHisPulmonaryComment').focus();
                })
            } else if (this.value == "medHisNeurologic") {
                $('#PHH10').show(function () {
                    $('#medHisNeurologicComment').focus();
                })
            } else if (this.value == "medHisMuscular") {
                $('#PHH11').show(function () {
                    $('#medHisMuscularComment').focus();
                })
            } else if (this.value == "medHisBalance") {
                $('#PHH12').show(function () {
                    $('#medHisBalanceComment').focus();
                })
            } else if (this.value == "medHisOrthopedic") {
                $('#PHH13').show(function () {
                    $('#medHisOrthopedicComment').focus();
                })
            } else if (this.value == "medHisAllergies") {
                $('#PHH14').show(function () {
                    $('#medHisAllergiesComment').focus();
                })
            } else if (this.value == "medHisLearningDisability") {
                $('#PHH15').show(function () {
                    $('#medHisLearningDisabilityComment').focus();
                })
            } else if (this.value == "medHisCognitive") {
                $('#PHH16').show(function () {
                    $('#medHisCognitiveComment').focus();
                })
            } else if (this.value == "medHisEmotional") {
                $('#PHH17').show(function () {
                    $('#medHisEmotionalComment').focus();
                })
            } else if (this.value == "medHisPain") {
                $('#PHH18').show(function () {
                    $('#medHisPainComment').focus();
                })
            } else if (this.value == "medHisOther") {
                $('#PHH19').show(function () {
                    $('#medHisOtherComment').focus();
                })
            }
        } else {
            if (this.value == "medHisAuditory") {
                $('#PHH1').hide();
            } else if (this.value == "medHisVisual") {
                $('#PHH2').hide();
            } else if (this.value == "medHisTactSensation") {
                $('#PHH3').hide();
            } else if (this.value == "medHisSpeech") {
                $('#PHH4').hide();
            } else if (this.value == "medHisCardiac") {
                $('#PHH5').hide();
            } else if (this.value == "medHisCirculatory") {
                $('#PHH6').hide();
            } else if (this.value == "medHisIntegumentary") {
                $('#PHH7').hide();
            } else if (this.value == "medHisImmunity") {
                $('#PHH8').hide();
            } else if (this.value == "medHisPulmonary") {
                $('#PHH9').hide();
            } else if (this.value == "medHisNeurologic") {
                $('#PHH10').hide();
            } else if (this.value == "medHisMuscular") {
                $('#PHH11').hide();
            } else if (this.value == "medHisBalance") {
                $('#PHH12').hide();
            } else if (this.value == "medHisOrthopedic") {
                $('#PHH13').hide();
            } else if (this.value == "medHisAllergies") {
                $('#PHH14').hide();
            } else if (this.value == "medHisLearningDisability") {
                $('#PHH15').hide();
            } else if (this.value == "medHisCognitive") {
                $('#PHH16').hide();
            } else if (this.value == "medHisEmotional") {
                $('#PHH17').hide();
            } else if (this.value == "medHisPain") {
                $('#PHH18').hide();
            } else if (this.value == "medHisOther") {
                $('#PHH19').hide();
            }
        }
    });

    // Brings up the hidden half of the page with the fields filled out for print preview
    $('#printPreviewButton').click(function (e) {
        // Formats the date as mm-dd-yyyy
        var todaysdate = curr_month + "-" + curr_date + "-" + curr_year;

        //***********************************************************************
        //Medical History Form
        //***********************************************************************

        $('#ppMedHisPartFirst').html($('#medHisPartFirst').val());
        $('#ppMedHisPartLast').html($('#medHisPartLast').val());
        $('#ppMedHisDob').html($('#medHisDob').val());
        $('#ppMedHisHeight').html($('#medHisHeight').val());
        $('#ppMedHisWeight').html($('#medHisWeight').val());
        $('#ppMedHisAddress').html($('#medHisAddress').val());
        $('#ppMedHisCity').html($('#medHisCity').val());
        $('#ppMedHisState').html($('#medHisState').val());
        $('#ppMedHisZip').html($('#medHisZip').val());
        $('#ppMedHisDiagnosis').html($('#medHisDiagnosis').val());
        $('#ppMedHisOnset').html($('#medHisOnset').val());
        $('#ppMedHisSurgeries').html($('#medHisSurgeries').val());
        $('#ppMedHisMedications').html($('#medHisMedications').val());
        $('#ppMedHisSeizureType').html($('#medHisSeizureType').val());
        if ($('#medHisControlledOptYes').is(':checked')) {
            $('#ppMedHisControlled').text('Yes');
        } else if ($('#medHisControlledOptNo').is(':checked')) {
            $('#ppMedHisControlled').text('No');
        }
        $('#ppMedHisLastSeizureDate').html($('#medHisLastSeizureDate').val());
        if ($('#medHisShuntOptYes').is(':checked')) {
            $('#ppMedHisShunt').text('Yes');
        } else if ($('#medHisShuntOptNo').is(':checked')) {
            $('#ppMedHisShunt').text('No');
        }
        $('#ppMedHisRevisionDate').html($('#medHisRevisionDate').val());
        $('#ppMedHisNeeds').html($('#medHisNeeds').val());
        if ($('#medHisIndependentOptNo').is(':checked')) {
            $('#ppMedHisIndependent').text('No');
        } else if ($('#medHisIndependentOptYes').is(':checked')) {
            $('#ppMedHisIndependent').text('Yes');
        }
        if ($('#medHisAssistedOptNo').is(':checked')) {
            $('#ppMedHisAssisted').text('No');
        } else if ($('#medHisAssistedOptYes').is(':checked')) {
            $('#ppMedHisAssisted').text('Yes');
        }
        if ($('#medHisWheelchairOptNo').is(':checked')) {
            $('#ppMedHisWheelchair').text('No');
        } else if ($('#medHisWheelchairOptYes').is(':checked')) {
            $('#ppMedHisWheelchair').text('Yes');
        }
        $('#ppMedHisBraces').html($('#medHisBraces').val());
        $('#ppMedHisAtlantoDensDate').html($('#medHisAtlantoDensDate').val());
        $('#ppMedHisResult').html($('#medHisResult').val());
        $('#ppMedHisSymptoms').html($('#medHisSymptoms').val());

        if ($('#medHisAuditory').is(':checked')) {
            $('#ppMedHisAuditory').html("Yes");
            $('#ppMedHisAuditoryComment').html($('#medHisAuditoryComment').val());
        } else {
            $('#ppMedHisAuditory').html("No");
        }
        if ($('#medHisVisual').is(':checked')) {
            $('#ppMedHisVisual').html("Yes");
            $('#ppMedHisVisualComment').html($('#medHisVisualComment').val());
        } else {
            $('#ppMedHisVisual').html("No");
        }
        if ($('#medHisTactSensation').is(':checked')) {
            $('#ppMedHisTactSensation').html("Yes");
            $('#ppMedHisTactSensationComment').html($('#medHisTactSensationComment').val());
        } else {
            $('#ppMedHisTactSensation').html("No");
        }
        if ($('#medHisSpeech').is(':checked')) {
            $('#ppMedHisSpeech').html("Yes");
            $('#ppMedHisSpeechComment').html($('#medHisSpeechComment').val());
        } else {
            $('#ppMedHisSpeech').html("No");
        }
        if ($('#medHisCardiac').is(':checked')) {
            $('#ppMedHisCardiac').html("Yes");
            $('#ppMedHisCardiacComment').html($('#medHisCardiacComment').val());
        } else {
            $('#ppMedHisCardiac').html("No");
        }
        if ($('#medHisCirculatory').is(':checked')) {
            $('#ppMedHisCirculatory').html("Yes");
            $('#ppMedHisCirculatoryComment').html($('#medHisCirculatoryComment').val());
        } else {
            $('#ppMedHisCirculatory').html("No");
        }
        if ($('#medHisIntegumentary').is(':checked')) {
            $('#ppMedHisIntegumentary').html("Yes");
            $('#ppMedHisIntegumentaryComment').html($('#medHisIntegumentaryComment').val());
        } else {
            $('#ppMedHisIntegumentary').html("No");
        }
        if ($('#medHisImmunity').is(':checked')) {
            $('#ppMedHisImmunity').html("Yes");
            $('#ppMedHisImmunityComment').html($('#medHisImmunityComment').val());
        } else {
            $('#ppMedHisImmunity').html("No");
        }
        if ($('#medHisPulmonary').is(':checked')) {
            $('#ppMedHisPulmonary').html("Yes");
            $('#ppMedHisPulmonaryComment').html($('#medHisPulmonaryComment').val());
        } else {
            $('#ppMedHisPulmonary').html("No");
        }
        if ($('#medHisNeurologic').is(':checked')) {
            $('#ppMedHisNeurologic').html("Yes");
            $('#ppMedHisNeurologicComment').html($('#medHisNeurologicComment').val());
        } else {
            $('#ppMedHisNeurologic').html("No");
        }
        if ($('#medHisMuscular').is(':checked')) {
            $('#ppMedHisMuscular').html("Yes");
            $('#ppMedHisMuscularComment').html($('#medHisMuscularComment').val());
        } else {
            $('#ppMedHisMuscular').html("No");
        }
        if ($('#medHisBalance').is(':checked')) {
            $('#ppMedHisBalance').html("Yes");
            $('#ppMedHisBalanceComment').html($('#medHisBalanceComment').val());
        } else {
            $('#ppMedHisBalance').html("No");
        }
        if ($('#medHisOrthopedic').is(':checked')) {
            $('#ppMedHisOrthopedic').html("Yes");
            $('#ppMedHisOrthopedicComment').html($('#medHisOrthopedicComment').val());
        } else {
            $('#ppMedHisOrthopedic').html("No");
        }
        if ($('#medHisAllergies').is(':checked')) {
            $('#ppMedHisAllergies').html("Yes");
            $('#ppMedHisAllergiesComment').html($('#medHisAllergiesComment').val());
        } else {
            $('#ppMedHisAllergies').html("No");
        }
        if ($('#medHisLearningDisability').is(':checked')) {
            $('#ppMedHisLearningDisability').html("Yes");
            $('#ppMedHisLearningDisabilityComment').html($('#medHisLearningDisabilityComment').val());
        } else {
            $('#ppMedHisLearningDisability').html("No");
        }
        if ($('#medHisCognitive').is(':checked')) {
            $('#ppMedHisCognitive').html("Yes");
            $('#ppMedHisCognitiveComment').html($('#medHisCognitiveComment').val());
        } else {
            $('#ppMedHisCognitive').html("No");
        }
        if ($('#medHisEmotional').is(':checked')) {
            $('#ppMedHisEmotional').html("Yes");
            $('#ppMedHisEmotionalComment').html($('#medHisEmotionalComment').val());
        } else {
            $('#ppMedHisEmotional').html("No");
        }
        if ($('#medHisPain').is(':checked')) {
            $('#ppMedHisPain').html("Yes");
            $('#ppMedHisPainComment').html($('#medHisPainComment').val());
        } else {
            $('#ppMedHisPain').html("No");
        }
        $('#ppMedHisOtherText').html($('#medHisOtherText').val());
        if ($('#medHisOther').is(':checked')) {
            $('#ppMedHisOther').html("Yes");
            $('#ppMedHisOtherComment').html($('#medHisOtherComment').val());
        } else {
            $('#ppMedHisOther').html("No");
        }
        if ($('#medHisOther').val() == "") {
            $('#ppMedHisOther').hide();
            $('#ppMedHisOtherComment').hide();
        } else {
            $('#ppMedHisOtherComment').html($('#medHisOtherComment').val());
        }
        $('#ppMedHisSignedDate').html(todaysdate);

        //-----------------------------------------------------------------------

        $('html,body').scrollTop(0);
        $('#printPreviewMedicalHistoryFormOVER').show();
        $('#formMedicalHistoryForm').hide();
    });


    $("#printButtonMH").click(function () {
        var mode = 'iframe';
        var close = mode === "popup";
        var options = {mode: mode, popClose: close};
        $("#printPreviewMedicalHistoryForm").printArea(options);
    });

});
