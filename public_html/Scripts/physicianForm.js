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
     $('#printPreviewPhysicianFormOVER').hide();

     //Takes user from 
     $('#printPreviewButton').click(function () {
          // Formats the date as mm-dd-yyyy
          var todaysdate = curr_month + "-" + curr_date + "-" + curr_year;
          try {
               //Store Form inputs in Javascript Map
               var submitfield = [
                    {label: "Client Name: ", display: $('#clientName').val(), id: '#ClN'},
                    {label: "Birth Date: ", display: $('#birthDate').val(), id: '#BD'},
                    {label: "Address: ", display: $('#address').val(), id: '#AD'},
                    {label: "Phone: ", display: $('#phone').val(), id: '#PH'},
                    {label: "Has been deemed eligible for: ", display: $('input[name=eligible]:checked', '#physicianForm').val(), id: '#EL'},
                    {label: "Medical Diagnosis/Description of Disability: ", display: $('#medDiag').val(), id: '#MD'},
                    {label: "Precautions/Contraindications: ", display: $('#preCon').val(), id: '#PC'},
                    {label: "Additional Comments: ", display: $('#addCom').val(), id: '#AC'},
                    {label: "Physician's Name: ", display: $('#physName').val(), id: '#PN'},
                    {label: "Physician's Phone: ", display: $('#physPhone').val(), id: '#PP'},
                    {label: "Physician's Address: ", display: $('#physAddress').val(), id: '#PD'},
                    {label: "Todays Date: ", display: todaysdate, id: '#TD'},
                    {label: "<br>Physician's Signature: ", display: "__________________________________________________________________", id: '#PS'}
                    
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

          $('#printPreviewPhysicianFormOVER').show();
          $('#formPhysicianForm').hide();
     });
     $("#printButton").click(function () {
          var mode = 'iframe';
          var close = mode === "popup";
          var options = {mode: mode, popClose: close};
          $("#printPreviewPhysicianForm").printArea(options);
     });
});