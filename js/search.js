function Search() {
    var searchQuery = document.getElementById("searchInput").value.toLowerCase();
    var previews = document.getElementsByClassName("preview");

    for (var i = 0; i < previews.length; i++) {
        var title = previews[i].getElementsByTagName("p")[0].innerHTML.toLowerCase();

        if (title.includes(searchQuery)) {
            previews[i].style.visibility = "visible";
            previews[i].style.opacity = "1";
        } else {
            previews[i].style.visibility = "hidden";
            previews[i].style.opacity = "0";
        }
    }
}