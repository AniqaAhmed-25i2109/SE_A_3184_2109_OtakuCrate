// Console Log 1: Page initialization
console.log("OtakuCrate website loaded - Student Roll: 25I-2109");

// Console Log 2: Cart system active
console.log("Shopping cart system initialized");

// Console Log 3: Track user interactions
console.log("JavaScript event listeners ready");

let cart = [];

// Function to add items to cart
function addToCart(name, price) {
    cart.push({name, price});
    
    // Update cart count if element exists
    const cartCountElement = document.getElementById("cartCount");
    if(cartCountElement) {
        cartCountElement.innerText = cart.length;
    }
    
    // Alert 1: Item added confirmation
    alert(name + " added to cart successfully!");
    
    console.log("Cart updated:", cart);
}

// Function to place order
function placeOrder() {
    if(cart.length === 0) {
        // Alert 2: Empty cart warning
        alert("Your cart is empty! Please add items before checkout.");
    } else {
        // Alert 3: Order success
        alert("🎉 Payment Successful! Your OtakuCrate is on the way!");
        cart = [];
        const cartCountElement = document.getElementById("cartCount");
        if(cartCountElement) {
            cartCountElement.innerText = "0";
        }
    }
    console.log("Order placed. Cart cleared.");
}

// Form validation for contact page
function validateContactForm() {
    const name = document.querySelector('input[placeholder="Name:"]');
    const email = document.querySelector('input[placeholder="Email:"]');
    
    if(name && email) {
        if(name.value.trim() === "" || email.value.trim() === "") {
            alert("Please fill in all required fields!");
            return false;
        }
    }
    return true;
}