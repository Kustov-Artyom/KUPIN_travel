document.addEventListener('DOMContentLoaded', () => {
    // Массив с путями к изображениям
    const images = [
        './lib/img/lakeKomo2.jpg',
        './lib/img/stock-photo-luxury-swimming-pool-in-tropical-resort-relaxing-holidays-in-seychelles-islands-la-digue-young-2294821737.jpg',
        './lib/img/stock-photo-one-of-the-resorts-with-the-most-spectacular-views-in-jimbaran-occupying-a-very-large-area-2495341799.jpg',
        './lib/img/stock-photo-dawn-at-the-infinity-pool-of-the-star-le-cham-resort-in-tu-le-commune-van-chan-district-yen-bai-2371323397.jpg',
        './lib/img/stock-photo-stunning-landscape-swimming-pool-blue-sky-with-clouds-tropical-resort-hotel-in-maldives-2287500017.jpg'
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