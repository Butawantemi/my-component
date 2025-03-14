const filterBtns = document.querySelectorAll(".filter_buttons button");
const filterablesCards = document.querySelectorAll(".filterable_cards .card");

const filterCards = (e) => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    filterablesCards.forEach((card) => {
        card.classList.add("hide");

        if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") {
            card.classList.remove("hide");
        }
    })

    
}

filterBtns.forEach((btn) => {
    btn.addEventListener("click", filterCards)
});
