// Получаем необходимые элементы
const sliderContainer = document.querySelector('.slider-container');
const reviews = document.querySelectorAll('.review');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

// Устанавливаем текущий индекс слайда
let currentIndex = 0;

// Функция для обновления позиции слайдера
function updateSlider() {
    const width = reviews[0].offsetWidth; // Ширина одного слайда
    sliderContainer.style.transform = `translateX(-${currentIndex * width}px)`; // Сдвиг контейнера
}

// Событие для кнопки "Вперед"
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % reviews.length; // Увеличиваем индекс
    updateSlider(); // Обновляем позицию
});

// Событие для кнопки "Назад"
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + reviews.length) % reviews.length; // Уменьшаем индекс
    updateSlider(); // Обновляем позицию
});


function toggleButton(element) {
  element.classList.toggle('active');
}
