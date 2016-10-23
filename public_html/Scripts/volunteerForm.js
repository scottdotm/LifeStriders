//JavaScript Document
//Scott
//10/13/2016

$(document).ready(function (e) {
     /*   
      * UserException can be used to throw custom exceptions in Javascript,
      * this helped myself with debuging the logic located within this Javascript file.
     */
     function UserException(message) {
          this.message = message;
          this.name = "UserException";
     }
     /*
      * This will ask for Volunteer's age, and give the user either standard name/volunteer fields,
      * or give them Parental Guardian fields.
      */
     try {
          //This will be taken from the given date in the above form.
          var age = prompt("How old are you", "00");
          if (age >= 18) {
               vfield = "<div class='form-group'><label for='volName'>Volunteer Name: </label>\n\<input type='text' class='form-control' id='volName'></div>\n\
                       <div class='form-group'><label for='volSig'>Volunteer Signature: </label><input type='text' class='form-control' id='volSig'></div>";
               $('#testing').append(vfield);
          } else if (age < 18) {
               gfield = "<div class='form-group'><label for='guaName'>Parent/Guardian Name: </label><input type='text' class='form-control' id='guaName'></div>\n\
                       <div class='form-group'><label for='guaSig'>Parent/Guardian Signature: </label><input type='text' class='form-control' id='guaSig'></div>";
               $('#testing').append(gfield);
          } else {
               throw new UserException("Invalid Age");
          }
     } catch (err) {
          alert(err.message);
     }
     ;
     $('#printPreviewVolunteerFormOVER').hide();
     $('#printPreviewButton').click(function () {
          try {
               /*This is where the pages 1-4 print preview displays/id's would go Example would be 
                * volInfoField = [
                * {display: "Volunteer Name: " + $('#volName').val(), id: '#VN'},
                * {display: "Volunteer Age: " + $('#volAge').val(), id: '#VA'}
                * ];
                * Nothing else is done here for additional fields, all gets taken care of by my functions,
                * unless new data is entered into our map in which case, new functions are needed to 
                * exctract data from the map.
                */





               //This will be taken from the given date in the above form.
               if (age >= 18) {
                    formfield = [
                         {display: "Volunteer Name: " + $('#volName').val(), id: '#VN'},
                         {display: "Volunteer Signature: " + $('#volSig').val(), id: '#VS'}
                    ];
               } else if (age < 18) {
                    formfield = [
                         {display: "Parent/Guardian Name: " + $('#guaName').val(), id: '#PN'},
                         {display: "Parent/Guardian Signature: " + $('#guaSig').val(), id: '#PS'}
                    ];
               } else {
                    throw new UserException("Invalid Age");
               }
               ;
               /*
                * Need to extract Display from map.
                */
               function getDisplay(item, index) {
                    var getFullDisplay = [item.display];
                    return getFullDisplay;
               }
               /*
                * Need to extract id from map.
                */
               function getId(item, index) {
                    var getFullIndex = [item.id];
                    return getFullIndex.toString();
               }
               /*
                * Loop over Array of formfields, grab the proper Display, id, and 
                * output them into created list items in the printPreviewDisplay
                * div in the HTML.
                */
               for (i = 0, len = formfield.length; i < len; i++) {
                    $('#printPreviewDisplay').append("<li class='list-group-item'>" + formfield.map(getDisplay)[i] + "</li>");
                    $(formfield.map(getId)[i]).html(formfield.map(getDisplay)[i]);
               }
          } catch (err) {
               alert(err.message);
          }
          $('html,body').scrollTop(0);
          $('#formVolunteerForm').hide();
          $('#printPreviewVolunteerFormOVER').show();
     });
     $("#printButton").click(function () {
          var mode = 'iframe';
          var close = mode === "popup";
          var options = {mode: mode, popClose: close};
          $("#printPreviewVolunteerForm").printArea(options);
     });
});