window.addEventListener("DOMContentLoaded", function() {
    initializeLikes();
    initializeDislikes();
});

function initializeLikes() {
    var likeCount = getRandomNumber(1, 1500);
    document.getElementById("like-count").innerText = likeCount;
    localStorage.setItem("likeCount", likeCount);
}

function initializeDislikes() {
    var dislikeCount = getRandomNumber(1, 1300);
    document.getElementById("dislike-count").innerText = dislikeCount;
    localStorage.setItem("dislikeCount", dislikeCount);
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function incrementLikes() {
    var likeCount = localStorage.getItem("likeCount") || 0;
    likeCount++;
    document.getElementById("like-count").innerText = likeCount;
    localStorage.setItem("likeCount", likeCount);
    calculateRating();
}

function incrementDislikes() {
    var dislikeCount = localStorage.getItem("dislikeCount") || 0;
    dislikeCount++;
    document.getElementById("dislike-count").innerText = dislikeCount;
    localStorage.setItem("dislikeCount", dislikeCount);
    calculateRating();
}

function calculateRating() {
    var likeCount = parseInt(localStorage.getItem("likeCount")) || 0;
    var dislikeCount = parseInt(localStorage.getItem("dislikeCount")) || 0;
    var totalRating = calculatePercentage(likeCount, likeCount + dislikeCount);
    document.getElementById("total-rating").innerText = totalRating + "%";
}

function calculatePercentage(value, total) {
    if (total === 0) {
        return 0;
    }
    return Math.round((value / total) * 100);
}