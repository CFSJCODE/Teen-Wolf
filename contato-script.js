// O evento 'DOMContentLoaded' não é mais necessário aqui
// porque o atributo 'defer' no script tag do HTML garante
// que o script só será executado após o documento ser carregado.

// Script para o menu hamburguer
const hamburgerButton = document.getElementById('hamburger-button');
const mobileMenu = document.getElementById('mobile-menu');

if (hamburgerButton && mobileMenu) {
    hamburgerButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // Script para fechar o menu ao clicar em um link
    document.querySelectorAll('#mobile-menu a').forEach(link => {
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
        // Define o tamanho da imagem de origem do favicon. 
        // Navegadores geralmente redimensionam para 16x16 ou 32x32, 
        // mas um tamanho maior garante qualidade em outros contextos (ex: favoritos).
        const size = 64; 
        canvas.width = size;
        canvas.height = size;

        const context = canvas.getContext('2d');

        // Cria um caminho de recorte circular
        context.beginPath();
        context.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2, true);
        context.closePath();
        context.clip();

        // Desenha a imagem original dentro do círculo
        context.drawImage(img, 0, 0, size, size);

        // Define o novo ícone (agora circular) como o favicon da página
        faviconLink.href = canvas.toDataURL('image/png');
    };

    // Adiciona um tratamento de erro caso a imagem não possa ser carregada
    img.onerror = function() {
        console.error("Não foi possível carregar a imagem do favicon para arredondamento.");
    };
}

        // Adiciona o evento de clique ao botão do menu hamburguer
        document.getElementById('hamburger-button').addEventListener('click', function() {
            // Seleciona o menu móvel
            var mobileMenu = document.getElementById('mobile-menu');
            // Alterna a classe 'hidden' para mostrar ou esconder o menu
            mobileMenu.classList.toggle('hidden');
        });