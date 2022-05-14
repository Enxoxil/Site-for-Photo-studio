// START ===== Pagination  =====

// START ===== values =====

// END ===== values =====

// START ===== load default =====

initPagination();

// END ===== load default =====

// START ===== function =====

function isPaginationFromThisSlider(){
    return this.closest("._wrapper").querySelector("[data-pagination]");
}

function clearChildrenClassList(childrens) {
    for (let child of childrens) {
        child.classList.remove("active-dots");
    }
}

function searchAllPaginationItems() {
    return this.parentElement.parentElement.querySelector("[data-pagination]")
        .children;
}

function isActiveSlide() {
    return searchBodySlider.call(this).children[0].dataset.slideNumber ;
}

function changePaginationItemActive() {
    clearChildrenClassList(searchAllPaginationItems.call(this));
    
    searchAllPaginationItems
        .call(this)
        [isActiveSlide.call(this) - 1].classList.add("active-dots");
        console.log(isActiveSlide.call(this));
}

function createPaginationItem(parent) {
    const paginationItem = document.createElement("div");
    paginationItem.classList.add(`${parent.className}-item`);
    return paginationItem;
}

function createPaginationItemActiveDefault(parent) {
    const activeDefaultPaginationItem = createPaginationItem(parent);
    activeDefaultPaginationItem.classList.add("active-dots");
    return activeDefaultPaginationItem;
}

function appendPaginationItems(parent) {
    for (let i = 0; i < parent.previousElementSibling.children.length-1; i++) {
        if (i == 0) {
            parent.appendChild(createPaginationItemActiveDefault(parent));
        }
        parent.appendChild(createPaginationItem(parent));
    }
}

function getPaginationsArray() {
    return document.querySelectorAll("[data-pagination]");
}

function createPagination() {
    for (let paginationElement of getPaginationsArray()) {
        appendPaginationItems(paginationElement);
    }
}

function initPagination() {
    createPagination();
}



// END ===== function =====

// END ===== Pagination =====