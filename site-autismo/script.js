document.addEventListener('DOMContentLoaded', () => {
    // 1. Menu Mobile
    const menuBtn = document.getElementById('menu-btn');
    const navMenu = document.getElementById('nav-menu');

    if (menuBtn && navMenu) {
        menuBtn.addEventListener('click', () => {
            const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
            menuBtn.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('ativo');
            menuBtn.textContent = isExpanded ? 'Menu' : 'Fechar Menu';
        });
    }

    // 2. Calculadora Interativa de Orçamento
    const tipoProjeto = document.getElementById('tipo-projeto');
    const prazo = document.getElementById('prazo');
    const valorEstimado = document.getElementById('valor-estimado');

    function calcularOrcamento() {
        let basePrice = 2500;
        
        if (tipoProjeto.value === 'app') basePrice = 5500;
        if (tipoProjeto.value === 'consultoria') basePrice = 1500;

        if (prazo.value === 'rapido') {
            basePrice *= 1.20;
        }

        valorEstimado.textContent = basePrice.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });
    }

    if (tipoProjeto && prazo) {
        tipoProjeto.addEventListener('change', calcularOrcamento);
        prazo.addEventListener('change', calcularOrcamento);
    }

    // 3. Sistema de FAQ Interativo (Acordeão)
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const btn = item.querySelector('.faq-question');
        btn.addEventListener('click', () => {
            const isActive = item.classList.contains('ativo');
            
            faqItems.forEach(i => {
                i.classList.remove('ativo');
                i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
            });

            if (!isActive) {
                item.classList.add('ativo');
                btn.setAttribute('aria-expanded', 'true');
            }
        });
    });

    // 4. Simulação de Envio de Contato
    const contactForm = document.getElementById('contact-form');
    const formFeedback = document.getElementById('form-feedback');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            formFeedback.textContent = "Mensagem enviada com sucesso! Responderemos em breve.";
            contactForm.reset();
            
            setTimeout(() => {
                formFeedback.textContent = "";
            }, 5000);
        });
    }

    // 5. Sistema de Mudança de Temas Sensoriais
    const corpoSite = document.getElementById('corpo-site');
    const btnCalmo = document.getElementById('btn-tema-calmo');
    const btnPastel = document.getElementById('btn-tema-pastel');
    const btnMenta = document.getElementById('btn-tema-menta');
    const btnSepia = document.getElementById('btn-tema-sepia');
    const btnEscuro = document.getElementById('btn-tema-escuro');
    const btnNeon = document.getElementById('btn-tema-neon');

    function mudarTema(novoTema) {
        corpoSite.className = '';
        corpoSite.classList.add(novoTema);
    }

    if (btnCalmo) btnCalmo.addEventListener('click', () => mudarTema('tema-calmo'));
    if (btnPastel) btnPastel.addEventListener('click', () => mudarTema('tema-pastel'));
    if (btnMenta) btnMenta.addEventListener('click', () => mudarTema('tema-menta'));
    if (btnSepia) btnSepia.addEventListener('click', () => mudarTema('tema-sepia'));
    if (btnEscuro) btnEscuro.addEventListener('click', () => mudarTema('tema-escuro'));
    if (btnNeon) btnNeon.addEventListener('click', () => mudarTema('tema-neon'));

    // 6. Botão Voltar ao Topo
    const btnTopo = document.getElementById('btn-topo');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            btnTopo.classList.add('visivel');
        } else {
            btnTopo.classList.remove('visivel');
        }
    });

    if (btnTopo) {
        btnTopo.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});