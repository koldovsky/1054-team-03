const products = [
    {
        id: 1,
        title: "George Sofa",
        category: "Sofas",
        discount: 310.00,
        price: 100.00,
        img: "./img/new-products/sofas/george-sofa.jpg",
        badge: "Sale"
    },
    {
        id: 2,
        title: "Bubbles Sofa",
        category: "Sofas",
        discount: NaN,
        price: 310.00,
        img: "./img/new-products/sofas/bubbles-sofa.jpg",
        badge: ""
    },
    {
        id: 3,
        title: "Delar Sofa",
        category: "Sofas",
        discount: NaN,
        price: 350.00,
        img: "./img/new-products/sofas/delar-sofa.jpg",
        badge: "New"
    },
    {
        id: 4,
        title: "Angela Sofa",
        category: "Sofas",
        discount: NaN,
        price: 300.00,
        img: "./img/new-products/sofas/angela-sofa.jpg",
        badge: ""
    },
    {
        id: 5,
        title: "Donna Bedside Table",
        category: "Dressers",
        discount: NaN,
        price: 150.00,
        img: "./img/new-products/dressers/donna-table.jpg",
        badge: ""
    },
    {
        id: 6,
        title: "Glory Cabinet",
        category: "Dressers",
        discount: 250.00,
        price: 140.00,
        img: "./img/new-products/dressers/glory-cabinet.jpg",
        badge: "Sale"
    },
    {
        id: 7,
        title: "Fusion Dresser",
        category: "Dressers",
        discount: NaN,
        price: 320.00,
        img: "./img/new-products/dressers/fusion-dresser.jpg",
        badge: ""
    },
    {
        id: 8,
        title: "Upi Bedside Table",
        category: "Dressers",
        discount: NaN,
        price: 110.00,
        img: "./img/new-products/dressers/upi-table.jpg",
        badge: "Limited"
    },
    {
        id: 9,
        title: "Arona Armchair",
        category: "Chairs",
        discount: NaN,
        price: 199.00,
        img: "./img/new-products/chairs/arona.jpg",
        badge: "Bestseller"
    },
    {
        id: 10,
        title: "Fusion Chair",
        category: "Chairs",
        discount: NaN,
        price: 100.00,
        img: "./img/new-products/sofas/fusion.jpg",
        badge: ""
    },
    {
        id: 11,
        title: "Lora Armchair",
        category: "Chairs",
        discount: NaN,
        price: 290.00,
        img: "./img/new-products/sofas/lora.jpg",
        badge: ""
    },
    {
        id: 12,
        title: "Barr Chair",
        category: "Chairs",
        discount: 110.00,
        price: 100.00,
        img: "./img/new-products/sofas/barr.jpg",
        badge: "Sale"
    },
];

const tabProducts = document.querySelector(".tab-products");
const filterBtns = document.querySelectorAll('.filter-btn');

// load products
window.addEventListener("DOMContentLoaded", function () {
    displayProductItems(products);
});
// filter products
filterBtns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const category = e.currentTarget.dataset.id;
        const productsCategory = products.filter(function (productItem) {
            if (productItem.category === category) {
                return productItem;
            }
        });
        comsole.log(productsCategory);
    });
});

function displayProductItems(productItems) {
    let displayProducts = productItems.map(function (item) {

        return `<article class="tab-content-container_item">
        <div class="item_img">
            <img src="${item.img}" alt="${item.title}" class="item_logo">
        </div>
        <div class="tab-item__info-interaction">
            <p class="tab-item__title">${item.title}</p>
            <div class="tab-item__price-section">
                <p class="price-section__old-price tab-discount">$${item.discount}USD</p>
                <p class="price-section__actual-price">$${item.price}USD</p>
            </div>
            <button class="item_add">Add to Cart</button>
        </div>
    </article>`;
    });
    displayProducts = displayProducts.join("");
    tabProducts.innerHTML = displayProducts;
}