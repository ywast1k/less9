// cart.js
const cart = JSON.parse(localStorage.getItem('cart')) || [];

// Функция для добавления товара в корзину
function addToCart(item) {
    cart.push(item);
    console.log('Товар добавлен в корзину:', item);
    // Сохраняем корзину в Local Storage, чтобы использовать на другой части сайта
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Функция для получения товаров из корзины
function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

// Функция для удаления товара из корзины
function removeFromCart(index) {
    cart.splice(index, 1);
    console.log('Товар удален из корзины:', index);
    localStorage.setItem('cart', JSON.stringify(cart));
}