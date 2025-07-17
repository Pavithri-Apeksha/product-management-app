using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.ComponentModel.DataAnnotations;

namespace Product_Management_App.Pages
{
    public class ContactPageModel : PageModel
    {
        [BindProperty]
        public ContactForm FormData { get; set; } = new ContactForm();

        public bool IsSubmitted { get; set; } = false;

        public void OnGet()
        {
            // Initial state
        }

        public IActionResult OnPost()
        {
            if (!ModelState.IsValid)
            {
                return Page();
            }

            // Log or store form submission (mocked here)
            Console.WriteLine($"Contact Form Submitted: Name={FormData.Name}, Email={FormData.Email}, Message={FormData.Message}");

            IsSubmitted = true;
            ModelState.Clear(); // Clear form fields
            FormData = new ContactForm(); // Reset

            return Page();
        }

        public class ContactForm
        {
            [Required]
            public string Name { get; set; }

            [Required, EmailAddress]
            public string Email { get; set; }

            [Required]
            public string Message { get; set; }
        }
    }
}
