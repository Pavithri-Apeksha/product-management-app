namespace Product_Management_App.Models
{
    // Represents a single product's structure from the API
    public class Product
    {
        public int id { get; set; }
        public string title { get; set; }
        public string description { get; set; }
        public decimal price { get; set; }
        public string category { get; set; }
        public string thumbnail { get; set; }
        public float rating { get; set; }
    }

    // Represents the full API response object from the product endpoint
    public class ProductApiResponse
    {
        public List<Product> products { get; set; }
        public int total { get; set; }
        public int skip { get; set; }
        public int limit { get; set; }
    }
}
