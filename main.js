document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal-visible");
      } else {
        entry.target.classList.remove("reveal-visible");
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll(".reveal").forEach(el => {
    observer.observe(el);
  });
});

// Enhanced Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
let mobileMenuOpen = false;

mobileMenuBtn.addEventListener('click', () => {
    mobileMenuOpen = !mobileMenuOpen;
    
    if (mobileMenuOpen) {
        mobileMenu.style.transform = 'translateY(0)';
        mobileMenu.style.opacity = '1';
        mobileMenuBtn.innerHTML = '<i class="fas fa-times text-xl"></i>';
        document.body.style.overflow = 'hidden';
    } else {
        mobileMenu.style.transform = 'translateY(-100%)';
        mobileMenu.style.opacity = '0';
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars text-xl"></i>';
        document.body.style.overflow = 'auto';
    }
});

// Enhanced Smooth Scroll for Navigation Links
document.querySelectorAll('.nav-link, a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (mobileMenuOpen) {
                mobileMenuOpen = false;
                mobileMenu.style.transform = 'translateY(-100%)';
                mobileMenu.style.opacity = '0';
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars text-xl"></i>';
                document.body.style.overflow = 'auto';
            }
        }
    });
});

// Enhanced Hero Section Animations with Particles
function createParticles() {
    const container = document.getElementById('particles-container');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'absolute w-1 h-1 bg-white/30 rounded-full';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 3 + 's';
        particle.style.animation = 'float 6s ease-in-out infinite';
        container.appendChild(particle);
    }
}

function animateHero() {
    const scrollIndicator = document.getElementById('scroll-indicator');

    // Explicitly remove background and shadow from hero logo



    // Scroll indicator
    setTimeout(() => {
        scrollIndicator.style.opacity = '1';
        scrollIndicator.style.transition = 'opacity 1s ease-in-out';
    }, 3600);
}

// Remove main title

// Enhanced Population Counter Animation
function animatePopulationCounter() {
    const counter = document.getElementById('population-counter');
    const targetValue = 13247; // More realistic number
    let currentValue = 0;
    const duration = 3000; // 3 seconds
    const steps = 60;
    const increment = targetValue / steps;
    const stepTime = duration / steps;
    
    const timer = setInterval(() => {
        currentValue += increment;
        if (currentValue >= targetValue) {
            currentValue = targetValue;
            clearInterval(timer);
        }
        
        // Add some randomness to make it more natural
        const displayValue = Math.floor(currentValue + (Math.random() - 0.5) * 10);
        const finalValue = currentValue >= targetValue ? targetValue : displayValue;
        
        counter.textContent = finalValue.toLocaleString('pt-BR');
    }, stepTime);
}

