document.addEventListener("DOMContentLoaded", () => {
   renderCart();
   setupCheckout();
});

// show the cart

function renderCart() {
   const cartList = document.getElementById("cart-items-list");
   const totalPriceElement = document.getElementById("total-price");


   let cart = JSON.parse(localStorage.getItem("cart")) || [];


   if (cart.length === 0) {
       cartList.innerHTML = "<p style='text-align:center; padding: 20px;'>Your basket is empty!</p>";
       totalPriceElement.innerText = "0";
       return;
   }


   let totalAll = 0;
   let htmlContent = "";


   cart.forEach((item, index) => {
       const itemTotal = item.price * item.quantity;
       totalAll += itemTotal;


       htmlContent += `
           <div class="cart-item-row">
               <div class="product-info-col">
                   <img src="${item.image}" width="50" style="border-radius: 5px;">
                   <span>${item.name}</span>
               </div>
              
               <div class="quantity-col">
                   <button class="qty-btn" onclick="updateQty(${index}, -1)">-</button>
                   <span style="margin: 0 10px;">${item.quantity}</span>
                   <button class="qty-btn" onclick="updateQty(${index}, 1)">+</button>
               </div>


               <div class="price-col">${itemTotal} SEK</div>
           </div>
       `;
   });


   cartList.innerHTML = htmlContent;
   totalPriceElement.innerText = totalAll;
}

//change the number of quantity, erase product when product number is 0

window.updateQty = function(index, change) {
   let cart = JSON.parse(localStorage.getItem("cart")) || [];
  
   cart[index].quantity += change;


   if (cart[index].quantity <= 0) {
       cart.splice(index, 1);
   }


   localStorage.setItem("cart", JSON.stringify(cart));
   renderCart();
};

//check out
function setupCheckout() {
   const btnCheckout = document.querySelector(".check-out");
   if (btnCheckout) {
       btnCheckout.addEventListener("click", () => {
           let cart = JSON.parse(localStorage.getItem("cart")) || [];
           if(cart.length === 0) {
               alert("Your cart is empty!");
               return;
           }
           alert("Thank you for your order! 🧁");
           localStorage.removeItem("cart");
           window.location.reload();
       });
   }
}
