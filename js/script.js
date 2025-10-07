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

// Aguarda o carregamento completo do documento
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    
    // Certifica-se de que o formulário existe na página
    if (form) {
        form.addEventListener('submit', async function(event) {
            event.preventDefault(); // Impede o envio padrão e o redirecionamento
            
            // Endpoint do Formspree (substitua pelo seu ID)
            const endpoint = 'https://formspree.io/f/xovkaojk';
            
            const formData = new FormData(form);
            const statusMessage = document.createElement('p'); // Cria um elemento para a mensagem de status
            statusMessage.style.textAlign = 'center';
            statusMessage.style.marginTop = '15px';

            try {
                // Envia os dados para o Formspree usando fetch()
                const response = await fetch(endpoint, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json' // Solicita uma resposta JSON para evitar o redirecionamento
                    }
                });
    
                if (response.ok) {
                    // Limpa todos os campos do formulário
                    form.reset();
                    // Exibe uma mensagem de sucesso
                    statusMessage.textContent = 'Obrigado! Sua mensagem foi enviada com sucesso.';
                    statusMessage.style.color = '#339933'; // Cor verde para sucesso
                    form.parentElement.appendChild(statusMessage);
                } else {
                    // Exibe uma mensagem de erro
                    statusMessage.textContent = 'Oops! Ocorreu um erro. Por favor, tente novamente.';
                    statusMessage.style.color = '#cc0000'; // Cor vermelha para erro
                    form.parentElement.appendChild(statusMessage);
                }
            } catch (error) {
                // Exibe uma mensagem de erro em caso de falha na requisição
                statusMessage.textContent = 'Oops! Ocorreu um erro na conexão. Tente novamente mais tarde.';
                statusMessage.style.color = '#cc0000';
                form.parentElement.appendChild(statusMessage);
                console.error('Error:', error);
            }
        });
    }
});