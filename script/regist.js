let API_URL = 'https://63496bd50b382d796c86192b.mockapi.io/'
let form = document.getElementById('form');
    form.addEventListener('submit', function (event) {
    event.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
    fetch(API_URL+'users', {
        method:'POST',
        headers:{
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
        .then(alert("Akun Berhasil Dibuat!"))
            .then(location.href="login.html")
          .catch(err => alert(err))
  });