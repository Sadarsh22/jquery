
// $(function() {  
//     $("p").css("color", "red");  
//     });
   
// function validateForm() {
//     let fname = document.applicationForm.First_Name.value;
//     if (fname == null || fname == "") {
//       // alert("First Name cannot be null");
//       document.getElementById("SFirst_Name").innerHTML =
//         "First Name is required";
//       document.applicationForm.First_Name.focus();
//       return false;
//     }

 

$(function(){
    $('#applicationForm').submit(function(){
        alert("jquery");
        var fname=$('#First_Name').val();
        var lname=$('#Last_Name').val();
        var addr=$('#address').val();
        var emailID = $('#email').val();
        var PhoneNo = $('#Phone').val();
        var gndr = $('#Gender').val();
        var dateOfBirth = $('#dob').val();
        var lng = $('#Language').val();
        var cnt = $('#Country').val();
        var inputFile = $('#File').val();
        var passwd = $('#password').val();
        var cnfPasswd = $('#confirmPassword').val();

        if (fname == null || fname == "") {
        $('#SFirst_Name').html("First Name is required");
        $('#First_Name').focus();
        return false;
        }

        for (let i = 0; i < fname.length; i++) {
            let val = fname.charAt(i);
            if (!isNaN(val)) {
              $("#SFirst_Name").html("No numeric values allowed here");
              $('#First_Name').focus();
              return false;
            }
        }

        if (lname == null || lname == "") {
        $("#SLast_Name").html("Last Name is required");
        $('#Last_Name').focus();
        return false;
        }

        for (let i = 0; i < lname.length; i++) {
            let val = lname.charAt(i);
            if (!isNaN(val)) {
            $("#SLast_Name").html("No numeric values allowed here");
            $('Last_Name').focus();
            return false;
            }
        }

        if (addr.length == 0) {
        $("#SAddress").html("Please Enter Your Address");
        $('#address').focus();
        return false;
        }

        if (emailID == "") {
        $("#SEmail").html("Email field should not be empty");
        $('#email').focus();
        return false;
        }

        if (PhoneNo == "") {
         $("#SPhone").html("Phone number cannot be empty");
        $('#Phone').focus();
        return false;
        }

        for (let i = 0; i < PhoneNo.length; i++) {
            let val = PhoneNo.charAt(i);
            if (isNaN(val)) {
            $("#SPhone").html("phone number field should contain only digits");
            $('#Phone').focus();
            return false;
            }
        }

        if (PhoneNo.length != 10) {
        $("#SPhone").html("Phone number must be of 10 digits");
        $('#Phone').focus();
        return false;
        }

        let xyz = document.applicationForm.Gender.value;
        alert("xyz="+xyz);
        alert(gndr);
        if(gndr == "") {
        $("#SGender").html("Please select your gender");
        return false;
        }

    if (dateOfBirth == "") {
      $("#SDob").html=("please enter your Date Of Birth");
      $('#dob').focus();
      return false;
    }

    var c=0;
    for(var i=0; i<lng.length; i++)
    {
        if(lng[i].checked) c++;
    }
    if (c==0) {
      $("#SLanguage").html("please select your language");
      return false;
    }

    if (cnt == 0) {
      $("#SCountry").html("please select your country");
      return false;
    }

    if (inputFile.length == 0) {
      $("#SFile").html("Please upload the image");
      return false;
    }
    let selectedFile = $("#File").files[0];
    let allowedTypes = ["image/jpeg", "image/png"];

    if (!allowedTypes.includes(selectedFile.type)) {
      $("#SFile").html("Only JPEG or PNG file accepted");
      $("#File").value = "";
      return false;
    }

    if((selectedFile.size/1000) > 40)
    {
      $("#SFile").html("file limit is 40KB only");
      $("#SFile").focus() ;
      return false;
    }

    if (passwd.length == 0) {
      $("#SPassword").html("Please Enter the Password");
      $('#password').focus();
      return false;
    }
    if (passwd.length < 8) {
      $("#SPassword").html("Password must be of atleast 8 digits");
      $('#password').focus();
      return false;
    }
   
    if (cnfPasswd.length == 0) {
      $("#SConfirmpassword").html("Please confirm your password");
      $('#confirmPassword').focus();
      return false;
    }
    if (passwd != cnfPasswd) {
      $("#SConfirmpassword").html("Both passwords must be the same");
      $('#confirmPassword').focus();
      return false;
    }

        return true;
    });
});