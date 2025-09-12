    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    hamburgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Fechar o menu ao clicar em um link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

let slideIndex = 0;
    const slides = document.querySelectorAll('.carousel-image');
    
    function showSlides() {
        // Esconde todas as imagens
        slides.forEach(slide => {
            slide.style.display = 'none';
        });
        
        // Incrementa o índice
        slideIndex++;
        
        // Volta para a primeira imagem se chegar ao fim
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        
        // Exibe a imagem atual
        slides[slideIndex - 1].style.display = 'block';
    }
    
    // Inicia o carrossel automático
    setInterval(showSlides, 5000); // Muda de imagem a cada 5 segundos