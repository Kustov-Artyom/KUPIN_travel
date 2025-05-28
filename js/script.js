document.addEventListener('DOMContentLoaded', () => {
    // Массив с путями к изображениям
    const images = [
        './lib/img/lakeKomo2.jpg',
        './lib/img/luxury-swimming-pool.jpg',
        './lib/img/spectacular-views.jpg',
        './lib/img/infinity-pool.jpg',
        './lib/img/swimming-pool.jpg'
    ];
    
    // Создаем контейнер для слайдов
    const slideshow = document.createElement('div');
    slideshow.className = 'slideshow';
    
    // Добавляем изображения в слайдер
    images.forEach((img, index) => {
        const slide = document.createElement('img');
        slide.className = `slide ${index === 0 ? 'active' : ''}`;
        slide.src = img;
        slide.alt = `Background ${index + 1}`;
        slideshow.appendChild(slide);
    });
    
    // Вставляем слайдер в хедер
    const header = document.querySelector('.header');
    header.prepend(slideshow);
    
    // Логика переключения слайдов
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    
    function changeSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }
    
    // Запускаем интервал
    setInterval(changeSlide, 10000);
});