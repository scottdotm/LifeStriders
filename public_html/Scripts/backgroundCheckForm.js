//JavaScript Document
//Scott
//10/9/2016

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
     $('#printPreviewBackgroundFormOVER').hide();

     //Takes user from 
     $('#printPreviewButton').click(function () {
          // Formats the date as mm-dd-yyyy
          var todaysdate = curr_month + "-" + curr_date + "-" + curr_year;
          try {
               //Store Form inputs in Javascript Map
               var submitfield = [
                    {label: "First Name: ", display: $('#firstName').val(), id: '#ClN'},
                    {label: "Middle Name: ", display: $('#middleName').val(), id: '#ClN'},
                    {label: "Last Name: ", display: $('#lastName').val(), id: '#ClN'},
                    
                    {label: "Former Names: ", display: $('#formerName').val(), id: '#ClN'},
                    {label: "Dates Used: ", display: "Start Date: "+$('#startNameDate').val() + "   End Date:"  + $('#endNameDate').val(), id: '#ClN'},
                    
                    {label: "Current Address: ", display: $('#currentAddress').val(), id: '#ClN'},
                    {label: "Current Address Since: ", display: $('#currentDate').val(), id: '#ClN'},
                    {label: "Current Address City: ", display: $('#currentCirty').val(), id: '#ClN'},
                    {label: "Current Address State: ", display: $('#currentState').val(), id: '#ClN'},
                    {label: "Current Address Zip: ", display: $('#currentZip').val(), id: '#ClN'},
                    
                    {label: "Previous Address: ", display: $('#previousAddress').val(), id: '#ClN'},
                    {label: "Previous Address Since: ", display: $('#previousDate').val(), id: '#ClN'},
                    {label: "Previous Address City: ", display: $('#previousCity').val(), id: '#ClN'},
                    {label: "Previous Address State: ", display: $('#previousState').val(), id: '#ClN'},
                    {label: "Previous Address Zip: ", display: $('#previousZip').val(), id: '#ClN'},
                    
                    {label: "DOB: ", display: $('#birthDate').val(), id: '#ClN'},
                    {label: "Telephone Number: ", display: $('#phone').val(), id: '#ClN'},
                    {label: "Social Security Number: ", display: $('#ssn').val(), id: '#ClN'},
                    {label: "Drivers License Number: ", display: $('#dln').val(), id: '#ClN'},
                    {label: "Drivers License State: ", display: $('#dlnState').val(), id: '#ClN'}
                    
                    
                    
               ];
               //Extract Label from map - The label for Display element
               function getLabel(item, index) {
                    var getFullLabel = [item.label];
                    return getFullLabel.toString();
               }
               //Extract Display from map - The input from the Form
               function getDisplay(item, index) {
                    var getFullDisplay = [item.display];
                    return getFullDisplay.toString();
               }
               //Extract Id from map - This is the ID assosiated with Form input located in PrintPreview
               function getId(item, index) {
                    var getFullIndex = [item.id];
                    return getFullIndex.toString();
               }
               //Loop over map, extract javascript 'object' within Map
               for (i = 0, len = submitfield.length; i < len; i++) {
                    $('#printPreviewDisplay').append("<li class='list-group-item'>"+ "<strong>" + submitfield.map(getLabel)[i] + "</strong>" + submitfield.map(getDisplay)[i] + "</li>");
                    $(submitfield.map(getId)[i]).html(submitfield.map(getLabel)[i] + submitfield.map(getDisplay)[i]);
               }
          } catch (err) {
               alert(err.message);
          }

          $('#printPreviewBackgroundFormOVER').show();
          $('#formBackgroundCheckForm').hide();
     });
     $("#printButton").click(function () {
          var mode = 'iframe';
          var close = mode === "popup";
          var options = {mode: mode, popClose: close};
          $("#printPreviewBackgroundForm").printArea(options);
     });
});