// Validating Empty Field
function check_empty() {
    if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('msg').value == "") {
    alert("All Fields Have To Be Complete !");
    } else {
    document.getElementById('form').submit();
    alert("Form Submitted Successfully...");
    }
    }
    // Display Popup
    function div_show() {
    document.getElementById('abc').style.display = "block";
    }
    // Hide Popup
    function div_hide(){
    document.getElementById('abc').style.display = "none";
    }