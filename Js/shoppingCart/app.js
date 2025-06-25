let cart = {};
const products = [
  { id: 1, name: "Product 1", price: 25 },
  { id: 2, name: "Product 2", price: 50 },
  { id: 3, name: "Product 3", price: 75 },
];

const showProducts = () => {
  let productList = document.getElementById('product-list');
  let str = `<h2>Product List</h2>`;
  products.forEach(product => {
    str += `
      <div>
        ${product.name} - $${product.price}
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
    `;
  });
  productList.innerHTML = str;
};

const addToCart = (id) => {
  if (cart[id]) {
    cart[id]++;
  } else {
    cart[id] = 1;
  }
  showCart();
};

const showCart = () => {
  let cartDiv = document.getElementById('cart');
  let str = `<h2>My Cart</h2>`;
  let total = 0;

  products.forEach(product => {
    if (cart[product.id]) {
      let qty = cart[product.id];
      let subtotal = qty * product.price;
      total += subtotal;
      str += `
        <div>
          ${product.name} - $${product.price} x ${qty} = $${subtotal}
          <button onclick="increment(${product.id})">+</button>
          <button onclick="decrement(${product.id})">-</button>
        </div>
      `;
    }
  });

  str += `<h3>Total: $${total}</h3>`;
  cartDiv.innerHTML = str;
};

const increment = (id) => {
  if (cart[id]) {
    cart[id]++;
    showCart();
  }
};

const decrement = (id) => {
  if (cart[id]) {
    cart[id]--;
    if (cart[id] <= 0) {
      delete cart[id];
    }
    showCart();
  }
};

showProducts();
showCart();
