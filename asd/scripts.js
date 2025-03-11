// Модальное окно
const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close-btn");

// Данные для модальных окон
const developersInfo = {
    'Гасанбеков Иван': "Опыт работы с React и Vue. Специализируется на создании отзывчивых интерфейсов.",
    'Пеледутсе Александр': "Основной опыт в работе с Python и Django, также в создании RESTful API.",
    // Добавь сюда описание других разработчиков
};

// Открыть модальное окно при клике на "Подробнее"
document.querySelectorAll('.details-btn').forEach((button) => {
    button.addEventListener('click', function() {
        const developerName = this.previousElementSibling.previousElementSibling.textContent;
        const developerInfo = developersInfo[developerName] || "Информация о разработчике не доступна.";
        document.getElementById("developer-info").textContent = developerInfo;
        modal.style.display = "block";
        document.body.style.overflow = 'hidden'; // Заблокировать прокрутку
    });
});

// Закрыть модальное окно
closeBtn.addEventListener('click', () => {
    modal.style.display = "none";
    document.body.style.overflow = 'auto'; // Разблокировать прокрутку
});

// Закрыть модальное окно, если пользователь кликнул за пределы окна
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = 'auto';
    }
});
