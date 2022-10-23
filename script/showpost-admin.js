const API_URL1 = 'https://63496bd50b382d796c86192b.mockapi.io/';
const POSTS = API_URL1+'users'
const SHOW = API_URL1+'users/1/threads/3'

//DOM
const showContent = document.getElementById("showContent");
const search = document.getElementById("search");
const searchBar = document.getElementById("searchBar");
const createBtn = document.getElementById("ButtonPopUp");
const showBtn = document.getElementById("showBtn");
//FUNCTION
const getPosts = async url => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        return showPosts(data);
      });
  };

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
                <button type="button" id="showBtn" class="btn btn-success btn-sm">Show</button>
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
          getPosts(POSTS+'?search='+searchValue)
      }else{
          getPosts(POSTS);
      }
  })

showBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  fetch(SHOW, {
    headers: { "Content-Type": "application/json; charset=utf-8" },
    method: 'PUT',
    body: JSON.stringify({
      publish: true
    })
  })
})
  