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
    $('#printPreviewPhysicianStatementFormOVER').hide();
    
    $('#edit').click(function () {
        $('#printPreviewPhysicianStatementFormOVER').hide();
        $('html,body').scrollTop(0);
        $('#formPhysicianStatementForm').show();
    });
    
    // Brings up the hidden half of the page with the fields filled out for print preview
    $('#printPreviewButton').click(function (e) {
        // Formats the date as mm-dd-yyyy
        var todaysdate = curr_month + "-" + curr_date + "-" + curr_year;

        //***********************************************************************
        // Physician Statement Form
        //***********************************************************************
        //
        // Each id starting with a "pp" corrilates with the print preview page.
        // The following id corrlates with the initial form and pulls the user input from that id.
        $('#ppPhysicianStatementFirst').html($('#physicianStatementFirst').val());
        $('#ppPhysicianStatementLast').html($('#physicianStatementLast').val());
        $('#ppPhysicianStatementPhysicianName').html($('#physicianStatementPhysicianName').val());
        $('#ppPhysicianStatementPhysicianTitle').html($('input[name="physicianStatementPhysicianTitle"]:checked').val());
        $('#ppPhysicianStatementPhysicianAddress').html($('#physicianStatementPhysicianAddress').val());
        $('#ppPhysicianStatementPhysicianCity').html($('#physicianStatementPhysicianCity').val());
        $('#ppPhysicianStatementPhysicianState').html($('#physicianStatementPhysicianState').val());
        $('#ppPhysicianStatementPhysicianZip').html($('#physicianStatementPhysicianZip').val());
        $('#ppPhysicianStatementPhysicianPhone').html($('#physicianStatementPhysicianPhone').val());
        $('#ppPhysicianStatementPhysicianEmail').html($('#physicianStatementPhysicianEmail').val());
        $('#ppPhysicianStatementPhysicianLicense').html($('#physicianStatementPhysicianLicense').val());
        
        // This prints out the date on the form to be signed
        $('#ppPhysicianStatementSignedDate').html(todaysdate);
        
        
 //-----------------------------------------------------------------------
        
        // Scrolles to the top of the page
        $('html,body').scrollTop(0);
        // Shows the print preview page 
        $('#printPreviewPhysicianStatementFormOVER').show();
        // Hides the user input page
        $('#formPhysicianStatementForm').hide();
    });

    // Sends all items in the print area to the printer
    $("#printButtonPS").click(function () {
        var mode = 'iframe';
        var close = mode === "popup";
        var options = {mode: mode, popClose: close};
        $("#printPreviewPhysicianStatementForm").printArea(options);
    });

});
