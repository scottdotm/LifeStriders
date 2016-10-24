/* global volCheckList, minorCheckList */

//JavaScript Document
//Scott M.
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
               $('#dismissalfield').append(vfield);
          } else if (age < 18) {
               gfield = "<div class='form-group'><label for='guaName'>Parent/Guardian Name: </label><input type='text' class='form-control' id='guaName'></div>\n\
                       <div class='form-group'><label for='guaSig'>Parent/Guardian Signature: </label><input type='text' class='form-control' id='guaSig'></div>";
               $('#dismissalfield').append(gfield);
          } else {
               window.location = "VolunteerForm.html";
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




               //------------------------------------------------------------//
               //This will be taken from the given date in the above form.
               if (age >= 18) {
                    formfield = [
                         {display: "Volunteer Name: " + $('#volName').val(), id: '#VN'},
                         {display: "Volunteer Signature: " + $('#volSig').val(), id: '#VS'}
                    ];
                    checklist = [
                         "Tour of facility",
                         "Fire extinguishers, first aid kits, and emergency number locations",
                         "Where to go in case of tornado",
                         "Bathrooms and bubbler",
                         "Sign in and name tags",
                         "Job of a barn helper",
                         "Make sure stall doors are all the way open and locks are out of the way when taking horses in and out of stalls",
                         "Pasture etiquette",
                         "Fence gates, latched and closed behind you, unless you are leaving them open for horses to graze",
                         "Never go out to pastures alone unless you have graduated to a white name tag",
                         "Check all water tanks",
                         "Use a carrot stick when feeding grain in paddocks and never do by yourself",
                         "Make sure to check with staff which paddocks horses should be returned to",
                         "Boarder horses are not to be handled by volunteers unless approved by Program Manager",
                         "Individual personalities of equines, body language of horses",
                         "How to hold a lead rope",
                         "How to groom, needing initials to do it by yourself",
                         "No more than 2 people to a horse while grooming",
                         "How to sign up and / or cancel volunteer times",
                         "No “striking” policy",
                         "No weapons, illegal drugs or paraphernalia policy",
                         "Clothing"
                    ];
                    console.log(checklist.toString());
                    for (i = 0, len = checklist.length; i < len; i++) {
                         $('#volunteerChecklist').append("<div class='box'></div><div class='field'>" + checklist[i] + "</div><br>");
                    }
               } else if (age < 18) {
                    formfield = [
                         {display: "Parent/Guardian Name: " + $('#guaName').val(), id: '#PN'},
                         {display: "Parent/Guardian Signature: " + $('#guaSig').val(), id: '#PS'}
                    ];
                    checklist = [
                         "Tour of facility",
                         "Fire extinguishers, first aid kits, and emergency number locations",
                         "Where to go in case of tornado",
                         "Bathrooms and bubbler",
                         "Sign in and name tags",
                         "Tack room lay out and organization",
                         "Where treats are located and how many treats to feed",
                         "How clients should offer treats to horses",
                         "Quick Release ties and no horse left alone protocol",
                         "Stalls",
                         "Please don’t tie horses unless necessary, and never tie the horse with a rider on",
                         "Loading areas and protocol as well as gates",
                         "Safety stirrups",
                         "How to hold a lead rope",
                         "How to position correctly as a side walker",
                         "Different holds – on and off of the horse",
                         "Emergency dismounts - practice",
                         "Job of a leader",
                         "Job of a side walker",
                         "Job of a barn helper, i.e. hoof picking, grooming, turn out",
                         "Ability to walk (fast) and trot along side or leading",
                         "Come into center for any questions",
                         "Individual personalities of equines",
                         "Pasture etiquette",
                         "Be respectful of clients",
                         "No “Striking” Policy",
                         "How to sign up and/or cancel volunteer times",
                         "No Weapons, illegal drugs or paraphernalia policy",
                         "Clothing",
                         "Communication between instructor and volunteers about comfort in job being done"
                    ];
                    for (i = 0, len = checklist.length; i < len; i++) {
                         $('#minorChecklist').append("<div class='box'></div><div class='field'>" + checklist[i] + "</div><br>");
                    }
               } else {
                    window.location = "VolunteerForm.html";
                    throw new UserException("Error in Print Preview Javascript.");
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
               //Empty all arrays
               formfield = [];
               checklist = [];
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