function initLightbox(cards) {
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    const close = document.getElementById('lightbox-close');
    const prev = document.getElementById('lightbox-prev');
    const next = document.getElementById('lightbox-next');

    let current = 0;

    function updateArrows() {
        const hasMultiple = cards[current].images.length > 1;
        prev.style.display = hasMultiple ? 'flex' : 'none';
        next.style.display = hasMultiple ? 'flex' : 'none';
    }

    function open(index) {
        current = index;
        imgIndex = 0;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
        updateImage();
        updateArrows();
    }

    function close_lb() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    function updateImage() {
        img.src = cards[current].images[imgIndex];
    }

    let imgIndex = 0;

    function goNext() {
        imgIndex = (imgIndex + 1) % cards[current].images.length;
        updateImage();
    }

    function goPrev() {
        imgIndex = (imgIndex - 1 + cards[current].images.length) % cards[current].images.length;
        updateImage();
    }

    cards.forEach((card, i) => {
        document.getElementById(card.id).addEventListener('click', () => {
            imgIndex = 0;
            open(i);
        });
    });

    close.addEventListener('click', close_lb);
    next.addEventListener('click', goNext);
    prev.addEventListener('click', goPrev);

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) close_lb();
    });

    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'ArrowRight') goNext();
        if (e.key === 'ArrowLeft') goPrev();
        if (e.key === 'Escape') close_lb();
    });
}