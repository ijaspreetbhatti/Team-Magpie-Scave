import "./menu_listing.scss";

const goods = [
  {
    title: "Desk1",
    category: "Home Good",
    condition: "Like New",
    distance: "1200m",
  },
  {
    title: "Desk2",
    category: "Home Good",
    condition: "Like New",
    distance: "1200m",
  },
  {
    title: "Desk3",
    category: "Home Good",
    condition: "Like New",
    distance: "1200m",
  },
  {
    title: "Desk4",
    category: "Home Good",
    condition: "Like New",
    distance: "1200m",
  },
  {
    title: "Desk5",
    category: "Home Good",
    condition: "Like New",
    distance: "1200m",
  },
];

let listContainer = document.querySelector(".list-container");

if (goods.length < 1) {
  listContainer.innerHTML += `<div class="noList">You don't have any listings</div>`;
} else {
  goods.forEach(function (good) {
    listContainer.innerHTML += `
        <div class="list-border">
          <div class="listCard">
              <div class="listInfo">
              <div class="listSubInfo">
                  <h3>${good.title}</h3>
                  <span class="categoryItem">${good.category}</span>
                  <span>⋅</span>
                  <span class="conditionItem">${good.condition}</span>
              </div>
              <span class="distanceItem">${good.distance}</span>
              </div>
              <div class="imgItem"></div>
          </div>
          <div class="line"></div>
              <div class="button">
                  <div class="btn1">
                      <button id="editbtn" class="editbtn">Edit</button>
                  </div>
                  <div class="btn2">
                      <button id="deletebtn" class="deletebtn">Delete</button>
                  </div>
              </div>
      </div>
          `;
  });

  console.log(goods);
}
