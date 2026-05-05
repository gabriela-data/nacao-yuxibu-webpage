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
  // 2. Carrossel de cards do movimento (scroll horizontal)
  // ------------------------------------------------------------
  function configurarCarrosselMovimento() {
    const grade = document.getElementById('gradeMovimento');
    const botaoAnterior = document.querySelector('.botao-movimento-anterior');
    const botaoProximo = document.querySelector('.botao-movimento-proximo');
    const paginacao = document.getElementById('paginacaoMovimento');
    const cards = Array.from(document.querySelectorAll('.card-movimento'));

    if (!grade || !botaoAnterior || !botaoProximo || !paginacao || cards.length === 0) return;

    const obterPasso = () => {
      if (cards.length < 2) return cards[0].offsetWidth;
      return cards[1].offsetLeft - cards[0].offsetLeft;
    };

    // Cria bolinhas de paginação
    cards.forEach((card, indice) => {
      const bolinha = document.createElement('button');
      bolinha.type = 'button';
      bolinha.classList.add('bolinha');
      bolinha.setAttribute('aria-label', `Ir para o card ${indice + 1}`);
      bolinha.addEventListener('click', () => {
        grade.scrollTo({ left: card.offsetLeft - grade.offsetLeft, behavior: 'smooth' });
      });
      paginacao.appendChild(bolinha);
    });

    const atualizarPaginacao = () => {
      const passo = obterPasso();
      const indice = Math.round(grade.scrollLeft / passo);
      paginacao.querySelectorAll('.bolinha').forEach((bolinha, i) => {
        bolinha.classList.toggle('ativa', i === indice);
      });
    };

    if (paginacao.firstElementChild) paginacao.firstElementChild.classList.add('ativa');
    grade.addEventListener('scroll', atualizarPaginacao);

    botaoProximo.addEventListener('click', () => grade.scrollBy({ left: obterPasso(), behavior: 'smooth' }));
    botaoAnterior.addEventListener('click', () => grade.scrollBy({ left: -obterPasso(), behavior: 'smooth' }));
  }

  // ------------------------------------------------------------
  // 3. Cards com efeito flip (movimento)
  // ------------------------------------------------------------
  function configurarFlipCardsMovimento() {
    const cards = document.querySelectorAll('.card-movimento');
    if (cards.length === 0) return;

    const sincronizarBotao = (card, deveVirar) => {
      const botao = card.querySelector('.botao-alternar-card');
      if (!botao) return;
      card.classList.toggle('virado', deveVirar);
      botao.textContent = deveVirar ? 'Mostrar menos' : 'Saiba mais';
      botao.setAttribute('aria-expanded', String(deveVirar));
    };

    cards.forEach(card => sincronizarBotao(card, false));

    document.querySelectorAll('.botao-alternar-card').forEach(botao => {
      botao.addEventListener('click', () => {
        const card = botao.closest('.card-movimento');
        if (!card) return;
        const deveVirar = !card.classList.contains('virado');

        cards.forEach(outro => { if (outro !== card) sincronizarBotao(outro, false); });
        sincronizarBotao(card, deveVirar);
      });
    });
  }

  // ------------------------------------------------------------
  // 4. Pilares da plataforma (flip individual)
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
  // 5. Animação de revelação ao rolar a página
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
  // 6. Efeito parallax no hero
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
    configurarCarrosselMovimento();
    configurarFlipCardsMovimento();
    configurarFlipPilares();
    configurarAnimacoesRevelacao();
    configurarParallaxHero();

    // Swiper do povo (simples, sem lógica complexa)
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