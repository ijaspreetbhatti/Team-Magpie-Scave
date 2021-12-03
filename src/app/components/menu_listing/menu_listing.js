const goods = [
  // {
  //   title: "Desk1",
  //   category: "Home Good",
  //   condition: "Like New",
  //   distance: "1200m",
  // },
  // {
  //   title: "Desk2",
  //   category: "Home Good",
  //   condition: "Like New",
  //   distance: "1200m",
  // },
  // {
  //   title: "Desk3",
  //   category: "Home Good",
  //   condition: "Like New",
  //   distance: "1200m",
  // },
  // {
  //   title: "Desk4",
  //   category: "Home Good",
  //   condition: "Like New",
  //   distance: "1200m",
  // },
  // {
  //   title: "Desk5",
  //   category: "Home Good",
  //   condition: "Like New",
  //   distance: "1200m",
  // },
];

let listContainer = document.querySelector(".yList");

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
                      <span id="editBtn" class="editBtn">Edit</span>
                  </div>
                  <div class="btn2">
                      <span class="deleteBtn" id="deleteBtn">Delete</span>
                  </div>
              </div>
      </div>
          `;
  });

  console.log(goods);
}
let editBtn = document.getElementById('editBtn');
let cardDeleteBtn = document.getElementById('deleteBtn');
let yrListModal = document.getElementById('popUp');
let mdlDeleteBtn = document.querySelector('.delete');
let cancelBtn = document.querySelector('.cancelBtn');

cardDeleteBtn.onclick = function () {
  yrListModal.style.display = 'block';
}

cancelBtn.onclick = function () {
  yrListModal.style.display = 'none';
}