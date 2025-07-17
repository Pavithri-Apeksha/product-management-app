using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using Product_Management_App.Models;

public class ProductPageController : Controller
{
    private readonly HttpClient _httpClient;

    // Constructor to initialize HttpClient
    public ProductPageController()
    {
        _httpClient = new HttpClient();
    }

    // Handles GET requests to /ProductPage
    public async Task<IActionResult> Index()
    {
        // Fetch product data from external API
        var response = await _httpClient.GetStringAsync("https://dummyjson.com/products?limit=100");

        // Deserialize the response into ProductApiResponse model
        var data = JsonConvert.DeserializeObject<ProductApiResponse>(response);

        // Pass the product list to the view
        return View(data.products);
    }
}
