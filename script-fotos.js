document.addEventListener('DOMContentLoaded', () => {
    
    // Script para o menu hamburguer
    const hamburgerButton = document.getElementById('hamburger-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (hamburgerButton && mobileMenu) {
        hamburgerButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Script para fechar o menu ao clicar em um link
    const mobileMenuLinks = document.querySelectorAll('#mobile-menu a');
    if (mobileMenu && mobileMenuLinks.length > 0) {
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // Lógica para o Lightbox (visualizador de imagens)
    const gallery = document.getElementById('photo-gallery');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxClose = document.getElementById('lightbox-close');

    if (gallery && lightbox && lightboxImage && lightboxClose) {
        gallery.addEventListener('click', (e) => {
            const photoCard = e.target.closest('.photo-card');
            if (photoCard) {
                const imageElement = photoCard.querySelector('img');
                if (imageElement) {
                    lightboxImage.src = imageElement.src;
                    lightbox.classList.add('show');
                }
            }
        });

        const closeLightbox = () => {
            lightbox.classList.remove('show');
        };

        lightboxClose.addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }

    // Script para arredondar o ícone do site (favicon)
    const faviconLink = document.getElementById('favicon');
    if (faviconLink) {
        const originalFaviconUrl = faviconLink.href;
        const img = new Image();
        img.crossOrigin = 'Anonymous'; 
        img.src = originalFaviconUrl;

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

        img.onerror = function() {
            console.error("Não foi possível carregar a imagem do favicon para arredondamento.");
        };
    }
});
