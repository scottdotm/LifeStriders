//JavaScript Document
//Scott M.
//10/13/2016

/*
 * JavaScript file for LifeStriders - VolunteerForm
 * This handles all custom JS for Volunteer Form, also uses jquery.PrintArea
 */

$(document).ready(function (e) {
     /*   
      * Variables to be used throughout this JS file.
      * dob = Date of Birth of Volunteer
      * age = age of volunteer
      * date = The date of when the browser navigated to this page
      * checklist = Array of checklist items
      */
     var dob = null;
     var age = null;
     var td = null;
     var date = new Date();
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
     /*   
      * When the dob field is entered and the user navigates away from the form field.
      * 
      *   dobConcat - This is used to concat the date object to just take its year, 
      * to be used to figure out how old a user is by subtracting the browsers date from that of the volunteers Date of Birth
      *   x,y,z - These are retrieved from the browsers date object, we use these to display the actual date of when the form was filled out.
      */
     $('#dob').blur(function () {
          dob = $('#dob').val();
          var dobConcat = dob.substring(0, 4);
          var z = date.getMonth() + 1;
          var y = date.getDate();
          var x = date.getFullYear();
          td = z + "/" + y + "/" + x;
          //Date of signature for Photo Release
          $('#releaseDate').html(td);
          //Age of Volunteer
          age = x - dobConcat;
          //If volunteer is less than 18 then the user needs Parent/Guardian input fields.
          if (age < 18) {
               $('#parentGuardianInfo').html("<p>Parent Guardian Name and Address</p><div class='row'><div class='col-md-8'><div class='form-group'><label for='parentAddress1'>*</label><input type='text' class='form-control' id='parentAddress1' placeholder='Address..'><div class='help-block with-errors'></div></div></div><div class='col-md-4'><div class='form-group'><label for='parentPhone1'>Phone Number:</label><input type='tel' class='form-control' id='parentPhone1' placeholder='Phone Number..'><div class='help-block with-errors'></div></div></div></div><div class='row'><div class='col-md-8'><div class='form-group'><label for='parentAddress2'>*</label><input type='text' class='form-control' id='parentAddress2' placeholder='Address..'><div class='help-block with-errors'></div></div></div><div class='col-md-4'><div class='form-group'><label for='parentPhone2'>Phone Number:</label><input type='tel' class='form-control' id='parentPhone2' placeholder='Phone Number..'><div class='help-block with-errors'></div></div></div></div>");
          }
     });
     $('#enablePrint2').click(function(){
       $('#printButtonCF').prop('disabled',false); 
    });
     //Validation check for Volunteer's Age - This will not allow a user to pass the form to the PrintPreview screen unless we have there Date of Birth.
     $('#subModal').click(function () {
          if (age <= 0 || age >= 115 || age === null) {
               $('#printPreviewButton').prop('disabled', true);
               $('#error').html("<div class='alert alert-danger' role='alert'> There seems to be an error with your age. </div>");
          } else  {
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
                    {label: "Employer: ", display: $('#employer').val(), id: '#EMP'},
                    {label: "Employer Address: ", display: $('#empAddress').val(), id: '#EAD'},
                    {label: "Employer Email: ", display: $('#empEmail').val(), id: '#EEM'},
                    {label: "Employer City: ", display: $('#empCity').val(), id: '#ECI'},
                    {label: "Employer State: ", display: $('#empState').val(), id: '#EST'},
                    {label: "Employer Zip: ", display: $('#empZip').val(), id: '#EZI'},
                    {label: "Employer Phone: ", display: $('#empPhone').val(), id: '#EPH'},
                    {label: "CPR Certified: ", display: $('input[name=certified]:checked', '#volunteerForm').val(), id: '#CPR'},
                    {label: "Certification Date: ", display: $('#certificationDate').val(), id: '#CED'},
                    {label: "Employer Phone: ", display: $('#empPhone').val(), id: '#EPH'},
                    //VOLUNTEER AUTHORIZATION FOR EMERGENCY MEDICAL TREATMENT
                    {label: "Volunteer's Full Name: ", display: $('#volName').val(), id: '#VON'},
                    {label: "Volunteer Phone: ", display: $('#volPhone').val(), id: '#VOP'},
                    {label: "Volunteer Address: ", display: $('#volAddress').val(), id: '#VOA'},
                    {label: "Volunteer City: ", display: $('#volCity').val(), id: '#VOC'},
                    {label: "Volunteer State: ", display: $('#volState').val(), id: '#VOS'},
                    {label: "Volunteer Zip: ", display: $('#volZip').val(), id: '#VOZ'},
                    {label: "Contact Name One: ", display: $('#iceName1').val(), id: '#INO'},
                    {label: "Contact Phone One: ", display: $('#icePhone1').val(), id: '#IPO'},
                    {label: "Contact Name Two: ", display: $('#iceName2').val(), id: '#INT'},
                    {label: "Contact Phone Two: ", display: $('#icePhone2').val(), id: '#IPT'},
                    {label: "Physician's Name: ", display: $('#physicianName').val(), id: '#PSN'},
                    {label: "Physician's Phone: ", display: $('#physicianPhone').val(), id: '#PPP'},
                    {label: "Preferred Medical Facility: ", display: $('#preferredFacility').val(), id: '#PMF'},
                    {label: "Health Insurance Company: ", display: $('#insuranceName').val(), id: '#HIC'},
                    {label: "Policy Number: ", display: $('#policyNumber').val(), id: '#PCN'}


               ];

               /*
                * Age logic to determine if a user is > , or < 18 to determine what
                * Check for Volunteer's Age, and display fields for normal Volunteer (age>18)
                * '#formfield' - Fields for Guardian/Volunteer
                * checklist - Customized for Guardian/Volunteer based on age of applicant.
                * dismissalfields - Volunteer Signature required.
                */
               if (age >= 18) {
                    $('#formfield').push(
                            {label: "Parent Address One: ", display: $('#parentAddress1').val(), id: '#PAO'},
                            {label: "Parent Address Two: ", display: $('#parentAddress2').val(), id: '#PAT'},
                            {label: "Parent Phone One: ", display: $('#parentPhone1').val(), id: '#PPO'},
                            {label: "Parent Phone Two: ", display: $('#parentPhone2').val(), id: '#PAT'}
                    );
                    $('#dismissalfield').append("<br><hr id='signHr1' class='divider'><label>Volunteer's Full Name</label> <br>");
                    $('#dismissalfield').append("<br><hr id='signHr2' class='divider'><label>Volunteer's Signature</label>");

                    checklist = [
                         "Tour of facility",
                         "Fire extinguishers, first aid kits, and emergency number locations",
                         "Where to go in case of tornado",
                         "Bathrooms and bubbler",
                         "Sign in and name tags",
                         "Tack room lay out and organization",
                         "Where treats are located and how many treats to feed",
                         "How clients should offer treats to horses",
                         "Job of a barn helper",
                         "Stalls",
                         "Safety stirrups",
                         "Please don’t tie horses unless necessary, and never tie the horse with a rider on",
                         "Loading areas and protocol as well as gates",
                         "Quick Release ties and no horse left alone protocol",
                         "Make sure stall doors are all the way open and locks are out of the way when taking horses in and out of stalls",
                         "Pasture etiquette",
                         "Fence gates, latched and closed behind you, unless you are leaving them open for horses to graze",
                         "Never go out to pastures alone unless you have graduated to a white name tag",
                         "Check all water tanks",
                         "Use a carrot stick when feeding grain in paddocks and never do by yourself",
                         "Make sure to check with staff which paddocks horses should be returned to",
                         "Boarder horses are not to be handled by volunteers unless approved by Program Manager",
                         "<h2>Checklist (Continued)</h2>",
                         "Individual personalities of equines, body language of horses",
                         "How to hold a lead rope",
                         "Emergency dismounts - practice",
                         "Different holds – on and off of the horse",
                         "How to position correctly as a side walker",
                         "How to groom, needing initials to do it by yourself",
                         "No more than 2 people to a horse while grooming",
                         "Be respectful of clients",
                         "Job of a leader",
                         "Job of a side walker",
                         "Job of a barn helper, i.e. hoof picking, grooming, turn out",
                         "Ability to walk (fast) and trot along side or leading",
                         "Individual personalities of equines",
                         "Come into center for any questions",
                         "How to sign up and / or cancel volunteer times",
                         "No “striking” policy",
                         "No weapons, illegal drugs or paraphernalia policy",
                         "Clothing"
                    ];
                    /*
                     * Pull checklist items out of the Array and display them to the user inside of the volunteerChecklist.
                     */
                    for (var i = 0, len = checklist.length; i < len; i++) {
                         if (checklist[i] === "<h2>Checklist (Continued)</h2>") {
                              $('#volunteerChecklist').append(checklist[i]);
                         } else if (checklist[i] !== "<h2>Checklist (Continued)</h2>") {
                              $('#volunteerChecklist').append("<p><div class='field row'>______<div class='box'></div>      " + checklist[i] + "</div></p>");
                         }
                    }
                    /*
                     * Check for Volunteer's Age, and display fields if user is less than 18
                     * checklist - Customized checklist for minors
                     * dismisalfield - Need Guardian Signature as well as minors for Volunteer applicant.
                     */
               } else if (age < 18) {
                    $('#dismissalfield').append("<hr id='signHr1' class='divider'><label>Volunteer's Full Name</label> <br>");
                    $('#dismissalfield').append("<hr id='signHr2' class='divider'><label>Volunteer's Signature</label><br>");
                    $('#dismissalfield').append("<hr id='signHr1' class='divider'><label>Guardian's Full Name</label> <br>");
                    $('#dismissalfield').append("<hr id='signHr2' class='divider'><label>Guardian's Signature</label>");
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
                         $('#minorChecklist').append("<p><div class='field row'>______<div class='box'></div>      " + checklist[i] + "</div></p>");
                    }
               } else {
                    //If something is wrong with the date (such as it not being avalible due to change in logic)
                    //We throw an exception - 
                    console.log(age);
                    throw new UserException("Sorry Something Went Wrong, check browser Console.");
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
                    $('#printPreviewDisplay').append("<li class='list-group-item' title='" + formfield.map(getLabel)[i] + "'>" + "<strong>" + formfield.map(getLabel)[i] + "</strong>" + formfield.map(getDisplay)[i] + "</li>");
                    $(formfield.map(getId)[i]).html(formfield.map(getLabel)[i] + formfield.map(getDisplay)[i]);
               }
               $('#liabilityDate').html('<p><b>Todays Date : </b>'+td+'</p>');
               //Empty all arrays
               formfield = [];
               checklist = [];
          } catch (err) {
               //Throw error message when Form is submited to PrintPreview Screen (Generic Error).
               alert(err.message);
          }
          $('html,body').scrollTop(0);
          $('#formVolunteerForm').hide();
          $('#printPreviewVolunteerFormOVER').show();
     });
     //Print Button from Print Preview
     //Uses jquery.PrintArea
     $("#printButtonCF").click(function () {
          var mode = 'iframe';
          var close = mode === "popup";
          var options = {mode: mode, popClose: close};
          $("#printPreviewVolunteerForm").printArea(options);
     });
});