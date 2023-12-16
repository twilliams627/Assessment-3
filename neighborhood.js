function getRandomRestaurant() {
    const restaurants = ["MeatUp Korean BBQ & Bar", "GrillMarx Steakhouse & Raw Bar", "The Hall CP", "LàTAO", "Taqueria Habanero"];
    const randomIndex = Math.floor(Math.random() * restaurants.length);
    const randomRestaurant = restaurants[randomIndex];
    alert(`I highly recommend trying ${randomRestaurant} for your next meal. Its really yummy!`);
}

document.getElementById('randomRestaurant').addEventListener('click', getRandomRestaurant);