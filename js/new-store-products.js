const products = [
    {
        id: 1,
        title: "George Sofa",
        category: "Sofas",
        discount: 310.00,
        price: 100.00,
        img: "./img/new-products/sofas/george-sofa.jpg",
        badge: "Sale",
        description: `This minimalistic sofa is a perfect fit for a home office or living room. It is a versatile sofa in a deep emerald colour that looks good in any interior design.`,
        dimensions: '38" x 63"',
        materials: "textile, steel.",
        status: "In stock",
        marking: "3MA",
        code: 5
    },
    {
        id: 2,
        title: "Bubbles Sofa",
        category: "Sofas",
        discount: NaN,
        price: 310.00,
        img: "./img/new-products/sofas/bubbles-sofa.jpg",
        badge: "",
        description: `This is the very sofa in which you want to drown after a hard day. Elegant handrails and padded back allow you to take any position in this armchair.`,
        dimensions: '28" x 40"',
        materials: "Textile, wood",
        status: "Pre-order",
        marking: "BBU",
        code: 8
    },
    {
        id: 3,
        title: "Delar Sofa",
        category: "Sofas",
        discount: NaN,
        price: 350.00,
        img: "./img/new-products/sofas/delar-sofa.jpg",
        badge: "New",
        description: `This classic sofa will become a real boon for your interior! It is a perfect fit for an office or a classy living room.`,
        dimensions: '35" x 78"',
        materials: "Cotton, wood",
        status: "In stock",
        marking: "DUS",
        code: 7
    },
    {
        id: 4,
        title: "Angela Sofa",
        category: "Sofas",
        discount: NaN,
        price: 300.00,
        img: "./img/new-products/sofas/angela-sofa.jpg",
        badge: "",
        description: `This wide-backed white sofa will welcome you after or during your hard day and help you relax. It will fit into any interior and is very easy to clean.`,
        dimensions: '35" x 73"',
        materials: "Faux suede, wood",
        status: "In stock",
        marking: "RDK",
        code: 6
    },
    {
        id: 5,
        title: "Donna Bedside Table",
        category: "Dressers",
        discount: NaN,
        price: 150.00,
        img: "./img/new-products/dressers/donna-table.jpg",
        badge: "",
        description: `This white bedside table is the perfect accent to any bedroom. This table is a great way to keep your bedroom organised and clutter-free, featuring one shelf for keeping books, magazines, and other items. This white table will blend in with any decor with its simple design.`,
        dimensions: '15" x 20"',
        materials: "Walnut wood",
        status: "In stock",
        marking: "AAM",
        code: 2
    },
    {
        id: 6,
        title: "Glory Cabinet",
        category: "Dressers",
        discount: 250.00,
        price: 140.00,
        img: "./img/new-products/dressers/glory-cabinet.jpg",
        badge: "Sale",
        description: `This wooden kitchen cabinet is a classic and timeless piece that provides ample storage and a beautiful aesthetic touch to any kitchen. It is designed with one drawer and two shelves.`,
        dimensions: '20" x 30"',
        materials: "Solid wood",
        status: "In stock",
        marking: "CAD",
        code: 3
    },
    {
        id: 7,
        title: "Fusion Dresser",
        category: "Dressers",
        discount: NaN,
        price: 320.00,
        img: "./img/new-products/dressers/fusion-dresser.jpg",
        badge: "",
        description: `Stylish wooden dresser in whit colour. Functional and minimalistic, it fits perfectly into any interior.`,
        dimensions: '25" x 32"',
        materials: "Beech wood",
        status: "In stock",
        marking: "FAL",
        code: 1
    },
    {
        id: 8,
        title: "Upi Bedside Table",
        category: "Dressers",
        discount: NaN,
        price: 110.00,
        img: "./img/new-products/dressers/upi-table.jpg",
        badge: "Limited",
        description: `This ultimate wooden bedside table with one shelf will fit perfectly into your bedroom. The polished surface is easy to wipe off.`,
        dimensions: '10" x 8"',
        materials: "Walnut wood",
        status: "In stock",
        marking: "JAK",
        code: 4
    },
    {
        id: 9,
        title: "Arona Armchair",
        category: "Chairs",
        discount: NaN,
        price: 199.00,
        img: "./img/new-products/chairs/arona.jpg",
        badge: "Bestseller",
        description: `A cosy armchair in a beige colour is perfect for both your living room and your home office. It's simple, minimalistic, and yet stylish.`,
        dimensions: '30" x 37"',
        materials: "Cotton, wood",
        status: "In stock",
        marking: "HTKS",
        code: 12
    },
    {
        id: 10,
        title: "Fusion Chair",
        category: "Chairs",
        discount: NaN,
        price: 100.00,
        img: "./img/new-products/sofas/fusion.jpg",
        badge: "",
        description: `It is an incredibly stylish chair in a trendy deep blue colour. In it, you can recline comfortably and read a book or work on a laptop.`,
        dimensions: '25" x 32"',
        materials: "Faux leather, beech wood",
        status: "In stock",
        marking: "SCA",
        code: 11
    },
    {
        id: 11,
        title: "Lora Armchair",
        category: "Chairs",
        discount: NaN,
        price: 290.00,
        img: "./img/new-products/sofas/lora.jpg",
        badge: "",
        description: `Simple design and vibrant green colour are the hallmarks of this armchair. It is versatile: you can make this armchair a striking accent in your interior or create an island of tranquillity in your office.`,
        dimensions: '28" x 35"',
        materials: "Cotton, wood",
        status: "In stock",
        marking: "UTL",
        code: 9
    },
    {
        id: 12,
        title: "Barr Chair",
        category: "Chairs",
        discount: 110.00,
        price: 100.00,
        img: "./img/new-products/sofas/barr.jpg",
        badge: "Sale",
        description: `This designer chair is made from a combination of textiles and natural wood. The chair fits perfectly into a high-tech or minimalist living room.`,
        dimensions: '26" x 33"',
        materials: "Textile, black walnut wood",
        status: "In stock",
        marking: "MTO",
        code: 10
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