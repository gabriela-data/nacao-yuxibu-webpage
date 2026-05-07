/**
 * Plataforma Livre Nação Yuxibu – Script principal
 * Organizado em funções puras para facilitar manutenção.
 * Dependência: Swiper (carregado via CDN)
 */

document.addEventListener('DOMContentLoaded', () => {
  // ------------------------------------------------------------
  // 1. Menu de navegação (hambúrguer)
  // ------------------------------------------------------------
  function configurarMenuNavegacao() {
    const botaoMenu = document.querySelector('.botao-menu');
    const linksNavegacao = document.querySelector('.links-navegacao');

    if (!botaoMenu || !linksNavegacao) return;

    const alternarMenu = (abrir) => {
      linksNavegacao.classList.toggle('ativo', abrir);
      botaoMenu.textContent = abrir ? '✕' : '☰';
      botaoMenu.setAttribute('aria-expanded', String(abrir));
      botaoMenu.setAttribute('aria-label', abrir ? 'Fechar menu' : 'Abrir menu');
    };

    alternarMenu(false);

    botaoMenu.addEventListener('click', () => {
      const estaAberto = !linksNavegacao.classList.contains('ativo');
      alternarMenu(estaAberto);
    });

    linksNavegacao.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => alternarMenu(false));
    });
  }

  // ------------------------------------------------------------
  // 2. Pilares da plataforma (flip individual)
  // ------------------------------------------------------------
  function configurarFlipPilares() {
    const pilares = document.querySelectorAll('.pilar');
    if (pilares.length === 0) return;

    const sincronizarBotao = (pilar, deveVirar) => {
      const botao = pilar.querySelector('.botao-alternar-pilar');
      if (!botao) return;
      pilar.classList.toggle('virado', deveVirar);
      botao.textContent = deveVirar ? 'Mostrar menos' : 'Saiba mais';
      botao.setAttribute('aria-expanded', String(deveVirar));
    };

    pilares.forEach(pilar => sincronizarBotao(pilar, false));

    document.querySelectorAll('.botao-alternar-pilar').forEach(botao => {
      botao.addEventListener('click', () => {
        const pilar = botao.closest('.pilar');
        if (!pilar) return;
        const deveVirar = !pilar.classList.contains('virado');

        pilares.forEach(outro => { if (outro !== pilar) sincronizarBotao(outro, false); });
        sincronizarBotao(pilar, deveVirar);
      });
    });
  }

  // ------------------------------------------------------------
  // 3. Animação de revelação ao rolar a página
  // ------------------------------------------------------------
  function configurarAnimacoesRevelacao() {
    const elementos = document.querySelectorAll('.revelar');
    if (elementos.length === 0) return;

    const observador = new IntersectionObserver((entradas) => {
      entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add('revelado');
          observador.unobserve(entrada.target);
        }
      });
    }, { threshold: 0.15 });

    elementos.forEach(el => observador.observe(el));
  }

  // ------------------------------------------------------------
  // 4. Efeito parallax no hero
  // ------------------------------------------------------------
  function configurarParallaxHero() {
    const hero = document.querySelector('.secao-hero');
    if (!hero) return;
    window.addEventListener('scroll', () => {
      hero.style.backgroundPositionY = `${window.scrollY * 0.5}px`;
    });
  }

  // ------------------------------------------------------------
  // Inicialização de todos os módulos
  // ------------------------------------------------------------
  function iniciar() {
    configurarMenuNavegacao();
    configurarFlipPilares();
    configurarAnimacoesRevelacao();
    configurarParallaxHero();

    // Swiper do povo (carrossel de vídeos)
    if (document.querySelector('.carrossel-povo')) {
      new Swiper('.carrossel-povo', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: { el: '.swiper-pagination', clickable: true },
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
        on: { slideChange: () => document.querySelectorAll('video').forEach(v => v.pause()) }
      });
    }
  }

  iniciar();
});