document.addEventListener('DOMContentLoaded', function () {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    categoryButtons.forEach(button => {
        button.addEventListener('click', function () {
            categoryButtons.forEach(btn => btn.classList.remove('active'));

            this.classList.add('active');

            const category = this.getAttribute('data-category');

            galleryItems.forEach(item => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    const modal = document.getElementById('artwork-modal');
    const modalImage = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalMedium = document.getElementById('modal-medium');
    const modalDescription = document.getElementById('modal-description');
    const closeButton = document.querySelector('.modal-close');

    const artworkImages = document.querySelectorAll('.artwork-image');

    artworkImages.forEach(image => {
        image.addEventListener('click', function () {
            const galleryItem = this.closest('.gallery-item');

            const title = galleryItem.querySelector('.artwork-title').textContent;
            const medium = galleryItem.querySelector('.artwork-medium').textContent;
            const description = galleryItem.querySelector('.artwork-description').textContent;

            modalImage.src = this.src;
            modalImage.alt = this.alt;
            modalTitle.textContent = title;
            modalMedium.textContent = medium;
            modalDescription.textContent = description;

            modal.style.display = 'flex';
            setTimeout(() => {
                modal.classList.add('show');
            }, 10);

            document.body.style.overflow = 'hidden';
        });
    });

    closeButton.addEventListener('click', closeModal);

    modal.addEventListener('click', function (event) {
        if (event.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });

    function closeModal() {
        modal.classList.remove('show');

        document.body.style.overflow = '';

        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    }
});