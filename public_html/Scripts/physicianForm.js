//JavaScript Document
//Scott
//10/9/2016

$(document).ready(function (e) {
     $('#printPreviewPhysicianFormOVER').hide();
//     var formfields = [
//          {
//               label: "Client Name: ",
//               formid: "clientName",
//               input: "text"
//          },
//          {
//               label: "Birth Date: ",
//               formid: "birthDate",
//               input: "date"
//          },
//          {
//               label: "Address: ",
//               formid: "address",
//               input: "text"
//          },
//          {
//               label:"Phone Number: ",
//               formid:"phone",
//               input:"tel"
//          }
//          ,
//          {
//               label:"Has been deemed eligible for: ",
//               formid:"phone",
//               input:"radio"
//          }
//          
//     ];
//     
////                                   <!-- Needs to be implementing -->
////                                   <div class="form-group">
////                                        <label for="hasBeenDeemed">Has been deemed eligible for: </label>
////                                        <br>
////                                        Occupational therapy services based on evaluation  <input type="radio" id="OccuTherapy" value='Occupational therapy services based on evaluation'>
////                                        <br>
////                                        Individual Counseling and/or Group Therapy services based on evaluation  <input type='radio' id='igTherapy' value='Individual Counseling and/or Group Therapy services based on evaluation'>
////                                   </div>
////                                   <div class="form-group">
////                                        <label for="medDiag">Medical Diagnosis/Description of Disability: </label>
////                                        <input type="text" class="form-control" id="medDiag">
////                                   </div>
////                                   <div class="form-group">
////                                        <label for="preCon">Precautions/Contraindications: </label>
////                                        <input type="text" class="form-control" id="preCon">
////                                   </div>
////                                   <div class="form-group">
////                                        <label for="addCom">Additional Comments: </label>
////                                        <input type="text" class="form-control" id="addCom">
////                                   </div>
////                                   <h3>This referral form will be valid for 1 year, unless services are terminated, there is a change in the above mentioned participants
////                                        medical status, or an updated order is necessary.</h3>
////                                   <div class="form-group">
////                                        <label for="physName">Physician's Name: </label>
////                                        <input type="text" class="form-control" id="physName">
////                                   </div>
////                                   <div class="form-group">
////                                        <label for="physPhone">Physician's Phone: </label>
////                                        <input type="tel" class="form-control" id="physPhone">
////                                   </div>
////                                   <div class="form-group">
////                                        <label for="physAddress">Physician's Address: </label>
////                                        <input type="text" class="form-control" id="physAddress">
////                                   </div>
////                                   <!-- This is where the big question of signatures comes into place -->
////                                   <div class="form-group">
////                                        <label for="physSig">Physician's Signature: </label>
////                                        <input type="text" class="form-control" id="physSig">
////                                   </div>
////                                   <div class="form-group">
////                                        <label for="todayDate">Todays Date: </label>
////                                        <input type="text" class="form-control" id="todayDate">
////                                   </div>
////                                   <input type="button" id="printPreviewButton" class="btn btn-danger" value="Sumit for Print Preview">
////                               </form>
//     
//     
//     function getLabel(item, index) {
//          var getFullLabel = [item.label];
//          return getFullLabel;
//     }
//     function getFormId(item, index) {
//          var getFullIndex = [item.formid];
//          return getFullIndex.toString();
//     }
//     function getInput(item, index) {
//          var getFullIndex = [item.input];
//          return getFullIndex.toString();
//     }
////     function getFullFormFields() {
////          for (i = 0, len = formfields.length; i < len; i++) {
////               var fullFormField = "<div class='form-group'><label for='"+getFormId[i]+"'>"+getLabel[i]+"</label> <input type='"+getInput[i]+"' class='form-control' id='"+getFormId[i]+"'>";
////               return fullFormField;
////          }
////          ;
////     }
//
//     for (i = 0, len = formfields.length; i < len; i++) {
//          //var id =formfields.map.getFormId[i];
//          var fullFormField = "<div class='form-group'><label for='" + formfields.map(getFormId)[i] + "'>" + formfields.map(getLabel)[i] + "</label>\n\
//                              <input name='" + formfields.map(getFormId)[i] + "' type='" + formfields.map(getInput)[i] + "' class='form-control' id='" + formfields.map(getFormId)[i] + "' required></div>";
//          ;
//          $('#formfields').append(fullFormField);
////          fullFormField = "";
//     }
//     ;


     //Scott's way of creating print preview
     $('#printPreviewButton').click(function () {
          //This is not ideal, however I am begining to automate the process of creating the print preview screen
          try {
               var physSig = $('#physSig').val();
               if (physSig === null || physSig === ''){
                    alert("Physican Signature is required");
                    window.location = "PysicianForm.html";
               }
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
                    {label: "Physician's Signature: ", display: $('#physSig').val(), id: '#PS'},
                    {label: "Todays Date: ", display: $('#todayDate').val(), id: '#TD'}
               ];
               function getLabel(item, index) {
                    var getFullLabel = [item.label];
                    return getFullLabel.toString();
               }
               function getDisplay(item, index) {
                    var getFullDisplay = [item.display];
                    return getFullDisplay.toString();
               }
               function getId(item, index) {
                    var getFullIndex = [item.id];
                    return getFullIndex.toString();
               }
               
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