// Enhanced Pencil Animation - Drawing "Assaí" with realistic handwriting
function animatePencilDrawing() {
    const canvas = document.getElementById('pencil-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    // Set canvas size for better quality
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);
    canvas.style.width = rect.width + 'px';
    canvas.style.height = rect.height + 'px';

    // Drawing settings
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.strokeStyle = '#1e40af';
    ctx.lineWidth = 4;

    const centerX = (canvas.width / dpr) / 2;
    const centerY = (canvas.height / dpr) / 2;

    // Define letter paths for "Assaí" with more natural curves
    const letterPaths = {
        A: [
            { x: centerX - 120, y: centerY + 30 },
            { x: centerX - 100, y: centerY - 30 },
            { x: centerX - 80, y: centerY + 30 },
            { x: centerX - 110, y: centerY + 5 },
            { x: centerX - 90, y: centerY + 5 }
        ],
        s1: [
            { x: centerX - 60, y: centerY - 10 },
            { x: centerX - 70, y: centerY - 20 },
            { x: centerX - 50, y: centerY - 20 },
            { x: centerX - 40, y: centerY - 10 },
            { x: centerX - 50, y: centerY },
            { x: centerX - 60, y: centerY },
            { x: centerX - 50, y: centerY + 10 },
            { x: centerX - 40, y: centerY + 20 },
            { x: centerX - 60, y: centerY + 20 },
            { x: centerX - 70, y: centerY + 10 }
        ],
        s2: [
            { x: centerX - 20, y: centerY - 10 },
            { x: centerX - 30, y: centerY - 20 },
            { x: centerX - 10, y: centerY - 20 },
            { x: centerX, y: centerY - 10 },
            { x: centerX - 10, y: centerY },
            { x: centerX - 20, y: centerY },
            { x: centerX - 10, y: centerY + 10 },
            { x: centerX, y: centerY + 20 },
            { x: centerX - 20, y: centerY + 20 },
            { x: centerX - 30, y: centerY + 10 }
        ],
        a: [
            { x: centerX + 20, y: centerY + 30 },
            { x: centerX + 40, y: centerY - 30 },
            { x: centerX + 60, y: centerY + 30 },
            { x: centerX + 30, y: centerY + 5 },
            { x: centerX + 50, y: centerY + 5 }
        ],
        i: [
            { x: centerX + 80, y: centerY - 30 },
            { x: centerX + 80, y: centerY + 30 },
            { x: centerX + 80, y: centerY - 40 } // dot
        ]
    };
    
    let currentLetter = 0;
    let currentPoint = 0;
    const letters = ['A', 's1', 's2', 'a', 'i'];
    const animationSpeed = 150; // milliseconds per point

    function drawNextPoint() {
        if (currentLetter >= letters.length) return;

        const letter = letters[currentLetter];
        const path = letterPaths[letter];

        if (currentPoint === 0) {
            // Move to start of letter
            ctx.beginPath();
            ctx.moveTo(path[0].x, path[0].y);
        } else if (currentPoint < path.length) {
            ctx.lineTo(path[currentPoint].x, path[currentPoint].y);
            ctx.stroke();
        }

        currentPoint++;

        if (currentPoint >= path.length) {
            currentLetter++;
            currentPoint = 0;
            setTimeout(drawNextPoint, animationSpeed * 2);
        } else {
            setTimeout(drawNextPoint, animationSpeed);
        }
    }

    drawNextPoint();
}

// Enhanced News Data with more realistic content
const newsData = [
    {
        id: 1,
        title: "Nova Escola Municipal Inaugurada no Bairro Jardim América",
        image: "https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "A Prefeitura de Assaí inaugurou uma nova escola municipal com capacidade para 500 estudantes, equipada com laboratórios de informática, biblioteca digital e quadra poliesportiva coberta.",
        date: "2024-01-15",
        category: "Educação"
    },
    {
        id: 2,
        title: "Programa de Saúde da Família Expandido para Zona Rural",
        image: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "O município ampliou o atendimento do PSF com três novas unidades básicas de saúde na zona rural, garantindo acesso universal à saúde para mais de 2.000 famílias.",
        date: "2024-01-12",
        category: "Saúde"
    },
    {
        id: 3,
        title: "Festival de Inverno 2024 Acontece em Julho com Grandes Atrações",
        image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "O tradicional Festival de Inverno de Assaí acontece nos dias 15 a 17 de julho, com shows nacionais, gastronomia local, feira de artesanato e atividades para toda a família.",
        date: "2024-01-10",
        category: "Cultura"
    },
    {
        id: 4,
        title: "Obras de Pavimentação Asfáltica no Centro Histórico",
        image: "https://images.pexels.com/photos/1476154/pexels-photo-1476154.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Iniciaram as obras de recapeamento asfáltico das principais ruas do centro histórico, incluindo nova sinalização e acessibilidade, melhorando a mobilidade urbana.",
        date: "2024-01-08",
        category: "Infraestrutura"
    },
    {
        id: 5,
        title: "Programa de Capacitação Profissional Oferece 200 Vagas",
        image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Cursos gratuitos de capacitação profissional em parceria com SENAI e SEBRAE, oferecendo qualificação em mecânica, informática, gastronomia e empreendedorismo.",
        date: "2024-01-05",
        category: "Educação"
    },
    {
        id: 6,
        title: "Campanha de Vacinação Contra Gripe Atinge 85% da Meta",
        image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "A Secretaria de Saúde superou as expectativas na campanha de vacinação contra a gripe, imunizando mais de 8.500 pessoas em grupos prioritários.",
        date: "2024-01-03",
        category: "Saúde"
    },
    {
        id: 7,
        title: "Projeto Horta Comunitária Beneficia 50 Famílias",
        image: "https://images.pexels.com/photos/4750271/pexels-photo-4750271.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "O projeto de hortas comunitárias nos bairros periféricos já beneficia 50 famílias, promovendo agricultura urbana sustentável e alimentação saudável.",
        date: "2024-01-01",
        category: "Meio Ambiente"
    },
    {
        id: 8,
        title: "Renovação Completa da Frota de Transporte Escolar",
        image: "https://images.pexels.com/photos/159658/kids-school-children-happy-159658.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "A Prefeitura renovou 100% da frota de transporte escolar com 15 novos veículos, garantindo segurança e conforto para 800 estudantes da zona rural.",
        date: "2023-12-28",
        category: "Educação"
    },
    {
        id: 9,
        title: "Concurso Público Oferece 75 Vagas em Diversas Áreas",
        image: "https://images.pexels.com/photos/5940841/pexels-photo-5940841.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "Edital publicado para concurso público com 75 vagas distribuídas entre saúde, educação, administração e obras, fortalecendo o quadro de servidores municipais.",
        date: "2023-12-25",
        category: "Administração"
    },
    {
        id: 10,
        title: "Parque Ecológico Municipal Recebe Melhorias",
        image: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "O Parque Ecológico Municipal ganhou nova trilha ecológica, playground adaptado e centro de educação ambiental, promovendo o turismo sustentável.",
        date: "2023-12-22",
        category: "Meio Ambiente"
    },
    {
        id: 11,
        title: "Programa Jovem Aprendiz Forma Primeira Turma",
        image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "O programa Jovem Aprendiz formou sua primeira turma com 30 jovens qualificados em diversas áreas, com 90% de aproveitamento no mercado de trabalho local.",
        date: "2023-12-20",
        category: "Educação"
    },
    {
        id: 12,
        title: "Central de Atendimento ao Cidadão Modernizada",
        image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
        description: "A Central de Atendimento ao Cidadão foi completamente modernizada com sistema digital, reduzindo o tempo de espera em 60% e oferecendo mais serviços online.",
        date: "2023-12-18",
        category: "Administração"
    }
];

