let firstName = document.getElementById("FirstName");
let lastName = document.getElementById("LastName");
let dob = document.getElementById("dob");
let country = document.getElementById("country");
let gender = document.getElementById("gender");
let profession = document.getElementById("profession");
let emailId = document.getElementById("email");
let mobile = document.getElementById("number");
let formsur = document.getElementById("survay-form");
let alert_detail = document.getElementsByClassName("alert")[0];

let btnSubmit = document.getElementById("submit");

let alert_box = document.getElementById("alert-form-details");

function handleClick(e) {
    // e.preventDefault();
    localStorage.setItem("firstName", firstName.value);
    localStorage.setItem("lastName", lastName.value);
    localStorage.setItem("dob", dob.value);
    localStorage.setItem("country", country.value);
    localStorage.setItem("gender", gender.value);
    localStorage.setItem("profession", profession.value);
    localStorage.setItem("email", emailId.value);
    localStorage.setItem("mobile", mobile.value);
    

    if (localStorage.getItem("firstName") !=="" &&
        localStorage.getItem("lastName") !=="" &&
        localStorage.getItem("dob") !=="" &&
        localStorage.getItem("profession") !=="" &&
        localStorage.getItem("email") !=="" &&
        localStorage.getItem("mobile") !=="") {
        e.preventDefault();

        alert_detail.style.display = "block";

        alert_box.innerHTML = `<h1>Survey Form Data</h1>
        <div class="Form-details">

        <div><span class="key">First Name : </span><span>${localStorage.getItem("firstName")}</span></div>
        <div><span class="key">Last Name : </span><span>${localStorage.getItem("lastName")}</span></div>
        <div><span class="key">Date Of Birth : </span><span>${localStorage.getItem("dob")}</span></div>
        <div><span class="key">Country : </span><span>${localStorage.getItem("country")}</span></div>
        <div><span class="key">Gender : </span><span>${localStorage.getItem("gender")}</span></div>
        <div><span class="key">Profession : </span><span>${localStorage.getItem("profession")}</span></div>
        <div><span class="key">Email Id : </span><span>${localStorage.getItem("email")}</span></div>
        <div><span class="key">Mobile : </span><span>${localStorage.getItem("mobile")}</span></div>
    </div>`;

        formsur.reset();

    }


}

btnSubmit.addEventListener("click", handleClick);


