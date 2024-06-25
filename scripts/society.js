document.addEventListener('DOMContentLoaded', () => {
  const societies = [
      { name: 'Hypnotics', category: 'Dance', description: 'A place for dance enthusiasts.', activities: 'Dance shows, etc.', meeting: 'Every Friday at 4 PM', social: 'instagram link' },
      { name: 'Tech Club', category: 'Technology', description: 'Exploring the latest in tech.', activities: 'Coding, Robotics', meeting: 'Every Wednesday at 5 PM', social: 'instagram link' },
  ];

  const societyList = document.getElementById('society-list');
  societies.forEach(society => {
      const societyItem = document.createElement('div');
      societyItem.className = 'society-item';
      societyItem.innerHTML = `
          <h3>${society.name}</h3>
          <p>Category: ${society.category}</p>
          <p>${society.description}</p>
          <p>Activities: ${society.activities}</p>
          <p>Meeting Schedule: ${society.meeting}</p>
          <p>Social Media: ${society.social}</p>
      `;
      societyList.appendChild(societyItem);
  });

  const searchInput = document.getElementById('search');
  searchInput.addEventListener('input', () => {
      const searchTerm = searchInput.value.toLowerCase();
      const filteredSocieties = societies.filter(society => society.name.toLowerCase().includes(searchTerm));
      societyList.innerHTML = '';
      filteredSocieties.forEach(society => {
          const societyItem = document.createElement('div');
          societyItem.className = 'society-item';
          societyItem.innerHTML = `
              <h3>${society.name}</h3>
              <p>Category: ${society.category}</p>
              <p>${society.description}</p>
              <p>Activities: ${society.activities}</p>
              <p>Meeting Schedule: ${society.meeting}</p>
              <p>How to Join: ${society.join}</p>
          `;
          societyList.appendChild(societyItem);
      });
    });
});