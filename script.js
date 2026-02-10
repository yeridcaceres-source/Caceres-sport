let cart = [];
let total = 0;

function addToCart(product, price) {
  cart.push({ product, price });
  total += price;
  renderCart();
}

function renderCart() {
  const cartList = document.getElementById("cart");
  const totalSpan = document.getElementById("total");

  cartList.innerHTML = "";
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.product} - $${item.price}`;
    cartList.appendChild(li);
  });

  totalSpan.textContent = total;
}

function sendWhatsApp() {
  if (cart.length === 0) {
    alert("El carrito está vacío");
    return;
  }

  let message = "Hola, quiero hacer este pedido:%0A";
  cart.forEach(item => {
    message += `- ${item.product} ($${item.price})%0A`;
  });
  message += `%0ATotal: $${total}`;

  window.open(
    "https://wa.me/573202149741?text=" + message,
    "_blank"
  );
}
