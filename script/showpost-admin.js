const API_URL1 = 'https://63496bd50b382d796c86192b.mockapi.io/';
const POSTS = API_URL1+'users'

//DOM
const showContent = document.getElementById("showContent");
const search = document.getElementById("search");
const searchBar = document.getElementById("searchBar");
const createBtn = document.getElementById("ButtonPopUp");
const showBtn = document.getElementById("showBtn");
//FUNCTION
isStorageExist()
const getPosts = async url => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        return showPosts(data);
      });
  };

  const getPostsBySearch = async url => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        return showPostsBySearch(data);
      })
  };

  getPosts(POSTS);

  const showPosts = data => {
      showContent.innerHTML = "";
    
      data.forEach(post => {
        console.log(post.articles)
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
                <button class="btn btn-success" id="btn" onclick="updatePublish(${x.userId}, ${x.id})">Approve</button>
              </div>
            </div>
              `;
              showContent.appendChild(articleElement);
          }
        })
      });
    };

const showPostsBySearch = data => {
      showContent.innerHTML = "";
      data.forEach(post => {
        const {articles} = post;
        const searchValue = searchBar.value;
        if(searchValue){
          articles.find((x)=> {
            if(x.publish === false){
          if(x.title.includes(searchValue)){
            const articleElement = document.createElement("div");
            articleElement.innerHTML = `
                <div class="card w-75 card border-success mb-3 m-auto">
                <div class="card-body">
                <h5 class="card-title border-bottom border-success">${x.title}</h5>
                  <p class="card-text">
                    ${x.content}
                  </p>
                  <button class="btn btn-success" id="btn" onclick="updatePublish(${x.userId}, ${x.id})">Approve</button>
                </div>
              </div>
                `;
                showContent.appendChild(articleElement);
            }
          }
        })}
        
      });
    };

function updatePublish(userId, id){
    fetch(API_URL1+`users/${userId}/threads/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      publish: true
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}



search.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchValue = searchBar.value;
  if(searchValue){
    getPostsBySearch(POSTS) 
  }else{
      getPosts(POSTS);
  }
})


function isStorageExist() {
  const cekLs = localStorage.getItem('USER_ID');
  if(cekLs === null){
    location.href="login.html"
  }
}
  