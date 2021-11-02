import './item_details.scss';

const goods = [
    {
        title: "Mid century sideboard",
        category: "Home Good",
        condition: "Like New",
        hour: "Listed 2hours ago",
        img: 'https://s3-alpha-sig.figma.com/img/dea7/97fc/2759c7697ce24e804371a3000219b7b3?Expires=1636329600&Signature=gkx6-wmJwxuWyvJ0P-wXYbfdkkfg9OsVE9bM9e5qhsdK08SFzsaxUdm9iKCx545a5rKxJaBsG5Iy0DCkXoyhDYPZhH6PisbzoMWUvPIXiJ4cWWYC2S2NhGuLXUXD~5gsT3FeT9nQgkgyhu-BYXQDI5GYtYA-uI6BGYPG6GzayjABSJY011tzwlooiDJuvZfLpAWWIp4XoLgkdy9WWI98fsTKQGBLmyGatqsL~Mjc-LYnswbXRsuhYLe8PursT81kv~ko0rXH2PgqGuhvUHtCtF77qsBg6ME4YCQZpQ3oJZ~CEcOBoAbqMwLwCXQpfDbt6lM4v171Zt0~31mKhoGpWA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        description: 'This is AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
    },

    {
        title: "Desk",
        category: "Home Good",
        condition: "Like New",
        hour: "Listed 2hours ago",
        img: 'https://res.cloudinary.com/scave2021/image/upload/v1635474174/scave/illustration_e7eoev.png',
        description: 'This is AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
    },

    {
        title: "Chair",
        category: "Home Good",
        condition: "Like New",
        hour: "Listed 2hours ago",
        img: 'https://s3-alpha-sig.figma.com/img/dea7/97fc/2759c7697ce24e804371a3000219b7b3?Expires=1636329600&Signature=gkx6-wmJwxuWyvJ0P-wXYbfdkkfg9OsVE9bM9e5qhsdK08SFzsaxUdm9iKCx545a5rKxJaBsG5Iy0DCkXoyhDYPZhH6PisbzoMWUvPIXiJ4cWWYC2S2NhGuLXUXD~5gsT3FeT9nQgkgyhu-BYXQDI5GYtYA-uI6BGYPG6GzayjABSJY011tzwlooiDJuvZfLpAWWIp4XoLgkdy9WWI98fsTKQGBLmyGatqsL~Mjc-LYnswbXRsuhYLe8PursT81kv~ko0rXH2PgqGuhvUHtCtF77qsBg6ME4YCQZpQ3oJZ~CEcOBoAbqMwLwCXQpfDbt6lM4v171Zt0~31mKhoGpWA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        description: 'This is AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
    },

    {
        title: "Book",
        category: "Home Good",
        condition: "Like New",
        hour: "Listed 2hours ago",
        img: 'https://s3-alpha-sig.figma.com/img/dea7/97fc/2759c7697ce24e804371a3000219b7b3?Expires=1636329600&Signature=gkx6-wmJwxuWyvJ0P-wXYbfdkkfg9OsVE9bM9e5qhsdK08SFzsaxUdm9iKCx545a5rKxJaBsG5Iy0DCkXoyhDYPZhH6PisbzoMWUvPIXiJ4cWWYC2S2NhGuLXUXD~5gsT3FeT9nQgkgyhu-BYXQDI5GYtYA-uI6BGYPG6GzayjABSJY011tzwlooiDJuvZfLpAWWIp4XoLgkdy9WWI98fsTKQGBLmyGatqsL~Mjc-LYnswbXRsuhYLe8PursT81kv~ko0rXH2PgqGuhvUHtCtF77qsBg6ME4YCQZpQ3oJZ~CEcOBoAbqMwLwCXQpfDbt6lM4v171Zt0~31mKhoGpWA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        description: 'This is AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
    },

    {
        title: "White Board",
        category: "Home Good",
        condition: "Like New",
        hour: "Listed 2hours ago",
        img: 'https://s3-alpha-sig.figma.com/img/dea7/97fc/2759c7697ce24e804371a3000219b7b3?Expires=1636329600&Signature=gkx6-wmJwxuWyvJ0P-wXYbfdkkfg9OsVE9bM9e5qhsdK08SFzsaxUdm9iKCx545a5rKxJaBsG5Iy0DCkXoyhDYPZhH6PisbzoMWUvPIXiJ4cWWYC2S2NhGuLXUXD~5gsT3FeT9nQgkgyhu-BYXQDI5GYtYA-uI6BGYPG6GzayjABSJY011tzwlooiDJuvZfLpAWWIp4XoLgkdy9WWI98fsTKQGBLmyGatqsL~Mjc-LYnswbXRsuhYLe8PursT81kv~ko0rXH2PgqGuhvUHtCtF77qsBg6ME4YCQZpQ3oJZ~CEcOBoAbqMwLwCXQpfDbt6lM4v171Zt0~31mKhoGpWA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        description: 'This is AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
    }
];

let containerHeader = document.querySelector('.content-info');
let imgs = document.querySelector('.imgs');
let thumbnail = document.querySelector('.thumbnail');

const mySlides = document.createElement('div');
mySlides.className="mySlides";
goods.forEach((good, index)=> {
    const img = document.createElement('img');
    img.setAttribute('src', good.img);
    img.setAttribute('class', 'opacity img');
    mySlides.appendChild(img);
})
imgs.appendChild(mySlides);


document.querySelector('.mySlides').addEventListener('click', mySlidesHandler);

function mySlidesHandler(e) {
    setFeaturedImg(e);
    addOpacity(e);
    deleteOpacity(e);
}

function setFeaturedImg(e) {
    if(e.target.src) {
        document.getElementById('featuredImg').setAttribute('src', e.target.src);
    }
}

function deleteOpacity(e) {
    console.log(e);
    e.target.classList.remove('opacity');
}

function addOpacity(e) {
    const imgElements = document.querySelectorAll('.img');
    imgElements.forEach(element => {
        element.classList.add('opacity');
    });
}



    // goods.forEach(function(good) {
    //     containerHeader.innerHTML = `
    //     <h1>${good.title}</h1>
    //     <div class="content-header">
    //         <div class="sub-info">
    //             <span class="category">${good.category}</span>
    //             <span>.</span>
    //             <span class="condition">${good.condition}</span>
    //         </div>
    //         <span class="hours">${good.hour}</span>
    //     </div>
    //     `
    // })



