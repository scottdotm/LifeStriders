//JavaScript Document
//Scott
//10/13/2016

$(document).ready(function (e) {
     function UserException(message) {
          this.message = message;
          this.name = "UserException";
     } 
     try {
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
               function getDisplay(item, index) {
                    var getFullDisplay = [item.display];
                    return getFullDisplay;
               }
               function getId(item, index) {
                    var getFullIndex = [item.id];
                    return getFullIndex.toString();
               }
               for (i = 0, len = formfield.length; i < len; i++) {
                    $('#printPreviewDisplay').append("<li class='list-group-item'>" + formfield.map(getDisplay)[i] + "</li>");
                    $(formfield.map(getId)[i]).html(formfield.map(getDisplay)[i]);
               }
               //$('#checklist').html("<p> Please keep this checklist, and bring it with you to your orientation. As you are instructed in certain fields, please ask your instructor/volunteer to initial the related checkbox. Please alert staff if you have been unable to receive training in all fields. Please hand in to staff when your checklist is complete. </p> <hr> <div class='box'></div><div class='field'>Tour of facility</div> <br> <div class='box'></div><div class='field'>Fire extinguishers, first aid kits, and emergency number locations</div> <br> <div class='box'></div><div class='field'>Where to go in case of tornado</div> <br> <div class='box'></div><div class='field'>Bathrooms and bubbler</div> <br> <div class='box'></div><div class='field'>Sign in and name tags</div> <br> <div class='box'></div><div class='field'>Tack room lay out and organization</div> <br> <div class='box'></div><div class='field'>Where treats are located and how many treats to feed</div> <br> <div class='box'></div><div class='field'>How clients should offer treats to horses</div> <br> <div class='box'></div><div class='field'>Quick Release ties and no horse left alone protocol</div> <br> <div class='box'></div><div class='field'>Stalls</div> <br> <div class='box'></div><div class='field'>Please don’t tie horses unless necessary, and never tie the horse with a rider on</div> <br> <div class='box'></div><div class='field'>Loading areas and protocol as well as gates</div> <br> <div class='box'></div><div class='field'>Safety stirrups</div> <br> <div class='box'></div><div class='field'>How to hold a lead rope</div> <br> <div class='box'></div><div class='field'>How to position correctly as a side walker</div> <br> <div class='box'></div><div class='field'>Different holds – on and off of the horse</div>");
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