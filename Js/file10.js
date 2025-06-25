let cart = {};
const products = [
    {id: 1, name: "Product 1", price: 25},
    {id: 2, name: "Product 2", price: 50},
    {id: 3, name: "Product 3", price: 75},
];

const showProducts = ()=>{
    console.log("\t***Product List***")
    products.map((product)=>{
        console.log("id: "+product.id+", name: "+product.name+", price: $"+product.price);
    })
}

// showProducts();

const addToCart = (id)=>{
        cart = {...cart,[id]:1};
}
addToCart(1);
addToCart(3);

const showCart = ()=>{
    let str=""
    console.log("\t  ***My Cart***")
    products.map((product)=>{
        if(cart[product.id]){
        str+=`${product.name}\t${product.price}\t${cart[product.id]}\t${cart[product.id]*product.price}\n`;
        }
    });
    console.log(str);
}
showCart();

const increment = (id) => {
    cart= {...cart, [id]:cart[id]+=1};
};
increment(1);
showCart();

const decrement = (id) => {
    cart= {...cart, [id]:cart[id]-=1};
};
decrement(1);
showCart();

const orderValue = products.reduce((sum, product)=>{
    return sum + product.price * (cart[product.id] ?? 0);
}, 0);
console.log(`Order Value:${orderValue}`);
