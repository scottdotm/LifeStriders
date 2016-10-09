//JavaScript Document
//Scott
//10/9/2016

$(document).ready(function (e) {

     $('#printPreviewPhysicianFormOVER').hide();

     $('#printPreviewButton').click(function (e) {
          var clientName = $('#clientName').val();
          var birthDate = $('#birthDate').val();
          var address = $('#address').val();
          var phone = $('#phone').val();
          var medDiag = $('#medDiag').val();
          var preCon = $('#preCon').val();
          var addCom = $('#addCom').val();
          var physName = $('#physName').val();
          var physPhone = $('#physPhone').val();
          var physAddress = $('#physAddress').val();
          var physSig = $('#physSig').val();
          var todayDate = $('#todayDate').val();
          
          
          $('#printPreviewCN').html("Client Name: " + clientName);
          $('#printPreviewBD').html("Birth Date: " + birthDate);
          $('#printPreviewAD').html("Address: " + address);
          $('#printPreviewPH').html("Phone: " + phone);
          $('#printPreviewMD').html("Medical Diagnosis/Description of Disability: " + medDiag);
          $('#printPreviewPC').html("Precautions/Contraindications: " + preCon);
          $('#printPreviewAC').html("Additional Comments: " + addCom);
          $('#printPreviewPN').html("Physician's Name: " + physName);
          $('#printPreviewPP').html("Physician's Phone: " + physPhone);
          $('#printPreviewPD').html("Physician's Address: " + physAddress);
          $('#printPreviewPS').html("Physician's Signature: " + physSig);
          $('#printPreviewTD').html("Todays Date: " + todayDate);
          
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
    
    


