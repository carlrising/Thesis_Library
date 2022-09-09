var selectedRow = null;

//Show Alerts 
function showAlert(message, className){
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div, main);

    setTimeout(() => document.querySelector(".alert").remove(), 3000);
}

//Clear inputted data in the table
function clearData(){
    document.querySelector("#courseCode").value="";
    document.querySelector("#deptId").value="";
    document.querySelector("#titleName").value="";
}

//Add Thesis Information
document.querySelector("#thesis-form").addEventListener("submit", (e) =>{
    e.preventDefault();

    //Taking the inputted value from the form
    const courseCode = document.querySelector("#courseCode").value;
    const deptId = document.querySelector("#deptId").value;
    const titleName = document.querySelector("#titleName").value;

    //Validation of inputted values
    if(courseCode == "" || deptId == "" || titleName ==  ""){
        showAlert("Please fill out the information properly.", "danger");
    }
    else{
        if(selectedRow == null){
            const list = document.querySelector('#thesis-list');
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${courseCode}</td>
                <td>${deptId}</td>
                <td>${titleName}</td> 
                <td>
                <a href= "#" class="btn btn-warning btn-sm edit">Edit</a>
                <a href= "#" class="btn btn-danger btn-sm delete">Delete</a>
            `;
            list.appendChild(row);
            selectedRow =  null;
            showAlert("Thesis paper added.", "success");

        }
        else{
            selectedRow.children[0].textContent = courseCode;
            selectedRow.children[1].textContent = deptId;
            selectedRow.children[2].textContent = titleName
            selectedRow = null;
            showAlert("Edit successful", "info");
        }

        clearFields();
    }
});

//Edit Data
document.querySelector("#thesis-list").addEventListener("click", (e) =>{
    target = e.target;
    if(target.classList.contains("edit")){
        selectedRow = target.parentElement.parentElement;
        document.querySelector("#courseCode").value = selectedRow.children[0].textContent;
        document.querySelector("#deptId").value = selectedRow.children[1].textContent;
        document.querySelector("#titleName").value = selectedRow.children[2].textContent;
    }
})

//Delete Data

document.querySelector('#thesis-list').addEventListener("click", (e) =>{
    target = e.target;
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
        showAlert("Thesis Data Deleted", "danger");
    }
});