// Enhanced News Functionality
let currentPage = 1;
const newsPerPage = 6; // Increased for better desktop experience
let filteredNews = [...newsData];

function renderNews() {
    const newsGrid = document.getElementById('news-grid');
    const startIndex = (currentPage - 1) * newsPerPage;
    const endIndex = startIndex + newsPerPage;
    const newsToShow = filteredNews.slice(startIndex, endIndex);
    
    newsGrid.innerHTML = '';
    
    newsToShow.forEach((news, index) => {
        const newsCard = document.createElement('div');
        newsCard.className = 'group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2';
        newsCard.style.animationDelay = `${index * 100}ms`;
        newsCard.innerHTML = `
            <div class="relative overflow-hidden">
                <img src="${news.image}" alt="${news.title}" class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110">
                <div class="absolute top-4 left-4">
                    <span class="bg-primary-blue text-white px-3 py-1 rounded-full text-sm font-semibold">
                        ${news.category}
                    </span>
                </div>
                <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div class="p-8">
                <div class="flex items-center text-sm text-gray-500 mb-4">
                    <i class="fas fa-calendar mr-2"></i>
                    ${new Date(news.date).toLocaleDateString('pt-BR')}
                </div>
                <h3 class="text-xl font-bold text-gray-900 mb-4 line-clamp-2 group-hover:text-primary-blue transition-colors duration-300">${news.title}</h3>
                <p class="text-gray-600 line-clamp-3 mb-6 leading-relaxed">${news.description}</p>
                <button class="inline-flex items-center text-primary-blue hover:text-secondary-blue font-semibold transition-all duration-300 group-hover:translate-x-2">
                    Leia mais 
                    <i class="fas fa-arrow-right ml-2 transition-transform duration-300 group-hover:translate-x-1"></i>
                </button>
            </div>
        `;
        newsGrid.appendChild(newsCard);
    });
}

