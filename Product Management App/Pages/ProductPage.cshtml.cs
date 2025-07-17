using Microsoft.AspNetCore.Mvc.RazorPages;
using Newtonsoft.Json;
using Product_Management_App.Models;
using System.Net.Http;
using System.Threading.Tasks;
using System.Collections.Generic;

public class ProductPageModel : PageModel
{
    public List<Product> Products { get; set; } = new List<Product>();

    public async Task OnGetAsync()
    {
        using HttpClient client = new();
        var response = await client.GetStringAsync("https://dummyjson.com/products?limit=100");
        var result = JsonConvert.DeserializeObject<ProductApiResponse>(response);
        Products = result?.products ?? new List<Product>();
    }
}
