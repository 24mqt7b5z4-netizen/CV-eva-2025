window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

window.addEventListener('scroll', () => {
    // Barre de progression
    const scrollProgress = document.querySelector('.scroll-progress');
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (window.scrollY / scrollHeight) * 100;

    if (scrollProgress) {
        scrollProgress.style.transform = `scaleX(${scrolled / 100})`;
    }

    // Réduction du header pour faire l'effet scroll
    const header = document.querySelector('.header');
    if (header) {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // Récupération des données
            const nom = document.getElementById('nom').value;
            const email = document.getElementById('email').value;
            const sujet = document.getElementById('sujet').value;
            const message = document.getElementById('message').value;

            // Ici vous pouvez ajouter votre logique d'envoi
            // Par exemple avec EmailJS, un backend, etc.

            console.log('Formulaire soumis:', { nom, email, sujet, message });

            // Message de confirmation
            alert('Merci pour votre message ! Je vous répondrai bientôt.');

            // Réinitialiser le formulaire
            form.reset();
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.getElementById('burgerMenu');
    const nav = document.querySelector('nav.grosse-sidebar');
    const links = document.querySelectorAll('.sidebar a');
    
    if (!burgerMenu || !nav) return;
    
    burgerMenu.addEventListener('click', function() {
        burgerMenu.classList.toggle('active');
        nav.classList.toggle('active');
    });
    
    // Ferme le menu au clic sur un lien la petite croix
    links.forEach(link => {
        link.addEventListener('click', function() {
            burgerMenu.classList.remove('active');
            nav.classList.remove('active');
        });
    });
});