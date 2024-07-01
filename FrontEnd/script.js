let signUpBtn = $("#signUpBtn");
let tableBtn = $("#tableBtn");
let signUpForm = $("#formSection");
let dataTable = $("#dataTable");


signUpBtn.click(function (e) { 
    e.preventDefault();
    signUpForm.css("display","block");
    dataTable.css("display","none");
    signUpBtn.css("display","none");
    tableBtn.css("display","block")
});

tableBtn.click(function (e) {
    e.preventDefault();
    signUpForm.css("display", "none");
    dataTable.css("display", "block");
    signUpBtn.css("display", "block");
    tableBtn.css("display", "none")
});