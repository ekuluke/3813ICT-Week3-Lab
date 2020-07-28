$(document).ready(function() {
    $("#loginform").submit(function(event) {
        event.preventDefault();
        ajaxPost();
    })});

function ajaxPost(){

    var formData = {
        email : $("email").val(),
        pass : $("pass").val()
    }

    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: window.location +"api/login",
        data: JSON.stringify(formData),
        datatype: 'json',
        success: function(customer) {
            if(customer.valid == true){
                $("#loginform").removeClass("fail");
                $("#loginform").addClass("success");
            }else{
                $("#loginform").removeClass("success");
                $("#loginform").addClass("fail");
            }

            // Write the value of the returned properties to the screen.
        $("#postResultDiv").html("<p>" + "Post Successfully! <br>" + "Email Address" 
        + customer.email + "</br>" + "Password: " + customer.pass + "</br>"
        + "Valid User: " + customer.valid +"</p>"); 
        },
        error: function(e) {
            alert("Error!")
            console.log("ERROR: ", e);
        }
    });
    // Reset form data after POSTing
    resetData();
}

function resetData() {
    $("#email").val("");
    $("pass").val(""); 
}