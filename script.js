document.getElementById('quantity').addEventListener('input', updateTotalPrice);

function updateTotalPrice() {
    const price = 599;
    const quantity = document.getElementById('quantity').value;
    const totalPrice = price * quantity;
    document.getElementById('total-price').innerText = totalPrice;
}

function buyNow() {
    const quantity = document.getElementById('quantity').value;
    const totalPrice = document.getElementById('total-price').innerText;
    alert(`You added ${quantity} items to your cart for $ ${totalPrice}`);
}
