// document.addEventListener('DOMContentLoaded', () => {
//   const societies = [
//       { name: 'Hypnotics'},
//       { name: 'Taarangana'},
//       {name: 'Tarannum'}
//   ];

// //   const societyList = document.getElementById('society-list');
// //   societies.forEach(society => {
// //       const societyItem = document.createElement('div');
// //       societyItem.className = 'society-item';
// //       societyItem.innerHTML = `
// //           <h3>${society.name}</h3>
// //           <p>Category: ${society.category}</p>
// //           <p>${society.description}</p>
// //           <p>Activities: ${society.activities}</p>
// //           <p>Meeting Schedule: ${society.meeting}</p>
// //           <p>Social Media: ${society.social}</p>
// //       `;
// //       societyList.appendChild(societyItem);
// //   });

//   const searchInput = document.getElementById('search');
//   searchInput.addEventListener('input', () => {
//       const searchTerm = searchInput.value.toLowerCase();
//       const filteredSocieties = societies.filter(society => society.name.toLowerCase().includes(searchTerm));
//       societyList.innerHTML = '';
//       filteredSocieties.forEach(society => {
//           const societyItem = document.createElement('div');
//           societyItem.className = 'card';
//           societyItem.innerHTML = `<a href="./socities/${societies.name}.html">${societies.name}</a>`
// //           societyItem.innerHTML = `
// //               <h3>${society.name}</h3>
// //               <p>Category: ${society.category}</p>
// //               <p>${society.description}</p>
// //               <p>Activities: ${society.activities}</p>
// //               <p>Meeting Schedule: ${society.meeting}</p>
// //               <p>How to Join: ${society.join}</p>
// //           `;
//           societyList.appendChild(societyItem);
//       });
//     });
// });