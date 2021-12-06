import { getAllKindsListings } from "../../services/firebase-service";

let goods = [];

window.loadMyLists = function () {
  getAllKindsListings().then(result => {
    goods = result;
    renderMyListings();
  });
};


function renderMyListings() {
  if (goods.length < 1) {
    listContainer.innerHTML += `<div class="noList">You don't have any listings</div>`;
  } else {
    goods.forEach(function (good) {
      listContainer.innerHTML += `
            <div class="list-border">
              <div class="listCard" onclick="showListing('${good.id}')">
                  <div class="listInfo">
                  <div class="listSubInfo">
                      <h3>${good.title}</h3>
                      <span class="categoryItem">${categoryList[good.category]}</span>
                      <span>⋅</span>
                      <span class="conditionItem">${conditionList[good.condition]}</span>
                  </div>
                  </div>
                  <div class="imgItem">
                    <img src=${good.img[0]}>
                  </div>
                  </div>
                  <div class="line"></div>
                  </div>
                  `;
    });
    console.log(goods);
  }
}

window.showListing = function (id) {
  const obj = listings.find(listing => listing.id === id);
  if (obj) {
    window.currentItem = obj
    location.replace(`#detailsView`);
    populateListing();
  }
}

let listContainer = document.querySelector(".yList");