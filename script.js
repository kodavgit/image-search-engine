const searchForm = document.querySelector("#search-form");
const searchBox = document.querySelector("#search-box");
const searchResult = document.querySelector("#search-result");
const showMoreBtn = document.querySelector("#show-more-btn");


const accessKey = "v0XQTIa2GwA8qc0yHiVYAMBivB92XUMduLYXays-lbs"
let keyword = ""
let page = 1

async function searchImage() {
    keyword = searchBox.value 
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json()

    if(page === 1) {
        searchResult.textContent = ""
    }

    const result = data.results

    result.map((result) => {
        const image = document.createElement("img")
        image.src = result.urls.small
        const imageLink = document.createElement("a")
        imageLink.href = result.links.html
        imageLink.target = "_blank"

        imageLink.appendChild(image)
        searchResult.appendChild(imageLink)
    })
    showMoreBtn.style.display = "block"
}

searchForm.addEventListener("submit", (e) => {
    e.preventDefault()
    page = 1
    searchImage()
})

showMoreBtn.addEventListener("click", () => {
    page++
    searchImage()

})

