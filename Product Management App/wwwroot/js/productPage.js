$(function () {
    const products = window.productsData || []; // Product data from global scope
    const perPage = 10; // Items per page
    let currentPage = 1;

    /**
     * Highlight matched search term in product title
     * @param {string} text - The original title text
     * @param {string} term - The term to highlight
     * @returns {string} - Title with <mark> tag around the term
     */
    function highlight(text, term) {
        if (!term) return text;
        const esc = term.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&"); // Escape special regex chars
        return text.replace(new RegExp(`(${esc})`, "gi"), '<mark>$1</mark>');
    }

    /**
     * Render product grid with pagination, category filter, and search term
     * @param {number} page - Current page number
     * @param {string} category - Selected category to filter
     * @param {string} search - Search term
     */
    function render(page = 1, category = "", search = "") {
        const start = (page - 1) * perPage;

        // Filter by category and search term
        let filtered = products.filter(p =>
            (!category || p.category == category) &&
            (!search || p.title.toLowerCase().includes(search.toLowerCase()))
        );

        // Paginate filtered products
        const slice = filtered.slice(start, start + perPage);
        const $grid = $("#productGrid").empty();

        // Render each product card
        slice.forEach(p => {
            $grid.append(`
                <div class="col-12 col-sm-6 col-md-3">
                    <div class="card h-100">
                        <img src="${p.thumbnail}" class="card-img-top" />
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title">${highlight(p.title, search)}</h5>
                            <p class="fw-bold">$${p.price}</p>
                            <button class="btn btn-primary mt-auto view-details" data-id="${p.id}">View Details</button>
                        </div>
                    </div>
                </div>`);
        });

        // Generate pagination
        const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
        const $pager = $("#pagination").empty();
        for (let i = 1; i <= totalPages; i++) {
            $pager.append(`
                <li class="page-item ${i === page ? "active" : ""}">
                    <a href="#" class="page-link">${i}</a>
                </li>`);
        }
    }

    // Search input event: reset to page 1 and render
    $("#searchInput").on("input", () => {
        currentPage = 1;
        render(currentPage, $("#categoryFilter").val(), $("#searchInput").val());
    });

    // Category dropdown change event
    $("#categoryFilter").on("change", () => {
        currentPage = 1;
        render(currentPage, $("#categoryFilter").val(), $("#searchInput").val());
    });

    // Pagination click event
    $("#pagination").on("click", ".page-link", e => {
        e.preventDefault();
        currentPage = parseInt($(e.target).text());
        render(currentPage, $("#categoryFilter").val(), $("#searchInput").val());
    });

    // Initial render
    render(currentPage);
});
