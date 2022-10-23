const API_URL1 = 'https://63496bd50b382d796c86192b.mockapi.io/';
const POSTS = API_URL1+'users'
const SEARCH_URL = API_URL1+'users'

//DOM
const showContent = document.getElementById("showContent");
const search = document.getElementById("search");
const searchBar = document.getElementById("searchBar");
const createBtn = document.getElementById("ButtonPopUp");
const copy = document.getElementById("copy");
//FUNCTION
const getPosts = async url => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        return showPosts(data);
      });
  };
  isStorageExist();
  getPosts(POSTS);

  const showPosts = data => {
      showContent.innerHTML = "";
    
      data.forEach(post => {
        const {articles} = post;
        articles.map((x)=> {
          if(x.publish === false){
          const articleElement = document.createElement("div");
          articleElement.innerHTML = `
              <div class="card w-75 card border-success mb-3 m-auto">
              <div class="card-body">
                <h5 class="card-title border-bottom border-success">${x.title}</h5>
                <p class="card-text">
                  ${x.content}
                </p>
                <button type="button" class="btn btn-success btn-sm">Show</button>
            <button type="button" class="btn btn-outline-success btn-sm">Hide</button>
              </div>
            </div>
              `;
              showContent.appendChild(articleElement);
          }
        })
      });
    };


search.addEventListener('submit', (e) => {
      e.preventDefault();
    const searchValue = searchBar.value;
      if(searchValue){
          getPosts(SEARCH_URL+'?content='+searchValue)
      }else{
          getPosts(POSTS);
      }
  })

  function isStorageExist() {
    const cekLs = localStorage.getItem('USER_ID');
    if(cekLs === null){
      createBtn.innerText = "Login to create an article"
      createBtn.addEventListener("click", function() {
        location.href = "login.html";
      });
    }
  }