// Retrieve cart array from localStorage or return empty array if none found
function getCart() {
    return JSON.parse(localStorage.getItem("cart")) || [];
}

// Save updated cart array to localStorage
function saveCart(cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
}

// Render the cart contents on the cart page
function renderCart() {
    const cart = getCart();
    const container = $("#cartContainer");
    container.empty();

    // Show message if cart is empty
    if (cart.length === 0) {
        container.html("<p>Your cart is empty.</p>");
        return;
    }

    let total = 0;
    const groupedCart = {};

    // Group identical products and count their quantity
    cart.forEach(item => {
        if (!groupedCart[item.id]) {
            groupedCart[item.id] = { ...item, quantity: 1 };
        } else {
            groupedCart[item.id].quantity++;
        }
    });

    // Create and append a card for each grouped product
    Object.values(groupedCart).forEach(item => {
        total += item.price * item.quantity;

        const card = `
        <div class="card mb-3">
            <div class="row g-0">
                <div class="col-md-2">
                    <img src="${item.thumbnail}" class="img-fluid rounded-start" alt="${item.title}">
                </div>
                <div class="col-md-10">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">${item.description}</p>
                        <p class="card-text">
                            <strong>Price:</strong> $${item.price} x ${item.quantity} = 
                            $${(item.price * item.quantity).toFixed(2)}
                        </p>
                        <button class="btn btn-danger btn-sm remove-from-cart" data-id="${item.id}">
                            Remove One
                        </button>
                    </div>
                </div>
            </div>
        </div>`;
        container.append(card);
    });

    // Show total price at the bottom
    container.append(`<div class="text-end"><h4>Total: $${total.toFixed(2)}</h4></div>`);
}

// Update cart badge in navbar with current item count or hide if empty
function updateCartBadge() {
    const cart = getCart();
    const count = cart.length;
    const badge = $("#cart-count");

    if (count > 0) {
        badge.removeClass("d-none").text(count);
    } else {
        badge.addClass("d-none").text("0");
    }
}

// Initialize cart page by rendering cart and updating badge
function initCartPage() {
    renderCart();
    updateCartBadge();
}

// Handle click event on dynamically created "Remove One" buttons
$(document).on("click", ".remove-from-cart", function () {
    const idToRemove = $(this).data("id");
    const cart = getCart();
    const index = cart.findIndex(item => item.id == idToRemove);

    if (index !== -1) {
        cart.splice(index, 1); // Remove one instance of the selected product
        saveCart(cart);
        renderCart();
        updateCartBadge();
    }
});
