document.addEventListener('DOMContentLoaded', function() {
    // Menu mobile
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            
            const isExpanded = mobileMenu.classList.contains('active');
            mobileMenuToggle.setAttribute('aria-expanded', isExpanded);
            
            const spans = this.querySelectorAll('span');
            if (isExpanded) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -8px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }
    
    // Fecha o menu mobile quando um link é clicado
    const mobileMenuLinks = document.querySelectorAll('#mobile-menu .header-link');
    if (mobileMenuLinks.length > 0 && mobileMenu) {
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
                if (mobileMenuToggle) {
                    mobileMenuToggle.setAttribute('aria-expanded', 'false');
                    const spans = mobileMenuToggle.querySelectorAll('span');
                    spans[0].style.transform = 'none';
                    spans[1].style.opacity = '1';
                    spans[2].style.transform = 'none';
                }
            });
        });
    }

    // Atualiza o ano do copyright automaticamente
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    // Implementação de Lightbox
    
    // 1. Criar o HTML do lightbox diretamente no body
    const lightboxHTML = `
        <div class="image-lightbox" id="imageLightbox">
            <div class="lightbox-content">
                <img src="" alt="Imagem ampliada" class="lightbox-image">
                <div class="lightbox-caption"></div>
                <button class="lightbox-close" aria-label="Fechar imagem">&times;</button>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', lightboxHTML);
    
    // 2. Obter referências para os elementos do lightbox
    const lightbox = document.getElementById('imageLightbox');
    const lightboxImage = lightbox.querySelector('.lightbox-image');
    const lightboxCaption = lightbox.querySelector('.lightbox-caption');
    const lightboxClose = lightbox.querySelector('.lightbox-close');
    
    // 3. Função para abrir o lightbox
    function openLightbox(imgSrc, caption) {
        lightboxImage.src = imgSrc;
        lightboxCaption.textContent = caption;
        lightbox.style.display = 'flex';
        document.body.style.overflow = 'hidden';

        // Adicionar classe active para animação
        setTimeout(() => {
            lightbox.classList.add('active');
        }, 10);
    }
    
    // 4. Função para fechar o lightbox
    function closeLightbox() {
        lightbox.classList.remove('active');
        
        setTimeout(() => {
            lightbox.style.display = 'none';
            document.body.style.overflow = '';
            lightboxImage.src = ''; // Limpar a fonte da imagem
        }, 300);
    }
    
    // 5. Adicionar evento de clique no botão de fechar
    lightboxClose.addEventListener('click', closeLightbox);
    
    // 6. Fechar o lightbox ao clicar fora da imagem
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // 7. Fechar o lightbox com a tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
    
    // 8. Configurar eventos de clique nas imagens
    function setupImageClickEvents() {
        // Para imagens nos cards de prêmios
        document.querySelectorAll('.award-icon img').forEach(img => {
            // Não adicionar evento de clique para imagens placeholder
            if (img.src.includes('placeholder')) {
                return;
            }

            img.addEventListener('click', function() {
                const imgSrc = this.src;
                const cardTitle = this.closest('.award-card').querySelector('.award-title').textContent || 'Imagem do prêmio';
                openLightbox(imgSrc, cardTitle);
            });
        });

        // Para imagens na galeria
        document.querySelectorAll('.gallery-item img').forEach(img => {
            img.addEventListener('click', function() {
                const imgSrc = this.src;
                const imgAlt = this.alt || 'Imagem da galeria';
                openLightbox(imgSrc, imgAlt);
            });
        });
    }
    
    // 9. Inicializar os eventos de clique
    setupImageClickEvents();
    
    // 10. Garantir que os eventos sejam adicionados em elementos carregados dinamicamente
    const observer = new MutationObserver(setupImageClickEvents);
    observer.observe(document.body, { childList: true, subtree: true });
});