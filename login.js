function validate(){
    var username = document.getElementById("user").value;
    var password = document.getElementById("pass").value;

    if(username=="admin" && password =="admin"){
        alert("Login Successful");
        window.location.href = "department_interface_admin.html";
        return true;
        exit();
    }
    else if(username=="student1" && password =="1234"){
        alert("Login Successful");
        window.location.href = "department_interface.html";
        return true;
        exit();
    }
    else{
        alert("Login Failed");
    }
}