// Define a global variable to store the current ID value
let userIdCounter = 0;

// Define an array to store the existing user IDs
let userIdArray = [];

// onchange function for name
function ValidateName() {
  let Name = document.getElementById("inputName").value;
  let regName = /^[a-zA-Z ]{2,30}$/;
  let crtName = regName.test(Name);
  if (crtName) {
    document.getElementById("inputName").style.boxShadow = "1px 1px 10px green";
    return true;
  } else {
    document.getElementById("inputName").style.boxShadow = "1px 1px 10px red";
    return false;
  }
}

// onchange function for EmailId
function ValidateEmail() {
  let Email = document.getElementById("inputEmail").value;
  let regEmail = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
  let crtEmail = regEmail.test(Email);
  if (crtEmail) {
    document.getElementById("inputEmail").style.boxShadow = "1px 1px 10px green";
    return true;
  } else {
    document.getElementById("inputEmail").style.boxShadow = "1px 1px 10px red";
    return false;
  }
}

// onchange function for Mobile Number
function ValidateNumber() {
  let Number = document.getElementById("inputNumber").value;
  let regNumber = /^(0|91)?[6-9][0-9]{9}$/;
  let crtNumber = regNumber.test(Number);
  if (crtNumber) {
    document.getElementById("inputNumber").style.boxShadow = "1px 1px 10px green";
    return true;
  } else {
    document.getElementById("inputNumber").style.boxShadow = "1px 1px 10px red";
    return false;
  }
}

// onclick Function
function SaveToTable() {
  if (ValidateName() && ValidateEmail() && ValidateNumber()) {
    let PhoneNumber = document.getElementById("inputNumber").value;
    let UserEmail = document.getElementById("inputEmail").value;
    let UserName = document.getElementById("inputName").value;

    // Check if the name, email, or mobile number already exists
    let table = document.getElementById("table"); // Get the table reference
    for (let i = 1; i < table.rows.length; i++) {
      let row = table.rows[i];
      let emailCell = row.cells[3].innerHTML;
      let numberCell = row.cells[5].innerHTML;

      if (
        emailCell === UserEmail ||
        numberCell === PhoneNumber
      ) {
        alert("Duplicate entry! User already exists.");
        return;
      }
    }

    let UserId = "UI" + userIdCounter.toString().padStart(4, 0);
    userIdCounter++; // Increment the ID counter

    let DateTime = new Date().toLocaleString(); // Get the current date and time
    let DayArray = DateTime.split(",");
    let Day= DayArray[0];
    let Time = DayArray[1];
    let row = table.insertRow(1);
    let Id = row.insertCell(0);
    let EntryDay = row.insertCell(1);
    let EntryTime = row.insertCell(2);
    let email = row.insertCell(3);
    let name = row.insertCell(4);
    let number = row.insertCell(5);
    number.innerHTML = PhoneNumber;
    email.innerHTML = UserEmail;
    name.innerHTML = UserName;
    Id.innerHTML = UserId;
    EntryDay.innerHTML = Day;
     EntryTime.innerHTML = Time;
  }
}
