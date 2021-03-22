document.getElementById('open-menu-btn').addEventListener('click', function() {
    toggleMenu();
})

document.getElementById('close-menu').addEventListener('click', function() {
    toggleMenu();
})

document.querySelectorAll('.mob-nav a').forEach(link => {
    link.addEventListener('click', function() {    
        toggleMenu();
    })
});

function toggleMenu() {
    const mobNavElement = document.getElementById('mob-nav-element');
    mobNavElement.classList.toggle('open-menu');
}

