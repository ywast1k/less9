const data = JSON.parse(dataInfo);
const cartBox = document.querySelector('.cart-box');

// Функция добавления товара в корзину
function addToCart(item) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log('Товар добавлен в корзину:', item);
}

data.forEach(element => {
    const bodyEl = document.createElement('div');
    bodyEl.classList.add('bodyContent'); 

    const image_Conteiner = document.createElement('div');
    image_Conteiner.classList.add('image_Container');

    const overley = document.createElement('div');
    overley.classList.add('overley');

    const svgButton = document.createElement('img');
    svgButton.classList.add('svgButton');
    svgButton.alt = 'svg';
    svgButton.src = './svg/kassa.svg'

    const itemImg = document.createElement('img');
    itemImg.classList.add('img___sale');
    itemImg.src = element.url;
    itemImg.alt = 'Add to Cart';

    const itemContent = document.createElement('div');
    itemContent.classList.add('item__content');

    const itemHead = document.createElement('h4');
    itemHead.classList.add('head');
    itemHead.textContent = element.name;

    const itemText = document.createElement('p');
    itemText.classList.add('other');
    itemText.textContent = element.textInfo;

    const itemPrice = document.createElement('p');
    itemPrice.classList.add('price');
    itemPrice.textContent = `$${element.price}`;

    const button = document.createElement('button');
    button.classList.add('button');
    const icon = document.createElement('i');
    icon.classList.add('fas', 'fa-shopping-cart');
    button.appendChild(icon);
    const buttonText = document.createTextNode(' Add to Cart');
    button.appendChild(buttonText);

    button.addEventListener('click', () => {
        addToCart({
            name: element.name,
            price: element.price,
            url: element.url,
            color: element.color,
            size: element.size
        });
        displayCartItems();
    });
    
    cartBox.appendChild(bodyEl);
 
    
    bodyEl.appendChild(image_Conteiner);
    image_Conteiner.appendChild(itemImg);
    bodyEl.appendChild(overley);

    bodyEl.appendChild(itemContent);
    overley.appendChild(button);
    button.appendChild(svgButton);
    itemContent.appendChild(itemHead);
    itemContent.appendChild(itemText);
    itemContent.appendChild(itemPrice);
});