function renderPagination() {
    const pagination = document.getElementById('pagination');
    const totalPages = Math.ceil(filteredNews.length / newsPerPage);
    
    pagination.innerHTML = '';
    
    // Previous button
    if (currentPage > 1) {
        const prevButton = document.createElement('button');
        prevButton.className = 'px-4 py-3 rounded-xl font-medium transition-all duration-300 bg-gray-100 text-gray-600 hover:bg-primary-blue hover:text-white';
        prevButton.innerHTML = '<i class="fas fa-chevron-left"></i>';
        prevButton.addEventListener('click', () => {
            currentPage--;
            renderNews();
            renderPagination();
            document.getElementById('news').scrollIntoView({ behavior: 'smooth' });
        });
        pagination.appendChild(prevButton);
    }
    
    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.className = `px-5 py-3 rounded-xl font-semibold transition-all duration-300 ${
            i === currentPage 
                ? 'bg-primary-blue text-white shadow-lg scale-110' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-105'
        }`;
        button.textContent = i;
        button.addEventListener('click', () => {
            currentPage = i;
            renderNews();
            renderPagination();
            document.getElementById('news').scrollIntoView({ behavior: 'smooth' });
        });
        pagination.appendChild(button);
    }
    
    // Next button
    if (currentPage < totalPages) {
        const nextButton = document.createElement('button');
        nextButton.className = 'px-4 py-3 rounded-xl font-medium transition-all duration-300 bg-gray-100 text-gray-600 hover:bg-primary-blue hover:text-white';
        nextButton.innerHTML = '<i class="fas fa-chevron-right"></i>';
        nextButton.addEventListener('click', () => {
            currentPage++;
            renderNews();
            renderPagination();
            document.getElementById('news').scrollIntoView({ behavior: 'smooth' });
        });
        pagination.appendChild(nextButton);
    }
}

// Enhanced Search Functionality
const searchInput = document.getElementById('news-search');
let searchTimeout;

searchInput.addEventListener('input', (e) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
        const searchTerm = e.target.value.toLowerCase().trim();
        filteredNews = newsData.filter(news => 
            news.title.toLowerCase().includes(searchTerm) || 
            news.description.toLowerCase().includes(searchTerm) ||
            news.category.toLowerCase().includes(searchTerm)
        );
        currentPage = 1;
        renderNews();
        renderPagination();
    }, 300);
});

// Keyboard shortcut for search (Ctrl+K)
document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        searchInput.focus();
    }
});

// Enhanced Intersection Observer for Scroll Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.id === 'population-counter') {
                animatePopulationCounter();
                animatePencilDrawing();
                observer.unobserve(entry.target);
            }
        }
    });
}, observerOptions);

// Enhanced Navbar Scroll Effect
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > 100) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        navbar.style.backdropFilter = 'blur(20px)';
        navbar.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.1)';
        
        // Hide navbar when scrolling down, show when scrolling up
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
        navbar.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.05)';
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScrollY = currentScrollY;
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBg = document.getElementById('hero-bg');
    if (heroBg) {
        heroBg.style.transform = `translateY(${scrolled * 0.5}px) scale(1.1)`;
    }
});

// Initialize on DOM Load
document.addEventListener('DOMContentLoaded', () => {
    const heroLogo = document.getElementById('hero-logo');

    // Ensure the logo image is loaded
    if (heroLogo && !heroLogo.src) {
        heroLogo.src = 'logo_Prefeitura.png'; // Replace with the actual path to your logo image
    }

    // Create particles
    createParticles();
    
    // Start hero animations
    setTimeout(animateHero, 300);
    
    // Render initial news
    renderNews();
    renderPagination();
    
    // Setup intersection observer for population counter
    const populationCounter = document.getElementById('population-counter');
    if (populationCounter) {
        observer.observe(populationCounter);
    }
    
    // Add loading animation to news cards
    const newsCards = document.querySelectorAll('.news-card');
    newsCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
            card.style.transition = 'all 0.6s ease-out';
        }, index * 100);
    });
    
    // Remove "Prefeitura Municipal" section
    const prefeituraSection = document.getElementById('prefeitura-municipal');
    if (prefeituraSection) {
        prefeituraSection.remove();
    }
});

