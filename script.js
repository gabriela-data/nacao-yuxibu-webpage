document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const movimentoGrid = document.getElementById('movimentoGrid');
    const prevBtn = document.querySelector('.movimento-btn-prev');
    const nextBtn = document.querySelector('.movimento-btn-next');
    const pagination = document.getElementById('movimentoPagination');
    const cards = Array.from(document.querySelectorAll('.card-movimento-card'));
    const ctaButton = document.querySelector('.cta-button');

    const setMenuState = function (isOpen) {
        if (menuToggle === null || navLinks === null) {
            return;
        }

        navLinks.classList.toggle('active', isOpen);
        menuToggle.textContent = isOpen ? '✕' : '☰';
        menuToggle.setAttribute('aria-expanded', String(isOpen));
        menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
    };

    if (menuToggle && navLinks) {
        setMenuState(false);

        menuToggle.addEventListener('click', () => {
            const isOpen = navLinks.classList.contains('active') === false;
            setMenuState(isOpen);
        });

        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                setMenuState(false);
            });
        });
    }

    if (movimentoGrid && prevBtn && nextBtn && pagination && cards.length > 0) {
        const getScrollStep = () => {
            if (cards.length < 2) {
                return cards[0].offsetWidth;
            }

            return cards[1].offsetLeft - cards[0].offsetLeft;
        };

        const updatePagination = () => {
            const step = getScrollStep();
            const maxIndex = cards.length - 1;
            const index = Math.min(maxIndex, Math.round(movimentoGrid.scrollLeft / step));

            pagination.querySelectorAll('.dot').forEach((dot, dotIndex) => {
                dot.classList.toggle('active', dotIndex === index);
            });
        };

        cards.forEach((card, index) => {
            const dot = document.createElement('button');
            dot.type = 'button';
            dot.classList.add('dot');
            dot.setAttribute('aria-label', 'Ir para o card ' + (index + 1));
            dot.addEventListener('click', () => {
                movimentoGrid.scrollTo({
                    left: card.offsetLeft - movimentoGrid.offsetLeft,
                    behavior: 'smooth'
                });
            });
            pagination.appendChild(dot);
        });

        if (pagination.firstElementChild) {
            pagination.firstElementChild.classList.add('active');
        }

        movimentoGrid.addEventListener('scroll', updatePagination);

        nextBtn.addEventListener('click', () => {
            movimentoGrid.scrollBy({
                left: getScrollStep(),
                behavior: 'smooth'
            });
        });

        prevBtn.addEventListener('click', () => {
            movimentoGrid.scrollBy({
                left: getScrollStep() * -1,
                behavior: 'smooth'
            });
        });

        updatePagination();
    }

    const observerOptions = {
        threshold: 0.15
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const elementsToReveal = document.querySelectorAll('.manifesto-grid, .povo-section, .equipe-grid, .pilar, .eventos-box');

    elementsToReveal.forEach(element => {
        element.classList.add('reveal-hidden');
        revealObserver.observe(element);
    });

    window.addEventListener('scroll', () => {
        const heroSection = document.querySelector('.hero');

        if (heroSection) {
            heroSection.style.backgroundPositionY = String(window.scrollY * 0.5) + 'px';
        }
    });

    if (ctaButton) {
        ctaButton.addEventListener('mouseover', () => {
            ctaButton.classList.add('hovered');
        });

        ctaButton.addEventListener('mouseout', () => {
            ctaButton.classList.remove('hovered');
        });
    }
});
