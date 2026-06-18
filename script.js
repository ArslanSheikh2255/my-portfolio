// ==========================================================================
// 1. SELECTING ELEMENTS (Form aur Buttons ko pakadna)
// ==========================================================================
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const themeIcon = document.querySelector('#theme-icon');
const navLinks = document.querySelectorAll('.navbar a'); // Saare links ko pakadne ke liye

// ==========================================================================
// 2. HAMBURGER MENU LOGIC (3-Lines Icon click karne par)
// ==========================================================================
menuIcon.onclick = () => {
    // Bars icon ko cross (X) icon mein badalne ke liye toggle class
    menuIcon.classList.toggle('fa-xmark');
    menuIcon.classList.toggle('fa-times'); // Dono classes de di hain taake fontawesome version ka masla na ho

    // CSS ki '.active' class ko add/remove karega jisse menu screen ke andar/bahar hoga
    navbar.classList.toggle('active');
};

// Jab koi user kisi single link par click kare, to mobile menu khud hi close ho jaye
navLinks.forEach(link => {
    link.onclick = () => {
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.remove('fa-times');
        navbar.classList.remove('active');
    };
});

// Jab website ko scroll kiya jaye, tab bhi mobile menu khud hi close ho jaye
window.onscroll = () => {
    menuIcon.classList.remove('fa-xmark');
    menuIcon.classList.remove('fa-times');
    navbar.classList.remove('active');
};

// ==========================================================================
// 3. DARK / LIGHT MODE LOGIC (Moon/Sun Icon click karne par)
// ==========================================================================
themeIcon.onclick = () => {
    // Body par '.dark-theme' class ko lagayega ya hatayega
    document.body.classList.toggle('dark-theme');

    // Agar website par dark theme lag gayi hai, to icon ko Moon se Sun ☀️ bana do
    if (document.body.classList.contains('dark-theme')) {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    } else {
        // Agar dark theme hat gayi hai, to wapis Moon 🌙 bana do
        themeIcon.classList.replace('fa-sun', 'fa-moon');
    }
};