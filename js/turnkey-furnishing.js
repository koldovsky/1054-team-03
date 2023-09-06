const examples = [
    {
        id: 1,
        alt: "home-office",
        name: "Home Office for a Freelancer",
        description: "When working remotely, it is vital to surround yourself with stylish and comfortable pieces of furniture and decoration. Our experts have selected the best interior elements for a freelancer's workstation.",
        image: "img/interior1.jpg",
        benefits: ["Wooden desk;", "Ergonomic chair;", "Decoration elements."]
    },
    {
        id: 2,
        alt: "family-living-room",
        name: "Family Living Room",
        description: "In our client's family, the living room is a gathering place for all family members in the evenings and on weekends. We tried to make this room festive and cosy at the same time by picking the right furniture and decorations.",
        image: "img/interior2.jpg",
        benefits: ["Textile armchair;", "Golden chest of drawers;", "Stylish ottoman."]
    },
];
renderExample(examples);
function renderExample(examples) {
    const examplesContainer = document.querySelector('.turnkey-furnishing__examples');
    examplesContainer.innerHTML = '';
    for (const example of examples) {
        const benefitsList = example.benefits.map(benefit => `<li class="benefits-examples__card">${benefit}</li>`).join('');
        examplesContainer.innerHTML += 
            `<div class="turnkey-furnishing__furnishing-examples">
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