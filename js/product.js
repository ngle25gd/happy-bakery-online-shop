// make the quantity button work
document.addEventListener("DOMContentLoaded", () => {
const buttonMinus = document.querySelector (".button-minus");
const buttonPlus = document.querySelector (".button-plus");
const inputQuantity = document.querySelector (".input-quantity");


//checking
if (buttonMinus && buttonPlus && inputQuantity) {


//when press minus
buttonMinus.addEventListener
("click", () => {
   let currentValue = parseInt(inputQuantity.value);
   if (currentValue > 1) {
   inputQuantity.value = parseInt (inputQuantity.value) - 1; }
});
//when press plus
buttonPlus.addEventListener
("click", ()=> {
   inputQuantity.value = parseInt (inputQuantity.value) + 1;
}
);
}


//add to basket
const buttonAdd = document.querySelector(".add");
if (buttonAdd) {
   buttonAdd.addEventListener("click", () => {


       //taking product info
       const product = {
           name: "Blueberry Mousse",
           price: 85,
           quantity: parseInt (inputQuantity.value),
           image: "img/blueberry.jpg"
       };


       //local storage
       let cart = JSON.parse(localStorage.getItem("cart")) || [];


       //checking if the cake in the cart or not
       const existingProduct = cart.find(item => item.name === product.name);
      
       if (existingProduct) {
           //already had
           existingProduct.quantity += product.quantity;
       }
       else {
           //no
           cart.push(product);
       }


       //save in ls
       localStorage.setItem("cart", JSON.stringify(cart));


       //alert the users
       alert(`Added ${product.quantity} ${product.name} to basket!`)


   }


   )
}
}
);
