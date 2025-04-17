document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o botão de toggle e o menu
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    // Adiciona evento de clique ao botão
    mobileMenuToggle.addEventListener('click', function() {
        // Toggle da classe active no menu
        mobileMenu.classList.toggle('active');
        
        // Atualizar atributo aria-expanded
        const isExpanded = mobileMenu.classList.contains('active');
        mobileMenuToggle.setAttribute('aria-expanded', isExpanded);
        
        // Efeito visual para o botão hambúrguer (opcional)
        const spans = this.querySelectorAll('span');
        if (mobileMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -8px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    // Atualiza o ano do copyright automaticamente
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
});