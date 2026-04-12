document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const movimentoGrid = document.getElementById('movimentoGrid');
    const prevBtn = document.querySelector('.movimento-btn-prev');
    const nextBtn = document.querySelector('.movimento-btn-next');
    const pagination = document.getElementById('movimentoPagination');
    const cards = Array.from(document.querySelectorAll('.card-movimento-card'));
    const cardToggleButtons = Array.from(document.querySelectorAll('.card-toggle-btn'));
    const pillarCards = Array.from(document.querySelectorAll('#plataforma2 .pilar'));
    const pillarToggleButtons = Array.from(document.querySelectorAll('.pilar-toggle-btn'));
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

    if (cards.length > 0 && cardToggleButtons.length > 0) {
        const syncCardButton = (card, shouldFlip) => {
            const button = card.querySelector('.card-toggle-btn');

            if (!button) {
                return;
            }

            card.classList.toggle('is-flipped', shouldFlip);
            button.textContent = shouldFlip ? 'Mostrar menos' : 'Saiba mais';
            button.setAttribute('aria-expanded', String(shouldFlip));
        };

        cards.forEach(card => syncCardButton(card, false));

        cardToggleButtons.forEach(button => {
            button.addEventListener('click', () => {
                const card = button.closest('.card-movimento-card');

                if (!card) {
                    return;
                }

                const shouldFlip = !card.classList.contains('is-flipped');

                cards.forEach(otherCard => {
                    if (otherCard !== card) {
                        syncCardButton(otherCard, false);
                    }
                });

                syncCardButton(card, shouldFlip);
            });
        });
    }

    if (pillarCards.length > 0 && pillarToggleButtons.length > 0) {
        const syncPillarButton = (pillar, shouldFlip) => {
            const button = pillar.querySelector('.pilar-toggle-btn');

            if (!button) {
                return;
            }

            pillar.classList.toggle('is-flipped', shouldFlip);
            button.textContent = shouldFlip ? 'Mostrar menos' : 'Saiba mais';
            button.setAttribute('aria-expanded', String(shouldFlip));
        };

        pillarCards.forEach(pillar => syncPillarButton(pillar, false));

        pillarToggleButtons.forEach(button => {
            button.addEventListener('click', () => {
                const pillar = button.closest('.pilar');

                if (!pillar) {
                    return;
                }

                const shouldFlip = !pillar.classList.contains('is-flipped');

                pillarCards.forEach(otherPillar => {
                    if (otherPillar !== pillar) {
                        syncPillarButton(otherPillar, false);
                    }
                });

                syncPillarButton(pillar, shouldFlip);
            });
        });
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
