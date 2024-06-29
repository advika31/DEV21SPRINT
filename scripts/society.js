/* THIS JS FILE IS MADE BY ADVIKA */

document.addEventListener('DOMContentLoaded', () => {
  const societies = [
      { name: 'Hypnotics' , description: 'Dance society'},
      { name: 'Taarangana' , description: 'Cultural society'},
      { name: 'Tarannum' , description: 'Music society'}
  ];

  const societyList = document.getElementById('society-list');
  societies.forEach(society => {
      const societyItem = document.createElement('div');
    //   societyItem.className = 'society-item';
      societyItem.className = 'card';
      societyItem.innerHTML = `
          <h3>${society.name}</h3>
          <h4>${society.description}</h4> 
          <p> <b>Category:</b> ${society.category}</p>
          <p> <b>Activities:</b> ${society.activities}</p>
          <p> <b>Meeting Schedule:</b> ${society.meeting}</p>
          <p> <b>Social Media:</b> ${society.social}</p>
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
          societyItem.className = 'card';
          societyItem.innerHTML = `<a href="./socities/${societies.name}.html">${societies.name}</a>`
          societyItem.innerHTML = `
              <h3>${society.name}</h3>
              <h4>${society.description}</h4>
              <p> <b>Category:</b> ${society.category}</p>
              <p> <b>Activities:</b> ${society.activities}</p>
              <p> <b>Meeting Schedule:</b> ${society.meeting}</p>
              <p> <b>Social Media:</b> ${society.social}</p>
          `;
          societyList.appendChild(societyItem);
      });
    });
});