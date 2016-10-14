//JavaScript Document
//Scott
//10/13/2016

$(document).ready(function (e) {
     $('#printPreviewVolunteerFormOVER').hide();
     //Scott's way of creating print preview
     $('#printPreviewButton').click(function () {
          // place preview code 
          try{
               var formfield = [
                    {display : "Volunteer Name: " + $('#volName').val(), id : '#VN'},
                    {display : "Volunteer Signature: " + $('#volSig').val(), id : '#VS'}, 
                    {display : "Parent/Guardian Name: " + $('#guaName').val(), id : '#PN'},
                    {display : "Parent/Guardian Signature: " + $('#guaSig').val(), id : '#PS'}
               ];
               function getDisplay(item,index){
                    var getFullDisplay = [item.display];
                    return getFullDisplay;
               }
               function getId(item,index){
                    var getFullIndex = [item.id];
                    return getFullIndex.toString();
               }
               for (i = -1, len = formfield.length; i<len ; i++) {
                    $(formfield.map(getId)[i]).html(formfield.map(getDisplay)[i]);
               }
          } catch (err){
               alert(err.message);
          }
          $('#printPreviewVolunteerFormOVER').show();
          $('#formVolunteerForm').hide();
     });
     $("#printButton").click(function () {
          var mode = 'iframe';
          var close = mode === "popup";
          var options = {mode: mode, popClose: close};
          $("#printPreviewVolunteerForm").printArea(options);
     });
});
     
          
 
