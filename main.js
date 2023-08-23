import menu from "./db.js"

const menuContainer = document.querySelector("#menu-container");

const filterBtns = document.querySelectorAll(".filter-btn");

function displayMenuItems(menuItems) {

    let displayMenu = menuItems.map((item) => `
        <div id="card" class="d-flex gap-2 flex-column flex-md-row">
            <img src="${item.img}" class="shadow rounded">
            <div class="container-fluid">
                <div class="d-flex justify-content-between my-2">
                    <h5>${item.title}</h5>
                    <p class="price">$${item.price}</p>
                </div>
                <p class="text">${item.desc}</p>
            </div>
        </div>
    `);

    displayMenu = displayMenu.join('');

    menuContainer.innerHTML = displayMenu;
}

filterBtns.forEach((btn) => {

    btn.addEventListener("click", searchCategory)

});

function searchCategory(e) {
    
    const category = e.target.dataset.id;
    
    const filtredItems = menu.filter((menuItem) => {
        if(menuItem.category === category) return menuItem;
    })

    if(category === "all") {
        displayMenuItems(menu);
    } else {
        displayMenuItems(filtredItems);
    }
}

document.addEventListener("DOMContentLoaded", () => {

    displayMenuItems(menu)

})