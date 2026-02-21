
function toggleMenu(){
    document.getElementById("nav-links").classList.toggle("active");
}

function scrollToMenu(){
    document.getElementById("menu").scrollIntoView({behavior:"smooth"});
}

function filterMenu(category){
    let items = document.querySelectorAll(".card");
    let buttons = document.querySelectorAll(".filter-buttons button");

    buttons.forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");

    items.forEach(item => {
        if(category === "all" || item.dataset.category === category){
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}