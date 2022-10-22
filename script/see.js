const API_URL = "https://63496bd50b382d796c86192b.mockapi.io/users";

const showContent = document.getElementById("showContent");

const getDataArticle = async url => {
  fetch(url)
    .then(res => res.json())
    .then(data => {
      return showDataArticle(data);
    });
};
getDataArticle(API_URL);

const showDataArticle = data => {
  showContent.innerHTML = "";

  data.map(article => {
    const { articles } = article;
    const articleElement = document.createElement("div");
    articleElement.innerHTML = `
        <div class="card w-75 card border-success mb-3 m-auto">
        <div class="card-body">
          <h5 class="card-title">${articles} (ID = ${id})</h5>
          <h6>${createdAt}</h6>
          <p class="card-text">
            ${content}
          </p>
          <a href="#" class="btn btn-primary">Share</a>
        </div>
      </div>
        `;

    showContent.appendChild(articleElement);
  });
};
