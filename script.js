// THIS JS FILE IS MADE BY ADVIKA

function navigateTo(url){
  window.location.href = url;
  }
  
// function showSection(sectionId) {
//   document.getElementById('academic').style.display = 'none';
//   document.getElementById('non-academic').style.display = 'none';
//   document.getElementById(sectionId).style.display = 'block';
//   document.getElementById('card-container').classList.add('hidden');
//   document.getElementById('features-container').classList.remove('hidden');

// }

// document.addEventListener('DOMContentLoaded', function () {
//   const cardContainer = document.getElementById('card-container');
//   const featuresContainer = document.getElementById('features-container');

//   featuresContainer.addEventListener('click', function () {
//     featuresContainer.classList.add('hidden');
//     cardContainer.classList.remove('hidden');
//   });

//   cardContainer.addEventListener('click', function () {
//     cardContainer.classList.add('hidden');
//     featuresContainer.classList.remove('hidden');
//   });
// });



//   const events = [
//       { title: 'Art Workshop', date: '24 May 2024', description: 'A workshop on painting techniques.' },
//       { title: 'Tech Talk', date: '30 May 2024', description: 'A talk on emerging technologies.' },
//       // Add more events here
//   ];

//   const eventList = document.getElementById('event-list');
//   events.forEach(event => {
//       const eventItem = document.createElement('div');
//       eventItem.className = 'event-item';
//       eventItem.innerHTML = 
//           <h3>${event.title}</h3>
//           <p>Date: ${event.date}</p>
//           <p>${event.description}</p>
//       ;
//       eventList.appendChild(eventItem);
//   });