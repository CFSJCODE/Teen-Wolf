// Espera o conteúdo da página carregar completamente para executar os scripts
document.addEventListener('DOMContentLoaded', (event) => {
    
    // Script para o menu hamburguer
    const hamburgerButton = document.getElementById('hamburger-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (hamburgerButton && mobileMenu) {
        hamburgerButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Script para fechar o menu ao clicar em um link no menu mobile
    const mobileMenuLinks = document.querySelectorAll('#mobile-menu a');
    if (mobileMenu && mobileMenuLinks.length > 0) {
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // Script para arredondar o ícone do site (favicon)
    const faviconLink = document.getElementById('favicon');
    if (faviconLink) {
        const originalFaviconUrl = faviconLink.href;
        const img = new Image();
        // Permite carregar a imagem de outro domínio (ibb.co) sem problemas de CORS no canvas
        img.crossOrigin = 'Anonymous';
        img.src = originalFaviconUrl;

        // Quando a imagem for carregada, executa o código para arredondá-la
        img.onload = function() {
            const canvas = document.createElement('canvas');
            const size = 64;
            canvas.width = size;
            canvas.height = size;

            const context = canvas.getContext('2d');
            context.beginPath();
            context.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2, true);
            context.closePath();
            context.clip();
            context.drawImage(img, 0, 0, size, size);
            faviconLink.href = canvas.toDataURL('image/png');
        };

        // Adiciona um tratamento de erro caso a imagem não possa ser carregada
        img.onerror = function() {
            console.error("Não foi possível carregar a imagem do favicon para arredondamento.");
        };
    }
});
