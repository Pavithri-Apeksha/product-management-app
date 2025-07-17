$(function () {
    // Load cart from localStorage or start with empty array
    let cart = JSON.parse(localStorage.getItem("cart") || "[]");

    // Update cart count badges in navbar or elsewhere, hide if count is zero
    function updateCartCount() {
        const count = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
        $("#cart-count, #cartCount").each((_, el) => {
            count ? $(el).removeClass("d-none").text(count) : $(el).addClass("d-none");
        });
    }

    // Show product details modal when "View Details" button is clicked
    $(document).on("click", ".view-details", function () {
        const id = $(this).data("id");
        const prod = window.productsData.find(p => p.id == id);
        if (!prod) return;

        $("#modalTitle").text(prod.title);
        $("#modalImage").attr("src", prod.thumbnail);
        $("#modalDescription").text(prod.description);
        $("#modalRating").text(prod.rating);
        $("#modalPrice").text(prod.price);
        $("#addToCartBtn").data("id", prod.id);
        $("#productModal").modal("show");
    });

    // Add selected product to cart and update localStorage and badge
    $("#addToCartBtn").on("click", function () {
        let productId = $(this).data("id");
        let product = (window.productsData || []).find(p => p.id == productId);
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        if (product) {
            cart.push(product);
            localStorage.setItem("cart", JSON.stringify(cart));
            updateCartCount();
            updateCartBadge();
        }

        $("#productModal").modal("hide");
    });

    // Initial update of cart count on page load
    updateCartCount();
    updateCartBadge();
});
