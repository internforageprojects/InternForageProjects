const buttons = document.querySelectorAll('.buttons a');
const videoLists = document.querySelectorAll('.video-list');
const body = document.body;

buttons.forEach((button, index) => {
    button.addEventListener('mouseenter', () => {
        body.style.background = 'black';
    });

    button.addEventListener('mouseleave', () => {
        body.style.background = 'linear-gradient(to bottom right, #9c19e0, #ffdaea, #6829e5)';
    });

    button.addEventListener('click', () => {
        videoLists.forEach(list => list.classList.remove('show'));
        videoLists[index].classList.toggle('show');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const fsdButton = document.querySelector('.fsd');
    const pythonButton = document.querySelector('.python');
    const aiButton = document.querySelector('.ai');

    // Event listener for FSD button click
    fsdButton.addEventListener('click', function(event) {
        event.preventDefault();
        redirectToPage('web.html');
    });

    // Event listener for Python button click
    pythonButton.addEventListener('click', function(event) {
        event.preventDefault();
        redirectToPage('py.html');
    });

    // Event listener for AI button click
    aiButton.addEventListener('click', function(event) {
        event.preventDefault();
        redirectToPage('tool.html');
    });

    // Function to redirect to a page
    function redirectToPage(page) {
        window.location.href = page;
    }
});