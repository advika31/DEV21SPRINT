
document.addEventListener('DOMContentLoaded', () => {
    const roadmap = [
      { title: 'Orientation Tips', content: 'Welcome to college! Here are some tips to get you started...' },
      { title: 'Managing Studies', content: 'Balancing your academics and social life is crucial...' },

  ];
    const roadmapContent = document.getElementById('roadmap-content');
  roadmap.forEach(item => {
      const roadmapItem = document.createElement('div');
      roadmapItem.className = 'roadmap-item';
      roadmapItem.innerHTML = `
          <h3>${item.title}</h3>
          <p>${item.content}</p>
      `;
      roadmapContent.appendChild(roadmapItem);
      
  });
});