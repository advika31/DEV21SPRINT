document.addEventListener('DOMContentLoaded', () => {
    const places = [
        { name: 'Central Park', description: 'A beautiful park near the college.', rating: 4.5 },
        { name: 'Cafe Mocha', description: 'A popular cafe for students.', rating: 4.7 },
    ];

      const placesList = document.getElementById('places-list');
  places.forEach(place => {
      const placeItem = document.createElement('div');
      placeItem.className = 'place-item';
      placeItem.innerHTML = `
          <h3>${place.name}</h3>
          <p>${place.description}</p>
          <p>Rating: ${place.rating} stars</p>
      `;
      placesList.appendChild(placeItem);
  });

})
