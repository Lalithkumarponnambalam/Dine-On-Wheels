const dishes = [
    {
        category: 'Dosa',
        name: 'Chicken Dosa',
        description: 'Delicious chicken-filled dosa, perfect for a hearty meal.',
        image: './assets/menus/pottato-dosa.png',
    },
    {
        category: 'Dosa',
        name: 'Mutton (Kudal) Dosa',
        description: 'Crispy dosa served with flavorful mutton, chutney, and sambar.',
        image: '/assets/menus/plain-dosa.png',
    },
    {
        category: 'Dosa',
        name: 'Plain Dosa',
        description: 'Classic crispy dosa made from fermented rice and lentil batter.',
        image: './assets/menus/plain-dosa.png',
    },    
    {
        category: 'Dosa',
        name: 'Potato Dosa',
        description: 'Crispy dosa stuffed with spiced mashed potatoes for a satisfying bite.',
        image: './assets/menus/pottato-dosa.png',
    },
    {
        category: 'Dosa',
        name: 'Onion Dosa',
        description: 'Crispy dosa loaded with savory onions for a delightful flavor.',
        image: './assets/menus/pottato-dosa.png',
    },
    {
        category: 'Dosa',
        name: 'Podi Dosa',
        description: 'Spicy podi dosa, perfect with chutney and sambar for a tasty meal.',
        image: './assets/menus/podi-dosa.png',
    },
    {
        category: 'Dosa',
        name: 'Garlic Thokku Dosa',
        description: 'Flavorful garlic thokku dosa for a unique taste experience.',
        image: './assets/menus/plain-dosa.png',
    },
    {
        category: 'Dosa',
        name: 'Tomato Thokku Dosa',
        description: 'Tangy tomato thokku dosa served with chutney and sambar.',
        image: './assets/menus/pottato-dosa.png',
    },
    {
        category: 'Dosa',
        name: 'Ginger Thokku Dosa',
        description: 'Spicy ginger thokku dosa, an aromatic delight for dosa lovers.',
        image: './assets/menus/podi-dosa.png',
    },
    {
        category: 'Dosa',
        name: 'Onion Thokku Dosa',
        description: 'Savory onion thokku dosa, perfect for a delicious meal.',
        image: './assets/menus/podi-dosa.png',
    },
    {
        category: 'Dosa',
        name: 'Millet Dosa',
        description: 'Nutritious millet dosa, a healthy twist on a classic favorite.',
        image: './assets/menus/millet-dosa.png',
    },
    {
        category: 'Idly',
        name: 'Plain Idly',
        description: 'Soft, steamed rice cakes served with chutney and sambar for a classic taste.',
        image: './assets/menus/idly.png',
    },
    {
        category: 'Idly',
        name: 'Potato Idly',
        description: 'Fried idly stuffed with spiced potatoes for a crispy texture.',
        image: './assets/menus/idly.png',
    },
    {
        category: 'Idly',
        name: 'Podi Idly',
        description: 'Fluffy idly coated with spicy podi, perfect for a savory snack.',
        image: './assets/menus/coriander-idly.png',
    },
    {
        category: 'Idly',
        name: 'Coriander Idly',
        description: 'Fragrant coriander idly served with chutney for a refreshing taste.',
        image: './assets/menus/coriander-idly.png',
    },
    {
        category: 'Idly',
        name: 'Chicken Idly',
        description: 'Savory chicken idly served with chutney and sambar for a protein boost.',
        image: './assets/menus/idly.png',
    },
    {
        category: 'Others',
        name: 'Paniyaram',
        description: 'Crispy paniyaram served with chutney and sambar for a tasty snack.',
        image: './assets/menus/paniyaram.png',
    },
    {
        category: 'Others',
        name: 'Masala paniyaram',
        description: 'Spiced masala paniyaram, a delightful snack for any time of day.',
        image: './assets/menus/masala-paniyaram.png',
    }
];

// Function to render dishes based on category
function filterDishes(category) {
    const container = document.getElementById('dishes-container');
    container.innerHTML = ''; // Clear existing dishes

    // Filter dishes based on selected category
    const filteredDishes = dishes.filter(dish => dish.category === category);

    // Loop through filtered dishes and create HTML for each
    filteredDishes.forEach(dish => {
        const dishHTML = `
            <div class="col-lg-6 col-md-6 col-12 mb-4">
                <div class="d-flex justify-content-center align-items-center">
                    <!-- Image -->
                    <div class="flex-shrink-0">
                        <img src="${dish.image}" alt="${dish.name}" class="img-fluid" style="height:10vh">
                    </div>
                    <!-- Content -->
                    <div class="ms-3">
                        <h4 class="mb-1 menu-name">${dish.name}</h4>
                        <p class="mb-1" style="font-family: 'Courier New', monospace;font-size:0.85rem">${dish.description}</p>
                    </div>
                </div>
            </div>
        `;
        // Append the generated dish HTML to the container
        container.innerHTML += dishHTML;
    });
}

// Show Dosa dishes by default on page load
window.onload = function() {
    filterDishes('Dosa');
};
