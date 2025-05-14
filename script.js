document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const carCards = document.querySelectorAll('.car-card');
    const carDetailsSection = document.getElementById('car-details');
    const detailedInfoDiv = document.getElementById('detailed-info');
    const closeDetailsButton = document.getElementById('close-details');

    // Local Storage for Dark Mode Preference
    const darkModeKey = 'darkModeEnabled';

    function enableDarkMode() {
        body.classList.add('dark-mode');
        localStorage.setItem(darkModeKey, 'enabled');
    }

    function disableDarkMode() {
        body.classList.remove('dark-mode');
        localStorage.setItem(darkModeKey, 'disabled');
    }

    const storedDarkMode = localStorage.getItem(darkModeKey);
    if (storedDarkMode === 'enabled') {
        enableDarkMode();
        darkModeToggle.checked = true;
    }

    darkModeToggle.addEventListener('change', () => {
        if (darkModeToggle.checked) {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    });

    // Function to display car details (Dummy data)
    function showCarDetails(model) {
        const carData = {
            'Toyota Rav4': {
                description: 'A reliable and spacious SUV with excellent fuel efficiency. Perfect for families and adventures around Thika.',
                features: ['Automatic Transmission', 'Power Windows', 'Air Conditioning', 'Alloy Wheels', 'Good Fuel Economy'],
                price: 'Ksh 3,500,000'
            },
            'Subaru Forester': {
                description: 'Known for its all-wheel-drive capability and safety features. Ideal for navigating various terrains in Kiambu County.',
                features: ['Symmetrical All-Wheel Drive', 'EyeSight Driver Assist Technology', 'Panoramic Sunroof', 'Spacious Interior', 'High Ground Clearance'],
                price: 'Ksh 4,200,000'
            },
            'Nissan Navara': {
                description: 'A robust and versatile pickup truck, great for both work and leisure in the Thika region.',
                features: ['Powerful Engine', '4x4 Capability', 'Spacious Cabin', 'Towing Capacity', 'Durable Build'],
                price: 'Ksh 3,800,000'
            }
            // Add details for other cars
        };

        const details = carData[model];
        if (details) {
            detailedInfoDiv.innerHTML = `
                <h3>${model}</h3>
                <p>${details.description}</p>
                <h4>Features:</h4>
                <ul>${details.features.map(feature => `<li>${feature}</li>`).join('')}</ul>
                <p><strong>Price: ${details.price}</strong></p>
            `;
            carDetailsSection.classList.add('show');
        }
    }

    // Event listeners for car detail buttons
    carCards.forEach(card => {
        const detailsButton = card.querySelector('.details-button');
        detailsButton.addEventListener('click', () => {
            const model = card.dataset.model;
            showCarDetails(model);
        });
    });

    // Event listener to close car details
    closeDetailsButton.addEventListener('click', () => {
        carDetailsSection.classList.remove('show');
    });

    // Example of triggering an animation on hover (already in CSS)
    // You could also trigger it with JavaScript based on other events

});