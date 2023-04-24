const ACCESS_KEY = "Sdimaa4_4hUDOGUKylZWrcwNSGNuIEy9zjieXgGW1uo";
// const SECRET_KEY = "Yiyru1fVDQ6aIoCAUWEweplaptCAbMOH29L53kmQDKI";

const formEl = document.querySelector("form");
const searchInputEl = document.getElementById("search-input");
const searchResulstEl = document.querySelector(".search-results");
const showMoreEl = document.getElementById("show-more-button");

let inputData = "";
let page = 1;

async function searchImages() {
  inputData = searchInputEl.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${ACCESS_KEY}`;

  const response = await fetch(url);
  const data = await response.json();
  if (page === 1) {
    searchResulstEl.innerHTML = "";
  }
  const results = data.results;

  results.map((result) => {
    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("card");

    const image = document.createElement("img");
    image.src = result.urls.small;
    image.alt = result.alt_description;

    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";
    imageLink.textContent = result.alt_description;

    imageWrapper.appendChild(image);
    imageWrapper.appendChild(imageLink);

    searchResulstEl.appendChild(imageWrapper);
  });

  page++;

  if (page > 1 && page < 1000) {
    showMoreEl.style.display = "block";
  }
}

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  page = 1;
  searchImages();
});

showMoreEl.addEventListener("click", () => {
  searchImages();
});
