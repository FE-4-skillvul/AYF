//API_URL
const API_URL = 'https://63496bd50b382d796c86192b.mockapi.io/';
const USERS = API_URL+'users'

//DOM
let body = document.getElementById("body")
//FUNCTION
let form = document.getElementById('form2');
form.addEventListener('submit', function (event) {
event.preventDefault();
userData()
});

let userData = async () => {
  let uemail = document.getElementById('email2').value;
  let pwd = document.getElementById('pword2').value;
  let role = document.getElementById('role').value;

  let response = await fetch(USERS);
  let users = await response.json();
  let obj = users.find(o => o.role === 'admin')
  
 
if(role == obj.role){
  let cekData = 
        users.some(user =>
        user.email == uemail && 
        user.password == pwd &&
        user.role == role
        );
        if(cekData){
          location.href="dashboard-admin.html"
        }
        else{
          alert("Incorrect Login Credentials")
        }
  
} else{
  let cekData = 
  users.some(user =>
    user.email == uemail && 
    user.password == pwd &&
    user.role == role
    );
    if(cekData){
      location.href="home.html"
    }
    else{
      alert("Incorrect Login Credentials")
    }
}
  
}
