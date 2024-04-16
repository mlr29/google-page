const inputBar = document.getElementById("input_bar")
console.log(inputBar)
const searchSuggestions = document.getElementById("search_suggestions")
console.log(searchSuggestions)
const searchBar = document.getElementById("search_bar")
console.log(searchBar)
const searchBarContainer = document.getElementById("search_container")
console.log(searchBarContainer)

inputBar.addEventListener("focusin", ()=> {
    searchSuggestions.style.display = "flex"
    searchBarContainer.style.borderRadius = "24px 24px 0 0"
    searchBarContainer.style.border = "0"
    searchBarContainer.style.boxShadow = "1px 1px 2px 2px #dfe1e5"
})

inputBar.addEventListener("focusout", ()=> {
    searchSuggestions.style.display = "none"
    searchBarContainer.style.borderRadius = "24px"
    searchBarContainer.style.border = "1px solid #dfe1e5"
    searchBarContainer.style.boxShadow = "none"
})

