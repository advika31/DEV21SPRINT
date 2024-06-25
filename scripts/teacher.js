document.addEventListener('DOMContentLoaded', function(){
    const teacherForum = [
        { teacher: 'Jasdeep', feedback: 'Very bkl teacher' },
        { teacher: 'Ravi Prakash', feedback: 'Yes or no' },
    ];
  
    const teacherForumContent = document.getElementById('teacher-forum');
    teacherForum.forEach(feedback => {
        const teacherItem = document.createElement('div');
        teacherItem.className = 'teacher-item';
        teacherItem.innerHTML = `
            <h2>${feedback.teacher}</h2>
            <p>${feedback.feedback}</p>
        `;
        teacherForumContent.appendChild(teacherItem);
    });
})