//JavaScript Document
//Scott M.
//10/13/2016

$(document).ready(function (e) {
     var dob = null;
     var age = null;
     var checklist = [];
     /*   
      * UserException can be used to throw custom exceptions in Javascript,
      * this helped myself with debuging the logic located within this Javascript file.
      */
     function UserException(message) {
          this.message = message;
          this.name = "UserException";
     }
     ;
     //Determines how old a user is
     $('#dob').blur(function () {
          dob = $('#dob').val();
          var dobConcat = dob.substring(0, 4);
          var guardianAge = new Date();
          var x = guardianAge.getFullYear();
          age = x - dobConcat;
     });
     $('#subModal').click(function(){
        if(age<=0 || age>=115 || age===null){
               $('#printPreviewButton').prop('disabled', true);
               $('#error').html("<div class='alert alert-danger' role='alert'> There seems to be an error with your age. </div>");
          } else {
               $('#printPreviewButton').prop('disabled', false);
               $('#error').remove();
          }  
     });
     //Initially Hide printPreview
     $('#printPreviewVolunteerFormOVER').hide();
     //When user clicks printPreview button on form
     $('#printPreviewButton').click(function () {
          try {
               var formfield = [
                    {label: "Last Name: ", display: $('#lastName').val(), id: '#LN'},
                    {label: "First Name: ", display: $('#firstName').val(), id: '#FN'},
                    {label: "Date of Birth: ", display: dob, id: '#DOB'},
                    {label: "Address: ", display: $('#address').val(), id: '#ADD'},
                    {label: "City: ", display: $('#city').val(), id: '#CIT'},
                    {label: "State: ", display: $('#state').val(), id: '#STA'},
                    {label: "Zip: ", display: $('#zip').val(), id: '#ZIP'},
                    {label: "Phone Number: ", display: $('#phone').val(), id: '#PN'},
                    {label: "Email: ", display: $('#email').val(), id: '#EMA'},
                    
                    {label: "Employer: ", display: $('#employer').val(), id: '#EMP'}
               ];
               //Age logic to determine if a user is > , or < 18.
               if (age >= 18) {
                    
                    $('#dismissalfield').append("<br><hr id='signHr1' class='divider'><label>Volunteer's Full Name</label> <br>");
                    $('#dismissalfield').append("<br><hr id='signHr2' class='divider'><label>Volunteer's Signature</label>");

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
                    for (var i = 0, len = checklist.length; i < len; i++) {
                         $('#volunteerChecklist').append("<div class='box'></div><div class='field'>" + checklist[i] + "</div><br>");
                    }
               } else if (age < 18) {
                    
                    $('#dismissalfield').append("<br><hr id='signHr1' class='divider'><label>Guardian's Full Name</label> <br>");
                    $('#dismissalfield').append("<br><hr id='signHr2' class='divider'><label>Guardian's Signature</label>");
            
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
                    console.log(age);
                    throw new UserException("Didn't work");
               }
               ;
               /*
                * Need to extract Label from map.
                */
               function getLabel(item, index) {
                    var getFullLabel = [item.label];
                    return getFullLabel.toString();
               }
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
                    $('#printPreviewDisplay').append("<li class='list-group-item'>"+ "<strong>" + formfield.map(getLabel)[i] + "</strong>" + formfield.map(getDisplay)[i] + "</li>");
                    $(formfield.map(getId)[i]).html(formfield.map(getLabel)[i] + formfield.map(getDisplay)[i]);
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
     //Print Button from Print Preview
     $("#printButton").click(function () {
          var mode = 'iframe';
          var close = mode === "popup";
          var options = {mode: mode, popClose: close};
          $("#printPreviewVolunteerForm").printArea(options);
     });
});