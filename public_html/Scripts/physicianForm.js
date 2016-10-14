
//JavaScript Document
//Scott
//10/9/2016

$(document).ready(function (e) {

     $('#printPreviewPhysicianFormOVER').hide();

     //Scott's way of creating print preview
     $('#printPreviewButton').click(function () {

          //This is not ideal, however I am begining to automate the process of creating the print preview screen
          try {
               var formfield = [
                    {dispaly : "Client Name: " + $('#clientName').val(), id : '#CN'},
                    {display : "Birth Date: " + $('#birthDate').val(), id : '#BD'}, 
                    {display : "Address: " + $('#address').val(), id : '#AD'},
                    {display : "Phone: " + $('#phone').val(), id : '#PH'}, 
                    {display : "Medical Diagnosis/Description of Disability: " + $('#medDiag').val(), id : '#MD'},
                    {display : "Precautions/Contraindications: " + $('#preCon').val(), id :'#PC'},
                    {display : "Additional Comments: " + $('#addCom').val(), id : '#AC'},
                    {display : "Physician's Name: " + $('#physName').val(), id : '#PN'},
                    {display : "Physician's Phone: " + $('#physPhone').val(), id : '#PP'}, 
                    {display : "Physician's Address: " + $('#physAddress').val(), id : '#PD'},
                    {display : "Physician's Signature: " + $('#physSig').val(), id : '#PS'},
                    {display : "Todays Date: " + $('#todayDate').val(), id : '#TD'}
               ];
//               var printindex = ['#CN', '#BD', '#AD', '#PH', '#MD', '#PC', '#AC', '#PN', '#PP', '#PD', '#PS', '#TD'];
               function getDisplay(item,index){
                    var getFullDisplay = [item.display];
                    return getFullDisplay;
               }
               function getId(item,index){
                    var getFullIndex = [item.id];
                    return getFullIndex.toString();
               }
              for (i = 0, len = formfield.length; i<len ; i++) {
                    $(formfield.map(getId)[i]).html(formfield.map(getDisplay)[i]);
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
    
    


