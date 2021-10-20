import './list.scss';

const goods = [
    {
        title: "Desk1",
        category: "Home Good",
        condition: "Like New",
        distance: "1200m"
    },

    {
        title: "Desk2",
        category: "Home Good",
        condition: "Like New",
        distance: "1200m"
    },

    {
        title: "Desk3",
        category: "Home Good",
        condition: "Like New",
        distance: "1200m"
    },

    {
        title: "Desk4",
        category: "Home Good",
        condition: "Like New",
        distance: "1200m"
    },

    {
        title: "Desk5",
        category: "Home Good",
        condition: "Like New",
        distance: "1200m"
    }
];

let listContainer = document.querySelector('.list-container');


goods.forEach(function(good) {

    listContainer.innerHTML += `
    <div class="list-card">
        <div class="list-info">
        <div class="list-sub-info">
            <h3>${good.title}</h3>
            <span class="category">${good.category}</span>
            <span>.</span>
            <span class="condition">${good.condition}</span>
        </div>
        <span class="distance">${good.distance}</span>
        </div>
        <div class="img"></div>
    </div>
    `        
})

console.log(goods)