// Задание
// Нужно создать кнопку "Get Cat Fact", при клике на которую, будет выполняться GET запрос(используйте fetch).
// В ответе на запрос будет приходить случайный факт о котах
// url: https://catfact.ninja/fact
// После того как вы получите успешный ответ, разместите случайный факт о котах у себя на странице
// Если запрос завершится ошибкой, её нужно разместить на странице и выделить красным цветом
// Каждый раз, когда происходит клик на кнопку, должен выполняться новый запрос и приходить новый факт о котах
// Стилизуйте на ваше усмотрение

const getFactButton = document.querySelector('.button');
const catFact = document.querySelector('.fact-text');

const getRandomFact = async () => {
    try {
     const response = await fetch("https://catfact.ninja/fact"); 
    
     const randomFact = await response.json();
     if (!response.ok) {
        throw Object.assign(new Error("Here's error"), {
            response: randomFact,
        })
    } else {
        const ourFact = randomFact.fact;
        catFact.textContent = `${ourFact}`;
    }
    } catch (error) {
        // catFact.textContent = error.response.message;
        catFact.textContent = `${error.response.message}`;
        catFact.style.color = 'red';
    }
};
// setInterval(getRandomFact, 30);
getFactButton.addEventListener("click", getRandomFact); 