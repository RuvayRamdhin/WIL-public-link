/*This is a Global site behavior script*/
document.addEventListener('DOMContentLoaded', () =>{
    //Automatically highlight the current active page in the navigation bar
    const currentLocation = window.location.pathname.split('/').pop() || 'index.html';
    const navlinks = document.querySelectorAll('nav a');

    navlinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (linkPath === currentLocation) {
            link.style.color = '#ffffff';
            link.style.fontWeight = 'bold';
            link.style.borderBottom = '2px solid #00c4cc';
        }
    });
    console.log("Next Level Gaming Area global script loaded successfully.");
});

