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
  

  let response = await fetch(USERS);
  let users = await response.json();
  
  let cekData = users.find((x)=> x.email === uemail && x.password === pwd)
  
  if(cekData){
    if(cekData.role === "admin"){
      let parsedLS = JSON.stringify(cekData)
      localStorage.setItem('USER_ID', parsedLS)
      location.href="dashboard-admin.html"
            
    } else{
      let parsedLS = JSON.stringify(cekData)
      localStorage.setItem('USER_ID', parsedLS)
      location.href="home.html"
       
    }
  }else{
    alert("INCORRECT LOGIN CREDENTIALS")
  }
    
}
