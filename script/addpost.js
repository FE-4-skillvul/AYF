let API_URL = 'https://63496bd50b382d796c86192b.mockapi.io/'
let getLS = localStorage.getItem("USER_ID")
let obj = JSON.parse(getLS)
const threads = `${API_URL}users/${obj.id}/threads`

// 

let form = document.getElementById('form');
    form.addEventListener('submit', function (event) {
    event.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
    fetch(threads, {
        method:'POST',
        headers:{
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
        .then(data => console.log(data))
        .then(alert("Threads Berhasil Dibuat!"))
        .then(location.href="home.html")
          .catch(err => console.log(err))
  });




// let userData = async () => {
   
    //     let response = await fetch(USERS);
    //     let users = await response.json();
    //     let obj = users.find(o => o.role === 'admin')
    
    // }

