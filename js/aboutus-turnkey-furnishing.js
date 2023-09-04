const examples = [
    {
        id: 1,
        alt: "laptop-room",
        name: "Home Office for an 3D Artist",
        description: "Our client works at home most of the time, so it was important for him that his home office was functional and comfortable. We offered him a solution in a minimalistic style with lots of plants and decoration elements.",
        image: "img/first-work-of-ours-example.jpg",
        benefits: ["Wooden workstation;", "Ergonomic chair;", "Exclusive decoration elements."]
    },
    {
        id: 2,
        alt: "bedroom-design",
        name: "Master Bedroom",
        description: "A master bedroom is a place of solitude and relaxation for any couple. Our clients love pastel shades, so we offered them this delicate project with textile elements, a king-size bed, and nice pouffes.",
        image: "img/second-work-of-ours-example.jpg",
        benefits: ["Bed upholstered in white leather;", "White bedside tables;", "Clouds-like poufs with feathers."]
    },
    {
        id: 3,
        alt: "living-room",
        name: "Dining Room for a Family",
        description: "Our task was to pick dining room furniture for a large family. The clients wanted to create a space where it would be convenient not only to have a quick meal but also to have leisurely family dinners.",
        image: "img/third-work-of-ours-example.jpg",
        benefits: ["Green suede chairs;", "Marble dining table;", "Lightning and rugs."]
    },
];

renderExample(examples);

function renderExample(examples) {
    const examplesContainer = document.querySelector('.aboutus-turnkey-furnishing__examples');
    examplesContainer.innerHTML = '';
    for (const example of examples) {
        const benefitsList = example.benefits.map(benefit => `<li class="benefits-examples__card">${benefit}</li>`).join('');
        examplesContainer.innerHTML += 
            `<div class="aboutus-turnkey-furnishing__furnishing-examples">
                <img src="${example.image}" alt="${example.alt}" class="furnishing-examples__picture">
                <article class="furnishing-examples__article">
                    <h3 class="furnishing-examples__turnkey-titles">${example.name}</h3>
                    <p class="furnishing-examples__turnkey-descriptions">${example.description}</p>
                    <ul class="furnishing-examples__benefits-examples">
                        ${benefitsList}
                    </ul>
                </article>
            </div>`
        };
    };