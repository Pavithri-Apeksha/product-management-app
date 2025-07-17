# ItemizePro — Product Management and Shopping Platform

## Overview

ItemizePro is a modern web application designed to offer users a seamless, smart shopping experience with an intuitive product management system. The platform allows users to browse products, filter by categories, view detailed product information in modals, and manage a shopping cart stored locally on the browser.

---

## Approach

- **Frontend Framework:**  
  Built using ASP.NET Core Razor Pages with Bootstrap for responsive design and jQuery for dynamic UI interactions.

- **Data Handling:**  
  Products data is fetched from a third-party API (https://dummyjson.com/products) and deserialized into strongly typed C# models. This enables easy server-side manipulation and type safety.

- **SPA-like Navigation:**  
  AJAX is used to fetch and render page content dynamically without full page reloads, providing a smoother user experience.

- **LocalStorage for Cart:**  
  The shopping cart data is stored in the browser's LocalStorage, allowing persistence across page reloads without requiring user authentication.

- **Product Filtering and Search:**  
  Client-side filtering and pagination provide quick product searches and category browsing, with highlighted search terms for enhanced usability.

- **Modular Code Structure:**  
  JavaScript code is split into separate files for product listing, product modal handling, and cart management, improving maintainability.

---

## Assumptions

- No user login or authentication is required; the cart is managed entirely on the client side.
- Product data is assumed to be relatively static and fetched on page load.
- The API endpoint is stable and returns a consistent data schema.
- The application runs primarily on modern browsers supporting LocalStorage and ES6 features.
- Accessibility has been considered for modal dialogs and navigation controls, but further enhancements are possible.

---

## Features

- **Responsive UI:** Fully responsive layout with Bootstrap ensuring compatibility across devices.
- **Product Grid:** Paginated product listing with category filters and live search.
- **Product Details Modal:** Detailed product information and "Add to Cart" functionality inside a modal window.
- **Cart Management:** Add multiple quantities, remove items, and view total price.
- **Dynamic Cart Badge:** Cart icon updates dynamically across all pages.
- **SPA Navigation:** Partial page reloads without full refresh to improve speed and UX.
- **Clean Code:** Modular Razor views, clear CSS organization, and well-documented JavaScript.

---

## Future Improvements

- Integrate user authentication to persist carts server-side.
- Add checkout and payment processing.
- Improve accessibility compliance.
- Use modern frameworks like React or Blazor for richer interactivity.
- Implement server-side pagination and filtering for scalability.

---

## How to Run

1. Open 
2. Restore NuGet packages.
3. Build and run the ASP.NET Core application.
4. Navigate to the homepage and explore products.

---

