document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contato-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const nome = document.getElementById('nome').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        if (validateForm(nome, email, mensagem)) {
            alert('Mensagem enviada com sucesso!');
            form.reset();
        }
    });

    function validateForm(nome, email, mensagem) {
        if (!nome || !email || !mensagem) {
            alert('Por favor, preencha todos os campos.');
            return false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Por favor, insira um email válido.');
            return false;
        }

        return true;
    }

    let currentSlide = 0;
    const slides = document.querySelectorAll('.banner img');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 3000);
    showSlide(currentSlide);


    const links = document.querySelectorAll('nav a');

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            window.scroll({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        });
    });


    const searchInput = document.getElementById('search');
    const destinoCards = document.querySelectorAll('.destino-card');
    const atividadeCards = document.querySelectorAll('.atividade-card');

    searchInput.addEventListener('input', function () {
        const query = this.value.toLowerCase();

        destinoCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            card.style.display = title.includes(query) ? 'block' : 'none';
        });

        atividadeCards.forEach(card => {
            const title = card.querySelector('h3').textContent.toLowerCase();
            card.style.display = title.includes(query) ? 'block' : 'none';
        });
    });

    const hamburgerMenu = document.getElementById("hamburger-menu");
    const nav = document.getElementById("main-nav");

    hamburgerMenu.addEventListener("click", function () {
        if (nav.style.display === "block") {
            nav.style.display = "none";
        } else {
            nav.style.display = "block";
        }
    });
});