// Add enhanced CSS animations
const enhancedStyles = document.createElement('style');
enhancedStyles.textContent = `
    @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.7; }
        50% { transform: translateY(-20px) rotate(180deg); opacity: 1; }
    }
    
    @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
    }
    
    .line-clamp-2 {
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
    
    .line-clamp-3 {
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
    
    .aspect-video {
        aspect-ratio: 16 / 9;
    }
    
    /* Enhanced scrollbar */
    ::-webkit-scrollbar {
        width: 12px;
    }
    
    ::-webkit-scrollbar-track {
        background: linear-gradient(to bottom, #f1f5f9, #e2e8f0);
        border-radius: 6px;
    }
    
    ::-webkit-scrollbar-thumb {
        background: linear-gradient(to bottom, #3b82f6, #1e40af);
        border-radius: 6px;
        border: 2px solid #f1f5f9;
    }
    
    ::-webkit-scrollbar-thumb:hover {
        background: linear-gradient(to bottom, #2563eb, #1e3a8a);
    }
    
    /* Smooth transitions for all interactive elements */
    button, a, input, .group {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    /* Enhanced focus states */
    button:focus, a:focus, input:focus {
        outline: 2px solid #3b82f6;
        outline-offset: 2px;
    }
    
    /* Loading animation for images */
    img {
        transition: opacity 0.3s ease;
    }
    
    img[src=""] {
        opacity: 0;
    }
    
    /* Enhanced hover effects */
    .hover-lift:hover {
        transform: translateY(-8px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    }
    
    /* Gradient text animation */
    .gradient-text {
        background: linear-gradient(-45deg, #3b82f6, #1e40af, #7c3aed, #3b82f6);
        background-size: 400% 400%;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        animation: gradientShift 4s ease infinite;
    }
    
    @keyframes gradientShift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
    }
    
    /* Mobile optimizations */
    @media (max-width: 768px) {
        .text-5xl { font-size: 2.5rem; }
        .text-6xl { font-size: 3rem; }
        .text-7xl { font-size: 3.5rem; }
        .text-8xl { font-size: 4rem; }
        .text-9xl { font-size: 4.5rem; }
        
        .p-8 { padding: 1.5rem; }
        .p-12 { padding: 2rem; }
        
        .space-x-8 > * + * { margin-left: 1rem; }
        .gap-8 { gap: 1rem; }
        .gap-16 { gap: 2rem; }
    }
    
    /* Desktop optimizations */
    @media (min-width: 1024px) {
        .container {
            max-width: 1200px;
        }
        
        .grid-cols-3 {
            grid-template-columns: repeat(3, 1fr);
        }
        
        .text-8xl {
            font-size: 6rem;
            line-height: 1;
        }
        
        .text-9xl {
            font-size: 8rem;
            line-height: 1;
        }
    }
`;



  class MobileMenu {
    constructor() {
        this.menuBtn = document.getElementById('mobile-menu-btn');
        this.menu = document.getElementById('mobile-menu');
        this.hamburger = document.getElementById('hamburger');
        this.overlay = document.getElementById('mobile-overlay');
        this.isOpen = false;
        
        this.init();
    }
    
    init() {
        // Event listeners
        this.menuBtn.addEventListener('click', () => this.toggle());
        this.overlay.addEventListener('click', () => this.close());
        
        // Fechar menu ao clicar em links
        document.querySelectorAll('.mobile-nav-link').forEach(link => {
            link.addEventListener('click', () => this.close());
        });
        
        // Fechar menu com ESC
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.isOpen) {
                this.close();
            }
        });
        
        // Fechar menu ao redimensionar para desktop
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 1024 && this.isOpen) {
                this.close();
            }
        });
    }
    
    toggle() {
        this.isOpen ? this.close() : this.open();
    }
    
    open() {
        this.isOpen = true;
        this.menu.classList.add('active');
        this.hamburger.classList.add('active');
        this.overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Acessibilidade
        this.menuBtn.setAttribute('aria-expanded', 'true');
        this.menu.setAttribute('aria-hidden', 'false');
    }
    
    close() {
        this.isOpen = false;
        this.menu.classList.remove('active');
        this.hamburger.classList.remove('active');
        this.overlay.classList.remove('active');
        document.body.style.overflow = '';
        
        // Acessibilidade
        this.menuBtn.setAttribute('aria-expanded', 'false');
        this.menu.setAttribute('aria-hidden', 'true');
    }
}