// Hello, Hacker. This is a Javascript comment.
document.addEventListener("DOMContentLoaded", () => {
    // Loaded and ready to go!
    console.log("Hello World!");

    const elRandomImage = document.getElementById("random-image");
    const elRefreshButton = document.querySelectorAll('.btn__refresh.hidden')[0]
    elRefreshButton.classList.remove('hidden');


    elRefreshButton.addEventListener('click', () => {
        console.log("Loading new image...");
        elRandomImage.src = `https://picsum.photos/seed/${Math.random()}/480/320`;
    })

});