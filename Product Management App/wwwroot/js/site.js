/**
 * Update the cart badge with the current number of items in localStorage
 */
function updateCartBadge() {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const count = cart.length;
    const badge = document.getElementById("cart-count");

    if (badge) {
        if (count > 0) {
            badge.textContent = count;
            badge.classList.remove("d-none"); // Show badge if items exist
        } else {
            badge.classList.add("d-none"); // Hide badge if cart is empty
        }
    }
}

// Run update when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", updateCartBadge);
